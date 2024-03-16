import { QueryNoteDto, MutateNoteDto } from '../lib/api/dtos';

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

type Props = { note?: QueryNoteDto; onSubmit: (dto: MutateNoteDto) => void };

const NoteForm: React.FC<Props> = ({ note, onSubmit }) => {
  const handleSubmit = (event: NoteFormEvent) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const dto = {
      id: note?.id,
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
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={note?.title}
          placeholder="Your note title"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="tag">Tag</label>
        <input
          type="text"
          id="tag"
          name="tag"
          defaultValue={note?.tag}
          placeholder="Your note tag"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          defaultValue={note?.content}
          placeholder="Your note content"
        />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Save & Exit</button>
      </div>
    </form>
  );
};

export default NoteForm;
