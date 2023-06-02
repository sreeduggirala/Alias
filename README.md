# Alias

Alias is an AI-powered 2D image to 3D NFT avatar generation tool. Simply upload a picture of yourself to create a 1:1 3D NFT avatar!

**YouTube Video:**

**Demo:**

# Inspiration

As gamers and Web3 enthusiasts, we were appalled by the limited personalization options available for avatars in Web2 and Web3 games/social media platforms.
We noticed that users often have to choose from a limited set of pre-designed avatars, which doesn't always allow for individuality and self-expression. With our tool, we wanted to give users the ability to easily create highly personalized avatars that truly reflect who they are.

# How We Built It

Our front-end comprises HTML, CSS (Tailwind), and JavaScript (React), which was then hosted on AWS. Wallet integration was achieved via the RainbowKit Wallet SDK.

We leveraged the OpenZeppelin Contract Wizard for the ERC-721 (NFT) standard and Web3.storage (Filecoin) for hosting our metadata on IPFS. The contracts were deployed on Fantom, Theta Network, Shardeum, and several other EVM-compatible (test) networks.

We used the PIFuHD model (Pixel-Aligned Implicit Function for High-Resolution Human Digitization), a neural network model to reconstruct 3D human bodies from 2D images (credits: Facebook). Using this model, we made an API (and leveraged AWS to host it). Given any 2D image of a person, PIFuHD can generate a 3D avatar!

# Deployed Networks

- Fantom
- Shardeum
- OKT Chain
- Unique Network
- Theta Network

# Challenges we ran into

- Front-end (second time building with React)
- ApeWorX (slight adjustment from Hardhat)
- Powershell. (our smart contract dev uninstalled Windows and switched to Linux midway)
- Time crunch (final exams/family vacations curtailed building time)
- Limited developers (two-person team for entire project)

# Accomplishments that we're proud of

- Deployed API on AWS but ran out of memory (testing with local deployment)
- Built with React (devs are primarily back-end)
- First time using ApeWorX and PyTest (migrated from Hardhat)
- First time using PIFuHD
- Intersecting AI and blockchain!
- Built this as a two-person team!
- Fantastic UI!

# What we learned

- React
- ApeWorX
- PyTest
- PIFuHD model and its inner workings!
- RainbowKit SDK

# What's next for Alias

- UI/UX enhancement
- Real-time filters (for streaming/video conferencing); requires constant webcam/camera input instead of singular image.
- Payment plan (subscription or freemium model; possibly API leasing)
- Social media/video conferencing filters of avatars
