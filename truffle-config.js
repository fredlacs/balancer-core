const wrapProvider = require('arb-ethers-web3-bridge').wrapProvider
const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic =
  'leg island worth fancy excuse exact travel adult blame pause erupt sad orange oven decade'
const arbProviderUrl = 'http://127.0.0.1:8547'

module.exports = {
    networks: {
        development: {
            host: 'localhost', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            gas: 10000000,
        },
        coverage: {
            host: 'localhost',
            network_id: '*',
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
        arbitrum: {
            provider: function () {
              // return wrapped provider:
              return wrapProvider(
                new HDWalletProvider(mnemonic, arbProviderUrl)
              )
            },
            network_id: '*',
            gasPrice: 0,
            gasLimit: 99999999999999
          },
    },
    mocha: {
        enableTimeouts: false
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.12',
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 100,
                },
                evmVersion: 'byzantium',
            },
        },
    },
};
