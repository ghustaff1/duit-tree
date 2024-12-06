class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function serialize(root) {
  if (!root) return "[]";

  const queue = [root];
  const result = [];

  while (queue.length) {
      const node = queue.shift();

      if (node) {
          result.push(node.val);
          queue.push(node.left);
          queue.push(node.right);
      } else {
          result.push(null);
      }
  }

  // Видаляємо зайві `null` з кінця
  while (result[result.length - 1] === null) {
      result.pop();
  }

  return JSON.stringify(result);
}

function deserialize(data) {
  const values = JSON.parse(data);
  if (values.length === 0) return null;

  const root = new TreeNode(values[0]);
  const queue = [root];
  let index = 1;

  while (queue.length) {
      const node = queue.shift();

      if (index < values.length && values[index] !== null) {
          node.left = new TreeNode(values[index]);
          queue.push(node.left);
      }
      index++;

      if (index < values.length && values[index] !== null) {
          node.right = new TreeNode(values[index]);
          queue.push(node.right);
      }
      index++;
  }

  return root;
}

// Приклад використання
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const serialized = serialize(tree1);
console.log(serialized); // Output: "[1,2,3,null,null,4,5]"

const deserialized = deserialize(serialized);
console.log(serialize(deserialized)); // Output: "[1,2,3,null,null,4,5]"
