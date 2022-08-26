const { ethers } = require("hardhat");

async function main() {
  const bankinfoContract  = await ethers.getContractFactory("bankinfo");
  const deployedbankinfoContract  = await bankinfoContract.deploy();
  await deployedbankinfoContract.deployed();
  // const[addr1,addr22,addr3]=await ethers.getSigners();

  await deployedbankinfoContract.setInfo(1,11,"nic",1200);
  await deployedbankinfoContract.deposit(1,1000);
  getdata=await deployedbankinfoContract.getDataOfUser();
  console.log(getdata);
  balance=await deployedbankinfoContract.getBalance(1);
  console.log(balance);
  await deployedbankinfoContract.transferAmount(1,2500,addr2.address,2);

  
  console.log("datas :",res);
  
  console.log
  
  
  (
    "deployed Contract Address:",deployedbankinfoContract.address );
}

main()
.then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});






