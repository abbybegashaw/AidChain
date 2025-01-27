"use client"
import React, { useState } from 'react';
import { Settings, HelpCircle, User } from 'lucide-react';
import { useSession } from 'next-auth/react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const session = useSession();
  console.log(session)

  const navigationTabs = [
    'Home',
    'Agreements',
    'Templates',
    'Reports',
    'Settings'
  ];

  return (
    <div className="w-full border-b border-gray-200 px-4">
      {/* Top Header */}
      <div className="h-14 px-4 flex items-center justify-between bg-white">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-8 flex items-center">
            
            <span className="ml-2 text-xl font-semibold text-gray-800">aidchain</span>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-6 ml-20">
            {navigationTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-1 py-4 text-sm font-medium border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Right side - User Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <HelpCircle className="w-5 h-5" />
          </button>
          
          
          {/* User Avatar */}
          <div className="flex items-center">
            <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Header;