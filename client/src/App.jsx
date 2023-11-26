import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8   min-h-screen flex flex-row bg-[#13131a]" style={{ background: 'linear-gradient(55deg, blueviolet, lightgreen)' }}>
      {/* p-4 */}
      <div className="flex-1 w-full max-sm:w-full" >
        {/* max-w-[1280px] mx-auto */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>

      </div>
    </div>
  )
}

export default App