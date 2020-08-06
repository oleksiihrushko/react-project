import React, { Fragment } from 'react';
import Media from 'react-media';
import Title from '../oneOperation/title/Title';
import OneOperation from '../oneOperation/OneOperation';
import styles from './OperationList.module.css';

const OperationList = ({ deleteCosts, operations, setIsMobile }) => {
  setIsMobile(false);

  return (
    <>
      <ul className={styles.operationList}>
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
              {operations.length === 0 ? (
                <p className={styles.noOperations}>Нет операций</p>
              ) : (
                operations.map(operation => (
                  <OneOperation
                    operation={operation}
                    key={operation.costsId}
                    deleteCosts={deleteCosts}
                  />
                ))
              )}
            </Fragment>
          )}
        </Media>
      </ul>
    </>
  );
};

export default OperationList;
