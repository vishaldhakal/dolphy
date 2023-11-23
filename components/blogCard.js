import React from "react";

//LIB
import Link from "next/link";

//API
import { endPoints } from "@/api/endpoints";

//STYLES
import "../app/blogs/blog.css";

const BlogCard = ({ blog }) => {
  const descLength = blog.news_description.length;
  return (
    <div className="card border-0 shadow-lg rounded-mine my-3 my-md-0 blog-container position-relative">
      {/* Wrap the card in the Link component */}
      <Link href={`/blogs/${blog.slug}`} passHref className="h-100">
        <div className="image-container w-100">
          <img
            loading="lazy"
            className="card-img-top"
            src={endPoints.baseURL + blog.news_thumbnail}
            alt={blog.news_title.slice(0, 10)}
          />
        </div>
        <div className="card-body d-flex flex-column text-dark">
          <h5 className="card-title font-weight-bold text-dark title-container">
            {blog.news_title}
          </h5>
          <div className="card-text flex-grow-1 mb-4">
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.news_description.slice(0, 100)}${
                  descLength > 100 ? " ..." : ""
                }`,
              }}
            />
          </div>
          <div className="tags-container position-absolute bottom-0 mb-3">
            <Link href={`/blogs/category/${blog.city.slug}`}>
              <div className="tag text-dark">
                <p>{blog.city.name}</p>
              </div>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
