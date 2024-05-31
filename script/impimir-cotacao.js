export default function imprimirCotacao(nome, valor) {
    const lista = document.querySelector(`[data-lista="${nome}"]`);
    lista.innerHTML = "";

    const plurais = {
        dolar: "dolares",
        iene: "ienes",
    };

    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listaItem = document.createElement("li");
        listaItem.innerHTML = `${multiplicador} ${multiplicador === 1 ? nome : plurais[nome]}: R$${(
            valor * multiplicador
        ).toFixed(2)}`;
        lista.appendChild(listaItem);
    }
}
