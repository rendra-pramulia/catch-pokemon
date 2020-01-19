import React from 'react';
import poke from './assets/image/pokeball.png';
import logo from "./assets/image/POKEcatch.png";
import './App.css';

import { withGlobalContext } from "./state/globalState"

function App() {
  const [showAsyncComponent, setShowAsyncComponent] = useState(true);
  return (
    <div className="App">
      <header>
        <div className="container-fluid m-container">
          <div className="header-wrapper">
            <div className="align-left">
              <img src={logo} className="img-logo" />
            </div>
            <div className="align-right">
              <a className="img-circle-wrapper">
                <img
                  src={poke}
                  className="img-ball"
                  style={{ display: "inline" }}
                />
                <span class="my-poke">99</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid m-container content-scroll">
        <section className="poke-list">
          <ul>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
              <a href="#">Details Details Details</a>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
              <a href="#">Details</a>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
              <a href="#">Details</a>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
              <a href="#">Details</a>
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
              <a href="#">Details</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "load-apis-fail":
      return {
        ...state,
        apis: [],
        apisIsLoading: false
      };
    case "load-apis":
      return {
        ...state,
        apis: [],
        apisIsLoading: true
      };
    case "set-apis":
      return {
        ...state,
        apis: action.payload,
        apisIsLoading: false,
        apisIsAlreadyLoaded: true
      };
    default:
      throw new Error();
  }
}

export default withGlobalContext(
  App,
  () => {
    // Can be dynamic setup logic here..
    return {
      pokeList: [],
      name: "",
      apis: [],
      apisIsLoading: false,
      apisIsAlreadyLoaded: false
    };
  },
  reducer
);
