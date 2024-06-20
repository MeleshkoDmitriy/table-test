import { FC } from "react";
import styles from "./Table.module.scss";

export const Table: FC = ({ columns, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {columns?.map((colName, index) => {
            return <th key={index}>{colName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index) => {
          return <tr key={index}>
            <td>{`Заказ ${index}`}</td>
            {row?.map((item, itemIndex) => {
              return <td key={itemIndex}>{item ? "true" : "false"}</td>;
            })}
          </tr>;
        })}
      </tbody>
    </table>
  );
};
