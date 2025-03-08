import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'wouter';

const HomePage = () => {
  const count = useSelector((state) => state.count);

  return (
    <div className="counter-container">
      <p className="count">Total Count (from Redux State) :- {count}</p>
      <Link href="/counter">Go to the Counter Component</Link>
    </div>
  );
};

export default HomePage;
