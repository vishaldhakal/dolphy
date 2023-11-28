import React from "react";

//API
import { fetchCities } from "@/api/blogs";

//LIB
import Link from "next/link";

const CityInsights = async ({ particularCity }) => {
  const cities = await fetchCities();

  const isActiveCity = (city) => {
    if (!particularCity && city === "all") return true;
    return city.includes(particularCity);
  };
  return (
    <div className="city-insights-container">
      <h3 className="insights-title">Insights on Particular City</h3>
      <div className="city-list">
        {cities.map((city) => (
          <Link
            href={
              city?.redirectTo
                ? `${city?.redirectTo}`
                : `/blogs/category/${city.slug}`
            }
            className="city-link"
            key={city.slug}
          >
            <div
              className={`city-item ${isActiveCity(city.slug) ? "active" : ""}`}
            >
              {city.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CityInsights;
