import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "redux/Contacts/Contacts.selector";
import { usersSearchAction } from "redux/Contacts/Contacts.slice";
import { Input, Label } from "./InputFilter.styled";
export const InputFilter = () => {
    const filter = useSelector(selectFilters);
    const dispatch = useDispatch()
 
        const handeInput =  ({target, }) => {
            dispatch(usersSearchAction(target.value))}
 return ( 
         <Label>
             Find contacts by name
             <Input 
             onInput={handeInput}
             pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
             value ={filter}/>
         </Label>)
}

InputFilter.propTypes = {
    addFilter: PropTypes.func
}