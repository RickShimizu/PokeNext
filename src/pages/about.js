import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About(){
    return(
        <div className={styles.about}>
            <h1>sobre o projeto</h1>

            <p>dsidjasjoidjaoisjdoiasjidjaisojdij sijdioasjid asijdoiajsoi jdoiasjdoijsoidj asiojdasjdoiajsidjaoij</p>

            <Image src='/images/charizard.png' width='300' height='300' alt="Charizard" />
        </div>
    )   
}