import "./Hero.css";
import { Link } from "react-router-dom";

import BannerInicio from "../../../assets/images/banners/BannerInicio.png";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-badge">
                    🚀 Placeholder text
                </span>

                <h1>
                    All you need
                    <br />
                    for your implementation.
                </h1>

                <p>
                    Find the best products for your needs and take your projects to the next level with our wide selection of high-quality items.
                </p>

                <div className="hero-actions">
                    <Link to="/products" className="hero-btn-primary">
                        Buy Now
                    </Link>

                    <Link to="/about" className="hero-btn-secondary">
                        About us
                    </Link>
                </div>

            </div>

            <img
                src={BannerInicio}
                alt="Banner Principal"
            />

        </section>
    );
}