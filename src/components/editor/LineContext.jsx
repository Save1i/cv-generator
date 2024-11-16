import { createContext, useReducer } from "react";

export const LineContext = createContext(null);
export const LineDispatchContext = createContext(null);

export function NameProvider({ children }) {
  const [name, dispatch] = useReducer(nameReducer, "");

  return (
    <LineContext.Provider value={name}>
      <LineDispatchContext.Provider value={dispatch}>{children}</LineDispatchContext.Provider>
    </LineContext.Provider>
  );
}

function nameReducer(state, action) {
  switch (action.type) {
    case "added": {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
