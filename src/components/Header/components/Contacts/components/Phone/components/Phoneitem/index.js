import React from 'react';
import styles from './style.module.scss';

class Phoneitem extends React.Component {
    render() {
        return (
            <div className={styles.phoneitem}>
               <a href={this.props.href}></a>
               {this.props.href}
            </div>
        )
    }
}

export default Phoneitem;