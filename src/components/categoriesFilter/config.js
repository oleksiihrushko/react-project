import React from 'react';
import styles from './CategoriesFilter.module.css';

import { ReactComponent as Alcohol } from './svg/alcohol.svg';
import { ReactComponent as Car } from './svg/car.svg';
import { ReactComponent as Comunal } from './svg/comunal.svg';
import { ReactComponent as Else } from './svg/else.svg';
import { ReactComponent as Health } from './svg/health.svg';
import { ReactComponent as Home } from './svg/home.svg';
import { ReactComponent as Learn } from './svg/learn.svg';
import { ReactComponent as Party } from './svg/party.svg';
import { ReactComponent as Products } from './svg/products.svg';
import { ReactComponent as Sport } from './svg/sport.svg';
import { ReactComponent as Tools } from './svg/tools.svg';
import { useSelector } from 'react-redux';

const getFilteredDate = (allCosts, monthToFilter) =>
  allCosts.filter(costs => {
    const allDates = costs.date;
    const dataTarcsaction = new Date(allDates);
    const currentMonth = dataTarcsaction.getMonth() + 1;
    const currentYaer = dataTarcsaction.getFullYear();

    const monthToFindSearsh = new Date(monthToFilter);
    const getMonthToSearch = monthToFindSearsh.getDate();
    const getYaerToSearch = monthToFindSearsh.getFullYear();

    if (currentMonth === getMonthToSearch && getYaerToSearch === currentYaer) {
      return true;
    }
  });

const totalCategoryCost = data =>
  data.reduce(
    (acc, costs) => {
      acc[costs.product.category.name] =
        acc[costs.product.category.name] + costs.amount;
      return acc;
    },
    {
      Продукты: 0,
      Aлкоголь: 0,
      Транспорт: 0,
      Развлечение: 0,
      Здоровье: 0,
      'Все для дома': 0,
      Техника: 0,
      'Коммуналка, связь': 0,
      Хобби: 0,
      Образование: 0,
      Прочее: 0,
    },
  );

export const TotalCountsCosts = ({ setCurrentCategory }) => {
  const allCosts = useSelector(state => state.operations.costs);
  const monthToFilter = useSelector(state => state.statistics.month); //+
  const total = totalCategoryCost(getFilteredDate(allCosts, monthToFilter));
  const configs = [
    {
      name: 'Продукты',
      svg: <Products />,
      total: total['Продукты'],
    },
    {
      name: 'Aлкоголь',
      svg: <Alcohol />,
      total: total['Aлкоголь'],
    },
    {
      name: 'Развлечение',
      svg: <Party />,
      total: total['Развлечение'],
    },
    {
      name: 'Здоровье',
      svg: <Health />,
      total: total['Здоровье'],
    },
    {
      name: 'Транспорт',
      svg: <Car />,
      total: total['Транспорт'],
    },
    {
      name: 'Все для дома',
      svg: <Home />,
      total: total['Все для дома'],
    },
    {
      name: 'Техника',
      svg: <Tools />,
      total: total['Техника'],
    },
    {
      name: 'Коммуналка, связь',
      svg: <Comunal />,
      total: total['Коммуналка, связь'],
    },
    {
      name: 'Хобби',
      svg: <Sport />,
      total: total['Хобби'],
    },
    {
      name: 'Образование',
      svg: <Learn />,
      total: total['Образование'],
    },
    {
      name: 'Прочее',
      svg: <Else />,
      total: total['Прочее'],
    },
    {
      name: 'Корректировка',
      svg: <Else />,
      total: total['Корректировка'],
    },
  ];
  return (
    <ul
      className={`${styles.ul} ${styles.flex} }`}
      style={{
        padding: 0,
      }}
    >
      {configs.map(({ name, svg, total }) => {
        return (
          // (total !== null) > 0 && (
          total > 0 && (
            <li key={name} className={`${styles.flex} ${styles.li}`}>
              <button
                onClick={() => {
                  setCurrentCategory(name);
                }}
                className={styles.btn}
              >
                <p className={`${styles.prise}`}>{total}</p>
                <div className={styles.svg}>{svg}</div>
                <p className={styles.name}>{name}</p>
              </button>
            </li>
          )
        );
      })}
    </ul>
  );
};
