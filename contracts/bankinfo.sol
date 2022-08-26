// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract bankinfo {
    struct bankaccount {
        uint256 bank_name;
        string branch;
        uint256 balance;
        bool exists;
    }

    struct userdata {
        uint256 accNumber;
        uint256 bank_name;
        string branch;
        uint256 balance;
    }

    struct bankdata {
        uint256 accNumber;
        string branch;
        uint256 balance;
    }
    uint256[] no;
    uint256[] name;
    string[] brh;
    uint256[] balc;

    uint256[] acNumbercount; // array storing account numbers
    address[] addresses; // array storing addresses

    userdata[] public arrayuserdata;
    bankdata[] public arraybankdata;

    mapping(address => mapping(uint256 => bankaccount))
        public mappedbankaccount;

    function setInfo(
        uint256 _number,
        uint256 _bank,
        string memory _branch,
        uint256 _balance
    ) public {
        mappedbankaccount[msg.sender][_number] = bankaccount(
            _bank,
            _branch,
            _balance,
            true
        );
        acNumbercount.push(_number);
        addresses.push(msg.sender);
        no.push(_bank);
        name.push(_bank);
        brh.push(_branch);
        balc.push(_balance);
    }

    function deposit(uint256 _number, uint256 _balance) public {
        mappedbankaccount[msg.sender][_number].balance += _balance;
    }

    function withdraw(uint256 _number, uint256 _balance) public {
        mappedbankaccount[msg.sender][_number].balance -= _balance;
    }

    function getDataOfUser() public view returns (userdata[] memory) {
        userdata[] memory muserdata = new userdata[](acNumbercount.length);

        for (uint256 i = 0; i < acNumbercount.length; i++) {
            if (
                mappedbankaccount[msg.sender][acNumbercount[i]].exists == true
            ) {
                userdata memory newuserdata = userdata(
                    acNumbercount[i],
                    no[i],
                    brh[i],
                    balc[i]
                );
                muserdata[i] = newuserdata;
            }
        }
        return muserdata;
    }

    function getDataOfBank(uint256 _name)
        public
        view
        returns (bankdata[] memory)
    {
        uint256 count;
        bankdata[] memory mbankdata = new bankdata[](acNumbercount.length); // new array to store struct

        for (uint256 i = 0; i < addresses.length; i++) {
            for (uint256 j = 0; j < acNumbercount.length; j++) {
                if (
                    mappedbankaccount[addresses[i]][acNumbercount[j]]
                        .bank_name == _name
                ) {
                    // new struct to store data
                    bankdata memory newbankdata = bankdata(
                        acNumbercount[j],
                        mappedbankaccount[addresses[i]][acNumbercount[j]]
                            .branch,
                        mappedbankaccount[addresses[i]][acNumbercount[j]]
                            .balance
                    );
                    mbankdata[i] = newbankdata;
                    count++;
                }
            }
        }
        return mbankdata;
    }
}
