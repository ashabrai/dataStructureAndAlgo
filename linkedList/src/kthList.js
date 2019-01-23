'use strict';

// Problem Domain: 

// Create a method that takes in a value of k, return the value of the kth node from the list


module.exports = function kthNodeReturn(linkedList, k) {
  let forward = linkedList.head;
  let current = linkedList.head;
  let counter = 0;

  while (forward !== null) {
    if (counter !== k) {
      forward = forward.next;
      // eslint-disable-next-line no-plusplus
      counter++;   
    } else {
      current = current.next;
      forward = forward.next;
    }
  } return current;
};
