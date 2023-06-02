import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Steps from './components/Steps.js';
import '@rainbow-me/rainbowkit/styles.css';
import { Chain } from '@wagmi/core'



import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const thetanetwork = {
  id: 365,
  name: 'Theta Network',
  network: 'theta network',
  nativeCurrency: {
    decimals: 18,
    name: 'Theta Fuel',
    symbol: 'TFUEL',
  },
  rpcUrls: {
    public: { http: ['https://eth-rpc-api-testnet.thetatoken.org/rpc'] },
    default: { http: ['https://eth-rpc-api-testnet.thetatoken.org/rpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'thetatoken', url: 'https://testnet-explorer.thetatoksen.org/' },
    default: { name: 'thetatoken', url: 'https://testnet-explorer.thetatoken.org/' },
  },
  contracts: {
    multicall3: {
      address: '0x27ACaAe85d057252A459d8F4649067B970062838',
      blockCreated: 11_907_934,
    },
  },
} 

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, polygonMumbai, thetanetwork],
  [
    alchemyProvider({ apiKey: "JGZ8rxmC6sEfQECdBI7TnaGJr_Zou09N" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Alias',
  projectId: 'd2529c2f40cc6103e058a0a265ddbb25',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider coolMode chains={chains}>
            <Header></Header>
            <Body></Body>
            <Steps></Steps>
          </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
