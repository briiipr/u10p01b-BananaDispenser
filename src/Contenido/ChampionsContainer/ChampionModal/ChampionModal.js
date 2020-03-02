import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { ChampionModalContext } from './ChampionModalContext.js';

function ChampionModal() {

    let { state, dispatch } = React.useContext(ChampionModalContext);
    const [showModal, setShowModal] = useState(state.mostrarModal)

    if (state.mostrarModal === false) {
        alert('Es falso: ' + state.mostrarModal)
        return (<label></label>)
    } else {
        alert('Es true: ' + state)
        alert('Valor campeon actual: ' + state.campeonActual)
        return (
            <Modal
               
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {state.campeonActual}
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
              </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={dispatch({type: "reset"}) }>Close</Button>
                </Modal.Footer>
            </Modal>
        );

    }

}

export default ChampionModal;