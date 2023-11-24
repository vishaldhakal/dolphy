import React from "react";

//API
import { fetchBlogPostByCity, fetchBlogPostBySlug } from "@/api/blogs";
import { endPoints } from "@/api/endpoints";

//LIB
import Link from "next/link";
import dayjs from "dayjs";

//COMPONENT
import BottomContactForm from "@/components/BottomContactForm";
import SocialMediaShare from "@/components/SocialMediaShare";

//STYLES
import "../blog.css";

export async function generateMetadata({ params }, parent) {
  const blogSlug = params?.blogDetail;

  const blog = await fetchBlogPostBySlug(blogSlug);

  return {
    ...parent,
    alternates: {
      canonical: `https://dolphy.ca/blogs/${blogSlug}`,
    },
    title: `${blog.news_title}`,
  };
}

const BlogDetails = async ({ params }) => {
  const blogSlug = params?.blogDetail;

  const blog = await fetchBlogPostBySlug(blogSlug);
  const relatedBlogPosts = await fetchBlogPostByCity(blog.city.slug);

  //filter out related blogs for the same city
  const filteredBlogPostsBasedOnCity = relatedBlogPosts.filter(
    (relatedBlog) => blog.slug != relatedBlog.slug
  );

  return (
    <div className="blog__details">
      <section className="banner__container position-relative">
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
            <section className="blog__author d-flex align-items-center mt-3">
              <div className="blog__author-image">
                <img
                  width="80px"
                  height="80px"
                  className="img-fluid rounded-circle"
                  src="https://api.homebaba.ca/media/agent_UGllzo7.jpg"
                  alt="blog-author"
                />
              </div>
              <div className="blog__author-detail d-flex flex-column justify-content-center ps-4">
                <div className="fw-bold">Mr Precon</div>
                <div className="text-secondary">
                  {dayjs(blog?.date_of_upload).format("MMMM DD, YYYY")}
                </div>
              </div>
            </section>
            <section className="blog__desc mt-4">
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
                  <Link href={`/blogs/category/${blog.city.slug}`}>
                    <div className="tag">
                      <p>{blog.city.name}</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="blog__share mt-5">
                <SocialMediaShare />
              </div>
            </section>

            {filteredBlogPostsBasedOnCity.length > 0 ? (
              <>
                <div className="pt-5 mt-5"></div>
                <section className="blogs__related">
                  <h3 className="main-title">You might be interested in</h3>
                  <article>
                    <div className="row">
                      {filteredBlogPostsBasedOnCity.map((blog, index) => {
                        return (
                          <div
                            className="col-sm-12 col-md-6 col-lg-4 mb-4"
                            key={index}
                          >
                            <BlogCard blog={blog} />
                          </div>
                        );
                      })}
                    </div>
                  </article>
                </section>
              </>
            ) : null}
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
  );
};

export default BlogDetails;
