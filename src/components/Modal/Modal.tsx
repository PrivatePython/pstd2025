import {type FC, type PropsWithChildren, useContext} from "react";
import './Modal.css'
import {INITIAL_MODAL_STATE, ModalContext} from "../../contexts/ModalContext.ts";

const Modal: FC<PropsWithChildren> = () => {
    const {modalState, setModalState} = useContext(ModalContext);

    const closeModal = () => {
        setModalState(() => INITIAL_MODAL_STATE)
    }

    if(!modalState.isModalOpen) return null

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                <h3 className="modal__title">{modalState.titleModal}</h3>
                <div className="modal__content">{modalState.modalContent}</div>
                <button className="modal__close-button" onClick={closeModal}>close</button>
            </div>
        </div>
    );
}
export default Modal;
