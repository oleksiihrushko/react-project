const filterOperations = (array, year, month, i) => {
  return array.filter((item) => {
    const startMonth = new Date(year, month - i, 1, 0, 0);
    const endMonth = new Date(year, month - i + 1, 1, 0, 0);
    const res =
      item.date > startMonth.toISOString() &&
      item.date < endMonth.toISOString();
    return res;
  });
};

const getCostsSum = (array) =>
  array.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

export const makeSummary = (costs) => {
  let summaryAcc = [];
  const now = new Date(2020, 2, 18);
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  for (let i = 0; i < 6; i += 1) {
    if (currentMonth - i > 0) {
      const filteredOperations = filterOperations(
        costs,
        currentYear,
        currentMonth,
        i
      );
      summaryAcc.push([
        currentYear,
        currentMonth - i,
        getCostsSum(filteredOperations),
        filteredOperations,
      ]);
    } else {
      const filteredOperations = filterOperations(
        costs,
        currentYear,
        currentMonth,
        i
      );
      summaryAcc.push([
        currentYear - 1,
        12 - (i - currentMonth),
        getCostsSum(filteredOperations),
        filteredOperations,
      ]);
    }
  }

  return summaryAcc;
};
