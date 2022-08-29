const { expect } = require("chai");
const hre = require("hardhat");

describe("Constructor testing", function () {
  it("owner should be the deployer of the contract ", async function () {

    const instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
    const deployedbankinfo = await instancebankinfo.deploy();
    console.log("deployed address : ",deployedbankinfo.address);
  });
})

