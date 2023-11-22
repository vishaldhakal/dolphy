import React from "react";

//API
import {
  fetchAllBlogPosts,
  fetchBlogPostByCity,
  fetchCities,
} from "@/api/blogs";

//LIB
import Link from "next/link";

//COMPONENTS
import BlogCard from "@/components/blogCard";

const Blogs = async ({ searchParams }) => {
  let blogPosts = null;
  if (searchParams?.city) {
    blogPosts = await fetchBlogPostByCity(searchParams?.city);
  } else {
    blogPosts = await fetchAllBlogPosts();
  }
  const cities = await fetchCities();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className=" mx-auto">
          <div className="blogs container">
            <div className="row g-4">
              <div className="col-sm-12 col-lg-9 ">
                <div className="row">
                  {blogPosts.length > 0 ? (
                    <>
                      {blogPosts.map((blog, index) => {
                        return (
                          <div
                            className="col-sm-12 col-md-6 col-lg-4 mb-4"
                            key={index}
                          >
                            <BlogCard blog={blog} />
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div>
                      <p className="fs-2 text-center fw-bold text-secondary">
                        No blog post found
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-3 ps-5">
                <h3 className="fw-bold fs-5">Insights on particular city</h3>
                {cities.map((city) => {
                  return (
                    <p key={city.slug}>
                      <Link href={`/blogs?city=${city.slug}`}>{city.name}</Link>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
