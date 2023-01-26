import { useState } from "react";
import { uploadFile } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import NavGraphic from "./NavGraphic";

const FormProduct = () => {
  const [file, setFile] = useState(null);
  // const [product, setProduct] = useState({})´
  const [product, setProduct] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      product.uploadReviews = []
      const result = await uploadFile(file);
      product.image = result;
      product.reviews = []
      const db = getFirestore();
      const ordersCollection = collection(db, "products");
      addDoc(ordersCollection, product).then((res) => {
        if (res.id) {
          console.log(res.id);
        }
      });
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <div className="bg-primary pb-20">
      <NavGraphic />
      <div className="bg-neutral-300 p-10 rounded-lg h-auto mx-4 sm:mx-28">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 text-center gap-y-2  font-semibold uppercase items-center"
        >
          <label className="" htmlFor="">
            Name
          </label>
          <input
            onChange={handleChange}
            className="w-full sm:w-1/2 justify-self-center py-2 px-10  border border-pink-800 hover:bg-pink-200 rounded-lg uppercase  font-semibold"
            type="text"
            name="title"
          />
          <label htmlFor="">Price</label>
          <input
            onChange={handleChange}
            className="w-full sm:w-1/2 justify-self-center py-2 px-10  border border-pink-800 hover:bg-pink-200 rounded-lg uppercase  font-semibold"
            type="text"
            name="price"
          />
          <label htmlFor="">Category</label>
          <select
            onChange={handleChange}
            className="justify-self-center py-2 px-10  border border-pink-800  rounded-lg uppercase  font-semibold w-full sm:w-1/2"
            name="category"
          >
            <option value=""></option>
            <option value="alternativa Carne">Alternativas Carne</option>
            <option value="alternativa Pescado">Alternativas Pescado</option>
            <option value="alternativa Pollo">Alternativas Pollo</option>
            <option value="alternativa Leche">Alternativas Leche</option>
            <option value="alternativa Queso">Alternativas Queso</option>
            <option value="alternativa Huevo">Alternativas Huevo</option>
            <option value="dulces">Dulces</option>
            <option value="snacks y aperitivos">Snacks y Aperitivos</option>
            <option value="otros">Otros</option>
          </select>
          <label>Section</label>
          <select
            onChange={handleChange}
            className="justify-self-center py-2 px-10  border border-pink-800  rounded-lg uppercase  font-semibold w-full sm:w-1/2"
            name="section"
          >
            <option value=""></option>
            <option value="productos y novedades">Productos y Novedades</option>
            <option value="preparados">Preparados</option>
            <option value="otros">Otros</option>
          </select>
          <label htmlFor="">Image</label>
          <input
            className="justify-self-center w-full sm:w-1/2"
            type="file"
            name="image"
            id=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div></div>
        
          <button className="mx-10 mt-10 w-1/2 justify-self-center py-2  bg-pink-500 border border-pink-800 hover:bg-pink-800 rounded-lg uppercase text-white font-semibold">
            Upload Product
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default FormProduct;
