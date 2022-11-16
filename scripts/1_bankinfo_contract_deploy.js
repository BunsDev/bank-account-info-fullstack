const { ethers } = require("hardhat");

async function main() {
  const bankinfoContract  = await ethers.getContractFactory("bankinfo");
  const deployedbankinfoContract  = await bankinfoContract.deploy();
  await deployedbankinfoContract.deployed();
  
  console.log(
    "deployed Contract Address:",deployedbankinfoContract.address );
    // deployed Contract Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3 
}
main()
 .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});



