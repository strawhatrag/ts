let numberTuple: [number, string]

// only 1 number and 1 string in that exact order
numberTuple = [1, 'hello']

const color: [number, number, number] = [255, 255, 0]


// Set of named constants that we can reuse
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const mystatus = OrderStatus.DELIVERED;

// CAN BE STRING, NUM, ANY VALUE, CAPS
enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  EXIT = 0
}