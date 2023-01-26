import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarItems from "./StarItems";
import {searchIcon} from "../assets/img"


const ItemList = ({ data }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(data);
  const [productsList, setProductsList] = useState(null)
 
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  
  
 
  const onSearch = () => {
    setResult(
      !search
        ? data
        : data.filter(
            (item) =>
              item.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              item.category.toLowerCase().includes(search.toLocaleLowerCase())
          )
    );
  };

  useEffect(() => {
    setResult(
      productsList
        ? data.filter(
            (item) =>
              item.category
                .toLowerCase()
                .includes(productsList.toLocaleLowerCase()) ||
              item.title
                .toLowerCase()
                .includes(productsList.toLocaleLowerCase())
          )
        : data
    );
    
  
  }, [data, search]);

  return (
    <div >
      <div className="flex justify-center mb-20">
        <div className="w-full mx-10 sm:mx-0 sm:w-1/3 flex">
          <input
            value={search}
            onChange={searcher}
            type="text"
            name="searcher"
            id=""
            className="w-full  uppercase bg-gray-100 border-2 border-pink-500 p-2 focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent rounded"
            placeholder="Buscar producto"
          />
          <button
            onClick={() => onSearch()}
            className="bg-pink-500 hover:bg-pink-700 py-2 px-6 rounded"
          >
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-16 px-20 sm:px-10">
         
        {result.map((item, index) => (
          <Link  key={index} to={`detail/${item.id}`}>
          <div
           
            className="w-full h-auto bg-white rounded-lg px-4 whitespace-nowrap pt-2 text-black" 
          >
            <StarItems completedReview={item.uploadReviews ? item.uploadReviews : []}/>
            
            <img
              className=" h-40 p-2 text-center mx-auto"
              src={item.image}
              alt="Album"
            />

           
             
              <div className="flex gap-2">
                <div className="border-black border-b-2 w-10 mb-4"></div>
                <div className="border-black border-b-2 w-2 mb-4"></div>
              </div>
              <h2 className="title text-lg text-left text-ellipsis overflow-hidden">{item.title}</h2>
          
            
              <button className="bg-rose-400 hover:bg-rose-500 w-full mt-2 rounded-md">
                <div className="text-center mx-auto">
                 
                </div>
              </button>
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
