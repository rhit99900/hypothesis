import Image from "next/image";
import Hero from "./components/home/hero";
import Footer from "./components/common/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <Footer />
      </main>
    </div>
  );
}
