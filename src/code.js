//Com os conhecimentos acumulados anteriomente, junte tudo e faça o seguinte
//1.Crie uma binary tree de números aleatorios
//2.Confirme que a árvore está balanceada chamando isBalanced
//3.Mostre os elementos em level, PreOrder, PostOrder e InOrder
//4.Desbalance a árvore adicionando varios números
//5.Confirme que a árvore está desbalanceada chamando isBalanced
//6.Balancei a árvore chamando reBalance
//7.Confirme que a árvore está balanceada chamando isBalanced
//8.Mostre os elementos em level, PreOrder, PostOrder e InOrder
 import { sortArray } from "./arrFunction"


  let height = -1


class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BST{
    constructor(){
        this.root = null
    }
    CreateTree(arr,left = 0, right = arr.length-1){
        if(left > right) return null
        let mid = Math.floor((left+right)/2)
        let root = new Node(arr[mid])
        root.left = this.CreateTree(arr,left,mid-1)
        root.right = this.CreateTree(arr,mid+1,right)
        return root
    }

    Insert(value){
        let newNode = new Node(value)
        if(this.root === null) this.root = newNode
        else {
            this.InsertNode(this.root, newNode)
        }
    }

    InsertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }
            else{
                this.InsertNode(root.left, newNode)
            }
        }
        else{
            if(root.right === null){
                root.right = newNode
            }
            else{
                this.InsertNode(root.right, newNode)
            }
        }

    }
    LevelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value)

            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
    
    PreOrder(root){
        if(!root) return
        console.log(root.value)
        this.PreOrder(root.left)
        this.PreOrder(root.right)
    }
    postOrder(root){
        if(!root) return
        this.postOrder(root.left)
        console.log(root.value)
        this.postOrder(root.right)
    }
    InOrder(root){
        if(!root) return
        this.InOrder(root.left)
        this.InOrder(root.right)
        console.log(root.value)
    }
    isBalancedHelper(root){
        if(root === null) return -1
          let leftHeight = this.isBalancedHelper(root.left)
          let rightHeight = this.isBalancedHelper(root.right)
          let ans = Math.max(leftHeight,rightHeight)+1
        return ans
            
    }
    isBalanced(root){
        if(this.isBalancedHelper(root.left) - this.isBalancedHelper(root.right) ==1||this.isBalancedHelper(root.left)-this.isBalancedHelper(root.right) ==-1||this.isBalancedHelper(root.left)-this.isBalancedHelper(root.right)==0) {return true}
        return false
    }
    reBalance(root){
      let arr = []
      this.EmOrdem(root,arr)
      return this.buildTree(arr)
    }
    EmOrdem(root,arr){
        if(!root) return
        this.EmOrdem(root.left,arr)
        arr.push(root.value)
        this.EmOrdem(root.right,arr)
    }

    buildTree(arr){
        if(arr.length ===0) return null

        let mid = Math.floor(arr.length/2)
        let head = new Node(arr[mid])

        let left = arr.slice(0,mid);
        let right = arr.slice(mid+1)

        head.left =  this.buildTree(left)
        head.right = this.buildTree(right)

        return head
      }


}


let bst = new BST()

bst.Insert(10)
bst.Insert(5)
bst.Insert(15)




console.log(bst.isBalanced(bst.root))
console.log(bst.LevelOrder())
console.log(bst.PreOrder(bst.root))
console.log(bst.postOrder(bst.root))
console.log(bst.InOrder(bst.root))
bst.Insert(14)
bst.Insert(13)
console.log(bst.CreateTree([1,4,3,5,6,7,8]))
console.log(bst.isBalanced(bst.root))
console.log(bst.reBalance(bst.root))
console.log(bst.isBalanced(bst.reBalance(bst.root)))