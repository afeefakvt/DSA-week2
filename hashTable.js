// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }
// const table = new HashTable(50);
// table.set("name","afeefa")
// table.set("age",18)
// table.set("name","razik")
// table.display()
// table.display()
// console.log(table.get("name"));
// table.remove("name")
// table.set("gea",14)
// table.display()



//hash table handling collission

// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value

//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem),1)
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }
// const table = new HashTable(50)
// table.set("name","afeefa");
// table.set("age",18)
// table.display()
// table.set("mane","afe")
// table.display()
// table.remove("name");
// console.log(table.get("age"));
// table.display()




//chaining method
class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    // Simple hash function to compute an index
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    // Insert a key-value pair into the hash table
    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if the key already exists and update the value
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        // If key doesn't exist, add a new key-value pair
        this.table[index].push([key, value]);
    }

    // Retrieve the value for a given key
    get(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined; // Key not found
    }

    // Remove a key-value pair from the hash table
    remove(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1); // Remove the key-value pair
                    return true;
                }
            }
        }
        return false; // Key not found
    }

    // Display the hash table contents
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i].length > 0) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example usage:
const hashTable = new HashTable(5);
hashTable.set('apple', 100);
hashTable.set('orange', 200);
hashTable.set('banana', 300);
hashTable.set('grape', 400);

// Intentional collision: same hash index for 'apple' and 'leppa' (reversed string)
hashTable.set('leppa', 500);

console.log(hashTable.get('apple'));   // Output: 100
console.log(hashTable.get('orange'));  // Output: 200
console.log(hashTable.get('leppa'));   // Output: 500

hashTable.remove('banana');
hashTable.display();

// Output:
// 0 [ [ 'apple', 100 ], [ 'leppa', 500 ] ]
// 1 [ [ 'orange', 200 ] ]
// 3 [ [ 'grape', 400 ] ]