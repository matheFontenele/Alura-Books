import { livros } from './dadosUltimosLancamentos'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png' 
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt={livro.nome}/>
                ))}
            </NovosLivrosContainer>
                <CardRecomenda
                    titulo="Talvez voce se interesse por"
                    subtitulo="Angular 11"
                    descricao="Construindo os bagui"
                    img={imagemLivro}
                />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos