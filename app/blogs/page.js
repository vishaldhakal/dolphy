import React from "react";

//API
import { fetchAllBlogPosts } from "@/api/blogs";

//COMPONENTS
import BlogCard from "@/components/blogCard";
import Breadcrumb from "@/components/Breadcrumb";
import BottomContactForm from "@/components/BottomContactForm";
import CityInsights from "@/components/CityInsights";

export async function generateMetadata({ params }, parent) {
  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/blogs/`,
    },
    title: "Dolphy Blogs | Insights on real Estate",
  };
}

const Blogs = async () => {
  const blogPosts = await fetchAllBlogPosts();

  return (
    <div className="pages">
      <div className="container-fluid justify-content-start">
        <Breadcrumb
          homeElement={"Home"}
          separator={
            <span>
              {" "}
              <svg
                className="svg minearr"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z"
                  fill={"#869099"}
                ></path>
              </svg>{" "}
            </span>
          }
          activeClasses="text-dark"
          containerClasses="d-flex align-items-center p-0 m-0 pt-4 breadcrumb"
          listClasses="mx-1"
          capitalizeLinks
        />
      </div>

      <div className="container mt-4">
        <div className="row mt-3">
          <div className=" mx-auto">
            <div className="blogs container">
              <div className="row g-4">
                <div className="col-sm-12 col-lg-9 ">
                  <h1 className="main-title text-center text-md-start mb-4">
                    15+ Insightful blogs in dolphy
                  </h1>
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
                  <CityInsights />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5"></div>
        <div className="py-5 my-5 d-none d-md-block">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <img
                src="/contact-bottom-2.png"
                alt="dce"
                className="img-fluid w-25 w-smm-50 mb-3"
              />
            </div>
            <h2 className="fw-mine text-center px-md-4 fs-4">
              Contact Dolphy for New Construction Homes
            </h2>
            <div className="row row-cols-1 row-cols-md-3 mt-3">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <BottomContactForm></BottomContactForm>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
