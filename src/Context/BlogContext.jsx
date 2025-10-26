import React, { createContext, useState } from "react";


// 1. Create the context
export const AppContext = createContext();

// 2. Create a provider component
export const AppProvider = ({ children }) => {
   const [postId, setPostId] = useState();
  return (
    <AppContext.Provider value={[postId, setPostId]}>
      {children}
    </AppContext.Provider>
  );
};
