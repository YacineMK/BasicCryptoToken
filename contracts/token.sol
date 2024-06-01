// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract token {

    string public name  = "Soyed";
    string public symbol = "SOY";

    uint256 public totalSupply = 1000;

    address private owner ;

    mapping (address => uint256) TX;

    constructor() {
        TX[msg.sender] = totalSupply ;
        owner = msg.sender;
    }

    event Transfer (address indexed _from, address indexed _to, uint256 value) ;

    function transfer(address to , uint256 amount) external {
        require(TX[msg.sender] >= amount,"Not enough tokens");

        console.log("Transfer from %s to %s | %s tokens", msg.sender , to , amount);

        TX[msg.sender] = TX[msg.sender] - amount ;
        TX[to] = TX[to] + amount ;

        emit Transfer(msg.sender, to, amount);
    }

    function show(address me) external view returns (uint256) {
        return TX[me] ;
    }

}