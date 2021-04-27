function binary() {
    class Node {
        constructor(data) {
            this.root = data.root;
            this.left = data.left;
            this.right = data.right;
        }


    }
    class BinarySearch {
        constructor() { this.root = null }
        // function to be implemented
        insert(data) {
            let node = new Node(data)
            if (!this.root) {
                this.root = node
            }
            else
                if (this.root.data > node.data) {
                    this.inserData(this.root.left, node)
                }

                else {
                    this.inserData(this.root.right, node)
                }

        }
        inserData(root, node) {
            if (!root && !root.data) {
                root.insert(node) //test
            }
            else {
                if (root.data > data)
                    inserData(root.left, node)
                else this.inserData(root.right, node)
            }
        }

        // remove(data)


        // Helper function
        // findMinNode()
        // getRootNode()
        // inorder(node)
        // preorder(node)               
        // postorder(node)
        // search(node, data)
    }

    let binarySearch = new BinarySearch()

    for (let i = 0; i < 10; i++) {
        let data = ((Math.floor(Math.random() * 300) + Math.ceil(Math.random()) * 300))

        let node
        node = new Node(data = { root: data, left: null, rihght: null })

        setTimeout(() => {
            binarySearch.insert(node)
            //      console.log(binarySearch)
            data = null
        }, 1000);

    }

    (function () {

        var numbers = Array(523, 3452);
        let counts = [0, 0]

        for (let i = 0; i < 10000; i++) {
            let choice = numbers[Math.floor(Math.random() * numbers.length)];
            if (choice === 523) counts[0]++
            else if (choice == 3452) counts[1]++
        }
        // counts should be about even
        console.log(counts);

    }())
}

binary()

