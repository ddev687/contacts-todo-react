import React, { useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsAction, deleteContactsAction, getContactsAction } from '../../actions/contacts/contacts';
import { logoutUserAction } from '../../actions/auth/auth';

import { IContact } from '../../actions/contacts/types';
import AddContactModel from './addContactModel';
import ListContacts from '../../components/listContact';
import CustomButton from '../../components/button';

const Contacts = () => {
    const dispatch = useDispatch();
    const [showModel, setShowModel] = useState(false);
    const [contactsList, setContactsList] = useState([]);
    //@ts-ignore
    const contactList = useSelector(state => state?.contacts?.contacts);
    debugger
    useEffect(() => {
        dispatch(getContactsAction())
    }, []);

    useEffect(() => {
        debugger
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
                            <CustomButton onClick={addContact} buttonVariant="primary" buttonText="Add Contact" />
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <CustomButton onClick={logout} buttonVariant="primary" buttonText="Logout" />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            <br></br>
            <ListContacts contactsList={contactsList} deleteContact={deleteContact} />
            <AddContactModel showModel={showModel} addContact={saveContact} closeModel={closeModel} />
        </div>
    );
};

export default Contacts;