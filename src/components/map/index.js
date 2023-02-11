/*global kakao */
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
//import Detail from '../../pages/detail'

export default function Map() {
    let { state } = useLocation();
    const lat = state.latitude;
    const long = state.longitude;
    
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        let container = document.getElementById("map");
        let options = {
        center: new kakao.maps.LatLng(long, lat),
        level: 4,
        };
        //map
        const map = new kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
            long, lat
        );

        // 마커를 생성
        let marker = new kakao.maps.Marker({
        position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    };

    return <div id="map" style={{ width: "800px", height: "500px" }}></div>;
}