class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function maxPathSum(root) {
  let maxSum = -Infinity;

  function findMaxPath(node) {
      if (!node) return 0;

      // Рекурсивно обчислюємо максимальну суму для лівої та правої гілки
      const leftMax = Math.max(findMaxPath(node.left), 0);
      const rightMax = Math.max(findMaxPath(node.right), 0);

      // Максимальна сума через поточний вузол
      const localMax = node.val + leftMax + rightMax;

      // Оновлюємо глобальну максимальну суму
      maxSum = Math.max(maxSum, localMax);

      // Повертаємо максимальну суму одного шляху
      return node.val + Math.max(leftMax, rightMax);
  }

  findMaxPath(root);
  return maxSum;
}

// Приклади використання
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(tree1)); // Output: 6

const tree2 = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxPathSum(tree2)); // Output: 42
