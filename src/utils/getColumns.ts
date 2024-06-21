import { delay, maxValue, minValue } from '../constants/constants';
import { TColumns } from '../types/types';

export async function getColumns(): Promise<TColumns> {
  const columnsNumber: number = Math.floor(Math.random() * maxValue) + minValue;
  const columns: TColumns = [];

  for (let i = 1; i <= columnsNumber; i++) {
    columns.push(`Обработка ${i}`);
  }

  await new Promise((resolve) => setTimeout(resolve, delay));

  return columns;
}
