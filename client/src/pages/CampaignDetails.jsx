import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb, daysleft, handraised, donars, charityWorkIsVerySelfish, Logo } from '../assets';

import "./CampaignDetails.css"

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate('/')
    setIsLoading(false);
  }

  return (
    <div className='max-w-[1280px] mx-auto py-4 px-4'>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover" />
        </div>

        <div className="flex items-center md:w-[150px] w-full flex-wrap justify-between gap-[25px]">
          <CountBox title="Days Left" value={remainingDays} image={daysleft} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} image={handraised} />
          <CountBox title="Number of Donators" value={donators.length} image={donars} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">Creator Address</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={Logo} alt="user" className="w-[60%] h-[60%] object-contain" />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-gray-200 break-all">{state.owner}</h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-gray-800">7 Campaigns</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">Story</h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-gray-800 leading-[26px] text-justify">{state.description}</p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] uppercase">Donators</h4>

            <div className="mt-[20px] flex flex-col gap-2 p-[22px]" style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.3)', background: 'linear-gradient(60deg,#00ffab,lightpink)' }}>
              {donators.length > 0 ? donators.map((item, index) => (
                <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4 px-[5px] py-[10px] whitespace-nowrap" style={{ background: 'aliceblue', overflowX: 'auto' }}>
                  <p className="font-epilogue font-normal text-[16px] text-gray-700 leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                  <p className="font-epilogue font-normal text-[16px] text-gray-700 leading-[26px] break-ll">{item.donation}</p>
                </div>
              )) : (
                <p className="font-epilogue font-normal text-[16px] text-gray-800 leading-[26px] text-justify">No donators yet. Be the first one!</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] uppercase">Fund</h4>

          <div className="mt-[20px] flex flex-col p-4 bg-[#333] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#008080] bg-[#d3d3d3] py-[20px] font-bold">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-[18px] leading-[30px] placeholder:text-gray-400 rounded-[10px] bg-white"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] p-1 bg-[#13131a] rounded-[10px]">
                {/* <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">Back it because you believe in it.</h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p> */}
                <div className="msgslider rounded-[10px]"></div>
              </div>

              <CustomButton
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd] background:linear-gradient(135deg,#71b7e6,#9b59b6) bg-gradient-to-br from-gFirstColor to-gSecondColor"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails