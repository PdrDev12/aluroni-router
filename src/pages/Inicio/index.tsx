/* eslint-disable react/react-in-jsx-scope */
import cardapio from "data/cardapio.json"

export default function inicio() {
    let pratosRecomendados = [...cardapio]
    return (
        <section>
            <h3>
                Recomendações da cozinha
            </h3>
            <div>

            </div>
        </section>
    )
}