import './General.css';

import { HashLink } from 'react-router-hash-link';

// import Images from '../../images/index';

function General() {
    return (
        <div className='general__block'>
            <div className="general__container">
                <div className="general__content">
                    <div className="general__title">
                        <img src="/images/mondino_title.svg" alt='mondino_title'/>
                        <div className="general__title-text">
                            Tracker
                        </div>
                    </div>
                    <div className="general__subtitle">
                        Mondino Tracker  - мобильные технологии на страже вашего здоровья.
                    </div>
                    <HashLink to="#download" className="general__button">
                        <img className='general__button-img' src="/images/download_icon.png"/>
                        Скачать
                    </HashLink>
                </div>
                <img className='general__img' src="/images/general_img.png" alt='general_img'/>
            </div>
        </div>
    )
}

export default General;