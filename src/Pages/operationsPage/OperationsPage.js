import React, { useEffect, useState, Fragment } from 'react';
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import OperationsHeader from '../../components/operationsHeader/OperationsHeader';
import AddOperationForm from '../../components/addOperationForm/AddOperationForm';
import OperationList from '../../components/operationList/OperationList';
import authSelectors from '../../redux/auth/authSelectors';
import { getDataOnInit } from '../../redux/finance/financeOperations';
import api from '../../services/api';
import OperationSummaryContainer from '../../components/operationsSummary/OperationsSummaryContainer.js';
import IncomeList from '../../incomeList/IncomeList';
import MobileList from '../../components/mobileList/MobileList';

const OperationsPage = () => {
  const [operationType, setOperation] = useState('credit');
  const [operationsData, setOperationsData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const token = useSelector(state => authSelectors.token(state));
  const dispatch = useDispatch();
  const costs = useSelector(state => state.operations.costs);
  const income = useSelector(state => state.operations.income);

  const sortedOperations = array =>
    array.sort((a, b) => {
      const aa = Number(
        a.date.slice(0, 4) +
          a.date.slice(5, 7) +
          a.date.slice(8, 10) +
          a.date.slice(11, 13) +
          a.date.slice(14, 16) +
          a.date.slice(17, 19),
      );
      const bb = Number(
        b.date.slice(0, 4) +
          b.date.slice(5, 7) +
          b.date.slice(8, 10) +
          b.date.slice(11, 13) +
          b.date.slice(14, 16) +
          b.date.slice(17, 19),
      );
      return aa - bb;
    });

  const mobileOperations = sortedOperations([...costs, ...income]);
  const costsOperations = sortedOperations([...costs]);
  const incomeOperations = sortedOperations([...income]);

  useEffect(() => {
    if (token) {
      api.token.set(token);
    }
    dispatch(getDataOnInit());

    if (window.matchMedia('(max-width: 767px)').matches) {
      console.log('mobile');

      setOperationsData(mobileOperations);
    } else {
      console.log('not mobile');
      operationType === 'credit'
        ? setOperationsData(costsOperations)
        : setOperationsData(incomeOperations);
    }

    return;
  }, [isMobile]);

  useEffect(() => {
    operationType === 'credit'
      ? setOperationsData(costsOperations)
      : setOperationsData(incomeOperations);
  }, [operationType]);

  return (
    <div>
      <OperationsHeader />
      <AddOperationForm
        operationType={operationType}
        setOperation={setOperation}
      />
      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small ? (
              <MobileList
                operations={operationsData}
                setIsMobile={setIsMobile}
              />
            ) : operationType === 'credit' ? (
              <OperationList
                operations={operationsData}
                setIsMobile={setIsMobile}
              />
            ) : (
              <IncomeList
                operations={operationsData}
                setIsMobile={setIsMobile}
              />
            )}
          </Fragment>
        )}
      </Media>
      <OperationSummaryContainer
        type={operationType}
        setOperationsData={setOperationsData}
      />
    </div>
  );
};

export default OperationsPage;
