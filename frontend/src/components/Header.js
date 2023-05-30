import { ConnectButton } from '@rainbow-me/rainbowkit';


function Header() {
    return (
      <>
      <div className="flex h-24 w-screen p-6 justify-between backdrop-blur-lg fixed top-0 sm:pl-24">
        <h1 className="text-4xl font-bold text-orange-600">
          Alias
        </h1>
        <ConnectButton className="text-xl font-bold text-orange-600 border-orange-600 border-4 bg-[#f5f5f5] w-[180px] h-12 rounded-xl hover:bg-orange-600 hover:text-[#f5f5f5] duration-300">Connect Wallet</ConnectButton>
      </div>
      </>
    );
}

export default Header;