export async function getDolar() {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const moedas = await response.json();
    return moedas.USDBRL.ask;
}
