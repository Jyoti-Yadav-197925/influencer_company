import React from 'react';
import { FaFileUpload } from 'react-icons/fa';

function FileUploadBox() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 m-4">
      {/* Upload Box 1 */}
      <div className="border-2 border-dashed border-gray-500 w-80 h-64 flex justify-center items-center">
        <div className="text-gray-500 text-2xl">
          <FaFileUpload />
        </div>
      </div>

      {/* Upload Box 2 */}
      <div className="border-2 border-dashed border-gray-500 w-80 h-64 flex justify-center items-center">
        <div className="text-gray-500 text-2xl">
          <FaFileUpload />
        </div>
      </div>

      {/* Upload Box 3 */}
      <div className="border-2 border-dashed border-gray-500 w-80 h-64 flex justify-center items-center">
        <div className="text-gray-500 text-2xl">
          <FaFileUpload />
        </div>
      </div>
    </div>
  );
}

export default FileUploadBox;
