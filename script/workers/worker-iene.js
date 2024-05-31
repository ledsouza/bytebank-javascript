async function getIene() {
    const response = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL");
    const moedas = await response.json();
    postMessage(moedas.JPYBRL);
}

addEventListener("message", () => {
    getIene();
    setInterval(getIene, 5000);
});
