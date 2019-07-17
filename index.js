//import { Ocean, Logger } from '@oceanprotocol/squid'
const { Ocean, Logger } = require('@oceanprotocol/squid')
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());


//const port = process.env.PORT || 4000;
//-----------------------ocean part--------------------------------

app.get('/', (req, res) => {
    res.send('WELCOME TO FAKE OCEAN ASSET SEARCH ( use /api/assets , then go on from there by searching tags)');
    //call function that wraps search function whch is ideally in a different file
});

const assets = [
    {tag: 'dolphin'},
    {tag: 'manta'},
    {tag: 'shark'},
]

app.get('/api/assets', (req, res) => {
    res.send(assets);
});

app.get('/api/assets/:tag',(req,res)=>{
    const asset = await ocean.assets.search(req);
    //assets.find(a => a.tag === (req.params.tag));
    //if(!asset) return res.status(404).send('The asset with the given search tag was not found...'); //404
    res.send(asset);
});

app.post('/api/assets', (req,res) =>  {
    const {error} = validateAsset(req.body); //result.error
    if(error) return res.status(400).send(result.error.details[0].message);

    const asset = {
        //id: courses.length + 1, wait to add more stuff
        tag: req.body.tag
    };
    assets.push(asset);
    res.send(asset);
});

app.put('/api/asseets/:tag', (req,res) =>{
    const asset = assets.find(a => a.tag === (req.params.tag));
    if(!asset) {
        res.status(404).send('The asset with the given search tag was not found...'); //404
        return;
    }
    const {error} = validateAsset(req.body); //result.error
    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    asset.name = req.body.name;
    res.send(asset);
});

function validateAsset(asset){
    const schema = {
        name:Joi.string().min(3).required()
    };

    return Joi.validate(asset, schema);
}

app.delete('/api/assets/:tag', (req,res) =>{
    const asset = assets.find(a => a.id === (req.params.id));
    if(!asset) return res.status(404).send('The asset with the given tag was not found...'); //404

    const index = assets.indexOf(asset);
    assets.splice(index, 1);

    res.send(asset);
});


async function start(){

    const ocean =  await Ocean.getInstance({
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
    });

    //console.log(await ocean.assets.search('trees'))
    //app.listen(3000, () => console.log(`Listening on port ${ocean}...`));//changed from port to ocean

}

start();