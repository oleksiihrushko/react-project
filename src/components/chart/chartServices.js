import { dummyData } from "./dummyData";

const expenses = dummyData.items;

let categoryToFind;

// export const getExpensesByAllCategories = (
//   selectedMonth = new Date().getMonth(),
//   selectedYear = new Date().getFullYear()
// ) => {
//   let categoryData = {};

//   expenses.forEach((exp) => {
//     const categoryName = exp.product.category.name;
//     const amount = exp.amount;
//     const month = exp.date.getMonth();
//     const year = exp.date.getFullYear();

//     if (month === selectedMonth && year === selectedYear) {
//       if (!categoryData[categoryName]) {
//         categoryData[categoryName] = 0;
//       }
//       categoryData[categoryName] += amount;
//     }
//   });
//   return categoryData;
// };

// const getSubcategoryData = (
//   selectedMonth = new Date().getMonth(),
//   selectedYear = new Date().getFullYear()
// ) => {
//   let subcategoryData = {};

//   expenses.forEach((exp) => {
//     const categoryName = exp.product.category.name;
//     const categoryItem = exp.product.name;
//     const amount = exp.amount;
//     const month = exp.date.getMonth();
//     const year = exp.date.getFullYear();

//     if (month === selectedMonth && year === selectedYear && ) {
//       if (!subcategoryData[categoryName]) {
//         subcategoryData[categoryName] = [];
//       }

//       categoryItem &&
//         subcategoryData[categoryName].push({ [categoryItem]: amount });
//     }
//   });
//   return subcategoryData;
// };

// const getSubcategoryExpenses = (data) => {
//   return data.reduce((acc, item) => {
//     const title = Object.keys(item)[0];
//     const amount = Object.values(item)[0];

//     if (!acc[title]) {
//       acc[title] = 0;
//     }
//     return (acc[title] += amount);
//   }, {});
// };

// export const getExpencesByOneCategory = (
//   selectedCategory = "products",
//   selectedMonth = new Date().getMonth(),
//   selectedYear = new Date().getFullYear()
// ) => {
//   const categories = getSubcategoryData(selectedMonth, selectedYear);
//   let data;

//   for (let categoryName in categories) {
//     if (categoryName === selectedCategory) {
//       data = categories[categoryName];
//     }
//   }

//   return data && getSubcategoryExpenses(data);
// };

// export default { getExpensesByAllCategories, getExpencesByOneCategory };

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

const getSubcategoryData = (selectedCategory, selectedMonth, selectedYear) => {
  const categories = categorise(selectedMonth, selectedYear);

  let data;

  for (let categoryTitle in categories) {
    if (categoryTitle === selectedCategory) {
      data = categories[categoryTitle];
    }
  }
  return data && getCategoryDetails(data);
};

const getExpensesByAllCategories = (selectedMonth, selectedYear) => {
  let categoryData = {};

  expenses.forEach((exp) => {
    const categoryName = exp.product.category.name;
    const amount = exp.amount;
    const month = exp.date.getMonth();
    const year = exp.date.getFullYear();

    if (month === selectedMonth && year === selectedYear) {
      if (!categoryData[categoryName]) {
        categoryData[categoryName] = 0;
      }
      categoryData[categoryName] += amount;
    }
  });
  return categoryData;
};

export const getData = (
  selectedCategory,
  selectedMonth = new Date().getMonth(),
  selectedYear = new Date().getFullYear()
) => {
  if (selectedCategory === "all") {
    return getExpensesByAllCategories(selectedMonth, selectedYear);
  } else {
    return getSubcategoryData(selectedCategory, selectedMonth, selectedYear);
  }
};
