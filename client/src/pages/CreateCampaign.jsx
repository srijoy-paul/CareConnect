import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className="max-w-[1280px] mx-auto bg-white flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]" style={{ background: ' linear-gradient(45deg, #009688,#fc00fc)' }}>
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-black">Create A Campaign</h1>
      </div>

      <img src="./src/assets/children-with-balloons.webp" alt="fund" className="mt-[35px] w-full h-[300px] object-cover rounded-[15px] p-[5px]" />

      <form onSubmit={handleSubmit} className="w-full mt-[35px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your name *" placeholder="Priyanka"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Enter Campaign title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <FormField
          labelName="Description *"
          placeholder="Details About Campaign"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}
        />


        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Expected amount *"
            placeholder="ETH 0.70"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField
          labelName="Campaign image Link*"
          placeholder="Place url of the image for your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Create new campaign"
            styles="font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#009688]"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateCampaign