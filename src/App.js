import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor()
    {
        super();
        this.state = {result: ""}
    }

    render() {
        return (
            <div>
                <h2>Using React, build a functioning calculator with a nice UI.</h2>
                <h3>By: Ivan Del Pozo</h3>
                <br/>
                <div className="calc-body">
                    <ResultComponent result={this.state.result}/><br/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

}

export default App;
