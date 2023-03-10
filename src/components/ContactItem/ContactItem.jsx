import PropTypes from "prop-types";
import { useDeleteContactsMutation } from "redux/rtk-contacts/rtk-contacts.api";
import { Item,Name,Phone,Btn } from "./ContactItem.styled"

export const ContactItem = ({c}) =>{
    const [triggerDelete] = useDeleteContactsMutation()
    
    function  deleteFromContacts (contactToDelete) {
        triggerDelete(contactToDelete.id)
      }
    function handleClick(e) {
        deleteFromContacts(c)
    }
    return <Item>
        <Name>{c.name}:</Name>
        <Phone>{c.phone}</Phone>
        <Btn type="button" onClick={handleClick}>Delete</Btn>
        </Item>
}
ContactItem.propTypes = {
    c: PropTypes.shape({
          name: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,}),
    deleteFromContacts: PropTypes.func.isRequired
}