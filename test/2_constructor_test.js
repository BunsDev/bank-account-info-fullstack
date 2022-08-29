const { expect } = require("chai");
const hre = require("hardhat");

describe("Constructor testing", function () {
  it("owner should be a deployer ", async function () {

    const [admin]= await hre.ethers.getSigners();
    const instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
    const deployedbankinfo = await instancebankinfo.deploy();

    
    expect(await deployedbankinfo.owner()).to.equal(admin.address);
    
    /* calling transferOwner function from contract,to execute this function, 
    msg.sender must be equal to owner, so somewhere owner must be declared  */

    await deployedbankinfo.transferOwner("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
    
  });
 
})


