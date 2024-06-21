import { delay, maxValue, minValue } from '../constants/constants';
import { TColumns, TRows } from '../types/types';

export async function getRows(columns: TColumns): Promise<TRows> {
  const rowsNumber = Math.floor(Math.random() * maxValue) + minValue;
  const rows: TRows = [];

  for (let i = 1; i <= rowsNumber; i++) {
    const singleRow: boolean[] = [];

    for (let j = 0; j < columns.length; j++) {
      singleRow.push(Math.random() > 0.5);
    }

    rows.push(singleRow);
  }

  await new Promise((resolve) => setTimeout(resolve, delay));

  return rows;
}
