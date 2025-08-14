import {Rectangle, useMapEvents} from "react-leaflet";
import {type FC, useContext, useEffect, useRef, useState} from "react";
import type {LatLngTuple, LeafletMouseEvent, Rectangle as RectangleType} from "leaflet";
import {ModalContext} from "../contexts/ModalContext.ts";
import CoordinatesCard from "./CoordinatesCard/CoordinatesCard.tsx";

type TBounds = [LatLngTuple, LatLngTuple];

const RectangleDrawing: FC = () => {
    const rectangleRef = useRef<RectangleType | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [rectangleCord, setRectangleCord] = useState<TBounds | null>(null);
    const {setModalState} = useContext(ModalContext);

    useEffect(() => {
        if (isDrawing) {
            map.dragging.disable();
            map.doubleClickZoom.disable();
        } else {
            map.dragging.enable();
            map.doubleClickZoom.enable();
        }
    }, [isDrawing]);

    const map = useMapEvents({
        click(e: LeafletMouseEvent) {
            if (isDrawing) {
                setIsDrawing(false)
                if (rectangleRef.current) {
                    const bounds = rectangleRef.current.getBounds();
                    setModalState({
                        isModalOpen: true,
                        modalContent: <>
                            <CoordinatesCard coordinates={bounds.getNorthWest()} title="North West" />
                            <CoordinatesCard coordinates={bounds.getNorthEast()} title="North East" />
                            <CoordinatesCard coordinates={bounds.getSouthEast()} title="South East" />
                            <CoordinatesCard coordinates={bounds.getSouthWest()} title="South West" />
                        </>,
                        titleModal: "Your coordinate is:"
                    })
                }
            } else {
                setIsDrawing(true);
                setRectangleCord([[e.latlng.lat, e.latlng.lng], [e.latlng.lat, e.latlng.lng]]);
            }
        },
        mousemove(e) {
            if (isDrawing) {
                setRectangleCord((prevState) => {
                    if (!prevState) return null;
                    return [prevState[0], [e.latlng.lat, e.latlng.lng]];
                })
            }
        }
    })
    return (
        <>
            {rectangleCord && <Rectangle ref={rectangleRef} bounds={rectangleCord} fillColor="red" />}
        </>
    );
}
export default RectangleDrawing
