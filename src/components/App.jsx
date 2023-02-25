import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, } from "redux/Contacts/Contacts.selector";
import { usersSearchAction,} from "redux/Contacts/Contacts.slice";
import { useGetContactsQuery} from "redux/rtk-contacts/rtk-contacts.api";


export const App = () =>{
  const {isLoading, isSuccess}= useGetContactsQuery()
  

  const filter = useSelector(selectFilters)

  const dispatch = useDispatch()
  
  const addFilter = (value) => {
    dispatch(usersSearchAction(value))
  }



  return (
    <Container>
      <Form/>
      <Title>Contacts</Title>
      <InputFilter onInput={addFilter} value={filter}/>
      {isLoading && <Title>Loading...</Title>}
      {isSuccess &&  <Contacts/>}
    </Container>
  )
}
