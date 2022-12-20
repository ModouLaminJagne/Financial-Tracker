import React, { useState } from 'react';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [howYouGotIt, setHowYouGotIt] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // add the item to the DOM
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input
          type="text"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <br />
      <label>
        How you got it:
        <input
          type="text"
          value={howYouGotIt}
          onChange={(event) => setHowYouGotIt(event.target.value)}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </label>
      <br />
      <label>
        Total:
        <input
          type="number"
          value={total}
          onChange={(event) => setTotal(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
