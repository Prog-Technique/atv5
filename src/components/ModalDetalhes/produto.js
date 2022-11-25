import './modal.css';

import { FiArrowLeft } from 'react-icons/fi';

export default function ModalDetalhes({conteudo, close}){
    return(
        <div className="modal">
            <div className="container">
                <button className="close" onClick={ close }>
                    <FiArrowLeft color="#000" size={25}/>
                </button>

                <div>
                    <h2>Dados do produto</h2>

                    <div className="row">
                        <span>
                            Nome: <a>{conteudo.nomeProduto}</a>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            Preço: <a>{conteudo.precoProduto}</a>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}