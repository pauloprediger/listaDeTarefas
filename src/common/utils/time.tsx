export function tempoParaSegundos (tempo : string) {
    const [horas = 0, minutos = 0, segundos = 0] = tempo.split(':').map(Number);
    return horas * 3600 + minutos * 60 + segundos;
}   