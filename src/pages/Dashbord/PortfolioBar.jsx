

import { FaFileUpload } from "react-icons/fa";
function PortfolioBar() {
 
 
  return (
    <div className="max-w-3xl  mx-auto mt-20 p-4">
    {/* Upload Section */}
    <div className="border-2 border-dashed border-gray-500 w-full h-64 flex justify-center items-center">
      <div className="text-gray-500  text-2xl">
      <FaFileUpload />

      </div>
    </div>

    {/* Heading and About */}
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Heading</h3>
      <p className="text-sm font-semibold">About.....</p>
    </div>

    {/* Portfolio Link */}
    <div className="mt-4">
      <label htmlFor="portfolio-link" className="block text-sm font-medium mb-2">Portfolio link</label>
      <input
        type="text"
        id="portfolio-link"
        className="w-full px-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter portfolio link"
      />
    </div>
  </div>
  );
}


// const styles = {
   
//     flexBoxCol: {
//       marginTop:'1rem'
//     },
   
//   };

export default PortfolioBar;
