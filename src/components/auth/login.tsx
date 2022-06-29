import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginUserAction } from '../../actions/auth/auth';
import { loginUserRequest } from '../../actions/auth/types';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!event.target[0].value || !event.target[1].value) {
            setValidated(true)
        } else {
            setValidated(false)
            const user: loginUserRequest = {
                email: event.target[0].value,
                password: event.target[1].value
            };
            dispatch(loginUserAction(user));
        }
    };

    //@ts-ignore
    const error = useSelector(state => state?.auth?.error);

    // @ts-ignore
    const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/contacts');
        }
    }, [isLoggedIn])

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Card style={{ width: '40rem', padding: '30px' }}>
                <h4>Welcome To Contacts Todo</h4>
                {error && error.split(',').map((err: string, index: number) =>
                    <Alert key={`${index}_${err}`} variant='danger'>
                        {err}
                    </Alert>
                )}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="email"
                            required
                            placeholder="Enter your your email" />
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
                        <Form.Label>Don't have account? <Link to='/register'>Register here</Link></Form.Label>
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Login;