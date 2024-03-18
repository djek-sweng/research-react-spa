export interface MutateProfileDto {
  name: string;
  email: string;
  status: string;
}

export interface QueryProfileDto extends MutateProfileDto {
  id: number;
}
