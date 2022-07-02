import './ContactsMap.css';

// import {YMaps, Map, Placemark} from "react-yandex-maps";

function ContactsMap(){
    const mapState = {
        center: [62.032651, 129.748321],
        zoom: 16
    };
    const mapPlacemarkGeometry = [
        62.032621,
        129.750473
    ];

    return(
        <div className="contactsMap__block">
            <div className="contactsMap__container">
                {/* <YMaps>
                    <Map state={mapState} className='contactsMap__map'>
                        <Placemark geometry={mapPlacemarkGeometry} />
                    </Map>
                </YMaps> */}
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afa51e6c28df90ba42cb5e98612768fbc28871de0ed99e6319c18e8175ba34dd3&amp;source=constructor" className='contactsMap__map' frameborder="0"></iframe>
                <div className="contactsMap__content">
                    <div className="contactsMap__content-title">
                        MONDINO tracker  - мобильные технологии на страже вашего здоровья.
                    </div>
                    <div className="contactsMap__content-address">
                        Россия, Республика Саха (Якутия), г.Якутск, Проспект Ленина 1
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