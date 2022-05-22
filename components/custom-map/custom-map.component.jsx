import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import EventCard from '../events-preview/preview-card/preview-card.component';

import { 
    CustomMapContainer,
    PropertiesMapContainer,
} from './custom-map.styles';

const CustomMap = ({latitude, logitude, zoom=12, data=[]}) => {
    let position = [latitude, logitude]
    return (<PropertiesMapContainer>
                <MapContainer center={position} zoom={zoom} style={{width: '100%', height: '100%'}}>
                {/** <TileLayer 
                        url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}'
                        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        ext= 'png'
                    />*/}
                    
                    <TileLayer 
                        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
                    />
                    
                    {data.map(({geometry, ...props}, index) => {
                        return (
                            <Marker position={geometry.coordinates} key={`market-${index}`}>
                                <Popup closeButton={false}>
                                    <EventCard event={props}/>
                                </Popup>
                            </Marker>
                    )})}
                </MapContainer>
        </PropertiesMapContainer>)
};
  
export default CustomMap;