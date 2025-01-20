import React, { useState } from "react";
import File from "./File";
import { ChevronRight, ChevronDown, FolderIcon } from "lucide-react";


const Folder = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-4">
      <div
        className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
        onClick={toggleFolder}
      >
        {item.type === "folder" &&
          (isOpen ? (
            <ChevronDown className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRight className="w-4 h-4 mr-1" />
          ))}
        <FolderIcon className="w-5 h-5 mr-2 text-yellow-500" />
        <span>{item.name}</span>
      </div>
      {isOpen && item.children && (
        <div className="ml-4">
          {item.children.map((child) =>
            child.type === "folder" ? (
              <Folder key={child.id} item={child} />
            ) : (
              <File key={child.id} item={child} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
