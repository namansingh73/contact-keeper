import React, {Fragment, useContext, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts, filtered, getContacts, loading} = contactContext;

    useEffect(()=>{
        getContacts();
        //eslint-disable-next-line
    },[]);

    if(contacts!==null && !loading && contacts.length === 0)
    {
        return <h4>Please add a contact</h4>
    }
    return (
        <Fragment>
            {contacts !== null && !loading ? (
            <Fragment>
                {filtered !== null ? filtered.map(contact =>(
                    <ContactItem contact={contact} key={contact._id}/>
                    )) : contacts.map(contact =>(
                        <ContactItem contact={contact} key={contact._id}/>
                    ))
                }
        </Fragment>
            ) : <Spinner/>}
        </Fragment>
    )
}

export default Contacts;