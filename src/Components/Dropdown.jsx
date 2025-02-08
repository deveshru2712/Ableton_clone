import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Dropdown = ({ arr = [], dropName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null); // Store the country code
  const dropdownRef = useRef();

  const countryData = arr[0]; // Access the object inside the array

  const handleSelect = (code) => {
    setSelectedCode(code);
    setIsOpen(false); // Close the dropdown
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler); // Clean up the event listener
    };
  }, [dropdownRef]);

  return (
    <div
      className="flex flex-col items-center gap-2 w-fit relative"
      ref={dropdownRef}
    >
      <button
        className="w-fit p-2 bg-gray-200 text-base flex justify-center items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedCode ? countryData[selectedCode].country : dropName}
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>

      {isOpen && (
        <ul className="w-[250px] h-[200px] flex flex-col justify-center items-center gap-1 my-4 overflow-y-scroll text-lg font-medium border-2 rounded-lg absolute left-1/4 top-1/4 translate-y-1/4">
          {Object.entries(countryData).map(([code, countryInfo]) => (
            <li
              key={code}
              onClick={() => handleSelect(code)}
              className="px-2 cursor-pointer w-full hover:bg-blue-500"
            >
              {countryInfo.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
