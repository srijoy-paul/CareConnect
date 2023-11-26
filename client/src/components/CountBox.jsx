import React from 'react'
// import { daysLeft } from '../assets'

const CountBox = ({ title, value, image }) => {
  return (
    <div className="flex flex-col items-center w-[130px] bg-[rgb(220,220,220)]">
      <img src={image} alt="" className="w-10 h-10" />
      <p className="font-epilogue font-normal text-[16px] text-[rgb(0, 128, 128)] w-full text-center">{title}</p>
      <h4 className="font-epilogue font-bold text-[30px] text-white  bg-[#f08080] w-full text-center truncate">{value}</h4>
    </div>
  )
}

export default CountBox