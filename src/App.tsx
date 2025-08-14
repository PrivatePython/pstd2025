import './App.css'
import 'leaflet/dist/leaflet.css'
import Modal from "./components/Modal/Modal.tsx";
import Map from "./components/Map.tsx";
import ModalContextProvider from "./contexts/ModalContextProvider.tsx"


function App() {
    return (
        <ModalContextProvider>
            <h1 className="app-title">Click on the card selects the first point, after the second click you will receive coordinates</h1>
            <Modal />
            <Map />
        </ModalContextProvider>
    )
}

export default App;
