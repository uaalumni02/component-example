class Scheduler extends React.Component {
  state = {
    name: "Bob Smith",
    diagnosis: "ADHD",
    medications: "Ritalin",
    hospitalizations: "None"
  }
  render() {
    return (
      <div className="appointment">
        <h1> { this.state.name } </h1>
        <p> { this.state.diagnosis } </p>
        <p> { this.state.medications } </p>
        <p> { this.state.hospitalizations } </p>
      </div>
    );
  }
}

ReactDOM.render(<Scheduler/>, document.getElementById("app"));