import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from './NovoEstudo.module.css';
import Botao from '../Botao';
import { useState } from 'react';
import { useEstudos } from '../../contexts/EstudosContext';
import { v4 as uuidv4 } from 'uuid';

const textStyle = {
    color: 'white',
};

const NovoEstudo = () => {
    const { adicionarEstudo } = useEstudos();

    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        adicionarEstudo({ 
            tarefa, 
            tempo, 
            selecionado: false, 
            completado: false, 
            id : uuidv4()
        });

        setTarefa('');
        setTempo('00:00:00');
    };

    return (
        <div className="bg-secondary d-flex flex-column justify-content-center align-items-center p-3 rounded w-100">
            <Form
                className="d-flex flex-column space-between align-items-center w-100"
                onSubmit={handleSubmit}
            >
                <div className="d-flex flex-row gap-3">
                    <div className="m-2">
                        <Form.Label style={textStyle} htmlFor="tarefa">
                            Adicione um novo estudo
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="O que você quer estudar"
                            className={`${styles.custom_input}`}
                            required
                            name="tarefa"
                            id="tarefa"
                            value={tarefa}
                            onChange={(e) => setTarefa(e.target.value)}
                        />
                    </div>
                    <div className="m-2">
                        <Form.Label style={textStyle} htmlFor="tempo">
                            Tempo
                        </Form.Label>
                        <Form.Control
                            type="time"
                            placeholder="Tempo"
                            step={1}
                            className={styles.custom_input}
                            required
                            name="tempo"
                            id="tempo"
                            min={'00:00:00'}
                            max={'01:30:00'}
                            value={tempo}
                            onChange={(e) => setTempo(e.target.value)}
                        />
                    </div>
                </div>

                {/* Div extra para manter a centralização do botão */}
                <div className="d-flex justify-content-center w-100 mt-2">
                    <Botao type="submit">Adicionar</Botao>
                </div>
            </Form>
        </div>
    );
};

export default NovoEstudo;
