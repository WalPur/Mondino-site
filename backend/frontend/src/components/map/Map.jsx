import './Map.css'
import { YMaps } from "@pbe/react-yandex-maps";

function Map(){
    return(
        <YMaps>
            <div>My awesome application with maps!</div>
            <Map defaultState= {{ center:[62.032621, 129.750473], zoom: 5 }} />
        </YMaps>
    )
}

export default Map;