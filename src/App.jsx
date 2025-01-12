import { useEffect, useState } from 'react';
import './App.css';
import { generateMnemonic } from 'bip39';
import { SolanaWallet } from './SolanaWallet';
import { EthWallet } from './EthereumWallet';

function App() {
  const [mnemonic, setMnemonic] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (mnemonic) {
      console.log(mnemonic);
    }
  }, [mnemonic]);

  const handleCopy = () => {
    if (mnemonic) {
      navigator.clipboard.writeText(mnemonic);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGenerate = async () => {
    const mnemoic = await generateMnemonic();
    setMnemonic(mnemoic);
  };

  return (
    <>
    <div className="container">
      {/* Main Content */}
      <div className="main-content">
        <h1>HD Wallet Generator</h1>
        <button className="generate-button" onClick={handleGenerate}>
          Generate Seed Phrase
        </button>

        {mnemonic && (
          <div className="mnemonic-container">
            <span className="mnemonic-text">{mnemonic}</span>
            <button className="copy-button" onClick={handleCopy} title="Copy Seed Phrase">
              📋
            </button>
          </div>
        )}

        {copied && <p className="copied-text">Seed phrase copied!</p>}
      </div>
    </div>
    {mnemonic && (
        <div className="wallet-buttons">
         <SolanaWallet mnemonic={mnemonic}/>
         <EthWallet mnemonic={mnemonic}/>
        </div>
      )}
   
    </>
  );
}

export default App;
