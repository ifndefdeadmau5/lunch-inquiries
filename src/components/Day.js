import React, { useState } from 'react';
import OrderForm from './OrderForm';

const Day = ({ date }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="border p-4 m-2 cursor-pointer" onClick={() => setShowForm(true)}>
      <p>{date.toDateString()}</p>
      {showForm && <OrderForm date={date} closeForm={() => setShowForm(false)} />}
    </div>
  );
};

export default Day;