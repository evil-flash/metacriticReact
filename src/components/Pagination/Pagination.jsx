import React from "react";
import usePagination from "@mui/material/usePagination";
import { List } from "./../../constants/pagination";

function Pagination({ handlePage }) {
  const { items } = usePagination({
    count: 50000,
  });
  return (
    <>
      <nav className="nav">
        <List onClick={handlePage}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </>
  );
}

export default Pagination;
