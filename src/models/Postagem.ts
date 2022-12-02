import Tema from "./Tema"

interface Postagem{
    id: number;
    titulo: string;
    midia_url: string;
    texto: string;
    data: string;
    tema?: Tema| null
}

export default Postagem