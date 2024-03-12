import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import HomePage from "../../components/HomePage";

export default function Promotion() {

    return (
        <section id="section-home-page">
            <header>
                <Header />
            </header>
            <main>
                <HomePage name_promotion="Página de promoção" />
            </main>
            <div>
                <Link to="/enrollment">
                    <Button name_button="Quero participar" />
                </Link>
            </div>
        </section>
    );
}