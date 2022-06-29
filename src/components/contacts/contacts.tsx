import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsAction, deleteContactsAction, getContactsAction } from '../../actions/contacts/contacts';
import { logoutUserAction } from '../../actions/auth/auth';

import { IContact } from '../../actions/contacts/types';
import AddContactModel from './addContactModel';

const Contacts = () => {
    const dispatch = useDispatch();
    const [showModel, setShowModel] = useState(false);
    const [contactsList, setContactsList] = useState([]);
    //@ts-ignore
    const contactList = useSelector(state => state?.contacts?.contacts);
    useEffect(() => {
        dispatch(getContactsAction())
    }, []);

    useEffect(() => {
        setContactsList(contactList)
    }, [contactList]);

    const logout = () => {
        dispatch(logoutUserAction())
    }

    const addContact = () => {
        setShowModel(true);
    }

    const closeModel = () => {
        setShowModel(false);
    }

    const deleteContact = (contactId: string | undefined) => {
        if (contactId) {
            dispatch(deleteContactsAction(contactId))
        }
    }

    const saveContact = (contact: IContact) => {
        dispatch(addContactsAction(contact))
    }

    return (
        <div style={{
            display: 'block',
        }}>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Contacts List</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Button variant="primary" onClick={addContact}>
                                Add Contact
                            </Button>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Button variant="primary" onClick={logout}>
                                Logout
                            </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            <br></br>
            <Table responsive>
                <thead>
                    <tr>
                        <th key="fullName">Full Name</th>
                        <th key="email">Email</th>
                        <th key="phonenumber">Phone Number</th>
                        <th key="action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsList.map((contact: IContact, index: number) =>
                        <tr key={index}>
                            <td key={`${contact.id}_${contact.fullName}`}>{contact.fullName}</td>
                            <td key={`${contact.id}_${contact.email}`}>{contact.email}</td>
                            <td key={`${contact.id}_${contact.phoneNumber}`}>{contact.phoneNumber}</td>
                            <td key={`${contact.id}_${index}`}>
                                <Button variant="danger" onClick={() => deleteContact(contact?.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>)}
                </tbody>
            </Table>
            <AddContactModel showModel={showModel} addContact={saveContact} closeModel={closeModel}/>
        </div>
    );
};

export default Contacts;