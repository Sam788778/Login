import * as YUP from 'yup';

export const SchemaLogin = YUP.object().shape({
    email: YUP.string('Invalid email')
        .email('Invalid email format')
        .required('Email is required'),
    password: YUP.string('Invalid password')
        .min(8, 'Password must be at least 8 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required')
});

export const SchemaRegistr = YUP.object().shape({
    name: YUP.string('Invalid name')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must be at most 20 characters')
        .required('Name is required'),
    LastName: YUP.string('Invalid last name')
        .min(2, 'Last name must be at least 2 characters')
        .max(20, 'Last name must be at most 20 characters')
        .required('Last name is required'),
    email: YUP.string('Invalid email')
        .email('Invalid email format')
        .required('Email is required'),
    password: YUP.string('Invalid password')
        .min(8, 'Password must be at least 8 characters')
        .max(20, 'Password must be at most 20 characters')
        .required('Password is required'),
    confirmPassword: YUP.string('Invalid confirm password')
        .oneOf([YUP.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
});