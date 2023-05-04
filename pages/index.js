import Header from '@/components/Header/Header.js';
import Image from 'next/image';
import { useContract, useContractRead, useContractEvents } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import ItemList from '@/components/ItemList/ItemList.js';

export default function Home() {
  const { contract } = useContract("0x84eb9bE781cFD4A2BcE9EBc0B6D53f1983070828");
  const { data: contractAddresses, isLoading } = useContractRead(contract, "getTransactions")
  return (
    <main className="">
      <Header />
      {isLoading ? (
        <p
        className="text-center animate-pulse text-blue-500"
        >Loading Listing</p>
      ) : (
        <ItemList contractAddresses={contractAddresses} isAccount={false}/>
      )}
      
    </main>
  )
}