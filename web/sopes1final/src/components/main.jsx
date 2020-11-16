import React, { Component } from "react";

const LinkServidor = "http://34.122.72.236:5000/addmensaje";

class Ventana extends Component {
  state = {
    texto: "",
    mensajes: [],
  };
  url = "";
  render() {
    return (
      <div className="card text-center bg-light">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <h4>
            <a className="text-light p-2" href={this.url}>
              Final de Sistemas Operativos1
            </a>
          </h4>
        </nav>

        <div className="card-body p-5">
          <div className="row p-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">{this.CajaTexto()}</div>
            <div className="col-md-2"></div>
          </div>

          <button
            onClick={this.ejecutar}
            className="btn btn-outline-primary btn-lg"
          >
            Enviar
          </button>
          <ul className="text-left">
            {this.state.mensajes.map((x) => (
              <li>{x}</li>
            ))}
          </ul>

          <footer className="bg-light my-5 pt-5 text-muted text-center text-small">
            <a className="text-secondary" href="https://github.com/carlosE17">
              &copy; Carlos Rodrigo Estrada Najarro - 201700314
            </a>
            <p>
              Universidad de San Carlos de Guatemala, Ingenieria en Ciencias y
              Sistemas
            </p>
            <p> Sistemas Operativos 1, 2do Sem. 2020</p>
          </footer>
        </div>
      </div>
    );
  }

  ejecutar = () => {
    if (this.state.texto !== "") {
      fetch(LinkServidor, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texto: this.state.texto,
        }),
      })
        .then((result) => result.json())
        .then((result) => {
          this.setState({ mensajes: result.mensajes });
          this.setState({ texto: "" });
        });
    }
  };

  handleChange = (event) => {
    this.setState({ texto: event.target.value });
  };

  CajaTexto() {
    return (
      <textarea
        href="Texto"
        className="form-control rounded shadow"
        rows="10"
        type="textarea"
        name="textValue"
        onChange={this.handleChange}
      />
    );
  }
}

export default Ventana;
