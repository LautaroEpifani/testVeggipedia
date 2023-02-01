import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import NavGraphic from "./NavGraphic";
import { useAuth } from "../context/authContext";

//1 Traer el servicio de firestore
//2 Crear un puntero al dato que queremos traer
//3 Traer el dato con una promesa

const ItemDetailContainer = () => {
  const [dataItem, setDataItem] = useState({});
  const { checkVerified } = useAuth()

  const { detailId } = useParams();

  useEffect(() => {
  
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detailId);
    getDoc(queryDoc).then((res) => setDataItem({ id: res.id, ...res.data() }));
  }, [detailId]);

  return (
  
    <ItemDetail dataItem={dataItem} />
  )
};

export default ItemDetailContainer;
