import { SigninDto } from '../lib/api/dtos';

import styles from './SignupForm.module.css';

interface SigninFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SigninFormElement extends HTMLFormElement {
  readonly elements: SigninFormElements;
}

type SigninFormEvent = React.FormEvent<SigninFormElement>;

type Props = { onSubmit: (dto: SigninDto) => void };

const SigninForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (event: SigninFormEvent) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const dto = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    onSubmit(dto);

    // event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Your password" />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Signin</button>
      </div>
    </form>
  );
};

export default SigninForm;
