import HomePageItemsGrid from "@/components/home-page-items";

export default function Home() {
  return (
    <main>
      <h1 className="my-8 text-center text-4xl font-bold">
        Welcome to Our Marketplace
      </h1>
      <HomePageItemsGrid />
      {/* Other sections of your home page */}
    </main>
  );
}
