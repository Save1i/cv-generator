import { createContext, useReducer } from "react";

export const LineManyContextsWork = createContext(null);
export const LineDispatcManyContextsWork = createContext(null);

export function ManyNameProviderWork({ children }) {
  const [name, dispatch] = useReducer(nameReducer, []);

  return (
    <LineManyContextsWork.Provider value={name}>
      <LineDispatcManyContextsWork.Provider value={dispatch}>
        {children}
      </LineDispatcManyContextsWork.Provider>
    </LineManyContextsWork.Provider>
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
