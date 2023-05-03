import Header from '@/components/Header/Header.js';
import Image from 'next/image';
import { useContract, useContractRead, useContractEvents } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import ItemList from '@/components/ItemList/ItemList.js';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  const [ type, setType ] = useState("buyer");

  const { contract } = useContract("0xc622a97E5657f4E14Eb28c9736B0F22DafAa7A2D");
  const { data: contractAddresses, isLoading } = useContractRead(contract, "getUserAddresses", [router.query.address])
  return (
    <main className="max-w-6xl mx-auto pb-10">
      <Header />
      <h1 className="text-gray-500 p-2 text-2xl">My Account</h1>
      <div className="p-2 flex-row space-x-2">
        <button onClick={() => {setType("seller")}}className=" border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">Seller</button>
        <button onClick={() => {setType("buyer")}}className=" border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer">Buyer</button>
      </div>
      {isLoading ? (
        <p
        className="text-center animate-pulse text-blue-500"
        >Loading Listing</p>
      ) : (
        <ItemList contractAddresses={contractAddresses} isAccount={true} type={type} userAddress={router.query.address} />
      )}
      
    </main>
  )
}