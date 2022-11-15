const { expect } = require("chai");
const hre = require("hardhat");

describe("withdraw function testing  ", function () {
  let owner;
  let instancebankinfo;
  beforeEach(async function () {
     [owner]= await ethers.getSigners(); 
      instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
      deployedbankinfo = await instancebankinfo.deploy();
      
  });
  
  it("Amount should be deduct from the account properly ..... ", async function () {
    await deployedbankinfo.setInfo(1,11,"NicBank",2500);
    await deployedbankinfo.deposit(1,1500);
    await deployedbankinfo.withdraw(1,1);
    b=await deployedbankinfo.getDataOfUser();
    // console.log(b);
   expect(b[0].balance).is.equal(3999);    
  });   
})




