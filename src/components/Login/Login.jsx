import styles from './Login.module.css';
import { useState } from 'react';
import Title from '../Title/Title';
import Input from '../input/input';
import Success from '../Success/Success';

const Login = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [againPassword, setAgainPassword] = useState('');

    const [nameErr, setNameErr] = useState(false);
    const [lastNameErr, setLastNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [againPasswordErr, setAgainPasswordErr] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNameErr = name.length < 3;
        const isLastNameErr = lastName.length < 3;
        const isEmailErr = email.length < 3;
        const isPasswordErr = password.length < 8;
        const isAgainPasswordErr = againPassword.length < 8 || password !== againPassword;

        setNameErr(isNameErr);
        setLastNameErr(isLastNameErr);
        setEmailErr(isEmailErr);
        setPasswordErr(isPasswordErr);
        setAgainPasswordErr(isAgainPasswordErr);

        if (!isNameErr && !isLastNameErr && !isEmailErr && !isPasswordErr && !isAgainPasswordErr) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <div className={styles.login}>
            <Title />
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    name={name} setName={setName} nameErr={nameErr}
                    lastName={lastName} setLastName={setLastName} lastNameErr={lastNameErr}
                    email={email} setEmail={setEmail} emailErr={emailErr}
                    password={password} setPassword={setPassword} passwordErr={passwordErr}
                    againPassword={againPassword} setAgainPassword={setAgainPassword} againPasswordErr={againPasswordErr}
                />
                <button className={styles.button}>Register</button>
            </form>
            {isSubmitted && (
                <Success
                    name={name}
                    lastName={lastName}
                    email={email}
                    password={password}
                />
            )}
        </div>
    );
};

export default Login;