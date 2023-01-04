import { ethers } from "hardhat";
import { METADATA_URL, WHITELIST_CONTRACT_ADDRESS } from '../constants';

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS
  const metadataURL = METADATA_URL

  const NextTokens = await ethers.getContractFactory('NextTokens')

  const nextTokens = await NextTokens.deploy(metadataURL, whitelistContract)

  await nextTokens.deployed();

  console.log(`NextTokens deployed to: ${nextTokens.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
