import React, { Component } from 'react';
import Axios from "axios";

class HomePage extends Component {
    
    constructor(){
        super();
        this.state = {
            counter : 0,
            isReady : false,
            data: []
        }
        
        this.toggleReady = this.toggleReady.bind(this);
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT")
    }

    componentWillReceiveProps(){
        this.setState({
            counter : this.state.counter + 1
        })

        console.log("I WILL RECIEVE PROPS!")
    }

    toggleReady(){
        this.setState({
            isReady: !this.state.isReady
        })
    }

    componentWillMount(){
        Axios.get("http://api.giphy.com/v1/gifs/search?q=tacos&api_key=4ovyp4eoD6cyCcEd5vj0ksosb8fEULnM&limit=5").then((res)=>{
    
            this.setState({
                isReady : true,
                data : res.data.data
            }, function(){
                console.log(this.state)

            });
        })
    }
    

    render() {
        return (
            <main>
                <h1>GET SOME TACOS!</h1>
            </main>
        );
    }
}

export default HomePage;
