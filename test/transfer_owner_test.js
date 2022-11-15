const { expect } = require("chai");
const hre = require("hardhat");

describe("transfer function testing.....", function () {
  let owner;
  let addr1;
  let addr2;
  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
      instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
      deployedbankinfo = await instancebankinfo.deploy();    
  }); 

  it("ownership should transfer to the given address ..... ", async function () {
    await deployedbankinfo.transferOwner(addr1.address);
    //console.log("new owner's address : ",await deployedbankinfo.owner());  
  //  expect(await deployedbankinfo.owner).is.equal(addr.address)      
  });   

  it("owner should not be changed if function called other than owner ......", async function () { 
    // deployed by owner's address so , owner is deployer
    await deployedbankinfo.transferOwner(addr1.address);
    console.log("new owner's address : ",await deployedbankinfo.owner());
    // connecting addr2 account and calling transferOwner function...
    await deployedbankinfo.connect(addr2);
    await expect (deployedbankinfo.transferOwner(addr1.address)).to.be.revertedWith("Permission denied as you are not owner of this Account");   
  });   
})





