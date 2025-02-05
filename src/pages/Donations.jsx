import React, { useState } from 'react';

const Donations = () => {
  const [donationType, setDonationType] = useState('oneTime');
  const [amount, setAmount] = useState('1000');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', { donationType, amount });
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Support Our Cause</h1>

      <div className="space-y-8">
        {/* Impact Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">₹1,000</div>
              <p className="text-gray-600">Supports one blood transfusion</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">₹5,000</div>
              <p className="text-gray-600">Provides monthly medication for one patient</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">₹10,000</div>
              <p className="text-gray-600">Sponsors complete treatment for one month</p>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Make a Donation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Donation Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Donation Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    value="oneTime"
                    checked={donationType === 'oneTime'}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="form-radio text-red-600"
                  />
                  <span className="ml-2">One-time</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    value="monthly"
                    checked={donationType === 'monthly'}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="form-radio text-red-600"
                  />
                  <span className="ml-2">Monthly</span>
                </label>
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['1000', '5000', '10000', '25000'].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(value)}
                    className={`py-2 px-4 rounded-md border ${
                      amount === value
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-red-600'
                    }`}
                  >
                    ₹{value}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Or Enter Custom Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  min="100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition duration-200"
            >
              Proceed to Pay
            </button>
          </form>
        </div>

        {/* Tax Benefits */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tax Benefits</h2>
          <p className="text-gray-600">
            All donations are eligible for tax deduction under Section 80G of the Income Tax Act.
            You will receive a tax exemption certificate for your donation.
          </p>
        </div>

        {/* Other Ways to Help */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Ways to Help</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Besides monetary donations, you can also support us by:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Volunteering at our events</li>
              <li>Organizing blood donation camps</li>
              <li>Spreading awareness about Thalassemia</li>
              <li>Supporting our research initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;