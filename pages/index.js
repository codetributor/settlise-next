import Header from '@/components/Header/Header';
import Image from 'next/image';
import { useContract, useContractRead, useContractEvents } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import ItemList from '@/components/ItemList/ItemList.js';

export default function Home() {
  const { contract } = useContract("0x0eFaD54d77fc8C4D69F4b7AA7c343539fd668D4a");
  const { data: contractAddresses, isLoading } = useContractRead(contract, "getTransactions")
  return (
    <main className="">
      <Header />
      {isLoading ? (
        <p
        className="text-center animate-pulse text-blue-500"
        >Loading Listing</p>
      ) : (
        <ItemList contractAddresses={contractAddresses} />
      )}
      
    </main>
  )
}