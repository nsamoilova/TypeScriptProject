import React from 'react';
import styles from './style.module.scss';
import Phoneitem from './components/Phoneitem';

class Phone extends React.Component {
    render() {
        return (
            <div className={styles.phone}>
              <Phoneitem href={'+375291055959'} />
              <Phoneitem href={'+375293055959'} />
            </div>
        )
    }
}

export default Phone;