import * as React from 'react';


let initialState = {
    campeonActual: '',
    mostrarModal: false
};
let ChampionModalContext = React.createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case "setCampeon":
            initialState.campeonActual = action.campeon;
            initialState.mostrarModal = action.mostrar;
            alert('Entra al switch: ' + initialState.campeonActual + ' ' + initialState.mostrarModal)
            return initialState.mostrarModal;
        case "reset":
            initialState.mostrarModal = false;
            initialState.campeonActual = '';
            return initialState.mostrarModal;
    }
}

function ChampionModalContextProvider(props) {
    
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };

    return (
        <ChampionModalContext.Provider value={value}>{props.children}</ChampionModalContext.Provider>
    );
}

let ChampionModalContextConsumer = ChampionModalContext.Consumer;

export { ChampionModalContext, ChampionModalContextProvider, ChampionModalContextConsumer };