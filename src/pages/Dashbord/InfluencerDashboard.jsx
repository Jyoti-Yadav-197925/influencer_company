import {
  Alpha,
  Lencecart,
  Cors,
  Boat,
  Toch,
  Card,
  cardicon_link,
  campaign,
  crocs
} from "../../assets";

const DashboardPage = () => {
  return (
    <div className={`flex flex-col justify-between h-full`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="w-[233px] h-[165px] p-4 border-2 border-white rounded-lg bg-blue-100 flex flex-col items-start justify-center">
          <div className="text-gray-700 flex flex-col items-start">
            <img
              src={Toch}
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full"
            />
            <p className="text-lg">Total Earning</p>
            <p className="text-2xl font-bold">$3127</p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#FFF0BDCF" }}
          className="w-[233px] h-[165px] p-4 border-2 border-white rounded-lg  flex flex-col items-start justify-center"
        >
          <div className="text-gray-700 flex flex-col items-start">
            {" "}
            <img
              src={Card} 
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full" 
            />
            <p className="text-lg">Total Brand</p>
            <p className="text-2xl font-bold">127</p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#FBB1D9B8" }}
          className="w-[233px] h-[165px] p-4 border-2 border-white rounded-lg flex flex-col items-start justify-center"
        >
          <div className="text-gray-700 flex flex-col items-start">
            <img
              src={campaign}
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full"
            />
            <p className="text-lg">Total Campaigns</p>
            <p className="text-2xl font-bold">32</p>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#FFF0BDCF" }}
          className="w-[233px] h-[165px] p-4 border-2 border-white rounded-lg  flex flex-col items-start justify-center"
        >
          <div className="text-gray-700 flex flex-col items-start">
            {" "}
         
            <img
              src={cardicon_link} 
              alt="Round Icon"
              className="w-12 h-12 mb-2 rounded-full" 
            />
            <p className="text-lg">Follower Count</p>
            <p className="text-2xl font-bold">17k</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between w-full mb-4">
          <h2 className="text-xl font-semibold">Collaboration History</h2>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            View All
          </button>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-between">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={Alpha}
                alt="Alpha"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={Lencecart}
                alt="Lenskart"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={Cors}
                alt="Cors"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-20 h-20  rounded-full bg-gray-200 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={Boat}
                alt="Boat"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-20 h-20  rounded-full bg-gray-200 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={crocs}
                alt="Crocs"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
