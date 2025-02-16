import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  //console.log(title);
  //console.log(useLocation());

  const { pathname } = useLocation();
  //console.log(pathname);

  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares </h2>
        {isHome ? (
          <Link className="item-list__link" to={path}>
            Mostrar tudo
          </Link>
        ) : (
          <> </>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((_, key) => key < finalItems)
          .map((currObj, key) => (
            <SingleItem key={`${title}-${key}`} {...currObj} idPath={idPath} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
