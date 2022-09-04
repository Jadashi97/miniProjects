const ReadContactDetails = (props) => {

    const {id, name, email} = props.contact;

    return(
        <div>
            <h1>Contact Details</h1>
            <p>{props.index}</p>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>{" "}
        </div>
    )

}

export default ReadContactDetails;