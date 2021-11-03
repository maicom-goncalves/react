import React , { Component ,useState} from 'react';
//import Modal from 'react-bootstrap/Modal';
//import ModalDialog from 'react-bootstrap/ModalDialog';
class Receita7 extends Component() {
 
    render() {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return (

        <div>
          <button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={handleClose}>
                Close
              </button>
              <button variant="primary">Understood</button>
            </Modal.Footer>
          </Modal>
        </div>
      );

    }
}


export default Receita7;
