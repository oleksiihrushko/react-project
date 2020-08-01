import { dummyData } from "./dummyData";

const expenses = dummyData.items;

const categorise = (
  selectedMonth = new Date().getMonth(),
  selectedYear = new Date().getFullYear()
) => {
  let categoryData = {};

  expenses.forEach((exp) => {
    const categoryName = exp.product.category.name;
    const categoryItem = exp.product.name;
    const amount = exp.amount;
    const month = exp.date.getMonth();
    const year = exp.date.getFullYear();

    if (month === selectedMonth && year === selectedYear) {
      if (!categoryData[categoryName]) {
        categoryData[categoryName] = [];
      }

      categoryItem &&
        categoryData[categoryName].push({ [categoryItem]: amount });
    }
  });
  return categoryData;
};

const getCategoryDetails = (data) => {
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

export const getCategoryData = (
  selectedCategory,
  selectedMonth,
  selectedYear
) => {
  const categories = categorise(selectedMonth, selectedYear);
  let data;

  for (let categoryName in categories) {
    if (categoryName === selectedCategory) {
      data = categories[categoryName];
    }
  }

  return data && getCategoryDetails(data);
};
