import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Button, Modal, Form, Spinner, Alert } from "react-bootstrap";
import { IContact } from "../../actions/contacts/types";
import CustomButton from "../../components/button";

const AddContactModel = ({ showModel, addContact, closeModel }: any) => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const loading = useSelector((state: any) => state?.contacts?.isLoading);
    const error = useSelector((state: any) => state?.contacts?.error);
    const handleClose = () => {
        closeModel();
    }

    useEffect(() => {
        setShow(showModel)
    }, [showModel])

    useEffect(() => {
        setIsLoading(loading || false)
        if (!error && !loading) closeModel();
    }, [loading]);

    useEffect(() => {
        //@ts-ignore
        setIsLoading(false)
    }, [error]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        if (!event.target[0].value || !event.target[1].value || !event.target[2].value) {
            setValidated(true)
        } else {
            setValidated(false)
            const contact: IContact = {
                fullName: event.target[0].value,
                email: event.target[1].value,
                phoneNumber: event.target[2].value
            }
            addContact(contact);
        }
    };

    return (
        <>
            <Modal show={show}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header>
                        <Modal.Title>Add Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {error && error.split(',').map((err: string, index: number) =>
                            <Alert key={`${index}_${err}`} variant='danger'>
                                {err}
                            </Alert>
                        )}
                        <Form.Group controlId="validationCustom01">
                            <Form.Label></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter full name" />
                            <Form.Control.Feedback type="invalid">
                                Please enter full name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="email"
                                required
                                placeholder="Enter email address" />
                            <Form.Control.Feedback type="invalid">
                                Please enter email
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="mobile"
                                required
                                placeholder="Enter phone number" />
                            <Form.Control.Feedback type="invalid">
                                Please enter phone number
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <CustomButton buttonVariant="secondary" buttonText="Close" onClick={handleClose} />
                        <Button variant="primary" disabled={isLoading} type="submit">
                            {isLoading && <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />}
                            {isLoading ? 'Adding...' : 'Add Contact'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default AddContactModel;