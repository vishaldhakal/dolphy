import React from "react";

//API
import { fetchBlogPostById } from "@/api/blogs";

//COMPONENTS
import Container from "@/components/container";

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
      </section>
    </Container>
  );
};

export default BlogDetails;
