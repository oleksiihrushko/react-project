import config from "./config";
import * as base from "./responses/transactions.json";
import { useSelector } from "react-redux";

// console.log("base", base.default);
// const data = base.default.costs;
const data = base.default.costs;
// console.log("data", data);
// console.log('config.name', config.name)

// const aaa = config.map( item => console.log('item.name', item.name))
// const aaa = data.reduce((acc, category) => );

// console.log("costs", costs);
// const costs = useSelector(state => {console.log('state', state.operations.costs)
// // state.operations
// })
const countCar = data
  .filter((cat) => {
    return cat.product.category.name === "транспорт"; // сделать через вычисляемые свойства обекта [транспорт]
    // return cat.product.category.name === config.name;
  })
  .reduce((acc, item) => acc + item.amount, 0);

export default { countCar };
