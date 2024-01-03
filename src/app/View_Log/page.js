import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const View_Log = () => {

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <div className=" bg-[#188389] flex items-center px-2 py-3">
        <ArrowBackOutlinedIcon className="text-white" />
        <div className="ml-4 rounded-full bg-red-500 flex items-center justify-center w-10 h-10">
          <span className="text-white text-lg">F</span>
        </div>
        <div className="ml-4">
          <span className="text-lg text-white">Faizan Khan</span>
        </div>
      </div>
      <div className="bg-[#fffae7] flex items-center px-2 py-3">
        <InfoOutlinedIcon className="text-[#ccab5e] text-md" />
        <div className="ml-2">
          <span className="text-lg text-[#ccab5e]">Attendance For</span>
        </div>
        <div className="ml-4 p-2 rounded-l-full rounded-r-full border border-[#ccab5e] bg-white flex items-center justify-center ">
          <TodayOutlinedIcon />
          <span className=" ml-2 text-sm text-black ">Jan, 2024</span>
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
      <div className="bg-white mt-6 flex flex-row relative">
        <div className="mx-2 bg-green-100 flex flex-col relative flex-1 w-16 h-16 border-l-2 border-green-500">
            <p className="text-sm text-gray-700 mt-2 mx-2">Present</p>
            <h2 className="font-semibold text-xl mt-1 mx-2">0</h2>
        </div>
        <div className="mx-2 bg-red-100 flex flex-col relative flex-1 w-16 h-16 border-l-2 border-red-500">
        <p className="text-sm text-gray-700 mt-2 mx-2">Absent</p>
            <h2 className="font-semibold text-xl mt-1 mx-2">0</h2>
        </div>
        <div className="mx-2 bg-yellow-100 flex flex-col relative flex-1 w-16 h-16 border-l-2 border-yellow-500">
        <p className="text-sm text-gray-700 mt-2 mx-1">Half Days</p>
            <h2 className="font-semibold text-xl mt-1 mx-2">0</h2>
        </div>
        <div className="mx-2 bg-violet-100 flex flex-col relative flex-1 w-16 h-16 border-l-2 border-violet-500">
        <p className="text-sm text-gray-700 mt-2 mx-1">Paid Lea..</p>
            <h2 className="font-semibold text-xl mt-1 mx-2">0.0</h2>
        </div>
      </div>
      <hr className="w-full my-4 text-gray-400" />
      <div className=" flex flex-col">
        <div className="flex flex-row">
        {dayNames.map((day, index) => (
          <div key={index} className="flex-1 text-center text-sm text-gray-500 p-2">
            {day}
          </div>
        ))}
      </div>
    </div>

</div>
  );
};

export default View_Log;
