import PropTypes from "prop-types"
import classnames from "classnames"

import styles from "./Section.module.css"

export const ORIENTATION = {
    HORIZONTAL: "container--horizontal",
    VERTICAL: "container--vertical",
}

export function Section({title, hero, gray, children, className, orientation=ORIENTATION.HORIZONTAL }) {
    const rootClassName = classnames(styles.container, styles[orientation], className);
    const bgColor = hero ? 'transparent' : gray?'rgb(245,245,245)':'#fff'
    
    return <div style={{backgroundColor:bgColor}} className={styles['section-container']}>
        <div className={styles['section-title']}>{title}</div>
        <div className={rootClassName}>
            {children}
        </div>
    </div>
    
}


Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    orientation: PropTypes.oneOf(Object.values(ORIENTATION))
}