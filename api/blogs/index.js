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

export const fetchBlogPostBySlug = async (slug) => {
  const res = await fetch(`https://api.dolphy.ca/api/news/${slug}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export const fetchBlogPostByCity = async (citySlug) => {
  const res = await fetch(`https://api.dolphy.ca/api/news/?city=${citySlug}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export const fetchCities = async () => {
  const res = await fetch("https://api.dolphy.ca/api/all-city/", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};
