import React, { useEffect, useState } from 'react';
import style from './Cronometro.module.css';
import Botao from '../Botao';
import Relogio from './Relogio';
import { useEstudos } from '../../contexts/EstudosContext';
import { tempoParaSegundos } from '../../common/utils/time';

const Cronometro = () => {
    const { selecionado, finalizaEstudo } = useEstudos();
    const [tempo, setTempo] = useState<number>();
    const [rodando, setRodando] = useState<boolean>(false); // Novo estado para verificar se está rodando

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
            setRodando(false); // Reseta o estado ao selecionar uma nova tarefa
        }
    }, [selecionado]);

    useEffect(() => {
        if (rodando && tempo === 0 && selecionado) {
            finalizaEstudo(selecionado);
            setRodando(false); // Evita chamadas repetidas
        }
    }, [tempo, selecionado, rodando, finalizaEstudo]);

    const comecarCronometro = (): void => {
        if (!tempo || tempo <= 0) return;

        setRodando(true); // Marca que o cronômetro foi iniciado

        const interval = setInterval(() => {
            setTempo((tempoAtual) => {
                if (tempoAtual && tempoAtual > 0) {
                    return tempoAtual - 1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);
    };

    return (
        <div className={`${style.cronometro}`}>
            <p className={`mt-3 ${style.titulo}`}>Escolha um card e inicie o cronômetro</p>
            <div className={`${style.relogioWrapper}`}>
                <Relogio tempo={tempo} />
            </div>
            <Botao type="button" functionBotao={comecarCronometro}>
                Começar!
            </Botao>
        </div>
    );
};

export default Cronometro;