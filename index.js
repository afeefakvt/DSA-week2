//selection sort

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(selectionSort([1,5,3,2,7]));


//insertion sort

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j= i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1] = arr[j]
//             j=j-1
//         }
//         arr[j+1] = key
//     }
//     return arr

// }
// console.log(insertionSort([1,5,-1,0,9,3]));


//bubble sort

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//         }
//     }
//     }while(swapped)
        
// }
// const arr = [8,20,-2,4,-6]
// bubbleSort(arr)
// console.log(arr);

// //quick sort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot ,...quickSort(right)]
// }
// console.log(quickSort([8,20,-2,4,-6]));



//merge sort

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const leftArr = arr.slice(0,mid);
//     const rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr){
//     let sortedArr = []
//     while(leftArr.length&&rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr,...leftArr,...rightArr]
    
// }
// console.log(mergeSort([8,20,-2,4,-6]));

//queue implementation

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString());
        
//     }

// }
// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print();
// console.log(queue.size());
// console.log(queue.peek());
// console.log(queue.dequeue());
// queue.print();
// console.log(queue.peek());



// stack implementation

// class Stack{
//     constructor(){
//         this.items =[]
//     }
//     push(ele){
//         this.items.push(ele)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
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

// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print()
// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.peek());
// console.log(stack.size());


//queue implemenation using object, time complexity constant

// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }
//     enqueue(ele){
//         this.items[this.rear] = ele;
//         this.rear++
//     }
//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     size(){
//         return this.rear -this.front
//     }
//     isEmpty(){
//        return this.rear===this.front
//     }
//     peek(){
//         return this.items[this.front]
//     }

//     print(){
//         console.log(this.items);
        
//     }
// }

// const queue = new Queue()
// queue.enqueue(10);
// queue.enqueue(20)
// queue.print()
// console.log(queue.dequeue());
// queue.print()
// console.log(queue.size());
// console.log(queue.isEmpty());
// console.log(queue.peek());



//circular queue implementation
// class CircularQueue{
//     constructor(capacity){
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.front = -1
//         this.rear = -1
//         this.currentLength = 0
//     }
//     isFull(){
//         return this.currentLength===this.capacity
//     }
//     isEmpty(){
//          return this.currentLength===0
//     }
//     enqueue(ele){
//         if(!this.isFull()){
//             this.rear = (this.rear+1)%this.capacity
//             this.items[this.rear] =ele
//             this.currentLength+=1
//             if(this.front===-1){
//                 this.front = this.rear
//             }
//         }else{
//             console.log('queue is full');
            
//         }
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front+1)%this.capacity
//         this.currentLength-=1
//         if(this.isEmpty()){
//             this.front = -1
//             this.rear =-1
//         }
//         return item;
                     
       
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             return this.items[this.front]
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('queue is empty');
//         }else{
//             let i;
//             let str = ""
//             for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
//                 str+=this.items[i]+" "
//             }
//             str+=this.items[i]
//             console.log(str);
            

//         }
//     }
// }
// const queue = new CircularQueue(3);
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()

// console.log(queue.isEmpty());
// console.log(queue.isFull());
// console.log(queue.dequeue());
// queue.print()
// console.log(queue.isFull());

// queue.enqueue(40)
// queue.print()
// console.log(queue.peek());



//linkedlist stack
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class linkedListStack{
//     constructor(){
//         this.head=null
//         this.size = 0
//     }
//     push(data){
//         const node = new Node(data);
//         node.next = this.head
//         this.head = node
//         this.size++
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log('stack is empty');
//             return null
            
//         }
//         const removeNode = this.head
//         this.head = this.head.next
//         this.size--
//         return removeNode.data
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return null
            
//         }
//         return this.head.data

//     }
//     print(){
//         let current = this.head
//         let str = ""
//         while(current){
//             str+=current.data+" "
//             current = current.next  
          
//         }
//         console.log(str);
      
        
//     }
// }
// const stack  = new linkedListStack()
// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.print()
// stack.push(30)
// stack.push(40)
// stack.print()
// console.log(stack.isEmpty());
// console.log(stack.getSize());
// console.log(stack.pop());
// stack.print()



//linkedlist queue

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedListQueue{
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }
//     enqueue(data){
//         const node = new Node(data)
//         if(this.isEmpty()){
//             this.rear =this.front = node
//         }else{
//         this.rear.next = node
//         this.rear = node
//         }
//         this.size++
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty");
//             return null
            
//         }
//         const dequeueNode = this.front
//         this.front = this.front.next
//         this.size--
//         if(this.isEmpty()){
//             this.rear = null
//         }
//         return dequeueNode.data

//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("queeu is empty");
//             return null
            
//         }
//         return this.front.data
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("queue is empty");
//             return null
            
//         }else{
//             let current = this.front
//             let str = ""
//             while(current){
//                 str+=current.data+" "
//                 current = current.next
          
                
//             }
//             console.log(str);
//         }
//     }
// }
// const queue = new LinkedListQueue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// console.log(queue.dequeue());
// queue.print()
// console.log(queue.getSize());
// console.log(queue.isEmpty());
// console.log(queue.peek());



///stack using queues
// class StackUsingQueue{
//     constructor(){
//     this.q1= []
//     this.q2 = []
//     }
//     push(ele){
//         this.q2.push(ele)
//         while(this.q1.length>0){
//             this.q2.push(this.q1.shift())
//         }
//         [this.q1,this.q2] = [this.q2,this.q1]
//     }
//     pop(){
//         if(this.isEmpty()){
//         console.log("stack is empty");
//         return null
//         }
//         this.q1.shift()
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("stack is empty");
//             return null
//         }
//         return this.q1[0]
//     }
//     isEmpty(){
//         return this.q1.length===0
//     }
//     getSize(){
//         return this.q1.length
//     }
//     print(){
//         for(let i=0;i<this.q1.length;i++){
//             console.log(this.q1[i]);
            
//         }
//     }
// }
// const stack = new StackUsingQueue()
// stack.push(10)
// stack.push(20)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.getSize());


//stack using object
// class Stack{
//     constructor(){
//         this.count = 0
//         this.items = {}
//     }
//     push(ele){
//         this.items[this.count] = ele
//         this.count++
//     }
//     pop(){
//         const item = this.items[this.count-1]
//         delete this.items[this.count-1]
//         this.count--
//         return item
//     }
//     peek(){
//        return this.items[this.count-1]
//     }
//     isEmpty(){
//         return this.count===0
//     }
//     size(){
//         return this.count
//     }
//     print(){
//         console.log(this.items)
//     }
// }
// const stack  = new Stack()
// stack.push(10)
// stack.push(20)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.peek());


class Stack{
    constructor(){
        this.items = []
    }
    push(ele){
        this.items.push(ele)
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return null    
        }
        return this.items.pop()
        
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length===0
    }
    print(){
        console.log(this.items.toString());
        
    }

    removeMiddle(){
        const middle = Math.floor(this.size()/2)
        const auxStack = []
        for(let i=0;i<middle;i++){
            auxStack.push(this.pop())
        }
        this.pop()

        while(auxStack.length>0){
            this.push(auxStack.pop())
        }
        
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.size());
stack.removeMiddle()
stack.print()

