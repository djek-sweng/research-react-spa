export interface CreateNoteDto {
  title: string;
  content: string;
  tag: string;
}

export interface NoteDto extends CreateNoteDto {
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
