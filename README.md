# heap-min-max
Min heap and max heap for NodeJS


## Example

### min heap

```javascript

const MinHeap = require("heap-min-max").MinHeap;

let minHeap = new MinHeap();
minHeap.push(5, "v5");
minHeap.push(3, "v3");
minHeap.push(2, "v2");
minHeap.push(4, "v4");
minHeap.push(1, "v1");

let x;
while ((x = minHeap.pop()) !== undefined){
    console.info(x);
}

```

output

```shell
v1
v2
v3
v4
v5
```


### max heap

```javascript
const MaxHeap = require("heap-min-max").MaxHeap;

let maxHeap = new MaxHeap();
maxHeap.push(5, "v5");
maxHeap.push(3, "v3");
maxHeap.push(2, "v2");
maxHeap.push(4, "v4");
maxHeap.push(1, "v1");

let x;
while ((x = maxHeap.pop()) !== undefined){
    console.info(x);
}
```

output

```shell
v5
v4
v3
v2
v1
```