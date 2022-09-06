require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind concert grace logic olympic swallow'; 
let testAccounts = [
"0x59c33ae95f96c80b09f0fb3f54cf780bbb8d725eb7598ee43ce7d789afa6da56",
"0xeed5a4b28da4c4012746c48f6a93e4d52265a31ef8be0dfc29a709039709b844",
"0x1f6810d0825c0d3cb7d6808e15ce6ebdb88ef5031cc29cdf5f55942ae4ca7ec1",
"0x2df098b4e89e2657bb6d416f9d5d703e740b49c032267afd958c6100c409758b",
"0x9a3a8b1b338bd2f23cce0d2840d1c3256c7abab656a66932fcd7ee76e7e8399c",
"0x96be255a655374a2e463203b9b4fd951d3988fb6b3d679875a8103d6610df9d5",
"0x2642e4cb4fd3f167b33aa675b945166a92e5bdf5df10a88c8d90279d1d5fe240",
"0x2d8a61994ac7dd68699bfb49e9f1710b2c28611843f28fa9794e0e1a693e89c3",
"0x66376f3446246d47472baa1355868310bb76fb989c13462f1640f8cc571d8fd6",
"0xb787343a954df10376cd8c644fbb74664cbc53d22698c09517e07244e3d738bb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


