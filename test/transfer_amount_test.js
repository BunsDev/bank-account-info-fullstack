const { expect } = require("chai");
const hre = require("hardhat");

describe("transferamount function testing.... ", function () {
  let owner;
  let addr1;
  let addr2;
  let instancebankinfo;
  beforeEach(async function () {
     [owner, addr1, addr2] = await ethers.getSigners();
      instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
      deployedbankinfo = await instancebankinfo.deploy();      
  });

  it("Amount should be transfered properly.... ", async function () {
    // bank account creation by owner account 
    await deployedbankinfo.setInfo(1,11,"NicBank",2500);
    await deployedbankinfo.deposit(1,1500);
    // connecting addr1 account & bank account creation by addr1 
    await deployedbankinfo.connect(addr1);
    await deployedbankinfo.setInfo(5,55,"NicBank",2000);
    // connecting owner acccount and transfering amount to addr1
    await deployedbankinfo.connect(owner).tranferAmount(1,1000,addr1.address,5);
    b=await deployedbankinfo.getDataOfUser();
     console.log(b[0].balance);
     expect(b[0].balance).is.equal(3000);           
  });   
})











