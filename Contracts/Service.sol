pragma solidity ^0.4.14;

contract Service {
    address client;
    address contractor;
    address platform; // 0x is the owner every contract

    uint amount;
    uint budget;

    enum State { Bid, Award, Work, Paid }
    State contractState;

    // struct type to hold bidder information
    struct Bidder {
        address contractor;
        uint bidAmount;
    }
    mapping(address => Bidder) bids;

    // creates the service for the client
    // 0x will be platform provider
    function Service (address _platform) {
        client = msg.sender;
        platform = _platform;
    }

    // modifier to ensure client can only execute a function
    modifier onlyClient() {
        require(msg.sender == client);
        _;
    }

    // modifier to ensure contractor can only execute
    modifier onlyContractor() {
        require(msg.sender == contractor);
        _;
    }    

    // modifier to ensure 0x can only perform
    modifier onlyPlatform() {
        require(msg.sender == platform);
        _;
    }    

    modifier inState(State state) {
        require(contractState == state);
        _;
    }

    // modifier for client to perform actions, 0x can also perform these actions
    // modifier onlyClientOrPlatform() {
    //     require(msg.sender == platform || msg.sender == client);
    //     _;
    // }    

    // hiring the contractor to perform the work
    function hire (address _contractor) onlyClient {
        contractor = _contractor;
    }

    // based on the agreement, client will fund the contract
    // this amount will be payed to contractor at the end
    function fund() onlyClient payable {
        amount += msg.value;
    }

    // once the service is completed, client pays to the contractor
    function pay() onlyClient {
        contractor.transfer(amount);
        amount = 0;
    }

    // validate the terms of the contract
    function validate() constant returns (bool) {
        // for POC we are doing additional validations
        return true;
    }

    function arbitrate (uint contractorAmount) onlyPlatform {
        if (contractorAmount > 0) {
            contractor.transfer(contractorAmount);
            amount -= contractorAmount;
        }
        
        // kill the contractor once it is arbitrated
        kill();
    }

    function kill() onlyPlatform {
        if (amount > 0) {
            client.transfer(amount);
        }
        selfdestruct(client);
    }

    //default function
    function() {
        throw;
    }    
}


    // Hire, Accept
    // Terminate
    // 
    // Accept
    // Litigate, advisor
    // Bid
    // Feedback
