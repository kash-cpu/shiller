import React from "react";
import PropTypes from "prop-types";

const Point = ({ userPoints, claimRewards }) => {
  const hasEnoughPoints = userPoints >= 100; // Example threshold for claiming rewards

  return (
    <div className="flex flex-col items-center mt-20 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Your Points</h1>
      <p className="text-xl">
        You have <span className="font-bold text-blue-600">{userPoints}</span>{" "}
        points!
      </p>
      <p className="text-lg text-gray-600 mt-4">
        Keep earning points by participating in campaigns. Once you have enough
        points, claim your rewards!
      </p>

      {hasEnoughPoints ? (
        <button
          onClick={claimRewards} // Call claimRewards when clicked
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md shadow-md"
        >
          Claim Rewards
        </button>
      ) : (
        <p className="mt-6 text-gray-500">
          You need at least <span className="font-bold">100 points</span> to
          claim rewards.
        </p>
      )}
    </div>
  );
};

Point.propTypes = {
  userPoints: PropTypes.number.isRequired,
  claimRewards: PropTypes.func.isRequired,
};

export default Point;
