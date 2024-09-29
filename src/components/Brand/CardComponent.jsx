import { reelIcon,story,story_2, logoIcon } from "../../assets";
import { FaAngleRight } from "react-icons/fa";
// import { Chip } from "@mui/material";
// import { FaAngleDown } from "react-icons/fa";

const CardComponent = () => {
  const items = [
    {
      title: "Reel",
      details: "Campaign Details and product name",
      price: "$50.5",
      quantity: 4,
      icon: reelIcon,
    },
    {
      title: "Story",
      details: "Campaign Details and product name",
      price: "$50.5",
      quantity: 4,
      icon: story,
    },
    {
      title: "Story",
      details: "Campaign Details and product name",
      price: "$50.5",
      quantity: 4,
      icon: story_2,
    },
  ];
  const handleViewDetails = () => {
    // Add your view details logic here 
    
  };
 
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Organizer</h2>
          <p className="text-gray-500">Manager Name</p>
        </div>
        <img src={logoIcon} alt="Logo" className="w-12 h-12 rounded-full" />
      </div>

      {/* Items Section */}
      <div className="py-5">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b py-4">
            <div className="flex items-center space-x-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-500 font-thin text-xs">{item.details}</p>
                <p className="font-medium">{item.price}</p>
              </div>
            </div>
            <div className="font-medium">Qty: {item.quantity}</div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="border-t pt-4 flex justify-between items-center">
        <div className="flex items-center">
          <h4 className="text-gray-400 font-thin">Total:</h4>
          <p className="font-bold text-lg ml-2">{items[0].price}</p>
        </div>
        <a href="/viewdetails"
              // onClick={handleViewDetails}
              className="text-blue-500 underline cursor-pointer font-medium text-xs"
            >
              View Details
            </a>
          
          </div>
   
    </div>
  );
};

export default CardComponent;
