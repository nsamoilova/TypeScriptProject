import React from 'react';
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer';
import styles from './style.module.scss'
import Button from 'components/Form/Button';
class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
              <Header/>
              <Content />
              <Footer />
            </div>
        )
    }
}

export default App;