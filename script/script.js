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

let workerDolar = new Worker("./workers/worker-dolar.js");
workerDolar.postMessage("usd");

workerDolar.addEventListener("message", (evento) => {
    const horario = getHorario();
    const valorDolar = evento.data.ask;
    adicionarDados(graficoDolar, horario, valorDolar);
    imprimirCotacao("dólar", valorDolar);
});
