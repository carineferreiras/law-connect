import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Card.module.css"

export function Card({ backgroundColorClass, children: cardContent, className, imageAlt, imagePath, title }) {
    const rootClassName = classnames(styles.card, className);

    return <div className={rootClassName}>
        <div className={classnames(styles["card__face"], styles["card__face__recto"])}>
            <div className={styles["card__content"]}>
                <div style={{backgroundImage: `url(${imagePath})`}} className={classnames(styles.icon, backgroundColorClass)}></div>
            </div>
        </div>
        <div className={classnames(styles["card__face"], styles["card__face__verso"])}>
            <div className={styles["card__content"]}>
                <h3>
                    {title}
                </h3>
                {cardContent}
            </div>
        </div>
    </div>
}

Card.propTypes = {
    backgroundColorClass: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    imageAlt: PropTypes.string,
    imagePath: PropTypes.string,
    title: PropTypes.string
}