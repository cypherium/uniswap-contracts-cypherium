# Deploy Uniswap V2 to Cypherium

This is a Hardhat setup to deploy the necessary contracts of Uniswap.

## Get Started

Clone repo:
``` 
git clone https://github.com/cypherium/uniswap-contracts-cypherium/
cd uniswap-contracts-cypherium
```

Install packages:
```
npm i
```

Modify the private keys as you wish in the `hardhat.config.js` file.

Deploy the contracts (ropsten):
```
npx hardhat run --network ropsten scripts/deploy-uniswap.js
```

Contracts will be deployed if node is running.
