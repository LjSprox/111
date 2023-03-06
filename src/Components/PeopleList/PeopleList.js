import React from "react";
import "./PeopleList.css";
import { ThreeDots } from "react-loader-spinner";
import PersonListItem from "../PersonListItem/PersonListItem";


class PeopleList extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidUpdate(){
        console.log("Person list updated");
    }

    render(){

        const peopleData = this.props.peopleData;

        return (
            <section className="PeopleListComponent">
                {!peopleData && (
                    <div className="loading">
                        <ThreeDots 
                            height="80" 
                            width="80" 
                            radius="9"
                            color="rgb(175, 175, 11)" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                         />
                    </div>
                )}
                {peopleData && (
                    <ul className="peopleList">
                        {peopleData.map((person, index) => <PersonListItem 
                        key={person.name + Math.random()} 
                        name={person.name} 
                        personIndex={index}
                        onListItemClick={this.props.onListItemClick}
                        />)}
                    </ul>
                )}
            </section>
        )
    }
    
}

export default PeopleList;