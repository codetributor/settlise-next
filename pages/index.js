import Header from '@/components/Header/Header';
import Image from 'next/image';
import { useContract, useContractRead, useContractEvents } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import ItemList from '@/components/ItemList/ItemList.js';

export default function Home() {
  const { contract } = useContract("0xD196c73926544c430EEa79eAD42D4c2f7B16E63b");
  const { data: contractAddresses, isLoading } = useContractRead(contract, "getTransactions")
  return (
    <main className="">
      <Header />
      <ItemList contractAddresses={contractAddresses} />
    </main>
  )
}