import React from 'react';

const SubscriptionCard = () => {
  return (
    <div className="min-w-96 mx-auto bg-white border-gray-700 border-dotted border-2 rounded-lg p-6 shadow-md flex flex-col items-start">
    
      <div>
        <h2 className="text-xl font-bold ">Subscription</h2>
        <p className="text-3xl font-bold flex items-baseline">
          $500
          <span className="p-2 text-xl font-medium ml-1">/month</span>
        </p>
      </div>
      
     
      <div className="flex justify-between w-full mt-4">
        <div>
          <p className="text-xs font-semibold">Starting Date</p>
          <p className="text-xs font-light text-gray-600">01/01/2023</p>
        </div>
        <div>
          <p className="text-xs font-semibold">Ending Date</p>
          <p className="text-xs font-light text-gray-600">01/01/2024</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
