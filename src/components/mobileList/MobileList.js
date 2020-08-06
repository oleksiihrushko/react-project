import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import OneMobileOperation from '../oneMobileOperation/OneMobileOperation';
import Modal from '../../components/modal/Modal';
import {
  deleteIncome,
  deleteCosts,
} from '../../redux/finance/financeOperations';
import styles from './MobileList.module.css';

const MobileList = ({ operations, setIsMobile }) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [id, setId] = useState([]);
  const dispatch = useDispatch();
  setIsMobile(true);
  
  const deleteOperation = () => {
    if (id[0] === 'cost') {
      dispatch(deleteCosts(id[1], id[2]));
    } else {
      dispatch(deleteIncome(id[1]));
    }
  };

  return (
    <>
      <ul className={styles.mobileList}>
        {operations.length === 0 ? (
          <p className={styles.noOperationsList}>Нет операций</p>
        ) : (
          operations.map(operation => (
            <OneMobileOperation
              operation={operation}
              key={operation.date}
              setId={setId}
              openModal={() => setIsShowDeleteModal(true)}
            />
          ))
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

export default MobileList;
