import { FC } from "react"

export const Table: FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Обработка 1</th>
          <th>Обработка 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Заказ 1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Заказ 2</td>
          <td>2</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  )
}
