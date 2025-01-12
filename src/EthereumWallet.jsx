import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const EthWallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [balances, setBalances] = useState({})
    const addWallet = async () => {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);
        setCurrentIndex(currentIndex + 1);
        setAddresses([...addresses, wallet.address]);
      };
    
    return (
        <div>
            <button onClick={addWallet}>
                Add ETH wallet
            </button>

            {addresses.map((address) => (
        <div key={address} style={{ marginBottom: "10px" }}>
          <div>Eth Address: {address}</div>
          <button onClick={() => getBalance(address)}>Get Balance</button>
          {balances[address] !== undefined && (
            <div>Balance: {balances[address]} ETH</div>
          )}
        </div>
      ))}
        </div>
    )
}