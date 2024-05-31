import { getHorario } from "./horario.js";
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

let workerDolar = new Worker("./script/workers/worker-dolar.js");
workerDolar.postMessage("usd");

workerDolar.addEventListener("message", (evento) => {
    const horario = getHorario();
    const valorDolar = evento.data.ask;
    adicionarDados(graficoDolar, horario, valorDolar);
    imprimirCotacao("dólar", valorDolar);
});

const canvasGraficoIene = document.getElementById("graficoIene");
const graficoIene = new Chart(canvasGraficoIene, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Iene",
                data: [],
                borderWidth: 1,
            },
        ],
    },
});
