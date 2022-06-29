import { Table } from "react-bootstrap"
import { IContact } from "../actions/contacts/types"
import CustomButton from "./button"

const ListContacts = ({ contactsList, deleteContact }: any) => {
    return (
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
                        <CustomButton onClick={() => deleteContact(contact?.id || '')} buttonVariant="danger" buttonText="Delete"/>
                        </td>
                    </tr>)}
            </tbody>
        </Table>
    )
}

export default ListContacts;