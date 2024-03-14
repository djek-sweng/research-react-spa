import { SignupDto } from '../lib/api/dtos';

import styles from './SignupForm.module.css';

interface SignupFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirmPassword: HTMLInputElement;
}

interface SignupFormElement extends HTMLFormElement {
  readonly elements: SignupFormElements;
}

type SignupFormEvent = React.FormEvent<SignupFormElement>;

type Props = { onSubmit: (dto: SignupDto) => void };

const SignupForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (event: SignupFormEvent) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const dto = {
      name: formElements.name.value,
      email: formElements.email.value,
      password: formElements.password.value,
      confirmPassword: formElements.confirmPassword.value,
    };

    onSubmit(dto);

    // event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Your password" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Your confirm password"
        />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};

export default SignupForm;
