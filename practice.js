//revrese a string using stack

// function reverse(str){
//     let stack = []
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     let reversed  = ""
//     while(stack.length>0){
//         reversed+=stack.pop()
//     }
//     return reversed
// }
// console.log(reverse("hello"));


// class CircularQueue{
//     constructor(capacity){
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.front = -1
//         this.rear = -1
//         this.currentLength = 0

//     }
//     isFull(){
//         return this.currentLength === this.capacity
//     }
//     isEmpty(){
//         return this.currentLength===0
//     }
//     enqueue(ele){
//         if(!this.isFull()){
//             this.rear = (this.rear+1)%this.capacity
//             this.items[this.rear] = ele
//             this.currentLength+=1
//             if(this.front===-1){
//                 this.front = this.rear
//             }        
//         }else{
//             console.log("queue is full");
            
//         }
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("empty");
//             return null
            
//         }
//         const item  = this.items[this.front]
//         this.items[this.front] =null
//         this.front = (this.front+1)%this.capacity
//         this.currentLength-=1
//         if(this.isEmpty()){
//             this.rear = -1
//             this.front=-1
//         }
//     }
//     print(){
       
//         let i
//         let str = ""
//         for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
//             str+=this.items[i]+" "
//         }
//         str+=this.items[i]
//         console.log(str);
//     }
        
//     }

// const  queue = new CircularQueue(2)
// queue.enqueue(10)
// queue.enqueue(20)
// queue.print()
// queue.dequeue()
// queue.print()
// console.log(queue.isFull());
// console.log(queue.isEmpty());


// function twoSum(nums, target) {
//     const hashMap = {}; // To store the difference and corresponding index

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // Calculate the complement

//         // If the complement exists in hashMap, return the indices
//         if (hashMap.hasOwnProperty(complement)) {
//             return [hashMap[complement], i];
//         }

//         // Store the index of the current element
//         hashMap[nums[i]] = i;
//     }
//     return [];
// }


// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); 


//remove middel ele of stack
// class Stack{
//     constructor(){
//         this.items = []
//     }
//     push(ele){
//         this.items.push(ele)
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return null
            
//         }
//         return this.items.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
        
//     }
//     removeMiddle(){
//         const auxStack = []
//         const middle = Math.floor(this.size()/2)

//         for(let i=0;i<middle;i++){
//             auxStack.push(this.pop())
//         }
//         this.pop()

//         while(auxStack.length>0){
//             this.push(auxStack.pop())
//         }
//     }

// }
// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// stack.removeMiddle()
// stack.print()