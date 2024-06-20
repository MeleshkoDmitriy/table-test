import { FC } from "react";
import styles from "./Table.module.scss";

export const Table: FC = ({ columns, rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {columns?.map((colName, index) => {
            return <th key={index}><span>{colName}</span></th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index) => {
          return (
            <tr key={index}>
              <td><span>{`Заказ ${index + 1}`}</span></td>
              {row?.map((item, itemIndex) => {
                return (
                  <td
                    key={itemIndex}
                    style={{
                      backgroundColor: item ? "#00be03" : "#ff0000",
                      color: item ? "white" : "black",
                    }}
                  >
                    <span>{item ? "true" : "false"}</span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
