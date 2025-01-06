import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import './Colaborador.css'

const Colaborador = (props) => {
    const favoritar = () => {
        props.aoFavoritar(props.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.nome} />
            </div>

            <div className="info">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className="favoritar">
                    {props.favorito
                        ?
                        <AiFillHeart {...propsFavorito} color="red" />
                        :
                        <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>

            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => props.aoDeletar(props.id)}
            />
        </div>
    )
}

export default Colaborador