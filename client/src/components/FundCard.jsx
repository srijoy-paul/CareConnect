import React from 'react';

import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';
import CustomButton from './CustomButton';
// import { useNavigate } from 'react-router-dom';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline);

  // const navigate = useNavigate();
  // const handleNavigate = (campaign) => {
  //   navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  // }

  return (
    <div className="sm:w-[288px] w-full  bg-[#1c1c24] bg-white cursor-pointer shadow-md" onClick={handleClick}>
      <img src={image} alt="fund" className="w-full h-[158px] object-cover p-[10px]" />

      <div className="flex flex-col p-4">
        {/* <div className="flex flex-row items-center mb-[18px]">
          <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain" />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
        </div> */}

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-black text-center leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-gray-600 text-left leading-[18px] truncate">{description}</p>
        </div>

        <div className="flex flex-col justify-between items-center flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            {/* <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amountCollected}</h4> */}
            <h4 className="font-epilogue font-semibold text-[14px]  leading-[22px]">Required Amount</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate shadow-md">{amountCollected} Raised of {target}</p>
          </div>
          <div className="flex flex-col">
            {/* <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4> */}
            <h4 className="font-epilogue font-semibold pt-[15px] text-[14px]  leading-[22px]">End Date</h4>
            {/* <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p> */}
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate shadow-md text-center">{remainingDays} Days Left</p>
          </div>
        </div>

        <div className='flex justify-center w-full py-[10px]'>

          <CustomButton btnType="button" title="Read More" styles="bg-[#2a9d8f] px-[29px]" />
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src="./src/assets/logo.png" alt="user" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">created by <span className="text-[#b2b3bd]">{owner}</span></p>
        </div>
      </div>
    </div>
  )
}

export default FundCard