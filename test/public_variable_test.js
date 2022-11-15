const { expect } = require("chai");
const hre = require("hardhat");

describe("Public Variable testing ", function () {
  it("Should return owner address as variable 'owner' is made public  ", async function () {
    const instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
    const deployedbankinfo = await instancebankinfo.deploy();
     ownerAdrress=await deployedbankinfo.owner();
    console.log("owneraddress :",ownerAdrress);
  }); 
})



