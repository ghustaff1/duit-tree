class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function recoverFromPreorder(traversal) {
  let index = 0;

  // Функція для відновлення дерева
  function dfs(depth) {
      if (index >= traversal.length) return null;

      let dashes = 0;
      while (index + dashes < traversal.length && traversal[index + dashes] === '-') {
          dashes++; // рахуємо кількість тире для визначення глибини
      }

      if (dashes !== depth) return null; // якщо глибина не відповідає поточному рівню, повертаємо null

      // Зчитуємо значення числа
      let value = 0;
      while (index + dashes < traversal.length && traversal[index + dashes] !== '-') {
          value = value * 10 + (traversal[index + dashes] - '0');
          index++;
      }
      index += dashes; // переміщаємо індекс після числа

      // Створюємо вузол і обробляємо лівого та правого нащадків
      let node = new TreeNode(value);
      node.left = dfs(depth + 1);
      node.right = dfs(depth + 1);
      
      return node;
  }

  return dfs(0);
}

// Приклади використання:
const tree1 = recoverFromPreorder("1-2--3--4-5--6--7");
console.log(tree1); // Output: [1,2,5,3,4,6,7]

const tree2 = recoverFromPreorder("1-2--3---4-5--6---7");
console.log(tree2); // Output: [1,2,5,3,null,6,null,4,null,7]

const tree3 = recoverFromPreorder("1-401--349---90--88");
console.log(tree3); // Output: [1,401,null,349,88,90]
