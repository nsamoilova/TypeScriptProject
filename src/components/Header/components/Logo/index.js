import React from 'react';
import styles from './style.module.scss';
import LogoImages from './images/logo.svg';


class Logo extends React.Component {
    render() {
        return (
            <img className={styles.logo} src={LogoImages}></img>
        )
    }
}

export default Logo;