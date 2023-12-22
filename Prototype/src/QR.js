import {QRCodeSVG} from 'qrcode.react';
import "./QR.css";

export const QR = () => {
  return <div className="QR">
    <header className="QR-header">
      <p>Print QR Code</p>
      </header>
      <QRCodeSVG
        value="https://www.ncirl.ie/"
        size="256"
      />
      <p>This is just a sample QR code to show my QR code working. Currently this QR code just loads the NCI website as I currently do not have my application on a server as it is just a prototype. The goal is to be able to generate QR codes for each item available to purchase.</p>
  </div>;
};