import React, { createContext, useState } from "react";

export const FigureContext = createContext();

export const FigureProvider = ({ children }) => {
  const [figures, setFigures] = useState([
    {
      id: 1,
      name: "Iron Man",
      price: 29.99,
      image: "https://m.media-amazon.com/images/I/71E1BKTK-LL._AC_SL1000_.jpg",
    },
    {
      id: 2,
      name: "Spider-Man",
      price: 19.99,
      image:
        "https://images.bigbadtoystore.com/images/p/full/2023/06/e0e7d3f7-672f-424c-9009-d64d9bd57bab.jpg",
    },
  ]);

  const addFigure = (figure) => {
    setFigures([...figures, { ...figure, id: figures.length + 1 }]);
  };

  const editFigure = (id, updatedFigure) => {
    setFigures(figures.map((fig) => (fig.id === id ? updatedFigure : fig)));
  };

  const deleteFigure = (id) => {
    setFigures(figures.filter((fig) => fig.id !== id));
  };

  return (
    <FigureContext.Provider
      value={{ figures, addFigure, editFigure, deleteFigure }}
    >
      {children}
    </FigureContext.Provider>
  );
};
