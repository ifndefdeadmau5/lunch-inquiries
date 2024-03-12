import React, { useState } from 'react';

const OrderForm = ({ date, closeForm }) => {
  const [username, setUsername] = useState('');
  const [lunchChoice, setLunchChoice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date: date.toDateString(), username, lunchChoice });
    closeForm();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="mb-4">Order Lunch for {date.toDateString()}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 w-full mb-4" />
          <select value={lunchChoice} onChange={(e) => setLunchChoice(e.target.value)} className="border p-2 w-full mb-4">
            <option value="">Select Lunchbox</option>
            <option value="salad">Salad</option>
            <option value="bento">Bento</option>
          </select>
          <button type="submit" className="border p-2 bg-blue-500 text-white w-full">Submit</button>
        </form>
        <button onClick={closeForm} className="border p-2 bg-red-500 text-white w-full mt-4">Cancel</button>
      </div>
    </div>
  );
};

export default OrderForm;