function invertTree(root) {
  if (!root) return null; // Якщо дерево порожнє, повертаємо null

  // Обмінюємо місцями ліве і праве піддерева
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Рекурсивно інвертуємо піддерева
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// Приклад виклику
const tree1 = {
  val: 4,
  left: {
      val: 2,
      left: { val: 1 },
      right: { val: 3 },
  },
  right: {
      val: 7,
      left: { val: 6 },
      right: { val: 9 },
  },
};

console.log(JSON.stringify(invertTree(tree1)));
// Output: {"val":4,"left":{"val":7,"left":{"val":9},"right":{"val":6}},"right":{"val":2,"left":{"val":3},"right":{"val":1}}}

const tree2 = {
  val: 2,
  left: { val: 1 },
  right: { val: 3 },
};

console.log(JSON.stringify(invertTree(tree2)));
// Output: {"val":2,"left":{"val":3},"right":{"val":1}}

const tree3 = null;
console.log(invertTree(tree3)); // Output: null
