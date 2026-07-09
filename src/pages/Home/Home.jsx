import Hero from "../../components/Home/Hero/Hero";
import Categories from "../../components/Home/Categories/Categories";
import Benefits from "../../components/Home/Benefits/Benefits";
import Newsletter from "../../components/Home/Newsletter/Newsletter";
import "./Home.css";

export default function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <Benefits />
            <Newsletter />
        </>
    );
}