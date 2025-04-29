import styles from './input.module.css';

const Input = ({
    name, setName, nameErr,
    lastName, setLastName, lastNameErr,
    email, setEmail, emailErr,
    password, setPassword, passwordErr,
    againPassword, setAgainPassword, againPasswordErr
}) => {
    return (
        <div className={styles.input}>
            <input
                className={nameErr ? styles.error : ''}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className={lastNameErr ? styles.error : ''}
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                className={emailErr ? styles.error : ''}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className={passwordErr ? styles.error : ''}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className={againPasswordErr ? styles.error : ''}
                type="password"
                placeholder="Repeat Password"
                value={againPassword}
                onChange={(e) => setAgainPassword(e.target.value)}
            />
        </div>
    );
};

export default Input;