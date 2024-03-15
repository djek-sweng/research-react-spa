export interface NoteDto {
  id?: number;
  title: string;
  content: string;
  tag: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: number;
}
