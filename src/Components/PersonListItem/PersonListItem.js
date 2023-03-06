import "./PersonListItem.css";

const PersonListItem = props => {
    return(
        <li className="personListItem" onClick={(e) => props.onListItemClick(props.personIndex)}>
            {props.name}
        </li>
    )
}

export default PersonListItem;