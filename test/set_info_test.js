const { expect } = require("chai");
const hre = require("hardhat");

describe("setinfo function testing  ", function () {
  let owner;
  let instancebankinfo;
  beforeEach(async function () {
     [owner]= await ethers.getSigners(); 
      instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
      deployedbankinfo = await instancebankinfo.deploy();    
  });

  it("Should set the data correctly...... ", async function () {    
   a=await deployedbankinfo.setInfo(1,11,"NicBank",12000);
   b=await deployedbankinfo.setInfo(2,22,"NabilBank",15000);
   // console.log("setinfo data of first user :",a)
   // console.log("setinfo data of next user:",b)  
   b=await deployedbankinfo.getDataOfUser();
   // console.log("user data",b);
   expect ((b[0].accNumber)).is.equal(1);
   expect ((b[0].bank_name)).is.equal(11);
   expect ((b[0].branch)).is.equal("NicBank");
   expect ((b[0].balance)).is.equal(12000);   
   expect ((b[1].accNumber)).is.equal(2);
   expect ((b[1].bank_name)).is.equal(22);
   expect ((b[1].branch)).is.equal("NabilBank");
   expect ((b[1].balance)).is.equal(15000);
  });  
})



