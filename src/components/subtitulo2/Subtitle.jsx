import styles from "./subtitle.module.css"
import left from '../../assets/setaesquerda.png'
import right from '../../assets/setadireita.png'

function Subtitle(){
    return (
        <div className={styles.subtitle}>
            <p className={styles.text}>Hoje</p>
            <div className={styles.second}>
                <div className={styles.doubleelements}>
                <h1 className={styles.text2}>Descontos Rapidos</h1>
                </div>
                <div>
                    <img src={left} />
                    <img src={right} />
                </div>
            </div>
        </div>
    )
}

export default Subtitle;