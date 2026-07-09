import {
    FaLaptop,
    FaHeadphones,
    FaGamepad,
    FaMobileAlt,
    FaClock
} from "react-icons/fa";

import "./Categories.css";

const categories = [
    { icon: <FaLaptop />, title: "Placeholder1" },
    { icon: <FaHeadphones />, title: "Placeholder2" },
    { icon: <FaGamepad />, title: "Placeholder3" },
    { icon: <FaMobileAlt />, title: "Placeholder4" },
    { icon: <FaClock />, title: "Placeholder5" },
];

export default function Categories() {
    return (
        <section className="categories-section">
            <div className="section-header">
                <span>Features</span>
                <h2>Buy by category</h2>
            </div>

            <div className="categories-grid">
                {categories.map((category) => (
                    <article className="category-card" key={category.title}>
                        <div className="category-icon">
                            {category.icon}
                        </div>
                        <h3>{category.title}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}