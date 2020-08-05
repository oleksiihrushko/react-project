import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import Title from '../oneOperation/title/Title';
import OneOperation from '../oneOperation/OneOperation';
import styles from './OperationList.module.css';

const OperationList = ({ costs, deleteCosts }) => {
  // console.log("OperationList");
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
              {costs.length === 0 ? (
                <p className={styles.noOperations}>No operations</p>
              ) : (
                costs.map(operation => (
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

const mapStateToProps = state => ({
  state,
  costs: state.operations.costs,
});

export default connect(mapStateToProps)(OperationList);
