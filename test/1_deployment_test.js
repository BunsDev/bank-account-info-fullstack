const { expect } = require("chai");
const hre = require("hardhat");

describe("Deployment testing", function () {
  it("deployment should work ", async function () {

    const [owner]= await hre.ethers.getSigners();
    console.log("owner address",owner.address);
    const instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
    const deployedbankinfo = await instancebankinfo.deploy();
    console.log("deployed address : ",deployedbankinfo.address);


    expect(typeof (deployedbankinfo.address)!=null);


  });
})

