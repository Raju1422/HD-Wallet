# HD Wallet Generator

This is a simple HD Wallet Generator built with React. It allows users to generate a mnemonic (seed phrase) and derive wallet addresses for both Solana and Ethereum based on that seed phrase. The generated addresses can be copied to the clipboard and are displayed on the screen.

## Features

- Generate a mnemonic (seed phrase) for a new wallet.
- Derive Solana wallet addresses from the seed phrase.
- Derive Ethereum wallet addresses from the seed phrase.
- Copy the seed phrase to clipboard with a single click.
- View and interact with both Solana and Ethereum wallet addresses.

## Technologies Used

- React
- [BIP39](https://github.com/bitcoinjs/bip39) for generating the mnemonic
- [Solana Web3.js](https://github.com/solana-labs/solana-web3.js) for Solana wallet address generation
- [Ethers.js](https://github.com/ethers-io/ethers.js/) for Ethereum wallet address generation
- [TweetNaCl.js](https://github.com/dchest/tweetnacl-js) for Solana keypair generation

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hd-wallet-generator.git
   cd hd-wallet-generator
    ```
2. Install Dependencies
```bash
    npm install
```
3. Start Development Server
```bash 
npm run dev 
```

## Usage 

- Generate Seed Phrase: Click on the "Generate Seed Phrase" button to generate a new mnemonic.
- Solana Wallet: After generating the seed phrase, click the "Add Solana Wallet" button to generate a Solana wallet address.
- Ethereum Wallet: After generating the seed phrase, click the "Add Ethereum Wallet" button to generate an Ethereum wallet address.
- Copy Seed Phrase: Click the "📋" button to copy the generated seed phrase to your clipboard.
