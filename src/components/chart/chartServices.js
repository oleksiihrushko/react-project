const getSortedData = categoryData => {
  const dataArrays = Object.entries(categoryData);
  const sortedDataArrays = dataArrays.sort((a, b) => b[1] - a[1]);
  const limitedData = sortedDataArrays.slice(0, 15);

  return Object.fromEntries(limitedData);
};

const categorise = (products, selectedMonth, selectedYear) => {
  let categoryData = {};

  products.forEach(product => {
    const categoryName = product.product.category.name;
    const categoryItem = product.product.name;
    const amount = product.amount;
    const month = new Date(product.date).getMonth();
    const year = new Date(product.date).getFullYear();

    if (month === selectedMonth && year === selectedYear) {
      if (!categoryData[categoryName]) {
        categoryData[categoryName] = [];
      }

      categoryItem &&
        categoryData[categoryName].push({ [categoryItem]: amount });
    }
  });

  return getSortedData(categoryData);
};

const getCategoryDetails = data => {
  return data.reduce((acc, item) => {
    const title = Object.keys(item)[0];
    const amount = Object.values(item)[0];

    if (!acc[title]) {
      acc[title] = 0;
    }
    acc[title] += amount;
    return acc;
  }, {});
};

const getSubcategoryData = (
  products,
  selectedCategory,
  selectedMonth,
  selectedYear,
) => {
  const categories = categorise(products, selectedMonth, selectedYear);

  let data;

  for (let categoryTitle in categories) {
    if (categoryTitle && categoryTitle === selectedCategory) {
      data = categories[categoryTitle];
    }
  }

  return data && getCategoryDetails(data);
};

const getExpensesByAllCategories = (products, selectedMonth, selectedYear) => {
  let categoryData = {};

  products.forEach(product => {
    const categoryName = product.product.category.name;
    const amount = product.amount;
    const month = new Date(product.date).getMonth();
    const year = new Date(product.date).getFullYear();

    if (month === selectedMonth && year === selectedYear) {
      if (!categoryData[categoryName]) {
        categoryData[categoryName] = 0;
      }
      categoryData[categoryName] += amount;
    }
  });

  return getSortedData(categoryData);
};

export const getData = (
  products,
  selectedCategory,
  selectedMonth = new Date().getMonth(),
  selectedYear = new Date().getFullYear(),
) => {
  if (selectedCategory === 'All') {
    return getExpensesByAllCategories(products, selectedMonth, selectedYear);
  } else {
    return getSubcategoryData(
      products,
      selectedCategory,
      selectedMonth,
      selectedYear,
    );
  }
};
