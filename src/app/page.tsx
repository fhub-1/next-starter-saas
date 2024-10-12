import HomePageItemsGrid from "@/components/home-page-items";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="my-8 text-4xl font-bold">Discover Amazing Deals</h1>
      <HomePageItemsGrid />
      {/* Other sections of your home page */}
    </main>
  );
}
