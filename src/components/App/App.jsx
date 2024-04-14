import './App.css'
import { useState,useEffect  } from "react"
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import ContactForm from '../ContactForm/ContactForm'

export default function App() {



 const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contact");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);
 const [filter, setFilter] = useState('');
const handleFilterChange = event => {
  setFilter(event.target.value);
};
 const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
   );
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

const deleteContact = (contactId) => {
  const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  setContacts(updatedContacts);
};

  

  return (


    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
   
  
      <ContactList contacts={filteredContacts } onDelete={deleteContact}/>
      
    </>
  )
}


