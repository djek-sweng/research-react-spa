import { Link, useRouteError } from 'react-router-dom';

import PageContent from './../components/PageContent';

import styles from './Error.module.css';

export default function Error() {
  const error = useRouteError() as Error;

  const title = 'An Error Occured';
  let message = 'Oops. Something went wrong.';

  if (error.message) {
    message = error.message;
  }

  return (
    <PageContent title={title}>
      <p className={styles.message}>{message}</p>

      <div className={styles.link}>
        <Link to="/">Home</Link>
      </div>
    </PageContent>
  );
}
