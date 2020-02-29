import * as React from 'react';


let initialState = {
    arrayActual: [],
    arrayClavesActual: [],
    arrayOriginal: [],
    arrayClavesOriginal: [],
    ordenActual: ''
};
let ChampionsContext = React.createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case "inicio":
            console.log("ENTRA A INICIO: ")
            initialState.arrayActual = action.payload;
            initialState.arrayOriginal = action.payload;
            initialState.arrayClavesOriginal = Object.keys(initialState.arrayOriginal)
            console.log('Valor claves original inicio: ')
            console.log(initialState.arrayClavesOriginal)
            initialState.arrayClavesActual = initialState.arrayClavesOriginal
            initialState.ordenActual = 'az'
            console.log(action.payload)
            return initialState.arrayActual;

        case "reset":
            initialState.arrayActual = initialState.arrayOriginal;
            return initialState.arrayActual;

        case "filtraNombre":
            let clavesFiltradas = Object.keys(initialState.arrayOriginal).filter(nombre => {
                return nombre.toLowerCase().includes(action.payload.toLowerCase());
            });
            initialState.arrayActual = [];
            initialState.arrayClavesActual = clavesFiltradas;
            console.log('Array filtrado: ')
            console.log(initialState.arrayClavesActual)
            initialState.arrayClavesActual.forEach(clave => {
                initialState.arrayActual.push(initialState.arrayOriginal[clave]);
            })
            console.log('NUEVO VALOR array actual: ')
            console.log(initialState.arrayActual)
            console.log(initialState)
            return initialState.arrayActual;
            
        case "ordenaCampeones":
            console.log('Array claves actual en ordena ')
            console.log(initialState.arrayClavesActual.reverse())
            initialState.arrayActual = []
            initialState.ordenActual = action.payload;
            if(initialState.ordenActual === 'az'){
                initialState.arrayClavesActual.forEach(clave => {
                    initialState.arrayActual.unshift(initialState.arrayOriginal[clave]);
                })
            }else{
                initialState.arrayClavesActual.forEach(clave => {
                    initialState.arrayActual.push(initialState.arrayOriginal[clave]);
                })
            }

            console.log('Nuevo array ')
            console.log(initialState.arrayActual)

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