

export default function ContactItem({
    //pass the contact as a prop
    contact,

    onEditClick,

    onDeleteClick,

}) {
    return (
       <li key={contact.id}>
            {contact.id}{" "} <br />
            {contact.name}{" "}<br />
            {contact.phone}{" "}<br />
            {contact.email}{" "}<br />
            <button onClick={(e) => onEditClick(contact)}>Edit</button>
            <button onClick={()=> onDeleteClick(contact.id)}>delete</button>
        </li>
    );
}
