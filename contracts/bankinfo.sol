// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;  

contract bankinfo{


    struct bankaccount {
        uint bank_name;
        string branch;
        uint balance;
        bool exists;
    }

    struct userdata{
        uint accNumber;
        uint bank_name;
        string branch;
        uint balance;
 
    }

    struct bankdata {
        uint accNumber;
        string branch;
        uint balance;
    }
 
    uint[] acNumbercount;   // array storing account numbers 
    address[] addresses;     // array storing addresses 

    userdata[] public arrayuserdata;   
    bankdata[] public arraybankdata;

    mapping(address=>mapping(uint=>bankaccount)) public mappedbankaccount;

    function setInfo(uint _number,uint _bank,string memory _branch,uint _balance) public 
    {
        mappedbankaccount[msg.sender][_number]=bankaccount(_bank,_branch,_balance,true);
        acNumbercount.push(_number);
        addresses.push(msg.sender);          
    }



    function deposit(uint _number,uint _balance) public 
    {
        mappedbankaccount[msg.sender][_number].balance+=_balance;   
    }


     function withdraw(uint _number,uint _balance) public 
    {
        mappedbankaccount[msg.sender][_number].balance-=_balance;   
    }

    function getDataOfUser() public view returns(userdata[] memory )
    {
        
        userdata[] memory muserdata= new userdata[](acNumbercount.length);

        for(uint i=0;i<acNumbercount.length;i++)
        {
            
            if(mappedbankaccount[msg.sender][acNumbercount[i]].exists == true){
            userdata memory newuserdata=userdata(acNumbercount[i],mappedbankaccount[msg.sender][acNumbercount[i]].bank_name,mappedbankaccount[msg.sender][acNumbercount[i]].branch,mappedbankaccount[msg.sender][acNumbercount[i]].balance);
            muserdata[i]=newuserdata;         
            
            }
        }
        return muserdata;
        
    }

    function getDataOfBank(uint _name) public view returns(bankdata[] memory )
    {
        uint count;
        bankdata[] memory mbankdata= new bankdata[](acNumbercount.length); // new array to store struct 

        for(uint i=0;i<addresses.length;i++)
        {
            for(uint j=0;j<acNumbercount.length;j++)
            {
                if(mappedbankaccount[addresses[i]][acNumbercount[j]].bank_name ==_name)
                {
                    // new struct to store data 
                bankdata memory newbankdata=bankdata(acNumbercount[j],mappedbankaccount[addresses[i]][acNumbercount[j]].branch,mappedbankaccount[addresses[i]][acNumbercount[j]].balance);
                mbankdata[i]=newbankdata;
                count++;
                }
            }        
        }
        return mbankdata;
        
    }

    function tranferAmount(uint _fromAccountNo,uint _balance,address _to,uint _toAccountNo) public 
    {
        require(mappedbankaccount[msg.sender][_fromAccountNo].balance>=_balance,"insufficient balance");
        mappedbankaccount[_to][_toAccountNo].balance+=_balance;
        mappedbankaccount[msg.sender][_fromAccountNo].balance-=_balance;

    }   


    function getBalance(uint _acno) public view returns(uint )
    {

     return mappedbankaccount[msg.sender][_acno].balance;


    } 



}




