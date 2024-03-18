export interface MutateNoteDto {
  title: string;
  content: string;
  tag: string;
}

export interface QueryNoteDto extends MutateNoteDto {
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
