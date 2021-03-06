import React from "react";
import { Column, CustomDragLayer } from "./components";
import { AddNewItem } from "./components";

import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
};

export default App;
