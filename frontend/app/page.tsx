import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
