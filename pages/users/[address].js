import Header from '@/components/Header/Header.js';
import Image from 'next/image';
import { useContract, useContractRead, useContractEvents } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import ItemList from '@/components/ItemList/ItemList.js';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  const { contract } = useContract("0xc622a97E5657f4E14Eb28c9736B0F22DafAa7A2D");
  const { data: contractAddresses, isLoading } = useContractRead(contract, "getUserAddresses", [router.query.address])
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