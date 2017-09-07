pragma solidity ^0.4.14;

/// @title contract between client and contractor. This is generated contract
contract Service {
    address client;
    address contractor;
    address public arbiter; // 0x is the default arbiter for every contract

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
    /// @param _arbiter 0x will the arbiter for this contract
    function Service (address _arbiter) {
        client = msg.sender;
        arbiter = _arbiter;
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

    /// @notice modifier to ensure the tasks to be performed by arbiter
    modifier onlyArbiter() {
        require(msg.sender == arbiter);
        _;
    }    

    /// @notice modifier to check for current state before proceeding
    modifier inState(State state) {
        require(contractState == state);
        _;
    }

    /// @notice modifier for client to perform actions, 0x can also perform these actions
    modifier onlyClientOrArbiter() {
        require(msg.sender == arbiter || msg.sender == client);
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

    /// @notice Get the addresses of client, contractor and arbiter
    /// @return client, contractor and arbiter address
    function getAllAddresses() public constant returns (address, address, address) {
        return (client, contractor, arbiter);
    }

    /// @notice based on the agreement, client will fund the contract
    /// this amount will be payed to contractor at the end
    function fund() external onlyClient payable {
        amountPaid += msg.value;
    }

    /// @notice Once the service is completed, client pays to the contractor
    function pay() public onlyClient {
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
    function disputeSettlement (uint contractorAmount) onlyArbiter {
        if (contractorAmount > 0) {
            contractor.transfer(contractorAmount);
            amountPaid -= contractorAmount;
        }
        
        // kill the contractor once it is arbitrated
        kill();
    }

    /// @notice close the contract once service is rendered and payment is made
    function kill() onlyArbiter {
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
