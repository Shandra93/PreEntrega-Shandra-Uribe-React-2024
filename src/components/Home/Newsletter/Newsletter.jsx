import "./Newsletter.css";

export default function Newsletter() {
    return (
        <section className="newsletter">
            <div>
                <span>Join our newsletter</span>
                <h2>Receive exclusive offers</h2>
                <p>
                    Subscribe and receive promotions, launches and special discounts.
                </p>
            </div>

            <form className="newsletter-form">
                <input
                    type="email"
                    placeholder="Your email address"
                />
                <button type="submit">
                    Subscribe
                </button>
            </form>
        </section>
    );
}