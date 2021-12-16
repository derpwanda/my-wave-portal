const main = async () => {
    //  compiles the contract and generates the nec files under 'artifacts'
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    //creates local Eth network for this contract. Destroyed after contract completed.
    const waveContract = await waveContractFactory.deploy();
    // runs the constructor in WavePortal
    await waveContract.deployed();
    // logs the address of the contract
    console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();