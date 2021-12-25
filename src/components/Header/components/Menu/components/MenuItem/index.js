import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './style.module.scss';


class MenuItem extends React.Component {
    getClass = (state) => {
        
    return styles.menuItem + (state.isActive ? ` ${styles.active}` : '')
    }


    render() {
        return (
            <div >
                <NavLink to={this.props.to} className={this.getClass}>
                {this.props.title}
                </NavLink>
            </div>
        )
    }
}

export default MenuItem;