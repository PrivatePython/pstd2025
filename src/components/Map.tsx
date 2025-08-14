import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import RectangleDrawing from "./RectangleDrawing.tsx";

const Map = () => {
    return (
        <MapContainer
            className="map"
            style={{height: "500px", width: "100%"}}
            center={[53.906761, 27.561822]} zoom={13} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RectangleDrawing />
            <Marker position={[53.906761, 27.561822]}>
                <Popup>
                    Minsk
                </Popup>
            </Marker>
        </MapContainer>
    )
}
export default Map;
