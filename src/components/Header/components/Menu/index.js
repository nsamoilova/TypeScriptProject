import React from 'react';
import styles from './style.module.scss';
import MenuItem from './components/MenuItem';


class Menu extends React.Component {
    render() {
        return (
            <ul className = {styles.menu}>
                <MenuItem title='Курсы' to="/kursy-programmirovaniya"/>
                <MenuItem title='Мастер-классы' to="/besplatnye-probnye-zanatia"/>
                <MenuItem title='Преподаватели' to="/teacher"/>
                <MenuItem title='Блог' to="/blog"/>
                <MenuItem title='Контакты' to="/contact"/>
                
            </ul>

        )
    }
}

export default Menu;