import React from "react";

//API
import { fetchCities } from "@/api/blogs";

//LIB
import Link from "next/link";

const CityInsights = async () => {
  const cities = await fetchCities();
  return (
    <>
      <h3 className="fw-bold fs-5 mb-4">Insights on Particular City</h3>
      {cities.map((city) => {
        return (
          <p key={city.slug}>
            <Link href={`/blogs/category/${city.slug}`}>{city.name}</Link>
          </p>
        );
      })}
    </>
  );
};

export default CityInsights;
