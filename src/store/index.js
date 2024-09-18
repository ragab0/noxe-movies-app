import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextMovies = createContext(0);

export default function ContextMoviesProvider(props) {
  return (
    <ContextMovies.Provider value={{}}>{props.children}</ContextMovies.Provider>
  );
}
