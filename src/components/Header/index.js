import React from 'react';
import styles from './style.module.scss';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Logo from './components/Logo';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <div className = {styles.header}>
                <Logo />
                <Menu />
                <div className={styles.title}>Сейчас у нас {this.props.items.length} дел</div>
                <Contacts />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.todo.items
    }
}


export default connect(mapStateToProps)(Header);