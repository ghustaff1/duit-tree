class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function minCameraCover(root) {
  let cameras = 0;

  function dfs(node) {
      if (!node) return 1; // Порожні вузли вважаються покритими

      const left = dfs(node.left);
      const right = dfs(node.right);

      // Якщо хоча б одна дочірня гілка не покрита, ставимо камеру на поточний вузол
      if (left === 0 || right === 0) {
          cameras++;
          return 2;
      }

      // Якщо хоча б одна дочірня гілка має камеру, поточний вузол покритий
      if (left === 2 || right === 2) {
          return 1;
      }

      // Інакше поточний вузол не покритий
      return 0;
  }

  // Якщо корінь не покритий, додаємо камеру
  if (dfs(root) === 0) cameras++;

  return cameras;
}

// Приклади використання
const tree1 = new TreeNode(0, new TreeNode(0, null, new TreeNode(0, new TreeNode(0), null)));
console.log(minCameraCover(tree1)); // Output: 1

const tree2 = new TreeNode(
  0,
  new TreeNode(0, new TreeNode(0, null, new TreeNode(0))),
  null
);
console.log(minCameraCover(tree2)); // Output: 2
