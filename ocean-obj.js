const { Ocean } = require('@oceanprotocol/squid');

async function getOcean() {
    global.ocean = await Ocean.getInstance({
    // the node of the blockchain to connect to, could also be infura
    nodeUri: 'https://pacific.oceanprotocol.com',
    // the uri of aquarius
    aquariusUri: 'https://aquarius.commons.oceanprotocol.com',
    // the uri of brizo
    brizoUri: 'https://brizo.commons.oceanprotocol.com',
    // address that brizo uses
    //brizoAddress: '0x00bd138abd70e2f00903268f3db08f2d25677c9e',//?
    // the uri to the parity node you want to use for encryption and decryption
    //parityUri: 'http://localhost:9545',//?
    // the uri of the secret store that holds the keys
    secretStoreUri: 'https://secret-store.oceanprotocol.com'
})

}


module.exports = { getOcean } 
