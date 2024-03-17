import { QueryProfileDto, MutateProfileDto } from '../lib/api/dtos';

import styles from './Form.module.css';

interface ProfileFormControlsCollection extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  status: HTMLInputElement;
}

interface ProfileFormElement extends HTMLFormElement {
  readonly elements: ProfileFormControlsCollection;
}

type ProfileFormEvent = React.FormEvent<ProfileFormElement>;

type Props = {
  profile?: QueryProfileDto;
  onSubmit: (dto: MutateProfileDto) => void;
};

const ProfileForm: React.FC<Props> = ({ profile, onSubmit }) => {
  const handleSubmit = (event: ProfileFormEvent) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const dto = {
      name: formElements.name.value,
      email: formElements.email.value,
      status: formElements.status.value,
    };

    onSubmit(dto);

    // event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={profile?.name}
          placeholder="Your name"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue={profile?.email}
          placeholder="Your email"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="status">Status</label>
        <input
          type="text"
          id="status"
          name="status"
          defaultValue={profile?.status}
          placeholder="Your status"
        />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Save & Exit</button>
      </div>
    </form>
  );
};

export default ProfileForm;
