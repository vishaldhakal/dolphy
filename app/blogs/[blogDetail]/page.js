import React from "react";

//API
import { fetchBlogPostById } from "@/api/blogs";

//COMPONENTS
import Container from "@/components/container";

//STYLES
import "../blog.css";

const BlogDetails = async ({ params }) => {
  const blogId = params?.blogDetail;

  const blog = await fetchBlogPostById(blogId);
  console.log(blog);
  return (
    <>
      <section className="banner__container position-relative">
        <div className="banner-image">
          <img
            src={blog.news_thumbnail}
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

      <Container>
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
            <div className="tag ms-5">
              <p>{blog.city.name}</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default BlogDetails;
