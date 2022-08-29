const { expect } = require("chai");
const hre = require("hardhat");

describe("function testing  ", function () {
  let owner;
  let instancebankinfo;

  beforeEach(async function () {
     [owner]= await ethers.getSigners(); 
      instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
    deployedbankinfo = await instancebankinfo.deploy();
    await deployedbankinfo.setInfo(1,11,"NicBank",1200);
  });

  it("deposit function checking...... ", async function () {
    
    await deployedbankinfo.deposit(1,1000);
        
  }); 
  it("getDataOfUser function checking...... ", async function () {
    await deployedbankinfo.deposit(1,1000);
    console.log("after depositing",await deployedbankinfo.getDataOfUser());
        
  }); 

  it(" withdraw function checking...... ", async function () {
    await deployedbankinfo.deposit(1,1000);
    await deployedbankinfo.withdraw(1,200);  
    console.log("after depositing and withdrawing",await deployedbankinfo.getDataOfUser());
        
  }); 

  it(" getting bank data  ", async function () {
    console.log("bank data of user: ",await deployedbankinfo.getDataOfBank(11));
        
  });  
 

 
})



