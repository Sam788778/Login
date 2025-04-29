import styles from './Success.module.css';

const Success = ({ name, lastName, email, password, againPassword }) => {
    return (
        <div className={styles.success}>
            <h1>Welcome {name} {lastName}</h1>
            <p>Your email is: {email}</p>
            <p>Your password is: {password}</p>
            <p>All fields are valid!</p>
        </div>
    );
};

export default Success;