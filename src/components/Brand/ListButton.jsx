
import React from "react";
import { Chip } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const ListButton = () => {
  return (
    <div className="relative mt-8 mb-9 inline-block text-start ">
      <Chip
        label={
          <div className="flex items-center text-gray-400">
            Active Brand
            <FaAngleDown className="ml-2 text-gray-600" />
          </div>
        }
        className="bg-white h-12 w-28 items-center" 
      />
    </div>
  );
};


export default ListButton;
