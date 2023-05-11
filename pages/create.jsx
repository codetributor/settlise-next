
import Header from "@/components/Header/Header"

import {ethers, BigNumber} from 'ethers'
import { useState } from "react"
// import {abi} from '../context/abi.json'
import abi from '../context/abi.json'


const Create = () => {
  const contracAddress = "0x84eb9bE781cFD4A2BcE9EBc0B6D53f1983070828"
  const txabi =   [
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
          "name": "_contractAddress",
          "type": "address"
        }
      ],
      "name": "Created",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_item",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_sellerPhysicalAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ipfsImage",
          "type": "string"
        }
      ],
      "name": "createTxContract",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getId",
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
      "inputs": [],
      "name": "getLengthOfTransactionArray",
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
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getTransaction",
      "outputs": [
        {
          "internalType": "address",
          "name": "_transactionAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransactions",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "getUserAddresses",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_transactionAddress",
          "type": "address"
        }
      ],
      "name": "removeFromPublicArray",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_transactionAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_seller",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        }
      ],
      "name": "removeTx",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "s_transactionsArray",
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
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_txContractAddress",
          "type": "address"
        }
      ],
      "name": "setBuyerTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_seller",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_txContractAddress",
          "type": "address"
        }
      ],
      "name": "setTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "transactions",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState(0)
  const [sellerPhysicalAddress, setSellerPhysicalAddress] = useState("")
  const [ipfsImage, setIpfsImage] = useState("")   

  const handleCreateContract = async (e) => {
    e.preventDefault()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const contract = new ethers.Contract(contracAddress, abi, provider.getSigner())
    const contract = new ethers.Contract(contracAddress, txabi, provider.getSigner())
    const res = await contract.createTxContract(itemName, itemPrice, sellerPhysicalAddress, ipfsImage, {value:itemPrice})
    // const res = await contract.getId()
    
    console.log(abi.abi)    
    console.log(res.toString())
  }

  const contractExperimentAddress = "0x2A279c99354370bD0DF6Ab5263ED011EC12c5A8d"
  const experimentAbi = [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    {
      "inputs": [
        { "internalType": "string", "name": "_token", "type": "string" },
        { "internalType": "string", "name": "_symbol", "type": "string" },
        {
          "internalType": "uint256",
          "name": "_insuredAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_coveragePercentage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_periodInDays",
          "type": "uint256"
        }
      ],
      "name": "acquirePolicy",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addCollateral",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "_token", "type": "string" },
        { "internalType": "string", "name": "_symbol", "type": "string" }
      ],
      "name": "addInsurableToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_Id", "type": "uint256" }
      ],
      "name": "claim",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "_token", "type": "string" },
        { "internalType": "string", "name": "_symbol", "type": "string" }
      ],
      "name": "deleteTokenInsurable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getIdsOf",
      "outputs": [
        { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_Id", "type": "uint256" }
      ],
      "name": "getInfoPolicy",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address payable",
              "name": "owner",
              "type": "address"
            },
            { "internalType": "string", "name": "token", "type": "string" },
            { "internalType": "string", "name": "symbol", "type": "string" },
            {
              "internalType": "uint256",
              "name": "insuredAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "coveragePercentage",
              "type": "uint256"
            },
            { "internalType": "uint256", "name": "premium", "type": "uint256" },
            { "internalType": "bool", "name": "claimed", "type": "bool" },
            {
              "internalType": "uint256",
              "name": "amountClaimed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "initialTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expirationTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenPrice",
              "type": "uint256"
            }
          ],
          "internalType": "struct Securitz.S_Policy",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "_token", "type": "string" }
      ],
      "name": "getPremium",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "string", "name": "_token", "type": "string" }
      ],
      "name": "getTokenMarketPrice",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "name": "isTokenInsurableMap",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxPercentCoverage",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "policyCounter",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "policyMap",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        },
        { "internalType": "string", "name": "token", "type": "string" },
        { "internalType": "string", "name": "symbol", "type": "string" },
        {
          "internalType": "uint256",
          "name": "insuredAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "coveragePercentage",
          "type": "uint256"
        },
        { "internalType": "uint256", "name": "premium", "type": "uint256" },
        { "internalType": "bool", "name": "claimed", "type": "bool" },
        {
          "internalType": "uint256",
          "name": "amountClaimed",
          "type": "uint256"
        },
        { "internalType": "uint256", "name": "initialTime", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "expirationTime",
          "type": "uint256"
        },
        { "internalType": "uint256", "name": "tokenPrice", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "premiumFromAI",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxPercentCoverage",
          "type": "uint256"
        }
      ],
      "name": "updataMaxPercentCoverage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const handleExperiment = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contractExperiment = new ethers.Contract(contractExperimentAddress, experimentAbi, provider.getSigner())
    const premium = await contractExperiment.getPremium("eth")
    console.log(premium)
    alert(premium)
    await contractExperiment.updataMaxPercentCoverage(18)
    const coverage = await contractExperiment.maxPercentCoverage()
    alert(coverage)
  }



  return(
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-10 pt-2">
        
        <h1 className="text-4xl font-bold">List an Item</h1>
        <h2 className="text-xl font-semibold pt-5">Select an Item you would like to sell</h2>
        <hr className="mb-5" />
        <p>Bellow you will find the NFTs you own in your wallet</p>

        <form onSubmit={ (e) => handleCreateContract(e)}>
            <div className="flex flex-col p-10">
              <div className="grid grid-col-2 gap-5">

                <label className="border-r font-light" htmlFor="">Item Name</label>
                <input onChange={e => {setItemName(e.target.value)}} type="text"   className="bg-gray-100 font-light p-3 outline-none" />

                <label className="border-r font-light" htmlFor="">Item price</label>
                <input onChange={e => {setItemPrice(Number(e.target.value))}} type="number" className="bg-gray-100 font-light p-3 outline-none"/>

                <label className="border-r font-light" htmlFor="">Seller Physical Address</label>
                <input onChange={e => {setSellerPhysicalAddress(e.target.value)}} type="text" className="bg-gray-100 font-light p-3 outline-none"/>

                <label className="border-r font-light" htmlFor="">IPFS image</label>
                <input onChange={e => {setIpfsImage(e.target.value)}} type="text" className="bg-gray-100 font-light p-3 outline-none"/>

              </div>

              <button type="submit" className="bg-blue-600 text-white rounded-lg p-4 mt-8">
                Create Listing
              </button>
              <div>
                
              </div>


            </div>
          </form>

          <button type="submit" className="bg-blue-600 text-white rounded-lg p-4 mt-8" onClick={() => handleExperiment()}>
            Experiment
          </button>
      </main>
    </div>
  )
}

export default Create