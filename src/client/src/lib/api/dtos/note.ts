export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}
