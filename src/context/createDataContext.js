import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
      // boundActions will be the functions we use to somehow change our state

      // actions will be an object so we will loop through all key value pairs, look up all actions keys aand call them with dispatch
    }

    return (
      //This is the underline react component trhat makes all of our data available to all the different components rendered underneath it
      // The value is the actual information that will be shared
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
  // Provider = our component that will make all of our data available to exerything else inside of our application
  // Context = the context object that we are going to use to get access to that information from one of our child components
};
