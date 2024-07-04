
import { Map, Marker, ZoomControl } from 'pigeon-maps';

interface PigeonMapProps {
    height: number;
    defaultCenter: [number, number]; // Array de dos números (latitud, longitud)
    defaultZoom: number;
}

const PigeonMap: React.FC<PigeonMapProps> = ({ height, defaultCenter, defaultZoom }) => {
    return (<>
        <Map height={height} defaultCenter={defaultCenter} defaultZoom={defaultZoom}>
            <Marker anchor={defaultCenter} />
        </Map>
         <ZoomControl />
         </>
    );
};

export default PigeonMap;