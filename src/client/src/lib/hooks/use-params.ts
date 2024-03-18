import { useParams } from 'react-router-dom';

export function useParamsId() {
  const { id } = useParams();

  if (!id) {
    throw new Error('Route param id not provided.');
  }

  return id;
}
