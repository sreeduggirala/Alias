import React from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { ethers } from "ethers";
import { useState, useEffect } from "react";

import axios from 'axios';
import { abi } from "../contracts/contract-abi";


function ImageUploadForm() {
  const CONTRACT_ADDRESS = "0x8843c35e6E366f3DBBB31ad111E640D4AdEc08F5";
  const [selectedImage, setSelectedImage] = useState(null);
  const [pkey, setPkey] = useState("");
  const [pinatacode, setPinataCode] = useState(null);
  const [img, setImg] = useState(null);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const { isConnected } = useAccount();


  const contractConfig = {
    address: CONTRACT_ADDRESS,
    abi: abi,
  };

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'safeMint',
    args: [pkey, pinatacode]
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractWriteConfig);

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  const isMinted = txSuccess;


  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handlePkeyChange = (event) => {
    setPkey(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = new FormData();
    data.append('file', selectedImage);
    data.append('pkey', pkey);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/getAIias',
        data: data
      });
      console.log(response.data);

      setPinataCode(response.data.IpfsHash);
      var imhash = response.data.img;
      imhash = "https://gateway.pinata.cloud/ipfs/" + imhash + "/result_img_256.png";
      console.log(imhash);
      setImg(imhash);

      // mintNFT(pkey, response.data.IpfsHash);

    } catch(error) {
      console.log("failed");
    }
  };


  useEffect(() => {
    console.log(pinatacode);
    console.log(pkey);
  }, [pinatacode]);


  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <div className="p-5 text-white text-xl font-semibold">
          <label htmlFor="image-input">Upload Image:</label>
          <input
            type="file"
            id="image-input"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageSelect}
            className="ml-5 text-ellipsis overflow-hidden"
          />
        </div>
        <div className="p-5 text-white text-xl font-semibold">
          <label htmlFor="pkey-input">Enter Public Key:</label>
          <input
            type="text"
            id="pkey-input"
            onChange={handlePkeyChange}
            className="ml-5 text-ellipsis overflow-hidden text-black"
          />
        </div>
        <button className="ml-5 text-2xl font-semibold text-white border-2 border-white rounded-xl pl-4 pr-4 hover:bg-white hover:text-orange-600 duration-300" type="submit">Submit</button>
      </form>
      {mounted && isConnected && !isMinted && pinatacode && (
                <button
                  style={{ marginTop: 24 }}
                  disabled={!mint || isMintLoading || isMintStarted || !pinatacode}
                  className="ml-5 text-2xl font-semibold text-white border-2 border-white rounded-xl pl-4 pr-4 hover:bg-white hover:text-orange-600 duration-300"
                  data-mint-loading={isMintLoading}
                  data-mint-started={isMintStarted}
                  onClick={() => mint?.()}
                >
                  {isMintLoading && 'Waiting for approval'}
                  {isMintStarted && 'Minting...'}
                  {!isMintLoading && !isMintStarted && 'Mint'}
                </button>
              )}

      </div>
      {img && <img src={img} className="p-4" alt="NFT" />}

    </div>

  );
}

export default ImageUploadForm;







