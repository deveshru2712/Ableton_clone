import React from "react";
import { useState, useEffect } from "react";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

import Dropdown from "./Dropdown";

const Footer = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(`  https://api.first.org/data/v1/countries
  `);

        if (!response.ok) {
          console.log(`unable be to fetch result`);
        }

        const results = await response.json();

        console.log(results.data);

        setCountryList((prev) => [...prev, results.data]);
      } catch (error) {
        console.log(`error occurred while fetching list : ${error.message}`);
      }
    };
    fetchList();
  }, []);

  return (
    <div className="px-28 mb-64">
      {/* section-1 */}
      <div className="p-16">
        <h1 className="text-4xl font-medium">Ableton</h1>
      </div>
      {/* section-2 */}
      <div className="flex items-start justify-between my-10">
        <div className="flex flex-col items-center gap-2">
          <ul className="flex flex-col items-center text-2xl font-normal">
            <li className="w-full text-left">Register, Live, Push or Move</li>
            <li className="w-full text-left">About Ableton</li>
            <li className="w-full text-left">Jobs</li>
          </ul>
          <div className="flex w-full items-start gap-2">
            <FaFacebook size={32} />
            <FaXTwitter size={32} />
            <FaYoutube size={32} />
            <FaInstagram size={32} />
            <AiFillTikTok size={32} />
            <FaDiscord size={32} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ul className="flex flex-col text-xl font-normal">
            <h1 className="text-2xl font-medium">Education</h1>
            <li>Offers for College tudent and teachers</li>
            <li>Ableton for the Classroom</li>
            <li>Ableton for College and Universities</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ul className="flex flex-col items-center text-xl font-normal">
            <li>
              <span className="text-2xl font-normal">
                Signup for the newsletter
              </span>
              <li>
                <span>
                  Enter your email address to stay up to date with the latest
                </span>
              </li>
              <li>
                <span>offers, tutorials, downloads, surveys and more.</span>
              </li>
            </li>
          </ul>
          <div className="flex justify-start w-full">
            <span className="">
              <input
                type="text"
                placeholder="Enter your email..."
                className="bg-gray-200 px-4 py-2 text-xl font-medium w-full"
              />
            </span>
            <button className="bg-darkBlue text-white text-xl font-medium px-4 py-2">
              SignUp
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      {/* section-3 */}
      <div className="flex items-start justify-start my-10 gap-24">
        <div className="flex flex-col items-center gap-2">
          <ul className="flex flex-col items-center text-xl font-normal">
            <h1 className="text-2xl font-medium w-full text-left">Community</h1>
            <li className="w-full text-left">Find Ableton User Groups</li>
            <li className="w-full text-left">Find Certified Training</li>
            <li className="w-full text-left">Become a Certified Trainer</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ul className="flex flex-col items-center text-xl font-normal">
            <h1 className="text-2xl font-medium pb-4">Language and Location</h1>
            {countryList ? (
              <Dropdown arr={countryList} dropName={"Select Countries"} />
            ) : (
              <span>Loading countries...</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
