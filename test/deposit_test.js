const { expect } = require("chai");
const hre = require("hardhat");

describe("deposit function testing  ", function () {
  let owner;
  let instancebankinfo;
  beforeEach(async function () {
     [owner]= await ethers.getSigners(); 
      instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
      deployedbankinfo = await instancebankinfo.deploy();      
  });
  it("Amount should be deposited correctly..... ", async function () {
    await deployedbankinfo.setInfo(1,11,"NicBank",2500);
    await deployedbankinfo.deposit(1,1500);
    b=await deployedbankinfo.getDataOfUser();
    // console.log(b);
   expect(b[0].balance).is.equal(4000);       
  });   
})





