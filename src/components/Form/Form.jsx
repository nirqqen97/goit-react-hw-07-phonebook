import { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import {FormWrap,SubmitBtn,Input, Label} from "./Form.styled";
import { useAddUserMutation, useGetContactsQuery } from "redux/rtk-contacts/rtk-contacts.api";
export const Form = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const {data}= useGetContactsQuery()
    const [addUser] = useAddUserMutation()

    const handleNameChange = (e) =>{
        setName(e.currentTarget.value)
    }
    const handlePhoneChange = (e) =>{
        setPhone(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(name,phone);
        setPhone("");
        setName('');
        e.target.reset()
        }
       
         
  const checkIsInContacts = (value) => {
    const checked = data.find(contact => contact.name === value) !== undefined;
    return checked
  }
  const addContact = (name, phone) => {
    if (checkIsInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    addUser({id:shortid.generate(),name,phone}); 
  };

        
        return(
            <FormWrap autoComplete="off" onSubmit={handleSubmit}>
            <Label>
                Name
                <Input type={"text"} 
                       name ={"name"}
                       onChange ={handleNameChange}
                       pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
                       title = {"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}
                       value = {name}
                       required/>
                       
            </Label>
            <Label>
                Phone
                <Input type={"text"} 
                       name ={"telephone"}
                       onChange ={handlePhoneChange}
                       pattern = {"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"}
                       value = {phone}
                       title = {"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}/>
                       
            </Label>
            <SubmitBtn>Submit</SubmitBtn>
        </FormWrap>
        )
    
}
Form.propTypes = {
    addContact: PropTypes.func,
}