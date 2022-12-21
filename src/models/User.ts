import Postagem from "./Postagem";

interface User{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto_url: string;
    tipo_usuario: string;
    postagem?:Postagem[];
}

export default User