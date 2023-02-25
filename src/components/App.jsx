import shortid from "shortid";
import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, } from "redux/Contacts/Contacts.selector";
import { usersSearchAction,} from "redux/Contacts/Contacts.slice";
import { useGetContactsQuery, useDeleteContactsMutation, useAddUserMutation } from "redux/rtk-contacts/rtk-contacts.api";


export const App = () =>{
  const {data, isLoading, isSuccess}= useGetContactsQuery()
  

  const [triggerDelete] = useDeleteContactsMutation()
  const [addUser] = useAddUserMutation()

  const filter = useSelector(selectFilters)

  const dispatch = useDispatch()
  
  const addFilter = (value) => {
    dispatch(usersSearchAction(value))
  }

  const deleteFromContacts = (contactToDelete) =>{
    triggerDelete(contactToDelete.id)
  }
  
  const checkIsInContacts = (value) => {
    const checked = data.find(contact => contact.name === value) !== undefined;
    return checked
  }
  const addContact = (name, telephone) => {
    if (checkIsInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      telephone,
    };
    addUser({contact}); 
  };
  

  const contactsFilter = () => {
    const filtered = data.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
    return filtered;
  };

  return (
    <Container>
      <Form onSubmit={addContact}/>
      <Title>Contacts</Title>
      <InputFilter onInput={addFilter} value={filter}/>
      {isLoading && <Title>Loading...</Title>}
      {isSuccess &&  <Contacts contacts={contactsFilter()} deleteFromContacts={deleteFromContacts}/>}
    </Container>
  )
}
