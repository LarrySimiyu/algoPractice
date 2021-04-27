function reverseLinkedList(head){
    let prevNode = null
    let currentNode = head

    while(currentNode !== null){
        let nextNode = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
    }

    return prevNode
}