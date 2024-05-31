
pragma solidity ^0.8.24;


contract MyContract {
    uint public count = 0 ;

    function increment () public {
        count = count +1 ;
    }
}