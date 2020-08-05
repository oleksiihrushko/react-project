import config from "./config";
import * as base from "./responses/transactions.json";

// console.log("base", base.default);
// const data = base.default.costs;
const data = base.default.costs;
// console.log("data", data);
// console.log('config.name', config.name)

// const aaa = config.map( item => console.log('item.name', item.name))
// const aaa = data.reduce((acc, category) => );

const countCar = data
  .filter((cat) => {
    return cat.product.category.name === "транспорт"; // сделать через вычисляемые свойства обекта [транспорт]
    // return cat.product.category.name === config.name;
  })
  .reduce((acc, item) => acc + item.amount, 0);

export default { countCar };
