'use strict';

const LinkedList = require('../src/linkedList');
const Node = require('../src/node');
const kthNodeReturn = require('../src/kthList');

describe('kthList', () => {
  test('printing out the kth node value', () => {
    const sampleList = new LinkedList();
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);

    sampleList.head = one;
    sampleList.head.next = two;
    sampleList.head.next.next = three;
    sampleList.head.next.next.next = four;

    const kthNode = kthNodeReturn(sampleList, 2);
    expect(kthNode).toEqual(three);
  }); 

  describe('#kthList', () => {
    test('to see if it works with any nmber', () => {
      const linked = new LinkedList();
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      const four = new Node(4);
    
      linked.head = one;
      linked.head.next = two;
      linked.head.next.next = three;
      linked.head.next.next.next = four;
    
      const kthNode = kthNodeReturn(linked, 3);
      expect(kthNode).toEqual(two);
    });
  });
});
