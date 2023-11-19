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
    <Container>
      <section className="banner__container">
        <img src={blog.news_thumbnail} alt={blog.news_title.slice(0, 10)} />
        <h2 className="blog-title">{blog.news_title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: blog.news_description,
          }}
        />
      </section>

      <section className="blog__desc">
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
  );
};

export default BlogDetails;
