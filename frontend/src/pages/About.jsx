import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">About Shill</h1>
        <p className="text-lg leading-7 mb-6">
          Welcome to <span className="font-semibold text-blue-800">Shill</span>, the innovative web3 platform designed to empower token founders and engage the community in a unique and rewarding way. In the rapidly evolving landscape of cryptocurrency, visibility and community engagement are crucial for the success of any token. Shill provides a solution that not only helps token founders promote their projects but also rewards users for their participation and advocacy.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-blue-800">What is Shill?</h2>
        <p className="text-lg leading-7 mb-6">
          Shill is a web3 application that allows token founders to create targeted shill campaigns for their tokens. These campaigns incentivize community members to promote their projects by tweeting about them, thereby generating buzz and increasing visibility in the crypto space. By leveraging the power of social media, Shill enables token founders to create trends around their tokens while providing users with the opportunity to earn rewards in the form of the very tokens they are promoting.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-blue-800">How Does It Work?</h2>
        <ul className="list-disc list-inside space-y-4 mb-6">
          <li>
            <span className="font-semibold text-blue-800">Create a Shill Campaign:</span> Token founders can easily set up a shill campaign through our user-friendly interface. They define the campaign parameters, including the reward structure, duration, and specific messaging guidelines.
          </li>
          <li>
            <span className="font-semibold text-blue-800">Engage the Community:</span> Once the campaign is live, community members can participate by tweeting about the token. Each tweet must adhere to the campaign guidelines to qualify for rewards.
          </li>
          <li>
            <span className="font-semibold text-blue-800">Earn Rewards:</span> Participants who successfully promote the token through their tweets will receive rewards in the form of the token they are shilling. This creates a win-win situation where token founders gain visibility and traction, while users earn tokens for their efforts.
          </li>
          <li>
            <span className="font-semibold text-blue-800">Track Progress:</span> Both token founders and participants can track the performance of the campaign in real-time. Founders can see how many tweets have been made, the reach of those tweets, and the overall engagement generated. Participants can monitor their earnings and the impact of their contributions.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Shill?</h2>
        <ul className="list-disc list-inside space-y-4 mb-6">
          <li>
            <span className="font-semibold text-blue-800">Targeted Visibility:</span> Unlike traditional airdrops that distribute tokens randomly, Shill allows token founders to target specific audiences who are genuinely interested in their projects. This targeted approach increases the likelihood of attracting engaged community members.
          </li>
          <li>
            <span className="font-semibold text-blue-800">Community Empowerment:</span> Shill fosters a sense of community by allowing users to actively participate in the promotion of projects they believe in. This engagement not only benefits the token founders but also strengthens the community around the token.
          </li>
          <li>
            <span className="font-semibold text-blue-800">Transparent and Fair:</span> Our platform ensures transparency in the reward distribution process. Participants can easily verify their earnings and the impact of their tweets, fostering trust and accountability.
          </li>
          <li>
            <span className="font-semibold text-blue-800">Innovative Marketing Strategy:</span> Shill represents a new paradigm in token marketing. By incentivizing social media engagement, token founders can create organic trends and discussions around their projects, leading to increased interest and investment.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-blue-800">Join the Shill Revolution</h2>
        <p className="text-lg leading-7">
          At Shill, we believe in the power of community and the potential of web3 technology to transform the way tokens are marketed and promoted. By creating a platform that rewards users for their advocacy, we are helping token founders build strong, engaged communities while providing users with tangible benefits for their participation.
        </p>
        <p className="text-lg leading-7 mt-4">
          Whether you are a token founder looking to amplify your project's visibility or a community member eager to earn rewards for your support, <span className="font-semibold text-blue-800">Shill</span> is the platform for you. Join us today and be part of the future of token promotion!
        </p>
      </div>
    </div>
  );
};

export default About;
