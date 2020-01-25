
var Timestamp = require("timestamp-nano");

const getHash = (data) => { 
    return (data = data + '#');
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
        
        const genesis = new Block('gen-data', 'gen-hash','gen-lasthash', 'gen-timestamp');
        this.chain = [genesis];
     };


    addBlock(data) {
        const timestamp = Timestamp.fromDate(new Date()).toJSON();
        const lastHash = this.chain[this.chain.length-1].hash;
        const hash = getHash(data +'*'+timestamp+'*'+ lastHash);
        const customBlock = new Block(data, hash, lastHash, timestamp);

        this.chain.push(customBlock);
    }
}

console.log ("-- Starting the App --");
const myBlockChain = new Blockchain();
myBlockChain.addBlock('One');
myBlockChain.addBlock('Two');
console.log("printing --" + JSON.stringify(myBlockChain));