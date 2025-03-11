import NovoEstudo from '../components/NovoEstudo';
import Cronometro from '../components/Cronometro';
import ListaDeEstudos from '../components/ListaDeEstudos';
import './App.css';
import { EstudosProvider } from '../contexts/EstudosContext';

function App() {
    return (
        <>
            <div className="bg-dark d-flex justify-content-center align-items-center p-3 custom_div">
                <div className="bg-dark d-flex justify-content-center align-items-center p-3 custom_div">
                    <div className="d-flex flex-column flex-md-row justify-content-center w-100 gap-3">
                        <EstudosProvider>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <NovoEstudo />
                                <Cronometro />
                            </div>
                            <div className="d-flex justify-content-center w-100 pt-1 custom_div_lista_de_estudos">
                                <ListaDeEstudos />
                            </div>
                        </EstudosProvider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
