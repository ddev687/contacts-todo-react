import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IContact } from '../../actions/contacts/types';
import { addContactsAction } from '../../actions/contacts/contacts';
import { Spinner } from 'react-bootstrap';

const AddContacts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        const contact: IContact = {
            fullName: event.target[0].value,
            email: event.target[1].value,
            phoneNumber: event.target[2].value
        }
        dispatch(addContactsAction(contact));
    };

    const loading = useSelector(state => state?.contacts?.isLoading);
    useEffect(() => {
        //@ts-ignore
        setIsLoading(loading || false)
    }, [loading]);

    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>
            <h4>Add Contact</h4>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter full name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter full name" />
                    <Form.Control.Feedback type="invalid">
                        Please enter full name
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter email address</Form.Label>
                    <Form.Control
                        type="email"
                        required
                        placeholder="Enter email address" />
                    <Form.Control.Feedback type="invalid">
                        Please enter email
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter phone number</Form.Label>
                    <Form.Control
                        type="mobile"
                        required
                        placeholder="Enter phone number" />
                    <Form.Control.Feedback type="invalid">
                        Please enter phone number
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Adding...
                </Button>
                <Button variant="primary" type="submit">
                    Add Contact
                </Button>
            </Form>
        </div>
    );
};
export default AddContacts;
function useSelector(arg0: (state: any) => any) {
    throw new Error('Function not implemented.');
}

