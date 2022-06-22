import './General.css'

import Images from '../../images/index'

function General() {
    return (
        <div className='general__block'>
            <div className="general__container">
                <div className="general__content">
                    <div className="general__title">
                        <img src={Images.mondino_title} alt='mondino_title'/>
                    </div>
                    <div className="general__subtitle">
                        Tracker  - мобильные технологии на страже вашего здоровья.
                    </div>
                    <a className="general__button">
                        Скачать
                    </a>
                </div>
                <img className='general__img' src={Images.general} alt='general_img'/>
            </div>
        </div>
    )
}

export default General;