import React from "react";
import "./PersonDetails.css";

class PersonDetails extends React.Component {
    constructor(props){
        super(props);
    }

        render() {
            return (
                <div className="PersonDetails">
                    <div className="details__container"> 
                    {!this.props.selectedPersonData && (
                    <div className="placeholder__container">No person selected</div>
                    )}
                    {
                        this.props.selectedPersonData && (
                            <>
                            <div>
                                <strong>Name: </strong>
                                {this.props.selectedPersonData.name}
                            </div>
                            <div>
                                <strong>Birth Year: </strong>
                                {this.props.selectedPersonData.birth_year}
                            </div>
                            <div>
                                <strong>Gender: </strong>
                                {this.props.selectedPersonData.gender}
                            </div>
                            <div>
                                <strong>Skin Color: </strong>
                                {this.props.selectedPersonData.skin_color}
                            </div>
                            <div>
                                <strong>Eye Color: </strong>
                                {this.props.selectedPersonData.eye_color}
                            </div>
                            <div>
                                <strong>Hair Color: </strong>
                                {this.props.selectedPersonData.hair_color}
                            </div>
                            </>
                        )
                    }
                    </div>
                </div>
            )
        }
}

export default PersonDetails;  