const { ethers } = require("hardhat");

const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account: ", deployer.address );

    const nftsPunks = await ethers.getContractFactory("NftsPunks");
    const deployed = await nftsPunks.deploy(800);

    console.log("Nfts Punks is deployed at: ", deployed.address);
};

deploy()
    .then(()=> process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })