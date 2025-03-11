import React from 'react';
import { Card } from 'react-bootstrap';
import style from '../ListaDeEstudos.module.css';
import { ITarefa } from '../../../types/ITarefa';
import { useEstudos } from '../../../contexts/EstudosContext';

const CardEstudo = ({ tarefa, tempo, selecionado, completado, id }: ITarefa) => {
    const { selecionaEstudo } = useEstudos();

    return (
        <Card
            className={`m-2 ${style.custom_card} ${selecionado ? style.item_selecionado : ''}
            ${completado ? style.item_completado : ''}`}
            onClick={() => !completado && selecionaEstudo({ tarefa, tempo, selecionado, completado, id })}
        >
            <Card.Body className="text-white">
                <Card.Title>{tarefa}</Card.Title>
                <Card.Text>{tempo} {completado && <span className= {style.concluido} aria-label='Tarefa completada'></span>}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardEstudo;
