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
                    <div className="general__button">
                        Скачать
                    </div>
                </div>
                <div className="general_img">
                    <img src={Images.general} alt='general_img'/>
                </div>
            </div>
        </div>
    )
}

export default General;