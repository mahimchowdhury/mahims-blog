import Link from "next/link";
import styles from '../styles/Home.module.css'
const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <p>Copyright 2022 all rights reserved</p>
            <Link href='https://github.com/mahimchowdhury'>Designed by Mahim</Link>
        </div>
     );
}
 
export default Footer;