import { PropsWithChildren } from 'react';

import styles from './PageContent.module.css';

type Props = { title: string };

const PageContent: React.FC<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};

export default PageContent;
