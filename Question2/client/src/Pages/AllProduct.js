import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const AllProduct = ({ cat }) => {
  console.log(cat);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:8000/categories/${cat}/products?top=10&minPrice=1&maxPrice=10000&page=1&sortBy=price&sortOrder=asc`
    );
    console.log(response.data);
    setData(response.data.products);
  };
  useEffect(() => {
    fetchData();
  }, [cat]);
  return (
    <div className="flex flex-wrap gap-10 rounded-md">
      {data?.map((e) => (
        <div className="w-[300px] h-[300px] bg-gray-500 flex flex-col flex-wrap text-white rounded-md justify-center items-center">

            <div>{e.productName}</div>
            <div>{e.price}</div>
            <div>{e.company}</div>
            <div>{e.rating}</div>
            </div>
      ))}
    </div>
  );
};

export default AllProduct;
