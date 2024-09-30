import style from "./header.module.css"
import { Search } from "lucide-react"


function Header(){
    return(
        <header className={style.cabecalho}>
            <h1 className={style.title}>Daniel Lindo!!</h1>
            <nav className={style.links}>
                <p className={style.element}>Casa</p>
                <p className={style.element}>Contato</p>
                <p className={style.element}>Sobre</p>
                <p className={style.element}>Entrar</p>
            </nav>
                <div className={style.inputWrapper}>
                <input type="text" className={style.input} placeholder="O que você está procurando?" itemScope/>
                <span>
                    <Search size={20} />
                </span>
                </div>
                
                 
        </header>
    )
}

export default Header;