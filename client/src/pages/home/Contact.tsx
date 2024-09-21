import React from 'react';
import { FaRegBuilding, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useTheme } from "@/store/theme-provider";

const Contact = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`flex flex-col md:flex-row ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} rounded-lg shadow-lg overflow-hidden`}>
      <div className="md:w-1/2 p-16 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-4">Get in touch</h2>
          <p className="mb-6 text-gray-600 text-lg">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi vero, neque nulla dolores praesentium aliquam expedita, illum quidem, officia quas vel omnis in perferendis veniam velit deserunt ea quod at.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaRegBuilding className="mr-3 w-6 h-6 text-purple-900" />
              <div>
                <p>545 Mavis Island</p>
                <p>Chicago, IL 99191</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-3 w-5 h-5 text-purple-900" />
              <p>+1 (555) 234-5678</p>
            </div>
            <div className="flex items-center">
              <IoIosMail className="mr-3 w-7 h-7 text-purple-900" />
              <p>hello@example.com</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute w-40 h-40 border border-indigo-500 rounded-lg" 
                 style={{
                   top: `${Math.random() * 100}%`,
                   left: `${Math.random() * 100}%`,
                   transform: `rotate(${Math.random() * 360}deg)`,
                 }}
            />
          ))}
        </div>
      </div>

      <div className="md:w-1/2 p-12">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-lg font-medium mb-1">First name</label>
              <input
                type="text"
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'border-2 bg-white border-gray-400'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-lg font-medium mb-1">Last name</label>
              <input
                type="text"
                className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'border-2 bg-white border-gray-400'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              type="email"
              className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'border-2 bg-white border-gray-400'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Phone number</label>
            <input
              type="tel"
              className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ' border-2 bg-white border-gray-400'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Message</label>
            <textarea
              rows={4}
              className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'border-2 bg-white border-gray-400'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;