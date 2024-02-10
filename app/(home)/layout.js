import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixedContact from "@/components/FixedContact";
import FixedWhatsapp from "@/components/FixedWhatsapp";

async function getCities() {
  const res = await fetch("https://api.dolphy.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCitiesandProjects() {
  const res = await fetch("https://api.dolphy.ca/api/all-precons", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RootLayout({ children }) {
  let cities = await getCities();
  let dropdown_cities = await getCitiesandProjects();
  return (
    <>
      {/* <FixedContact></FixedContact> */}
      <FixedWhatsapp></FixedWhatsapp>
      <Navbar cities={cities} dropdown_cities={dropdown_cities}></Navbar>
      {children}
      <Footer cities={cities}></Footer>
    </>
  );
}
