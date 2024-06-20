export async function getColumns() {
  const columnsNumber: number = Math.floor(Math.random() * 99) + 2;
  const columns = [];

  for (let i = 1; i <= columnsNumber; i++) {
    columns.push(`Обработка ${i}`);
  }

  await new Promise(resolve => setTimeout(resolve, 1500));

  return columns;
}