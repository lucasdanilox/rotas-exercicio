import Button from "../../components/Button";
import Header from "../../components/Header";
import HomePage from "../../components/HomePage";

export default function Enrollment() {

    return (
        <section id="section-home-page">
            <header>
                <Header />
            </header>
            <main>
                <HomePage name_promotion="Página de inscrição" />
            </main>
            <div>
                <Button name_button="Ver promoção" />
            </div>
        </section>
    );
}