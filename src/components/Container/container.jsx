import styles from './container.module.css';
import Login from '../Login/Login';

const Container = () => {
    return (
        <div className={styles.container}>
            <Login />
        </div>
    );
}

export default Container;