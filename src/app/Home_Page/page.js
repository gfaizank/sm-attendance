"use client"
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Menu as HamburgerIcon, Notifications as BellIcon, LocationOn as LocationIcon, Refresh as RefreshIcon, HomeOutlined as HomeIcon, PersonOutlined as PersonIcon, Widgets as WidgetsIcon, DateRangeOutlined as DateRangeIcon, SettingsOutlined as SettingsIcon, CalendarMonthOutlined as CalendarMonthIcon } from '@mui/icons-material'; // Importing icons from Material-UI Icons
import Avatar from '@mui/material/Avatar';

export default () => {
  const [buttonText, setButtonText] = useState('Time In');

  

  const handleTimeButtonClick = () => {
    setButtonText(buttonText === 'Time In' ? 'Time Out' : 'Time In');
  };

  const [activeIcon, setActiveIcon] = useState('home'); 

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };




  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
      <div>
        <nav className="bg-[#188389] p-4 flex items-center justify-between">
          
          <div className="text-white cursor-pointer">
            <HamburgerIcon className="w-6 h-6" />
          </div>

          
          <h1 className="text-white text-lg font-semibold">Company Name</h1>

          
          <div className="text-white cursor-pointer flex items-center">
            <BellIcon className="w-6 h-6" />
          </div>
        </nav>

        
        <div id="parent-1" className="rounded-md bg-white p-4 shadow-md mt-4 mx-4">
          
          <div id="one" className="flex items-center justify-between">
            <div>
              <p className='font-bold text-2xl'>John Doe</p>
              <p className='text-sm ml-1'>React Developer</p>
            </div>

            
            <Avatar alt="User Profile" src="/path/to/profile-image.jpg" className='w-14 h-14' />
          </div>

          
          <div id="two" className="mt-8">
           
            <button
              style={{ backgroundColor: '#ffab40' }}
              className="w-full rounded-md text-white font-bold p-2"
              onClick={handleTimeButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>

        
        <div id="parent-2" className="rounded-md bg-white p-4 shadow-md mt-7 mx-4">
      <div className="h-1/4 flex items-center justify-between">
        <div className="flex items-center">
          <LocationIcon className="w-6 h-6" />
          <p className="ml-2 font-bold">Your Location</p>
        </div>

        <div className="flex items-center">
          <RefreshIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      <hr className="border-gray-300 m-0 mt-2" />

      <div className="h-3/4 text-center">
        <p id="current-location" className='mt-4 text-sm font-semibold px-3'>Vasant Vihar, Railway housing society, Bhopal, Madhya Pradesh</p>
        <p className='text-sm mb-4'>(Accurate up to 13.39m)</p>
      </div>
    </div>

        {/* Calendar Icon */}
        <div className="absolute bottom-14 right-3 mb-2 " style={{ backgroundColor: '#ffab40', borderRadius: '50%', width: '50px', height: '50px' }}>
          <CalendarMonthIcon style={{ fontSize: '24px', color: 'white', margin: '13px' }} />
        </div>
      </div>

      
      <div className="bg-white p-4 h-14 flex items-center justify-between mt-auto rounded-md shadow-md">
        <div
          className={`flex flex-col items-center text-gray-500 cursor-pointer ${
            activeIcon === 'home' && 'text-yellow-500'
          }`}
          onClick={() => handleIconClick('home')}
        >
          <HomeIcon style={{ fontSize: '24px' }} />
          <p className="mt-1 text-sm">Home</p>
        </div>

        
        <div
          className={`flex flex-col items-center ml-4 text-gray-500 cursor-pointer ${
            activeIcon === 'profile' && 'text-yellow-500'
          }`}
          onClick={() => handleIconClick('profile')}
        >
          <PersonIcon style={{ fontSize: '24px' }} />
          <p className="mt-1 text-sm">Profile</p>
        </div>

        
        <div
          className="relative cursor-pointer"
          style={{ backgroundColor: '#ffab40', borderRadius: '50%', width: '50px', height: '50px', top: '-22px' }}
          onClick={() => handleIconClick('widgets')}
        >
          <WidgetsIcon style={{ fontSize: '24px' }} className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        
        <div
          className={`flex flex-col items-center mr-4 text-gray-500 cursor-pointer ${
            activeIcon === 'log' && 'text-yellow-500'
          }`}
          onClick={() => handleIconClick('log')}
        >
          <DateRangeIcon style={{ fontSize: '24px' }} />
          <p className="mt-1 text-sm">Log</p>
        </div>

       
        <div
          className={`flex flex-col items-center text-gray-500 cursor-pointer ${
            activeIcon === 'settings' && 'text-yellow-500'
          }`}
          onClick={() => handleIconClick('settings')}
        >
          <SettingsIcon style={{ fontSize: '24px' }} />
          <p className="mt-1 text-sm">Settings</p>
        </div>
      </div>
    </div>
  );
};







{/* <div id="profile container" className="bg-white rounded-md p-4 shadow-md mt-4 mx-4 flex items-center justify-between">
        <div>
          <p className='font-bold text-2xl'>John Doe</p>
          <p className='text-sm ml-1'>React Developer</p>
        </div>

        <UserProfileIcon className="w-16 h-16" />
      </div> */}