import { TColumns } from "../types/types";

export async function getColumns(): Promise<TColumns> {
  const columnsNumber: number = Math.floor(Math.random() * 99) + 2;
  const columns: TColumns = [];

  for (let i = 1; i <= columnsNumber; i++) {
    columns.push(`Обработка ${i}`);
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return columns;
}
