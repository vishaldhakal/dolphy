import React from "react";

//LIB
import Link from "next/link";

//API
import { fetchAllBlogPosts } from "@/api/blogs";
import { endPoints } from "@/api/endpoints";

const Blogs = async () => {
  const data = await fetchAllBlogPosts();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-10 mx-auto">
          <div className="blogs container">
            <div className="row g-4">
              <div className="col-sm-12 col-lg-9 ">
                <div className="row">
                  {data.map((blog, index) => {
                    const descLength = blog.news_description.length;

                    return (
                      <div className="col-sm-12 col-md-6 col-lg-4 m-2">
                        <div
                          className="card border-0 shadow-lg rounded-mine my-3 my-md-0 blog-container"
                          key={index}
                        >
                          <div className="image-container w-100">
                            <img
                              loading="lazy"
                              className=" card-img-top "
                              src={endPoints.baseURL + blog.news_thumbnail}
                              alt={blog.news_title.slice(0, 10)}
                            />
                          </div>
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title font-weight-bold text-dark title-container">
                              {blog.news_title}
                            </h5>
                            <div className="card-text flex-grow-1">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `${blog.news_description.slice(
                                    0,
                                    100
                                  )}${descLength > 100 ? " ..." : ""}`,
                                }}
                              />
                            </div>

                            <div className="tags-container">
                              <div className="tag">
                                <p>{blog.city.name}</p>
                              </div>
                            </div>
                          </div>

                          <div className="card-footer ps-3 py-0">
                            <Link href={`/blogs/${blog.id}`}>
                              <div className="readmore__text d-flex align-items-baseline mt-2">
                                <p>read article</p>
                                <div className="ps-2">
                                  <i className="bi bi-arrow-right-short"></i>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col-lg-3">insights on particular city</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;