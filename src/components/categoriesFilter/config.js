import React from 'react';
import { useSelector } from 'react-redux';
import { ballanceExchange, getFilteredDate } from './currencyExchange';

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
import { ReactComponent as Chart } from './svg/bar_chart.svg';

export const TotalCountsCosts = ({ setCurrentCategory }) => {
  const allCosts = useSelector(state => state.operations.costs);
  const dateToFilter = useSelector(state => state.statistics.month);
  const exchangeRates = useSelector(
    state => state.exchangeRatesRoot.exchangeRates,
  );
  const currentCurrency = useSelector(
    state => state.exchangeRatesRoot.exchangeCurrency,
  );
  let ifAllNotEmpty = 0;
  const totalCategoryCost = getFilteredDate(allCosts, dateToFilter).reduce(
    (acc, costs) => {
      acc[costs.product.category.name] =
        acc[costs.product.category.name] + costs.amount;
      ifAllNotEmpty += costs.amount;
      return acc;
    },
    {
      Продукты: 0,
      Алкоголь: 0,
      Транспорт: 0,
      Развлечение: 0,
      Здоровье: 0,
      'Все для дома': 0,
      Техника: 0,
      'Коммуналка,Связь': 0,
      Хобби: 0,
      Образование: 0,
      Прочее: 0,
    },
  );

  const configs = [
    {
      name: 'Продукты',
      svg: <Products />,
      total: totalCategoryCost['Продукты'],
    },
    {
      name: 'Алкоголь',
      svg: <Alcohol />,
      total: totalCategoryCost['Алкоголь'],
    },
    {
      name: 'Развлечение',
      svg: <Party />,
      total: totalCategoryCost['Развлечение'],
    },
    {
      name: 'Здоровье',
      svg: <Health />,
      total: totalCategoryCost['Здоровье'],
    },
    {
      name: 'Транспорт',
      svg: <Car />,
      total: totalCategoryCost['Транспорт'],
    },
    {
      name: 'Все для дома',
      svg: <Home />,
      total: totalCategoryCost['Все для дома'],
    },
    {
      name: 'Техника',
      svg: <Tools />,
      total: totalCategoryCost['Техника'],
    },
    {
      name: 'Коммуналка,Связь',
      svg: <Comunal />,
      total: totalCategoryCost['Коммуналка,Связь'],
    },
    {
      name: 'Хобби',
      svg: <Sport />,
      total: totalCategoryCost['Хобби'],
    },
    {
      name: 'Образование',
      svg: <Learn />,
      total: totalCategoryCost['Образование'],
    },
    {
      name: 'Прочее',
      svg: <Else />,
      total: totalCategoryCost['Прочее'],
    },
  ];
  const exchangeRatesUSD = Number(exchangeRates[0]?.buy);
  const exchangeRatesEUR = Number(exchangeRates[1]?.buy);

  return (
    ifAllNotEmpty > 0 && (
      <section className={`${styles.wrapper} ${styles.flex} container`}>
        <ul className={`${styles.ul} ${styles.flex}`} style={{ padding: 0 }}>
          {configs.map(({ name, svg, total }) => (
            <li
              key={name}
              className={` ${styles.flex} ${styles.li}              
              ${total === 0 && styles.notAvailible}`}>
              <button
                onClick={() => {setCurrentCategory(name)}}
                className={styles.btn}
              >
                <p className={`${styles.prise}`}>
                  {ballanceExchange(
                    exchangeRatesUSD,
                    exchangeRatesEUR,
                    currentCurrency,
                    total)}
                </p>
                <div className={styles.svg}>{svg}</div>
                <p className={styles.name}>{name}</p>
              </button>
            </li>
          ))}
          <li key="hg6HG55" className={`${styles.flex} ${styles.li}`}>
            <button
              onClick={() => {setCurrentCategory('All')}}
              className={styles.btn}
            >
              <p className={`${styles.prise}`}>Все</p>
              <div className={styles.svg}>
                <Chart />
              </div>
              <p className={styles.name}>Категории</p>
            </button>
          </li>
        </ul>
      </section>
    )
  );
};
