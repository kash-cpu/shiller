import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = ({ onPointsUpdate }) => {
  const [campaigns, setCampaigns] = useState([
    { name: 'STONE', amount: '10000000' },
    { name: 'PLAY', amount: '200000' },
    { name: 'FLAT', amount: '100000' },
    { name: 'CHILLGUY', amount: '100000' },
    { name: 'ODIN', amount: '900000' },
    { name: 'LEO', amount: '800000' },
    { name: 'B20', amount: '700000' },
    { name: 'ALEX', amount: '700000' },
  ]);

  const [tweetLink, setTweetLink] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const verifyTweet = async () => {
    // Mock tweet verification logic
    if (tweetLink.includes('twitter.com')) {
      // Simulate successful verification
      setStatusMessage('Tweet verified successfully! Points added.');
      onPointsUpdate(10); // Add 10 points as an example
    } else {
      setStatusMessage('Invalid tweet link. Please provide a valid link.');
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Live Campaign Section */}
      <div className="p-2 relative z-0">
        <h1 className="text-2xl font-bold mb-4">Live Campaign</h1>
        <Slider {...settings} className="relative z-10">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-20 bg-blue-400 shadow-md p-4"
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold">{campaign.name}</h2>
                <p className="text-xl">{campaign.amount}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Section */}
      <h2 className="flex justify-center text-2xl font-bold mb-2 mt-6">Shill and Earn</h2>
      <p className="flex justify-center m-2 items-center text-center">
        Make a positive tweet about Stone or leave a supportive comment on crypto-related tweets
      </p>
      <p className="flex justify-center mt-2 mb-4">Don’t forget to follow and tag $Stone</p>
      <div className="shadow-lg p-10 bg-blue-400 mb-20 mx-4 md:mx-20 rounded-lg">
        {/* Input and Button Section */}
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Copy and paste your tweet or comment link here"
            value={tweetLink}
            onChange={(e) => setTweetLink(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={verifyTweet}
            className="px-6 py-2 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition duration-200 focus:outline-none"
          >
            Verify
          </button>
          {statusMessage && <p className="text-white font-medium">{statusMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
