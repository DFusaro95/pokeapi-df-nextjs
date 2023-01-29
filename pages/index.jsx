import FormHome from "@/components/home/FormHome";
import Header from "@/components/shared/Header";
import { Inter } from "@next/font/google";
import variable from "../styles/variable.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="pokedex">
      <Header />
      <div className="start">
        {/* warning modal */}
      </div>
      <header className={variable.title}>
        <h2>Identify Yourself:</h2>
        <p>Enter you trainer credentials to see the Pokedex</p>
      </header>
      <FormHome />
    </section>
  );
}
