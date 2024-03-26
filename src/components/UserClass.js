import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    render() {
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h3>Age: {this.props.Age}</h3>
                <h3>Location: {this.props.Location}</h3>
                <h3>Count: {this.state.count}</h3>
                <button className="counter" onClick={()=> {this.setState({
                    count: this.state.count+1,
                }) ;
            }}>Count</button>
            </div>
        )
    }

}
export default UserClass;