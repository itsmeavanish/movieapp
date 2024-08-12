import { useEffect } from "react"

const KEY="810e393933ff4e9fa86c4d7383c513ad"
export default function Map(){
    useEffect(function(){
        async function Geolocate(){
            const res=fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${KEY}&ip=47.15.217.65&fields=geo&include=liveHostname`)
            const data=(await res).json();
            console.log(data);
        }
        Geolocate();
    },[])

}