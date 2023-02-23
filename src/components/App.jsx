import shortid from "shortid";
import { useEffect, useState } from "react";
import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "redux/Contacts/Contacts.thunk";

export const App = () =>{
  
 const test = useSelector(state => state.contacts)
 console.log('test: ', test);
  const [sContacts, setSContacts] =  useState(() =>JSON.parse(localStorage.getItem("contact"))|| []);
  
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch()
 const deleteFromContacts = (contactToDelete) =>{
    const deletedList = sContacts.filter(contact => contact.id !== contactToDelete.id);
    setSContacts(deletedList);
 }
 useEffect(() => {
  localStorage.setItem("contact", JSON.stringify(sContacts))
  console.log("componentDID");
  dispatch(getContactsThunk())
 }, [sContacts,dispatch]);
 
 
 const checkIsInContacts = (value) => {
   const checked = sContacts.find(contact => contact.name === value) !== undefined;
  return checked
}

 const addFilter = (value) => {
   setFilter(`${value}`)
}

 const addContact = (name,telephone) =>{
  if (checkIsInContacts(name) ) {
    alert(`${name} is already in contacts`)
    return
  }
   const contact = {
     id : shortid.generate(),
     name,
     telephone,
   }
   setSContacts((prev) =>{
     return [...prev, contact]
   })
 }
    const contactsFilter = () => {   
   
     const filtered = sContacts.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
     return filtered
  
    }
  return (
           <Container>
             <Form onSubmit = {addContact}/>
             <Title>Contacts</Title>
             <InputFilter onInput = {addFilter} value = {filter}/>
             <Contacts contacts = {contactsFilter()} deleteFromContacts = {deleteFromContacts}/>
             </Container>

           )
}
