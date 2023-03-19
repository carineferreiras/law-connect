import PropTypes from "prop-types"

import styles from "./NavBar.module.css"
import {Button} from "../Button";

export function NavBar() {

    return <nav className={styles.container}>
        <img
          alt="LawConnect Logo"
          src="/logos/LawConnect-logo-reverse-RGB.png"
          width="200px"
          height="27px"
         
        />
        
        <div
            style={{width:'280px'}}
            className={styles['nav-menu']}
        >
            <span>For people</span>
            <span>For business</span>
            <span>Contact</span>
        </div>
    
        <div
            style={{width:'230px'}}
            className={styles['nav-menu']}
        >
            <span>Login</span>
            <Button>Create an Account</Button>
        </div>
        
        <div className={styles['mobile-nav-menu']}>
            |||
        </div>
    </nav>
}

NavBar.propTypes = {
    className: PropTypes.string
};