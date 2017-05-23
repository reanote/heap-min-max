/**
 * Created by rhjiang on 2017/5/23.
 */

const MinHeap = require("./lib/heap").MinHeap;
const MaxHeap = require("./lib/heap").MaxHeap;

console.info("min heap");
let minHeap = new MinHeap();
for (let i = 0; i < 10; i++){
    let k = parseInt(Math.random() * 100);
    minHeap.push(k, k.toString());
}

let x;
while ((x = minHeap.pop()) !== undefined){
    console.info(x);
}


console.info("max heap");
let maxHeap = new MaxHeap();
for (let i = 0; i < 10; i++){
    let k = parseInt(Math.random() * 100);
    maxHeap.push(k, k.toString());
}

let y;
while ((y = maxHeap.pop()) !== undefined){
    console.info(y);
}