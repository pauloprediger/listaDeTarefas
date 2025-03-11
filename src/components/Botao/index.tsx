import React from 'react';
import styles from './Botao.module.css';
import { Button } from 'react-bootstrap';

interface BotaoProps {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    functionBotao?: () => void;
}

const Botao = ({ children, type, functionBotao }: BotaoProps) => {
    return (
        <Button variant="primary" type={type} className={`${styles.custom_button} border-0`} onClick={functionBotao}>
            {children}
        </Button>
    );
};

export default Botao;
