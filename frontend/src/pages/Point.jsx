import React from 'react';

const Point = ({ userPoints }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Your Points</h1>
      <p className="text-xl">You have <span className="font-bold">{userPoints}</span> points!</p>
      <p className="text-center mt-4">
        Keep earning points by participating in campaigns. Once you have enough points, claim your rewards!
      </p>
    </div>
  );
};

export default Point;
