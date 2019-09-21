import React from "react";
import "../styles/ContactPage.css";
import "../styles/Button.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: ""
  };
  handleSubmite = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmite}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button className="buttonUniversal">Wyślij</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Ma częściowo wypełniony formularz - czy chcesz go porzucić?"
        />
      </div>
    );
  }
}

export default ContactPage;
