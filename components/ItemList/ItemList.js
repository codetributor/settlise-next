import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({ contractAddresses, isAccount, type, userAddress}) => {
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {contractAddresses?.map((address) => (
        <Item key={address} userAddress={userAddress} address={address} isAccount={isAccount} type={type}/>
      ))}
    </div>
    </div>
  )
}

export default ItemList