import { createContext, useReducer } from "react";

export const LineManyContexts = createContext(null);
export const LineDispatcManyContexts = createContext(null);

export function ManyNameProvider({ children }) {
  const [name, dispatch] = useReducer(nameReducer, []);

  return (
    <LineManyContexts.Provider value={name}>
      <LineDispatcManyContexts.Provider value={dispatch}>
        {children}
      </LineDispatcManyContexts.Provider>
    </LineManyContexts.Provider>
  );
}

function nameReducer(state, action) {
  switch (action.type) {
    case "added": {
      return [...state, { id: action.id, ...action.payload }];
    }
    case "delete": {
      return state.filter((t) => t.id !== action.id);
    }
    case "edit": {
      return state.map((t) => (t.id === action.id ? { ...t, ...action.payload } : t));
    }

    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
