import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { registerUserAction } from '../../actions/auth/auth';
import { IUser } from '../../actions/auth/types';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import CustomButton from '../../components/button';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state: any) => state?.auth?.error);
    const registerSuccess = useSelector((state: any) => state?.auth?.registerSuccess);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        if (!event.target[0].value || !event.target[1].value || !event.target[2].value) {
            setValidated(true)
        } else {
            setValidated(false)
            const user: IUser = {
                fullName: event.target[0].value,
                email: event.target[1].value,
                password: event.target[2].value
            }
            dispatch(registerUserAction(user));
            setValidated(true);
        }
    };

    useEffect(() => {
        if(registerSuccess) navigate('/')
    }, [registerSuccess])

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Card style={{ width: '40rem', padding: '30px' }}>
                <h4>Register</h4>
                {error && error.split(',').map((err: string, index: number) =>
                    <Alert key={`${index}_${err}`} variant='danger'>
                        {err}
                    </Alert>
                )}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter your full name" />
                        <Form.Control.Feedback type="invalid">
                            Please enter your full name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="email"
                            required
                            placeholder="Enter your your email address" />
                        <Form.Control.Feedback type="invalid">
                            Please enter your email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="Enter your password" />
                        <Form.Control.Feedback type="invalid">
                            Please enter your password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <br />
                        <Form.Label>Already have account? <Link to='/'>Login here</Link></Form.Label>
                    </Form.Group>
                    <br />
                    <CustomButton buttonVariant="primary" buttonText="Register" type="submit"/>
                </Form>
            </Card>
        </div>
    );
};
export default Register;
