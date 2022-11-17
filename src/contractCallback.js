const Web3 = require("web3");

module.exports = async (CONFIG) => {
  const infuraUrl = `${CONFIG.infuraHost}/${CONFIG.infuraAccessToken}`;

  const web3 = new Web3(infuraUrl);

  const contractInstance = new web3.eth.Contract(
    CONFIG.contractABI,
    CONFIG.contractAddress
  );

  try {
    const tokenName = await contractInstance.methods.name().call();
    const totalSupply = await contractInstance.methods.totalSupply().call();
    console.log(`Token: ${tokenName}, Total supply: ${totalSupply}`);
  } catch (e) {
    console.log(e);
  }
};
