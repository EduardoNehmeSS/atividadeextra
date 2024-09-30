import styles from "./Promo.module.css"

function Promo(){
    return(
        <div className={styles.fundo}>
            <p>
                Promoção de verão para todos os trajes de banho e entrega expressa gratuita - OFF 50%
                <a href=""> Compre Agora! </a>
            </p>
        </div>
    )
}
export default Promo;