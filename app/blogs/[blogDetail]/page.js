import React from "react";

//API
import { fetchBlogPostBySlug } from "@/api/blogs";
import { endPoints } from "@/api/endpoints";

//LIB
import Link from "next/link";

//COMPONENT
import Breadcrumb from "@/components/Breadcrumb";
import BottomContactForm from "@/components/BottomContactForm";

//STYLES
import "../blog.css";

const BlogDetails = async ({ params }) => {
  const blogSlug = params?.blogDetail;

  const blog = await fetchBlogPostBySlug(blogSlug);

  return (
    <>
      <section className="banner__container position-relative">
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
        <div className="banner-image mt-4">
          <img
            src={endPoints.baseURL + blog.news_thumbnail}
            alt={blog.news_title.slice(0, 10)}
            loading="lazy"
            width="100%"
            height="100%"
            // className="img-fluid"
          />
        </div>
        <h1 className="blog-title position-absolute text-white text-center w-100">
          {blog.news_title}
        </h1>
        <div className="image_border__fake">
          <svg
            width="100%"
            className="swoop"
            viewBox="0 0 2400 275"
            preserveAspectRatio="xMidYMax slice"
          >
            <path d="M-7.966,0.567C79.31,24.829 167.298,46.498 255.881,65.441C405.32,97.397 556.396,121.678 708.315,138.217C875.184,156.385 1043.06,165.209 1210.91,164.81C1418.79,164.316 1626.63,149.646 1832.48,120.639C1957.73,102.99 2082.23,80.043 2205.54,51.853C2273.41,36.338 2340.89,19.212 2407.97,0.567L2410,0L2410,284.823L-10,284.823L-10,0L-7.966,0.567Z"></path>
          </svg>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-9 col-10 mx-auto">
            <section className="blog__desc">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.news_description,
                }}
              />
              <article>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.city.details,
                  }}
                />
              </article>

              <div className="tags-container d-flex align-items-baseline">
                <div className="fw-bold">Tags</div>
                <div className="ms-5">
                  <Link href={`/blogs?city=${blog.city.slug}`}>
                    <div className="tag text-dark">
                      <p>{blog.city.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
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
    </>
  );
};

export default BlogDetails;
