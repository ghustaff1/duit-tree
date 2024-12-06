function kthSmallest(root, k) {
  let count = 0; // Лічильник вузлів
  let result = null; // Змінна для збереження результату

  function inOrderTraversal(node) {
      if (!node || result !== null) return;

      // Рекурсивно обходимо ліве піддерево
      inOrderTraversal(node.left);

      // Обробляємо поточний вузол
      count++;
      if (count === k) {
          result = node.val;
          return;
      }

      // Рекурсивно обходимо праве піддерево
      inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
  return result;
}

// Приклад виклику
const tree1 = {
  val: 3,
  left: {
      val: 1,
      right: { val: 2 },
  },
  right: { val: 4 },
};
console.log(kthSmallest(tree1, 1)); // Output: 1

const tree2 = {
  val: 5,
  left: {
      val: 3,
      left: { val: 2, left: { val: 1 } },
      right: { val: 4 },
  },
  right: { val: 6 },
};
console.log(kthSmallest(tree2, 3)); // Output: 3
