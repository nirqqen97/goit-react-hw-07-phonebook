import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectFilters } from "redux/Contacts/Contacts.selector";
import { Input, Label } from "./InputFilter.styled";
export const InputFilter = ({onInput}) => {
    const filter = useSelector(selectFilters)

 function handeInput ({target, }) {
        onInput(target.value);}
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