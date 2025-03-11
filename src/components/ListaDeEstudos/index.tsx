import React from 'react';
import styles from './ListaDeEstudos.module.css';
import CardEstudo from './CardEstudo';
import { useEstudos } from '../../contexts/EstudosContext';
import { ITarefa } from '../../types/ITarefa';

const ListaDeEstudos: React.FC = () => {
    const { estudos } = useEstudos(); // estudos já deve ser ITarefa[]

    return (
        <div className={`d-flex flex-column ${styles.listaEstudos}`}>
            <div className="d-flex align-items-center justify-content-center p-2 text-white">
                Estudos do dia
            </div>
            <div className={`d-flex flex-column gap-2 p-2 ${styles.conteudo}`}>
                {estudos.map((item: ITarefa) => (
                    <CardEstudo key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ListaDeEstudos;
