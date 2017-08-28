pragma solidity ^0.4.14;

/// @title contract between client and contractor. This is generated contract
contract Service {
    address client;
    address contractor;
    address platform; // 0x is the owner every contract

    uint budget; // amount budgeted for the service
    uint amountPaid; // amount paid to the contractor

    // enum to define states of the service contract
    enum State { Bid, Award, Work, Paid }
    State contractState; // to store the current state of the service contract

    // struct type to hold bidder information
    struct Bidder {
        address contractor;
        uint bidAmount;
    }
    mapping(address => Bidder) bids; // storing all bids received for the contract

    /// @notice constructor creating service for the client
    /// @param _platform 0x will the platform provider
    function Service (address _platform) {
        client = msg.sender;
        platform = _platform;
    }

    /// @notice modifier to ensure client can only execute a function
    modifier onlyClient() {
        require(msg.sender == client);
        _;
    }

    /// @notice modifier to ensure contractor can only execute
    modifier onlyContractor() {
        require(msg.sender == contractor);
        _;
    }    

    /// @notice modifier to ensure 0x can only perform
    modifier onlyPlatform() {
        require(msg.sender == platform);
        _;
    }    

    /// @notice modifier to check for current state before proceeding
    modifier inState(State state) {
        require(contractState == state);
        _;
    }

    /// @notice modifier for client to perform actions, 0x can also perform these actions
    modifier onlyClientOrPlatform() {
        require(msg.sender == platform || msg.sender == client);
        _;
    }    

    /// @notice hiring the contractor to perform the work
    /// @param _contractor Ethereum address of the contractor  
    function hire (address _contractor) onlyClient {
        contractor = _contractor;
    }

    /// @notice Get the contractor assigned to the service
    /// @return contractor address
    function getContractorAddress() public constant returns (address) {
        return contractor;
    }

    /// @notice Get the addresses of client, contractor and 0x platform
    /// @return client, contractor and platform address
    function getAllAddresses() public constant returns (address, address, address) {
        return (client, contractor, platform);
    }

    /// @notice based on the agreement, client will fund the contract
    /// this amount will be payed to contractor at the end
    function fund() onlyClient payable {
        amountPaid += msg.value;
    }

    /// @notice Once the service is completed, client pays to the contractor
    function pay() onlyClient {
        contractor.transfer(amountPaid);
        amountPaid = 0;
    }

    /// @notice Validate the terms of the contract
    function validate() constant returns (bool) {
        // for POC we are doing additional validations
        return true;
    }

    /// @notice 0x performs the dispute settlement and transfers money accordingly
    /// @param contractorAmount Amount to be paid to contractor, remaining amount will be paid to client
    function disputeSettlement (uint contractorAmount) onlyPlatform {
        if (contractorAmount > 0) {
            contractor.transfer(contractorAmount);
            amountPaid -= contractorAmount;
        }
        
        // kill the contractor once it is arbitrated
        kill();
    }

    /// @notice close the contract once service is rendered and payment is made
    function kill() onlyPlatform {
        if (amountPaid > 0) {
            client.transfer(amountPaid);
        }
        selfdestruct(client);
    }

    /// @notice fallback function which will revert the call as we don't allow it
    function() {
        revert();
    }    
}


    // Hire, Accept
    // Terminate
    // 
    // Accept
    // Litigate, advisor
    // Bid
    // Feedback
