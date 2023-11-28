import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedContact from "@/components/FixedContact";

async function getCities() {
  const res = await fetch("https://api.dolphy.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RootLayout({ children }) {
  let cities = await getCities();
  return (
    <>
      <FixedContact></FixedContact>
      <Navbar cities={cities}></Navbar>
      {children}
      <Footer cities={cities}></Footer>
    </>
  );
}
