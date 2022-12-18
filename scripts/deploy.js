const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    // Call the function.
    for (let i = 0; i < 10; i++) {
        let txn = await nftContract.makeAnEpicNFT({ gasLimit: 3000000 })
        // Wait for it to be mined.
        await txn.wait()
        console.log("Minted NFT #"+(i+1));
    }
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