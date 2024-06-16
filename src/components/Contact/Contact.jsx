import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../redux/contactsSlice";
import
const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={CSS.list}>
      <p>Name: {contact.name}</p>
      <p>Phone Number: {contact.phoneNumber}</p>
      <button onClick={handleDelete} className={CSS.btn}>
        Delete
      </button>
    </li>
  );
};

Contact.PropTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};
export default Contact;
