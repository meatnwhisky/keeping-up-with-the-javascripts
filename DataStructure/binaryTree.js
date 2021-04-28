

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  //recursive function
  add(data) {

    const node = this.root

    if (node === null) {
      this.root = new Node(data)
      //  console.log(`node is now ${node}`)
      return
    }
    else {
      //  console.log(`else, node is now ${node}`)
      const searchTree = function (node) //closure func
      {
        // console.log(`inside search tree`)
        // console.log(node)

        if (node.data > data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          }
          else if (node.left !== null) {
            return searchTree(node.left)
          }
        }
        else if (node.data < data) {

          if (node.right === null) {
            node.right = new Node(data)
          }
          else if (node.right !== null) {
            return searchTree(node.right)
          }

        }
        else return
      }
      // console.log(node)
      return searchTree(node)
    }
  }
  find(data) {
    const node = this.root
    if (node === null) {
      console.log('empty tree')
      return
    }
    else {
      const findNode = function (node) {
        if (node === null)
          return
        console.log('in find')
        //         console.log(node)
        if (node.data === data) {
          console.log('found~!!!!!!!!!!')
          return node
        }
        else if (node.data > data) {
          findNode(node.left)
        }
        else if (node.data < data) {
          findNode(node.right)
        }
      }
      return findNode(node)
    }

  }
  // find(root, data) {
  //     if (root === null) console.log(`${data} does not exist in the tree`)

  //     if (root.data === data) return root

  //     if (root.data > data) { this.find(root.left) }
  //     else { this.find(root.right) }
  // }
  print(root) {
    if (root !== null) {
      console.log(root)
      this.print(root.right)
      this.print(root.left)
    }
  }

  maxDepth(nody, num) {

    if (nody === null) { return 0 }
    if (nody.left == null && nody.right == null)
      return num

    if (nody.left !== null && nody.right !== null) {
      return (Math.max(this.maxDepth(nody.left, num + 1), this.maxDepth(nody.right, num + 1)))
    }

    else if (nody.left != null)
      return (this.maxDepth(nody.left, num + 1))
    else if (nody.right != null)
      return (this.maxDepth(nody.right, num + 1))


  }
  maxDepthShort(nody) {

    if (nody === null) { return 0 }
    let left = this.maxDepthShort(nody.left)
    let right = this.maxDepthShort(nody.right)

    console.log('max')
    console.log(Math.max(left, right))
    return Math.max(left, right) + 1
  }
}

const bst = new BinarySearchTree()

bst.add(2)
bst.add(1)
bst.add(20)
bst.add(3)
bst.add(7)
bst.add(8)
bst.add(9)
bst.add(4)
bst.add(6)


//ok
//bst.print(bst.root)

//ok
//bst.find(10)

//ok
//let maxDepth = bst.maxDepth(bst.root, 1)

let maxDepthShort = bst.maxDepthShort(bst.root)
console.log('max depth:' + maxDepthShort)
