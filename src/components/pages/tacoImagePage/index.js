import React, { Component } from 'react';
import Axios from "axios";

class TacoImagePage extends Component {
    
    constructor(){
        super();
        this.state = {
            counter : 0,
            isReady : false,
            slideOut: true,
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
            slideOut: !this.state.slideOut
        })
    }

    componentWillMount(){
        console.log(this.props.match.params.id);

        let query = this.props.match.params.id || "tacos";
        
        Axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=4ovyp4eoD6cyCcEd5vj0ksosb8fEULnM&limit=5`).then((res)=>{
    
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
            <div>
                <button onClick={this.toggleReady}> TOGGLE THAT PAGE!!</button>
                <main className={this.state.slideOut ? "ready" : ""}>
                    {this.state.isReady ? 
                        this.state.data.map((item)=>{
                            return <div key={Math.round(Math.random() * 900000)}>
                                <img alt="" src={item.images.original.url}/>
                            </div>
                        })  
            
                    : ""}
                </main>
            </div>
        );
    }
}

export default TacoImagePage;
