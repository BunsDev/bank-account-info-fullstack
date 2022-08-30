const { expect } = require("chai");
const hre = require("hardhat");

describe("transferamount function testing  ", function () {
  let owner;
  let addr1;
  let addr2;
  let instancebankinfo;

  beforeEach(async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
      instancebankinfo = await hre.ethers.getContractFactory("bankinfo");
      deployedbankinfo = await instancebankinfo.deploy();
      
  });
 
  it("Amount should be transfered properly.... ", async function () {
    await deployedbankinfo.setInfo(1,11,"NicBank",2500);
    await deployedbankinfo.deposit(1,1500);
    await expect(deployedbankinfo.connect(owner).tranferAmount(addr2.address, 400));

    b=deployedbankinfo.getDataOfUser();

    // console.log(b);
   expect(b[0].balance).is.equal(3600);
        
  });   
})




