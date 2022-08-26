const { ethers } = require("hardhat");

async function main() {
  const bankinfoContract  = await ethers.getContractFactory("bankinfo");
  const deployedbankinfoContract  = await bankinfoContract.deploy();
  await deployedbankinfoContract.deployed();


  const res=await deployedbankinfoContract.setInfo(1,2,"nc",12134);
  
  console.log("datas :",res);
  
  console.log(
    "deployed Contract Address:",deployedbankinfoContract.address );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



