import React, { useEffect, useState } from "react";
import NavGraphic from "./NavGraphic";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Chart from "react-apexcharts";

const Graphic = () => {
  const [openStar, setOpenStar] = useState([]);
  const [title, setTitle] = useState([]);
  const [brand, setBrand] = useState([]);

  const [properties, setProperties] = useState([]);
  const [dataGraph, setDataGraph] = useState(false);

  const sortByStars = () => {
    setDataGraph(false);
    const sortData = [...properties];
    const sorted = sortData.sort((a, b) => (a.stars < b.stars ? 1 : -1));
    setProperties(sorted);
  
  };
  const sortByPriceRatio = () => {
    setDataGraph(true);
    const sortData = [...properties];
    const sorted = sortData.sort((a, b) =>
      a.priceRatio < b.priceRatio ? 1 : -1
    );
    setProperties(sorted);

   
  };

  useEffect(() => {
    const stars = [];
    const propes = [];
    const priceRatio = [];

    const getStars = () => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "products");
      getDocs(queryCollection).then((res) => {
        setTitle(res.docs.map((product) => product.data().title));
        setBrand(res.docs.map((product) => product.data().brand))
        const starsArrayOpen = res.docs.map((product) =>
          product.data().uploadReviews.map((stars) => parseInt(stars.stars))
        );

        for (let i = 0; i < starsArrayOpen.length; i++) {
          const starsReduceOpen = starsArrayOpen[i].reduce((a, b) => a + b, 0);
          const starsAverage =
            starsReduceOpen !== 0
              ? (starsReduceOpen / starsArrayOpen[i].length).toFixed(2)
              : starsReduceOpen.toFixed(2);
          stars.push(starsAverage);
        }

        // setOpenStar(arrayOpen)
        setOpenStar(stars);

        const tit = res.docs.map((product) => product.data().title);
        const brandProp = res.docs.map((product) => product.data().brand);
        const price = res.docs.map((product) => parseInt(product.data().price));

        for (let i = 0; i < stars.length; i++) {
          priceRatio.push(((stars[i] / price[i]) * 2.5).toFixed(2));
        }

        for (let i = 0; i < stars.length; i++) {
          propes.push({
            tit: tit[i],
            brand: brandProp[i],
            stars: stars[i],
            priceRatio: priceRatio[i],
          });
        }
        const sorted = propes.sort((a, b) => (a.stars < b.stars ? 1 : -1));
        setProperties(sorted);
      });
    };

    getStars();
    

  }, []);

  return (
    <div className="">
      <div className="bg-primary  text-center mx-auto ">
        <NavGraphic />
        <button
          className="w-1/3 text-xs lg:text-md lg:w-1/6 border rounded-lg ml-10 py-2 px-4 lg:px-8 text-white hover:bg-pink-900 "
          onClick={sortByStars}
        >
          Order by Stars rating
        </button>
        <button
          className="w-1/3 text-xs lg:text-md lg:w-1/6 border rounded-lg ml-10 py-2 px-4 lg:px-8 text-white hover:bg-pink-900"
          onClick={sortByPriceRatio}
        >
          Order by Price-Quality
        </button>
        <div className="w-11/12 mt-4 pb-10">
          <Chart
            height={500}
            type="bar"
            series={[
              {
                name: "",
                data: !dataGraph
                  ? properties.map((item) => item.stars)
                    ? properties.map((item) => item.stars)
                    : openStar
                  : properties.map((item) => item.priceRatio),
              },
            ]}
            options={{
              plotOptions: {
                bar: {
                  distributed: true,
                  horizontal: true,
                  barHeight: "70%",
                },
              },
              // title: {
              //   text: "BarChar Developed by DevOps Team",
              //   style: { fontSize: 30 },
              // },

              // subtitle: {
              //   text: "This is BarChart Graph",
              //   style: { fontSize: 18 },
              // },

              fill: {
                colors: [
                  "#FAD6A5",
                  "#E91E63",
                  "#9C27B0",
                  "#301E67",
                  "#F48484",
                  "#B6EADA",
                  "#FAD6A5",
                  "#9C27B0",
                  "#F48484",
                ],
              },
              theme: { mode: "light" },

              xaxis: {
                categories: properties.map((item) => item.tit)
                  ? properties.map((item) => item.tit)
                  : title,
                title: {
                  text: "Rating",
                  
                  style: { color: "#FFF", fontSize: 30 },
                },
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: {fontSize: 15, colors: "#FFF" },
                },
              },

              yaxis: {
                
                categories: properties.map((item) => item.tit)
                  ? properties.map((item) => item.tit)
                  : title,
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: {fontSize: 15, colors: "#FFF"},
                  
                },
                title: {
                  text: "Products",
                  style: { color: "#FFF", fontSize: 15 },
                  offsetX: 10,
                },
              },

              legend: {
                show: false,
              
              },

              dataLabels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: {
                  colors: ["#f4f4f4"],
                  fontSize: 15,
                },
              },
              responsive: [
                {
                  breakpoint: 640,
                  options: {
                    yaxis: {
                      labels: {
                        formatter: (val) => {
                          return `${val}`;
                        },
                        style: { fontSize: 0.5, colors: ["#FFF"] },
                      },
                    },
                    xaxis: {
                      tickPlacement: "on",
                      categories: properties.map((item) => item.tit)
                        ? properties.map((item) => item.tit)
                        : title,

                      title: {
                        text: "Rating",
                        style: { color: "#FFF", fontSize: 20 },
                        offsetX: 20,
                      },
                    },
                  },
                },
              ],
            }}
          ></Chart>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
