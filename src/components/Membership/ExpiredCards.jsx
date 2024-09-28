

function ExpiredCards() {
  return (
    <div className="min-w-96 mx-auto bg-white border-gray-700 border-dotted border-2 rounded-lg p-6 shadow-md flex flex-col items-start relative">
      {/* Subscription Title and Price */}
      <div className="w-full">
        <h2 className="text-xl font-bold">Subscription</h2>
        <p className="text-3xl font-bold flex items-baseline">
          $500
          <span className="p-2 text-xl font-medium ml-1">/month</span>
        </p>
      </div>

      {/* Dates Section */}
      <div className="flex justify-between w-full mt-4">
        <div>
          <p className="text-xs font-semibold">Starting Date</p>
          <p className="text-xs font-light text-gray-600">01/03/2024</p>
        </div>
        <div>
          <p className="text-xs font-semibold">Ending Date</p>
          <p className="text-xs font-light text-gray-600">31/03/2024</p>
        </div>
      </div>

      {/* Expired Subscription Label on the Right */}
      <div className="absolute top-4 right-6">
        <p className="text-red-500 text-xs font-semibold ">Expired Subscription</p>
      </div>
    </div>
  );
}

export default ExpiredCards;
