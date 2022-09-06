const ReadContactDetails = (props) => {

    const {id, name,phone, email, index} = props.contact;

    return(
        <div>
            <h1>Contact Details</h1>
            <p>{index}</p>
            <p>{id}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>{" "}
            <hr />
            <button onClick={props.goBackToListOfContacts}>Back</button>
        </div>
    )

}

export default ReadContactDetails;