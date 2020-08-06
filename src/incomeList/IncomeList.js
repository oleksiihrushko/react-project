import React, { useState, Fragment } from 'react';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import Titles from '../oneIncome/titles/Titles';
import Modal from '../components/modal/Modal';
import OneIncome from '../oneIncome/OneIncome';
import { deleteIncome } from '../redux/finance/financeOperations';
import styles from './IncomeList.module.css';

const IncomeList = ({ operations, setIsMobile }) => {
  setIsMobile(false);

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const deleteOperation = () => {
      dispatch(deleteIncome(id));
  };

  return (
    <>
      <ul className={styles.incomeList}>
        <Media
          queries={{
            medium: '(min-width: 768px) and (max-width: 1023px)',
            large: '(min-width: 1024px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.medium && <Titles />}
              {matches.large && <Titles />}
              {operations.length === 0 ? (
                <p className={styles.noIncome}>No income</p>
              ) : (
                operations.map(operation => (
                  <OneIncome
                    operation={operation}
                    key={operation.incomeId}
                    setId={setId}
                    openModal={() => setIsShowDeleteModal(true)}
                  />
                ))
              )}
            </Fragment>
          )}
        </Media>
        {isShowDeleteModal && (
          <Modal
            text="Вы уверены?"
            onTrue={deleteOperation}
            closeModal={() => setIsShowDeleteModal(false)}
          />
        )}
      </ul>
    </>
  );
};

export default IncomeList;
