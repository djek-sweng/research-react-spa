import styles from './ErrorBlock.module.css';

type Props = { title: string; message: string };

const ErrorBlock: React.FC<Props> = ({ title, message }) => {
  return (
    <div className={styles.errorBlock}>
      <div className={styles.errorBlockIcon}>!</div>
      <div className={styles.errorBlockText}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorBlock;
