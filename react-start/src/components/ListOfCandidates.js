import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
//import logo from './logo.png';
//import searchIcon from './search-icon.png';
import "./App.css";


class ListOfCandidates extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Container>
                <Navbar bg="dark" variant="dark">
                 <Navbar.Brand href="#home"> ListOfCandidates</Navbar.Brand>
                 import React, { Component } from "react";


    this.state = {
      Candidates: [
        { name: "Dr Abdullah", votes: 0 },
        { name: "Gen Jawhari", votes: 0 },
        { name: "Gen Murad Ali Murad", votes: 0 },
        { name: "Hamid Karzai", votes: 0 }
      ]
    };
  }

  vote(i) {
    let newCandidates = [...this.state.Candidates];
    newCandidates[i].votes++;
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ Candidates: newCandidates });
  }

  render() {
    return (
     <div>

        <h1>Vote Your Candidate!</h1>
        <div className="Candidates">
          {this.state.Candidates.map((Cand, i) => (
            <div key={i} className="Candidate">
              <div className="voteCount">{Cand.votes}</div>
              <div className="CandidateName">{Cand.name}</div>
              <button onClick={this.vote.bind(this, i)}>Click Here</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;

                </Container>
            </div>
        )
    }
}

export default ListOfCandidates
