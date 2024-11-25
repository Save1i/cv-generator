import { createContext, useReducer } from "react";

// Создаем контекст
export const LineManyContextsSkills = createContext();

// Редьюсер для управления действиями
const skillsReducer = (state, action) => {
  switch (action.type) {
    case "added":
      return [...state, { id: action.id, ...action.payload }];
    case "edit":
      return state.map((item) => (item.id === action.id ? { ...item, ...action.payload } : item));
    case "delete":
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Инициализация state как пустого массива
const initialSkillsState = [];

export const LineManyContextsSkillsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(skillsReducer, initialSkillsState);

  return (
    <LineManyContextsSkills.Provider value={{ state, dispatch }}>
      {children}
    </LineManyContextsSkills.Provider>
  );
};
