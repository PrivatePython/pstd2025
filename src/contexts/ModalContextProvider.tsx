import {
    type FC,
    type PropsWithChildren,
    useState
} from "react";
import {type IModalState, INITIAL_MODAL_STATE, ModalContext} from "./ModalContext.ts";

const ModalContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [modalState, setModalState] = useState<IModalState>(INITIAL_MODAL_STATE);

    return (
        <ModalContext.Provider value={{modalState, setModalState}}>
            {children}
        </ModalContext.Provider>
    );
}
export default ModalContextProvider;
