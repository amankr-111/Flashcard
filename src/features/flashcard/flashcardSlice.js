import { createSlice } from "@reduxjs/toolkit";

// Application has One Global state which can be supplied to the whole application
const initialState = {
  // it will first going to look into the local storage for the current state and then will look at the current state
  flashcards: localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards"))
    : [],
};

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    // This Reducer added the New Flashcards to the store
    setFlashCard(state, action) {
      state.flashcards.push({
        card: action.payload,
      });
      // after accepting the new flashcard from the user it sets to the Local Starage
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
  },
});

export const { setFlashCard } = flashcardSlice.actions;


export default flashcardSlice.reducer;
