import styles from './LoadingIndicator.module.css';

const LoadingIndicator = () => {
  return (
    <>
      <div className={styles.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </>
  );
};

export default LoadingIndicator;
