"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import {
  Inbox,
  Send,
  CheckCircle,
  AlertCircle,
  Workflow,
  Navigation,
  ChevronDown,
  ChevronRight,
  Zap,
} from 'lucide-react';

const Sidebar = () => {
  const router = useRouter(); // Initialize useRouter hook
  const [showMore, setShowMore] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);

  const mainMenuItems = [
    { icon: <Inbox className="w-4 h-4" />, label: 'Inbox', path: '/inbox' },
    { icon: <Send className="w-4 h-4" />, label: 'Sent', path: '/sent' },
    { icon: <CheckCircle className="w-4 h-4" />, label: 'Completed', path: '/completed' },
    { icon: <AlertCircle className="w-4 h-4" />, label: 'Action Required', path: '/action-required' },
  ];


  // Function to handle navigation when a menu item is clicked
  const handleMenuItemClick = (path: string) => {
    router.push(path); // Navigate to the given path
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      {/* Start Button */}
      <div className="px-4 py-3">
        <button onClick = {()=>{router.push("/create")}} className="w-full bg-blue-600 text-white px-4 py-2  hover:bg-blue-700 flex items-center justify-center">
          <span>Start</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Shared Access Button */}
      <div className="px-4 py-2">
        <button className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center">
          <span>Shared Access</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* ENVELOPES Section */}
      <div className="px-4 py-2">
        {/* Envelope Header with Toggle */}
        <button
          onClick={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
          className="flex items-center text-gray-600 text-sm font-medium mb-2 hover:text-gray-900 w-full"
        >
          {isEnvelopeOpen ? (
            <ChevronDown className="w-4 h-4 mr-1" />
          ) : (
            <ChevronRight className="w-4 h-4 mr-1" />
          )}
          <span>ENVELOPES</span>
        </button>

        {/* Main Menu Items with Animation */}
        <div
          className={`px-4 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${
            isEnvelopeOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {mainMenuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer"
              onClick={() => handleMenuItemClick(item.path)} // Trigger router push
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </div>
          ))}

          
        </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
