import React from 'react';
import styles from 'styles/components/Container.module.scss';

const Container = ({ children }: ContainerType) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
