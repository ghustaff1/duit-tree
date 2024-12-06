function isSymmetric(root) {
  if (!root) return true; // Порожнє дерево завжди симетричне

  // Функція для рекурсивної перевірки симетрії
  function isMirror(t1, t2) {
      if (!t1 && !t2) return true; // Обидва піддерева порожні
      if (!t1 || !t2) return false; // Тільки одне з піддерев порожнє
      if (t1.val !== t2.val) return false; // Значення вузлів не співпадають

      // Рекурсивно перевіряємо дзеркальність лівого і правого піддерев
      return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }

  return isMirror(root.left, root.right);
}

// Приклад виклику
const tree1 = {
  val: 1,
  left: { val: 2, left: { val: 3 }, right: { val: 4 } },
  right: { val: 2, left: { val: 4 }, right: { val: 3 } },
};
console.log(isSymmetric(tree1)); // true

const tree2 = {
  val: 1,
  left: { val: 2, right: { val: 3 } },
  right: { val: 2, right: { val: 3 } },
};
console.log(isSymmetric(tree2)); // false
