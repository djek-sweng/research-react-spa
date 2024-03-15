import { NoteDto } from '../lib/api/dtos';

import styles from './Form.module.css';

interface NoteFormInputs extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  content: HTMLInputElement;
  tag: HTMLInputElement;
}

interface NoteFormElement extends HTMLFormElement {
  readonly elements: NoteFormInputs;
}

type NoteFormEvent = React.FormEvent<NoteFormElement>;

type Props = { onSubmit: (dto: NoteDto) => void };

const NoteForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (event: NoteFormEvent) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const dto = {
      title: formElements.title.value,
      content: formElements.content.value,
      tag: formElements.tag.value,
    };

    onSubmit(dto);

    // event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value="Note title" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">Content</label>
        <input type="text" id="content" value="Note content" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="tag">Tag</label>
        <input type="text" id="tag" value="Note tag" />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NoteForm;
