import { useRouter } from 'next/router';
import React from 'react';
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header"

export default function ListingPage() {
  const router = useRouter();
  const [ ipfs, setIpfs] = useState();
  const [ item, setItem] = useState();
  const [ price, setPrice] = useState();
  const [ sellerCollateral, setSellerCollateral] = useState();
  const [buyerCollateral, setBuyerCollateral] = useState();
  const [tipForSeller, setTipForSeller] = useState();
  const [tipForBuyer, setTipForBuyer] = useState();
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [finalSettlement, setFinalSettlement] = useState(false);
  const [tipForSellerInput, setTipForSellerInput] = useState(null);
  const [tipForBuyerInput, setTipForBuyerInput] = useState(null);
  
  const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_ipfsImage",
          "type": "string"
        },
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
          "internalType": "address",
          "name": "_sellerAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_TxFactoryContractAddress",
          "type": "address"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Transfer__Failed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TxFactoryContractAddress",
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
      "inputs": [],
      "name": "buyerSettle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBuyerAddress",
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
      "inputs": [],
      "name": "getBuyerCollateral",
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
      "name": "getBuyerPhysicalAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBuyerSettled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCost",
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
      "name": "getDispute",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFinalSettlement",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
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
      "name": "getIpfsImage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getItem",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPending",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPrice",
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
      "name": "getSellerAddress",
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
      "inputs": [],
      "name": "getSellerCollateral",
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
      "name": "getSellerPhysicalAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSellerSettled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTipForBuyer",
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
      "name": "getTipForSeller",
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
      "name": "getTotalContractBalance",
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
      "name": "getTransactionAddress",
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
      "inputs": [],
      "name": "ipfsImage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_msgSender",
          "type": "address"
        }
      ],
      "name": "payOutBuyer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_msgSender",
          "type": "address"
        }
      ],
      "name": "payOutSeller",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_buyerPhysicalAddress",
          "type": "string"
        }
      ],
      "name": "purchase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sellerRefund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sellerSettle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setDispute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tipBuyer",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tipSeller",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];
  useEffect(() => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(router.query.address, abi, provider)
      if(!provider) return
      async function getData() {
      const Ipfs = await contract.getIpfsImage();
      const Item = await contract.getItem();
      const Price = await contract.getPrice();
      const SellerCollateral = await contract.getSellerCollateral();
      const BuyerCollateral = await contract.getBuyerCollateral();
      const TipForSeller = await contract.getTipForSeller();
      const TipForBuyer = await contract.getTipForBuyer();
      const FinalSettlement = await contract.getFinalSettlement();

      setIpfs(Ipfs);
      setItem(Item);
      setPrice(Price);
      setSellerCollateral(SellerCollateral);
      setBuyerCollateral(BuyerCollateral);
      setTipForSeller(TipForSeller);
      setTipForBuyer(TipForBuyer);
      setFinalSettlement(FinalSettlement);
    }
    getData();
    } catch(e) {
      console.log(e.message);
    }
    
  }, [router.query.address]);

  const purchase = async (e) => {
    e.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(router.query.address, abi, signer)
      await contract.purchase(physicalAddress, { value: `${price * 2}`});
    } catch(e) {
      console.log(e.message)
    }
  }
  const settle = async (e) => {
    e.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(router.query.address, abi, signer);
      await contract.buyerSettle();
    } catch(e) {
      console.log(e.message);
    }
  }
  const addTipForSeller =  async (e) => {
    e.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(router.query.address, abi, signer);
      await contract.tipSeller({value: tipForSellerInput});
    } catch(e) {
      console.log(e.message);
    }
  }

  const addTipForBuyer = async (e) => {
    e.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(router.query.address, abi, signer);
      await contract.tipBuyer({value: tipForBuyerInput});
    } catch(e) {
      console.log(e.message);
    }
  }
  if(!price || !item || !ipfs || !sellerCollateral || !buyerCollateral || !tipForSeller || !tipForBuyer) {
    return(
      <>
      <Header />
      <p
        className="text-center animate-pulse text-blue-500"
        >Loading Listing</p>
      </>
    )
  }
  if(finalSettlement === true) {
    return(
      <div>
        <Header />
        <div className="max-w-6xl mx-auto text-xl pt-10">
          <h1 className="text-xs px-2 text-center md:text-sm lg:text-lg text-gray-500">{router.query.address}: Contract Settled</h1>
        </div>
      </div>
      
    )
  }
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-5 text-xs md:text-lg">
      <p>{`Contract Address: ${router.query.address}`}</p>
      </div>
      
      <main className="max-w-6xl mx-auto w-full p-2 flex flex-col md:flex-row space-y-10 space-x-5 pr-10 md:pr-0">
        <div className="p-10 border mx-auto lg:mx-0 max-w-md lg:max-w-xl">
          <img src={ipfs} height={300} width={300} alt="item image"></img>
        </div>
        <section className='w-full'>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className="mb-2">
              <h1 className="font-bold text-lg">{item}</h1>
              {buyerCollateral != 0 ? ("") : (
                <p className="text-gray-500">{`Price: ${price} wei`}</p>
              )}
              <p className="text-gray-500">{`Seller Collateral: ${sellerCollateral} wei`}</p>
              <p className="text-gray-500">{`Buyer Collateral: ${buyerCollateral} wei`}</p>
              {buyerCollateral === 0 ? (
                 <button className="border-2 mt-2 mb-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">Seller Cancel/Refunds</button>
              ) : ("")}
             
            </div>
            <div className="space-y-2">
            <div className="flex justify-between pr-2 items-center space-x-3">
            <p className="text-gray-500">{`Tip for Seller: ${tipForSeller}`}</p>
            <form className="flex flex-col space-y-1">
              <input value={tipForSellerInput} onChange={e => setTipForSellerInput(e.target.value)} className="p-1 border" placeholder='enter tip seller' />
              <button onClick={addTipForSeller} className="border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">Tip the Seller</button>
            </form>
            </div>
            <div className="flex justify-between pr-2 items-center space-x-3">
            <p className="text-gray-500">{`Tip for Buyer: ${tipForBuyer}`}</p>
            <form className="flex flex-col space-y-1">
            <input value={tipForBuyerInput} onChange={e => setTipForBuyerInput(e.target.value)} className="p-1 border" placeholder='enter tip buyer' />
            <button onClick={addTipForBuyer} type="submit" className="border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">Tip the Buyer</button>
            </form>
            
            </div>
            </div>
          </div>
          {buyerCollateral != 0 ? (
            <button onClick={settle} className="border-2 mt-2  border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">Buyer Settles</button>
          ) : (
            <form className="flex flex-col pr-2">
            <input className="text-gray-500 p-1 my-2 border" value={physicalAddress} onChange={e => setPhysicalAddress(e.target.value)} placeholder="enter physical address" required />
            <button onClick={purchase} type="submit" className="border-2 mt-2  border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">Purchase</button>
            </form>
           
          )}
          
        </section>
      </main>
    </div>
  )
}