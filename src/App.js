import React from 'react';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "X",
      player2: "O",
      turn: true,

      case1: "", case2: "", case3: "",
      case4: "", case5: "", case6: "",
      case7: "", case8: "", case9: ""
    }
    this.place1 = this.place1.bind(this)
    this.place2 = this.place2.bind(this)
    this.place3 = this.place3.bind(this)
    this.place4 = this.place4.bind(this)
    this.place5 = this.place5.bind(this)
    this.place6 = this.place6.bind(this)
    this.place7 = this.place7.bind(this)
    this.place8 = this.place8.bind(this)
    this.place9 = this.place9.bind(this)
  }

  place1() {
    if (this.state.case1 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case1: "X" })
      } else {
        this.setState({ case1: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case1 + this.state.case2 + this.state.case3 == "XXX" ||
      this.state.case1 + this.state.case4 + this.state.case7 == "XXX" ||
      this.state.case1 + this.state.case5 + this.state.case9 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case1 + this.state.case2 + this.state.case3 == "OOO" ||
      this.state.case1 + this.state.case4 + this.state.case7 == "OOO" ||
      this.state.case1 + this.state.case5 + this.state.case9 == "OOO"
    ) {
      alert("O win")
    }
  }

  place2() {
    if (this.state.case2 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case2: "X" })
      } else {
        this.setState({ case2: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case1 + this.state.case2 + this.state.case3 == "XXX" ||
      this.state.case2 + this.state.case4 + this.state.case8 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case1 + this.state.case2 + this.state.case3 == "OOO" ||
      this.state.case2 + this.state.case4 + this.state.case8 == "OOO"
    ) {
      alert("O win")
    }
  }

  place3() {
    if (this.state.case3 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case3: "X" })
      } else {
        this.setState({ case3: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case1 + this.state.case2 + this.state.case3 == "XXX" ||
      this.state.case3 + this.state.case6 + this.state.case9 == "XXX" ||
      this.state.case3 + this.state.case5 + this.state.case7 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case1 + this.state.case2 + this.state.case3 == "OOO" ||
      this.state.case3 + this.state.case6 + this.state.case9 == "OOO" ||
      this.state.case3 + this.state.case5 + this.state.case7 == "OOO"
    ) {
      alert("O win")
    }
  }

  place4() {
    if (this.state.case4 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case4: "X" })
      } else {
        this.setState({ case4: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case1 + this.state.case4 + this.state.case7 == "XXX" ||
      this.state.case4 + this.state.case5 + this.state.case6 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case1 + this.state.case4 + this.state.case7 == "OOO" ||
      this.state.case4 + this.state.case5 + this.state.case6 == "OOO"
    ) {
      alert("O win")
    }
  }

  place5() {
    if (this.state.case5 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case5: "X" })
      } else {
        this.setState({ case5: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case2 + this.state.case5 + this.state.case8 == "XXX" ||
      this.state.case4 + this.state.case5 + this.state.case6 == "XXX" ||
      this.state.case1 + this.state.case5 + this.state.case9 == "XXX" ||
      this.state.case3 + this.state.case5 + this.state.case7 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case2 + this.state.case5 + this.state.case8 == "OOO" ||
      this.state.case4 + this.state.case5 + this.state.case6 == "OOO" ||
      this.state.case1 + this.state.case5 + this.state.case9 == "OOO" ||
      this.state.case3 + this.state.case5 + this.state.case7 == "OOO"
    ) {
      alert("O win")
    }
  }

  place6() {
    if (this.state.case6 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case6: "X" })
      } else {
        this.setState({ case6: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case3 + this.state.case6 + this.state.case9 == "XXX" ||
      this.state.case4 + this.state.case5 + this.state.case6 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case3 + this.state.case6 + this.state.case9 == "OOO" ||
      this.state.case4 + this.state.case5 + this.state.case6 == "OOO"
    ) {
      alert("O win")
    }
  }

  place7() {
    if (this.state.case7 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case7: "X" })
      } else {
        this.setState({ case7: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case1 + this.state.case4 + this.state.case7 == "XXX" ||
      this.state.case7 + this.state.case8 + this.state.case9 == "XXX" ||
      this.state.case7 + this.state.case5 + this.state.case3 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case1 + this.state.case4 + this.state.case7 == "OOO" ||
      this.state.case7 + this.state.case8 + this.state.case9 == "OOO" ||
      this.state.case7 + this.state.case5 + this.state.case3 == "OOO"
    ) {
      alert("O win")
    }
  }

  place8() {
    if (this.state.case8 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case8: "X" })
      } else {
        this.setState({ case8: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case7 + this.state.case8 + this.state.case9 == "XXX" ||
      this.state.case2 + this.state.case5 + this.state.case8 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case7 + this.state.case8 + this.state.case9 == "OOO" ||
      this.state.case2 + this.state.case5 + this.state.case8 == "OOO"
    ) {
      alert("O win")
    }
  }

  place9() {
    if (this.state.case9 !== "") {
      // alert("Trop tard c'est deja prit")
    } else {
      if (this.state.turn == true) {
        this.setState({ case9: "X" })
      } else {
        this.setState({ case9: "O" })
      }

      this.setState({ turn: !this.state.turn })
    }

    if (
      this.state.case1 + this.state.case5 + this.state.case9 == "XXX" ||
      this.state.case7 + this.state.case8 + this.state.case9 == "XXX" ||
      this.state.case3 + this.state.case6 + this.state.case9 == "XXX"
    ) {
      alert("X win")
    } else if (
      this.state.case1 + this.state.case5 + this.state.case9 == "OOO" ||
      this.state.case7 + this.state.case8 + this.state.case9 == "OOO" ||
      this.state.case3 + this.state.case6 + this.state.case9 == "OOO"
    ) {
      alert("O win")
    }
  }

  render() {
    return (
      <div>
        <p>Au {this.state.turn ? "X" : "O"} de jouer</p>
        <div className="border">
          <p onClick={this.place1} className="border1">{this.state.case1}</p>
          <p onClick={this.place2} className="border2">{this.state.case2}</p>
          <p onClick={this.place3} className="border3">{this.state.case3}</p>
          <p onClick={this.place4} className="border4">{this.state.case4}</p>
          <p onClick={this.place5} className="border5">{this.state.case5}</p>
          <p onClick={this.place6} className="border6">{this.state.case6}</p>
          <p onClick={this.place7} className="border7">{this.state.case7}</p>
          <p onClick={this.place8} className="border8">{this.state.case8}</p>
          <p onClick={this.place9} className="border9">{this.state.case9}</p>
        </div>
      </div>
    )
  }
}

export default App;
