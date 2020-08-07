import React, { Fragment, useState } from 'react';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import Title from './oneOperation/title/Title';
import Modal from '../modal/Modal';
import { deleteCosts } from '../../redux/finance/financeOperations';
import OneOperation from './oneOperation/OneOperation';
import EmptyMarkup from '../../components/incomeList/oneIncome/OneIncomeEmpty';
import styles from './OperationList.module.css';

const OperationList = ({ operations, setIsMobile }) => {
  setIsMobile(false);

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [id, setId] = useState([]);
  const dispatch = useDispatch();

  const deleteOperation = () => {
    dispatch(deleteCosts(id[0], id[1]));
  };

  return (
    <>
      <Media
        queries={{
          medium: '(min-width: 768px) and (max-width: 1023px)',
          large: '(min-width: 1024px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.medium && <Title />}
            {matches.large && <Title />}
          </Fragment>
        )}
      </Media>
      <ul className={styles.operationList}>
        {operations.length === 0 ? (
          <li className={styles.noOperations}>Нет операций</li>
        ) : (
          operations.map(operation => (
            <OneOperation
              operation={operation}
              key={operation.costsId}
              setId={setId}
              openModal={() => setIsShowDeleteModal(true)}
            />
          ))
        )}
        {operations.length === 3 && <EmptyMarkup />}
        {operations.length === 2 && (
          <>
            <EmptyMarkup />
            <EmptyMarkup />
          </>
        )}
        {operations.length === 1 && (
          <>
            <EmptyMarkup />
            <EmptyMarkup />
            <EmptyMarkup />
          </>
        )}
        {operations.length === 0 && (
          <>
            <EmptyMarkup />
            <EmptyMarkup />
            <EmptyMarkup />
            <EmptyMarkup />
          </>
        )}
      </ul>
      {isShowDeleteModal && (
        <Modal
          text="Вы уверены?"
          onTrue={deleteOperation}
          closeModal={() => setIsShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default OperationList;
