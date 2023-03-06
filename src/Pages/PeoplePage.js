import axios from "axios";
import React from "react";
import PeopleList from "../Components/PeopleList/PeopleList";
import PersonDetails from "../Components/PersonDetails/PersonDetails";
import "./PeoplePage.css";
import Button from "../Components/Button/Button";


const SWAPI_URL = "https://swapi.dev/api/people";

class PeoplePage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            peopleData: null,
            selectedPersonData: null,
            isPersonDetailsShown: false,
        }

    }

    componentDidMount(){
        console.log("Component mounted");
        axios.get(SWAPI_URL).then(response => {
            this.setState({
                peopleData: response.data.results,
        });
        });
    };

    onPersonSelect(selectedIndex){
        this.setState(prevState => ({selectedPersonData: prevState.peopleData[selectedIndex]}))
    };

    onPersonDetailsToggle(){
        this.setState(prevState => {
            return {
                isPersonDetailsShown: !prevState.isPersonDetailsShown
            }
        });
    };

    render(){
        console.log("People Page rendered");
        return(
            <section className="PeoplePage">
                <div className="page__heading">
                    <h1>Welcome to Star Wars Wiki!</h1>
                    <p>Click characters name to view more info.</p>
                </div>
                <Button 
                 buttonText="Toggle Person Details"
                 style={{marginLeft: "30px", marginBottom: "20px"}}
                 onButtonClick = {this.onPersonDetailsToggle.bind(this)}
                 />
                <div className="people__container">
                    <PeopleList peopleData={this.state.peopleData} onListItemClick={this.onPersonSelect.bind(this)}/>  
                    {
                        this.state.isPersonDetailsShown && <PersonDetails selectedPersonData={this.state.selectedPersonData}/>

                    }  
                </div>

            </section>
        )
    }
}

export default PeoplePage;