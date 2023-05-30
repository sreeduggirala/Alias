# Alias
Alias is an AI-powered digital avatar generation tool. Simply upload a full-body picture to create your digital twin for metaverses/social media!

# Inspiration

As gamers and Web3 enthusiasts, we were appalled by the limited personalization options available for avatars in Web2 and Web3 games/social media platforms. 
We noticed that users often have to choose from a limited set of pre-designed avatars, which doesn't always allow for individuality and self-expression. With our tool, we wanted to give users the ability to easily create highly personalized avatars that truly reflect who they are.

# How We Built It
Our front-end comprises HTML, CSS (Tailwind), and JavaScript (React), which was then hosted on AWS. Wallet integration was achieved via the RainbowKit Wallet SDK. 

We leveraged the OpenZeppelin Contract Wizard for the ERC-721 (NFT) standard and Web3.storage (Filecoin) for hosting our metadata on IPFS. The contracts were deployed on Filecoin, Theta Network, Shardeum, and several other EVM-compatible networks. 

We used the PIFuHD model (Pixel-Aligned Implicit Function for High-Resolution Human Digitization), a neural network model to reconstruct 3D human bodies from 2D images (credits: Facebook). Given any 2D image of a person, this model can generate a 3D avatar!



# Extensions
- UI/UX enhancement
- ERC-4337 integration
- Social media/video conferencing filters of avatars
