import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[16px] leading-[22px] text-[#808191] mb-[10px]">{labelName}</span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] bg-transparent font-epilogue text-[14px] placeholder:text-gray-400 rounded-[10px] sm:min-w-[300px]" style={{ boxShadow: '2px  7px 10px  rgba(00, 96, 88, 0.5)' }}
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px]  bg-transparent font-epilogue text-[14px] placeholder:text-gray-400 rounded-[10px] sm:min-w-[300px]" style={{ boxShadow: '2px  7px 10px  rgba(00, 96, 88, 0.5)' }}
        />
      )}
    </label>
  )
}

export default FormField