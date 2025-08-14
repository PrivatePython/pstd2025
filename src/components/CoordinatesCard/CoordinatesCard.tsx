import type {FC} from "react";
import type {LatLng} from "leaflet";
import "./CoordinatesCard.css"

interface ICoordinatesCardProps {
    coordinates: LatLng;
    title: string;
}

const CoordinatesCard: FC<ICoordinatesCardProps> = ({coordinates, title}) => {
    return (
        <div className="coordinates-card">
            <h4 className="coordinates-card__title">{title}:</h4>
            <p className="coordinates-card__item">latitude: {coordinates.lat}</p>
            <p className="coordinates-card__item">longitude: {coordinates.lng}</p>
        </div>
    )
}
export default CoordinatesCard;
