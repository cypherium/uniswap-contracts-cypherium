/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
const privateKey1 =
   'c69d2f763502a1faa1d5875334f9776ca2fa14cd68563e84daf22544681df3d3';
const privateKey2 =
   'your-private-key-here';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},

      ropsten: {
         url: 'https://pubnodestest.cypherium.io',
         accounts: [privateKey2],
         gasPrice: 1750809638,
         chainId: 16163,
      },
      dev: {
         url: 'http://127.0.0.1:8000',
         accounts: [privateKey1],
         network_id: '16163',
         gasPrice: 0,
         chainId: 16163,
      },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
