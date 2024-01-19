// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// first solution
var middleNode = function (head) {
  let currentHead = head;

  let size = 0;
  let result = null;

  while (currentHead) {
    size += 1;
    currentHead = currentHead.next;
  }

  currentHead = head;

  let midPosition = Math.floor(size / 2) + 1;

  let currentPosition = 0;

  while (currentHead) {
    currentPosition += 1;

    if (currentPosition === midPosition) {
      result = currentHead;
      break;
    }
    currentHead = currentHead.next;
  }

  return result;
};
