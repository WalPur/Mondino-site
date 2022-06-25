import './ContactsMap.css'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function ContactsMap(){
    const mapState = { center: [62.032651, 129.748321], zoom: 16 };
    const mapPlacemarkGeometry = [62.032621, 129.750473]

    return(
        <div className="contactsMap__block">
            <div className="contactsMap__container">
                <YMaps>
                    <Map state={mapState} className='contactsMap__map'>
                        <Placemark geometry={mapPlacemarkGeometry}/>
                    </Map>
                </YMaps>
                <div className="contactsMap__content">
                    <div className="contactsMap__content-title">
                        MONDINO tracker  - мобильные технологии на страже вашего здоровья.
                    </div>
                    <div className="contactsMap__content-address">
                        Россия, Республика Саха (Якутия), г.Якутск, ул. Ленина 1
                    </div>
                    <div className="contactsMap__content-name">
                        IT Park Yakutsk
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsMap;