import { useEffect, useState } from "react"
import { contact } from "../../types"
import { contactService } from "../../services/contact.service"


const ContactElement = ( { contact }: {contact: contact} ) => {
    return(
        <ul className="contact-row-container">
            <li>{contact.contactName}</li>
        </ul>
    )
}

export const List = () => {
    const [ contacts, setContacts ] = useState<contact[]>();

    const getAllContactsHandler = () => {
        contactService.getAll()
            .then( res => res.json()
            .then(( json: contact[] ) => setContacts(json)))
    }


    useEffect(() => getAllContactsHandler(), [])

    return (
        <div className="contacts-body">
            {
                contacts &&
                <div className="contacts-container">
                    <div className="contacts-info">
                        <div className="contacts-count">
                            <label>
                                <h2>{contacts.length}</h2>
                                <h3>Contacts</h3>
                            </label>
                            <label>
                                <h2></h2>
                                <h3>Failed</h3>
                            </label>
                            <label>
                                <h2></h2>
                                <h3>Executing</h3>
                            </label>
                        </div>
                        <div className="contacts-filters">
                            <button>All</button>
                            <button>Executing</button>
                            <button>Failed</button>
                        </div>
                    </div>
                    <div className="contacts-table">
                        <div className="contacts-table-header">

                        </div>
                        <div className="contacts-table-elements">
                        {
                            contacts.map( contact => <ContactElement contact={contact}/>)
                        }
                        </div>
                    </div>
                </div>
                || "Loading"
            }
        </div>
    )
}