import * as React from 'react';


let initialState = {
    arrayActual: [],
    arrayOriginal: [],
    yaDefinido: false
};
let ChampionsContext = React.createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case "inicio":
            console.log("ENTRA A INICIO: ")
            initialState.arrayActual = action.payload;
            initialState.arrayOriginal = action.payload;
            state.arrayActual = action.payload;
            state.arrayOriginal = action.payload;
            console.log(action.payload)
            return initialState.arrayActual;
        case "listar":
            if(initialState.arrayActual){
                return initialState.arrayActual;
            }else{
                return initialState.arrayOriginal;
            }
        case "reset":
            initialState.arrayActual = initialState.arrayOriginal;
            return initialState;
        case "filtraNombre":
            initialState.yaDefinido = true;
            let arrayClaves = [];
            console.log(Object.keys(initialState.arrayOriginal))
            console.log('Valor texto: ' + action.payload)
            arrayClaves = Object.keys(initialState.arrayOriginal).filter(nombre => {
                return nombre.toLowerCase().includes(action.payload.slice());
            });
            console.log('Array filtrado: ')
            console.log(arrayClaves)
            initialState.arrayActual = [];
            arrayClaves.forEach(clave => {
                initialState.arrayActual.push(initialState.arrayOriginal[clave]);
            })
            return initialState.arrayActual;
    }
}

function ChampionsContextProvider(props) {
    
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };

    return (
        <ChampionsContext.Provider value={value}>{props.children}</ChampionsContext.Provider>
    );
}

let ChampionsContextConsumer = ChampionsContext.Consumer;

export { ChampionsContext, ChampionsContextProvider, ChampionsContextConsumer };