import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

export function SolanaWallet({ mnemonic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);
  const [balances, setBalances] = useState({}); // Store balances by public key

  const getBalance = async (publicKey) => {
    try {
      const connection = new Connection("https://api.mainnet-beta.solana.com");
      const balance = await connection.getBalance(new PublicKey(publicKey));
      setBalances((prev) => ({ ...prev, [publicKey]: balance / 1e9 })); // Convert lamports to SOL
    } catch (error) {
      console.error("Failed to get balance:", error);
    }
  };

  const addWallet = () => {
    const seed = mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    setCurrentIndex(currentIndex + 1);
    setPublicKeys([...publicKeys, keypair.publicKey.toBase58()]);
  };

  return (
    <div>
      <button onClick={addWallet}>Add Solana Wallet</button>
      {publicKeys.map((publicKey) => (
        <div key={publicKey} style={{ marginBottom: "10px" }}>
          <div>Address: {publicKey}</div>
          <button onClick={() => getBalance(publicKey)}>Get Balance</button>
          {balances[publicKey] !== undefined && (
            <div>Balance: {balances[publicKey]} SOL</div>
          )}
        </div>
      ))}
    </div>
  );
}
