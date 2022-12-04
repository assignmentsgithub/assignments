function createStack() {
  let result = {
    items: [],
  };
  return {
    push(item) {
      result.items.push(item);
    },
    pop() {
      return result.items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
