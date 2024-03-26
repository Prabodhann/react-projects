import { useState } from 'react';
import QRCode from 'react-qr-code';
import './index.css';

export default function QRCodeGenerator() {
  const [input, setInput] = useState('');
  const [qrCode, setQrCode] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className="qr-container">
      <h1>Generate QR code</h1>
      <div>
        <input
          className="qr-input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code-generator"
          placeholder="enter your value"
          value={input}
        />
        <button
          className="button-83"
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generator
        </button>
      </div>
      <div>
        <QRCode id="qr-code-id" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
