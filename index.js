
const Timestamp = require("timestamp-nano");
const Crypto = require('crypto')

const getHash = ({data}) => { 
    //return (data = data + '#');
    return Crypto.createHash('sha1').update(data).digest('hex'); 
} 

class Block {
    constructor (data,hash,lastHash,timestamp){
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
        this.timestamp = timestamp;
    };
}

class Blockchain {
    constructor (){
        
        const genTimestamp = "2020-01-01T00:00:00.000Z";
        const genLastHash = 'ffffffffffffffffffffffffffffffffffffffff'
        const genHash = getHash({data:'gen-data' , timestamp: genTimestamp, lastHash:genLastHash});
        const genBlock = new Block('gen-data', genHash,genLastHash, genTimestamp);
        this.chain = [genBlock];
     };


    addBlock(data) {
        const timestamp = Timestamp.fromDate(new Date()).toJSON();
        const lastHash = this.chain[this.chain.length-1].hash;
        const hash = getHash({data:data , timestamp: timestamp, lastHash:lastHash});
        const customBlock = new Block(data, hash, lastHash, timestamp);

        this.chain.push(customBlock);
    }
}

console.log ("-- Starting the App --");
const myBlockChain = new Blockchain();
myBlockChain.addBlock('trans-1');
myBlockChain.addBlock('trans-2');
console.log("printing --" + JSON.stringify(myBlockChain));