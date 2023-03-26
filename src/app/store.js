import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "../features/flashcard/flashcardSlice";

// This will clear all the global storage for the application which contains reducers

export const store = configureStore({
  
  reducer: {
  
    flashcard: flashcardReducer,
  
  },

})
;
