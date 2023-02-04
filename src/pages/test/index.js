import { useEffect } from 'react';
import './index.css';

const { kakao } = window;

export default function Test() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450707, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])

    return (
        <div>
        <div id="map" style={{
            width: '500px',
            height: '500px'
        }}> </div>
        <div id="clickLatlng"></div>
        </div>
        
    );

}