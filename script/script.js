import { getHorario } from "./horario.js";
import { getDolar } from "./request-api.js";
import imprimirCotacao from "./impimir-cotacao.js";

const canvasGraficoDolar = document.getElementById("graficoDolar");

const graficoDolar = new Chart(canvasGraficoDolar, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Dólar",
                data: [],
                borderWidth: 1,
            },
        ],
    },
});

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    });
    grafico.update();
}

setInterval(async () => {
    const dolar = await getDolar();
    const horario = getHorario();
    adicionarDados(graficoDolar, horario, dolar);
    imprimirCotacao("dolar", dolar);
}, 5000);
