const Web3 = require("web3");
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "accountAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountNumber",
				"type": "uint256"
			}
		],
		"name": "eventAccountCreation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "eventAdminChange",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "accountAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "depositedBalance",
				"type": "uint256"
			}
		],
		"name": "eventBalanceDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountFrom",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountTo",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "transferedBalance",
				"type": "uint256"
			}
		],
		"name": "eventBalanceTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "accountAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accountNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "withdrawlBalance",
				"type": "uint256"
			}
		],
		"name": "eventBalanceWithdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "arraybankdata",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "accNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "branch",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "arrayuserdata",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "accNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bank_name",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "branch",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_accountNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_depositBalance",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_acno",
				"type": "uint256"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_name",
				"type": "uint256"
			}
		],
		"name": "getDataOfBank",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "accNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "branch",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					}
				],
				"internalType": "struct bankinfo.bankdata[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDataOfUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "accNumber",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "bank_name",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "branch",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					}
				],
				"internalType": "struct bankinfo.userdata[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mappedbankaccount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "bank_name",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "branch",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_accountNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_bank",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_branch",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_balance",
				"type": "uint256"
			}
		],
		"name": "setInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fromAccountNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_transferBalance",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_toAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_toAccountNo",
				"type": "uint256"
			}
		],
		"name": "tranferAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newAdminaddr",
				"type": "address"
			}
		],
		"name": "transferOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_accountNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_withdrawBalance",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
	;
// connection to the localhost so to get connected to nodes.....
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// console.log("host:",web3);

web3.eth.getAccounts().then((res) => {
	//	console.log("all accounts :",res);
});
accBalance = web3.eth.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266").then(console.log);

// abi and contract address
let contract = new web3.eth.Contract(
	abi,
	"0x5FbDB2315678afecb367f032d93F642f64180aa3"
);

contract.methods.setInfo(49999, 4567, "nicBank", 5600).send({ from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" }).then(console.log);
contract.methods.getDataOfUser().call().then(console.log);

contract.methods.deposit(300,400).send({ from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" }).then(console.log); 

