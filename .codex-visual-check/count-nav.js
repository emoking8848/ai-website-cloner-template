const path = require('path');
const termMap = require(path.join(process.cwd(), 'src/data/wp_category_term_map.json'));
const groups = [
  ['Women', ['new-in-womenswear', 'women-s-dresses', 'women-s-trending-now']],
  ['Men', ['new-in-men-s-clothing-latest-men-s-fashion', 'john-lewis-men-s-must-haves', 'men-s-trending-now']],
  ['Home & Garden', ['new-in-garden', 'garden-table-chairs-garden-furniture-sets']],
  ['Beauty', ['new-in-beauty']],
  ['Baby & Kids', ['new-in-baby-toddler-clothes-for-0-3-years']],
  ['Sport & Travel', ['sports-equipment-sports-accessories', 'women-s-sports-tops']],
  ['Gifts', ['gifts-for-grandparents-gifts-for-grandma-grandad', 'gifts-for-her-gifts-for-women', 'gifts-for-him-gifts-for-men']],
];
const result = groups.map(([label, slugs]) => ({ label, count: slugs.length, names: slugs.map((slug) => termMap[slug].name) }));
console.log(JSON.stringify({ total: result.reduce((sum, group) => sum + group.count, 0), groups: result }, null, 2));
