import React from 'react';

const AppContext = React.createContext({});//createContext(defaultValue); 
                                        //Crea un objeto Context. 
                                        //Cuando React renderiza un componente que se suscribe a este objeto Context,
                                        //este leerá el valor de contexto actual del Provider más cercano en el árbol.
                                         //El argumento defaultValue es usado únicamente cuando un componente no tiene 
                                         //un Provider superior a él en el árbol.

export default AppContext;