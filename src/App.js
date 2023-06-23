import React, { Component } from "react";
import { connect } from "react-redux";
import './css/App.css';
import { StyleRoot } from 'radium';
import Navigator from "./components/Navigator/Navigator";
import { LoginStatusDisplay } from "./components/LoginStatusDisplay/LoginStatusDisplay";


import PropTypes from "prop-types";


class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const {message, type} = this.props;

  return (
    <div className="App">
    <StyleRoot>

      <Navigator />
      <LoginStatusDisplay />
      <div>
        {message !== undefined && (
          <div className={`message ${type}`}>
            {message}
          </div>
        )}
      </div>

    </StyleRoot>
    </div>
  );
}

static propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string,
  type: PropTypes.string
  }

}

const mapStateToProps = (state) => {
  return {
      message: state.messageReducer.message,
      type: state.messageReducer.type
  };
}

// export default App;
export default connect(mapStateToProps, null)(App);
