import { FaRegBuilding, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useTheme } from "@/store/theme-provider";

const Contact = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <div className={`flex flex-col md:flex-row ${isDarkMode ? 'bg-black text-slate-900' : 'bg-gray-300 text-gray-900'} p-48 rounded-lg shadow-lg `}>
      <div className="md:w-1/2 pr-8 relative overflow-hidden">
        <h2 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Get in touch</h2>
        <p className={`mb-6 text-gray-500 text-2xl`}>
          Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
        </p>
        <div className={`space-y-4 ${isDarkMode ? 'text-white': 'text-black'}`}>
          <div className="flex items-center">
            <FaRegBuilding className="mr-3 text-indigo-500" />
            <div className="flex flex-row">
            <p>545 Mavis Island</p>
            <p>Chicago, IL 99191</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-3 text-indigo-500" />
            <p>+1 (555) 234-5678</p>
          </div>
          <div className="flex items-center">
            <IoIosMail className="mr-3 text-indigo-500" />
            <p>hello@example.com</p>
          </div>
        </div>
        <div className="shine"></div>
        <div className="css-battles-page absolute inset-0 z-0 opacity-20">
          <div className="background">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            <div className="tiles">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`tile tile-${i + 1}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 ">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white': 'text-black'}`}>First name</label>
              <input
                type="text"
                className="w-full px-3 py-2 ${isDarkMode ? 'bg-black text-gray-800' : 'bg-gray-300 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
              />
            </div>
            <div className="w-1/2">
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white': 'text-black'}`}>Last name</label>
              <input
                type="text"
                className="w-full px-3 py-2 ${isDarkMode ? 'bg-black text-black' : 'bg-gray-300 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
              />
            </div>
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white': 'text-black'}`}>Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-800${isDarkMode ? 'bg-black text-black' : 'bg-gray-300 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white': 'text-black'}`}>Phone number</label>
            <input
              type="tel"
              className="w-full px-3 py-2 ${isDarkMode ? 'bg-black text-black' : 'bg-gray-300 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white': 'text-black'}`}>Message</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 ${isDarkMode ? 'bg-black text-black' : 'bg-gray-300 text-gray-900'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;