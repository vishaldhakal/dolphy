import { notFound } from "next/navigation";

export const fetchAllBlogPosts = async () => {
  const res = await fetch("https://api.dolphy.ca/api/news/", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export const fetchBlogPostById = async (id) => {
  const res = await fetch(`https://api.dolphy.ca/api/news/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};
