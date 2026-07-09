import {
    FaShippingFast,
    FaLock,
    FaHeadset,
    FaStar
} from "react-icons/fa";

import "./Benefits.css";

const benefits = [
    {
        icon: <FaShippingFast />,
        title: "Fast Shipping",
        text: "Safe and fast deliveries throughout Mexico."
    },
    {
        icon: <FaLock />,
        title: "Secure Payment",
        text: "Your purchases are protected at all times."
    },
    {
        icon: <FaHeadset />,
        title: "24/7 Support",
        text: "We're here to help you whenever you need it."
    },
    {
        icon: <FaStar />,
        title: "Guaranteed Quality",
        text: "Products selected with high standards."
    }
];

export default function Benefits() {
    return (
        <section className="benefits-section">
            <div className="section-header light">
                <span>Benefits</span>
                <h2>Why buy from us?</h2>
            </div>

            <div className="benefits-grid">
                {benefits.map((benefit) => (
                    <article className="benefit-card" key={benefit.title}>
                        <div className="benefit-icon">
                            {benefit.icon}
                        </div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}