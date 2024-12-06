class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function verticalTraversal(root) {
  const nodes = []; // Список для зберігання (col, row, val)

  // Рекурсивна функція для обходу дерева
  function dfs(node, row, col) {
      if (!node) return;

      nodes.push([col, row, node.val]); // Додаємо вузол до списку
      dfs(node.left, row + 1, col - 1); // Обхід лівого піддерева
      dfs(node.right, row + 1, col + 1); // Обхід правого піддерева
  }

  dfs(root, 0, 0); // Починаємо з кореня дерева

  // Сортуємо вузли за (col, row, val)
  nodes.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0]; // За стовпцем
      if (a[1] !== b[1]) return a[1] - b[1]; // За рядком
      return a[2] - b[2]; // За значенням вузла
  });

  // Групуємо вузли за стовпцями
  const result = [];
  let currentColumn = nodes[0][0];
  let currentGroup = [];

  for (const [col, row, val] of nodes) {
      if (col !== currentColumn) {
          result.push(currentGroup);
          currentGroup = [];
          currentColumn = col;
      }
      currentGroup.push(val);
  }

  result.push(currentGroup); // Додаємо останню групу
  return result;
}

// Приклади використання
const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(verticalTraversal(tree1)); // Output: [[9], [3, 15], [20], [7]]

const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(6)),
  new TreeNode(3, new TreeNode(5), new TreeNode(7))
);
console.log(verticalTraversal(tree2)); // Output: [[4], [2], [1, 5, 6], [3], [7]]
