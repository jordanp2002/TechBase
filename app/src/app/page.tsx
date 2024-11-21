
import NavBar from "@/app/navbar/navbar";
import FilterBar from "@/app/filter/filter";
import ProductList from "@/app/cards/cards";
import React from "react";


export default function Home() {
  return (
      <div className="h-screen">
          <NavBar/>
          <div className="flex justify-center items-start mt-20">
              <div className="bg-blue-600 rounded-lg shadow-lg p-4 mx-40">
                  <FilterBar/>
              </div>
          </div>
          <div className="flex justify-center items-start mt-10">
              <ProductList/>
          </div>
      </div>
  );
}