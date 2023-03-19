import PropTypes from "prop-types"
import classnames from "classnames"

import styles from "./Button.module.css"

export function Button({ children: buttonContent, className, onClick=() => {} }) {
    const rootClassName = classnames(styles.button, className)

    return <button className={rootClassName} onClick={onClick}>{ buttonContent }</button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}