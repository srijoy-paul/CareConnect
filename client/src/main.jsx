import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <ThirdwebProvider desiredChainId={ChainId.Sepolia}> 
  // clientId='ee1cb26a4738e82a2b07dbfbea93ef3f'
  <ThirdwebProvider activeChain={Sepolia} clientId='ee1cb26a4738e82a2b07dbfbea93ef3f'>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)