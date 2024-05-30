export function getHorario() {
    const data = new Date();
    const horario = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    return horario;
}
