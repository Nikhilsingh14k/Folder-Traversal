import React from "react";
import { FileIcon } from "lucide-react";

const File = ({ item }) => {
  return (
    <div className="flex items-center ml-4 p-1">
      <FileIcon className="w-5 h-5 mr-2 text-gray-500" />
      <span>{item.name}</span>
    </div>
  );
};

export default File;
