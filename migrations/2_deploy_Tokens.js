const MyToken = artifacts.require("MyToken");
const FarmToken = artifacts.require("FarmToken");

module.exports = async function (deployer, netwokrs, accounts) {
  // Deploy MyToken
  await deployer.deploy(MyToken);
  const myToken = await MyToken.deployed();

  await deployer.deploy(FarmToken, myToken.address);
  const farmToken = await FarmToken.deployed();
};
