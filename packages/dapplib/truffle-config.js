require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note predict uncle hockey kiwi off sheriff'; 
let testAccounts = [
"0x851fc1ab951c5c2ca9923a2278aa7a3d21c6c0a6b559a4ceec5e6c397b4434a6",
"0x425d7892fb7933c71b9163e8fd40d9d595385c4db3cfefa8acda68369d0c3ccc",
"0x71e4f5204197254df3511407582d663dabc2f057f4681c738eb3697855b3988e",
"0x6641830e265a639ea5b2ba2fd2ed82fe2d0876990257c0a77c0a893c6c17605f",
"0x753b0952ba471500de3a6a83a912cce7ea2a663dcaf91e629705de08df484132",
"0x16aea7c6da162a60f2407520dfbd5ddb9c72bb5eb218975966b1ae9bab145d22",
"0x390363786eaa5a7b36d2c7c5e2e83d8119783c75840a4ae57226961042cf3ce6",
"0x271502c821ff4ccad66618b05c1d421236b182b6d3a97df69d6dd76a3761abaa",
"0xb8c322b3681cecbe52453837e3925e94c93323378da362f9609ab3e9e42f614c",
"0x613f0c5f6400243dc1b002c9be6111d308c6653ee77eb11ec17ccaa0299e74a1"
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


