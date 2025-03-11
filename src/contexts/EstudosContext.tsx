import React from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from '../types/ITarefa';

interface EstudosContextType {
    estudos: ITarefa[];
    selecionado: ITarefa | null;
    adicionarEstudo: (novoEstudo: ITarefa) => void;
    selecionaEstudo: (tarefaSelecionada: ITarefa) => void;
    finalizaEstudo: (tarefaFinalizada: ITarefa) => void;
}

const EstudosContext = createContext<EstudosContextType | undefined>(undefined);

export const EstudosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [estudos, setEstudos] = React.useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa | null>(null);

    const adicionarEstudo = (novoEstudo: ITarefa) => {
        setEstudos((prevEstudos) => [
            ...prevEstudos,
            { ...novoEstudo, selecionado: false, completado: false, id: uuidv4() },
        ]);
    };

    const selecionaEstudo = (tarefaSelecionada: ITarefa) => {
        setSelecionado(tarefaSelecionada);
        setEstudos((prevEstudos) =>
            prevEstudos.map((tarefa) => ({
                ...tarefa,
                selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
            }))
        );
        
    };

    const finalizaEstudo = () => { 
        if(selecionado) {
            setSelecionado(null);
            setEstudos((prevEstudos) => prevEstudos.map((tarefa) => {
                if(tarefa.id === selecionado.id) {
                    return {
                        ...tarefa,
                        selecionado: false,
                        completado: true,
                    };
                }
                return tarefa;
            }));
        }
    };

    return (
        <EstudosContext.Provider value={{ estudos, selecionado, adicionarEstudo, selecionaEstudo, finalizaEstudo }}>
            {children}
        </EstudosContext.Provider>
    );
};

export const useEstudos = () => {
    const context = useContext(EstudosContext);
    if (!context) {
        throw new Error('useEstudos must be used within a EstudosProvider');
    }
    return context;
};
