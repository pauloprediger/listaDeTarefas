import style from './Relogio.module.css';

interface RelogioProps {
    tempo: number | undefined;
}

const Relogio = ({tempo = 0} : RelogioProps) => {

    const min = Math.floor(tempo / 60);
    const sec = tempo % 60;
    const [dezenaMin, unidadeMin] = String(min).padStart(2, '0');
    const [dezenaSec, unidadeSec] = String(sec).padStart(2, '0');
    

    return (
        <div className="d-flex gap-1">
            <span className={style.relogioNumero}>{dezenaMin}</span>
            <span className={style.relogioNumero}>{unidadeMin}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}> {dezenaSec}</span>
            <span className={style.relogioNumero}>{unidadeSec}</span>
        </div>
    );
};

export default Relogio;
