import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({ contractAddresses }) => {
  return (
    <div>
      {contractAddresses?.map((address) => (
        <Item key={address} address={address}/>
      ))}
    </div>
  )
}

export default ItemList