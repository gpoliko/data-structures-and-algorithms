import LinkedListNode from './linkedListNode'

// Class respresenting a LinkedList
class LinkedList {
  // Creates a LinkedList object
  constructor () {
    this.head = null
    this.tail = null
  }

  // Override default toString() method
  toString (callback) {
    // console.log("THIS =", this)
    return this.toArray(node => node.toString(callback)).toString()
  }

  /**
     * toArray - creates an array of nodes
     * @return array of nodes
     */
  toArray () {
    const nodes = []
    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  /**
     * add - Adds nodes to the end of the linked list
     * @param {Object} data
     * @return entire LinkedList
     */
  add (data) {
    // Create a new node
    const newNode = new LinkedListNode(data)

    // If no head exists, newNode will become the head
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    // Adding newNode to the end of the linked list
    this.tail.next = newNode
    this.tail = newNode
    return this
  }
  
  /**
   * addFirst - adds nodes to the front of the linked list
   * @param {Object} data
   * @return entire LinkedList
   */
  addFirst (data) {
      // Create a new node to become a head
      const newNode = new LinkedListNode(data, this.head)
      this.head = newNode
      
      // If no tail exists, newNode will become the tail
      if (!this.tail) {
          this.tail = newNode
      }
      
      return this
  }

  size () {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }
}


export default LinkedList
