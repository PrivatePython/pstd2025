import {createContext, type Dispatch, type ReactNode, type SetStateAction} from "react";

export interface IModalState {
    isModalOpen: boolean;
    titleModal: string;
    modalContent:  ReactNode;
}

export interface IModalContextValue {
    modalState: IModalState;
    setModalState: Dispatch<SetStateAction<IModalState>>;
}

export const INITIAL_MODAL_STATE: IModalState = {
    isModalOpen: false,
    titleModal: '',
    modalContent: '',
}

export const ModalContext = createContext<IModalContextValue>({
    modalState: INITIAL_MODAL_STATE,
    setModalState: () => {}
});
