function isSameTree(p, q) {
  // Якщо обидва дерева порожні, вони однакові
  if (!p && !q) return true;

  // Якщо один із вузлів порожній, а інший ні, або їхні значення не рівні
  if (!p || !q || p.val !== q.val) return false;

  // Рекурсивно перевіряємо ліві і праві піддерева
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Приклад виклику
const tree1 = { val: 1, left: { val: 2 }, right: { val: 3 } };
const tree2 = { val: 1, left: { val: 2 }, right: { val: 3 } };
console.log(isSameTree(tree1, tree2)); // true

const tree3 = { val: 1, left: { val: 2 }, right: null };
const tree4 = { val: 1, left: null, right: { val: 2 } };
console.log(isSameTree(tree3, tree4)); // false

const tree5 = { val: 1, left: { val: 2 }, right: { val: 1 } };
const tree6 = { val: 1, left: { val: 1 }, right: { val: 2 } };
console.log(isSameTree(tree5, tree6)); // false
