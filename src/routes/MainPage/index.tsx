import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import HomePage from "../../components/HomePage";

export default function MainPage() {

    return (
        <section id="section-home-page">
            <header>
                <Header />
            </header>
            <main>
                <HomePage name_promotion="Página inicial" />
            </main>
            <div>
                <Link to="/promotion">
                    <Button name_button="Ver promoção" />
                </Link>
            </div>
        </section>
    );
}