import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  getFirestore,
  getDocs,
  query,
  where,
  collection,
  doc,
} from "firebase/firestore";
import NavGraphic from "./NavGraphic";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  return (
    <div className="bg-primary pb-10">
      <NavGraphic/>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
