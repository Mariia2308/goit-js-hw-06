const categoriesElement = document.getElementById('categories');
const categoryItems = categoriesElement.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const subcategories = category.querySelectorAll('ul li');

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategories.length}`);
});