import './Health.css'

import Images from '../../images/index'

function Health(){
    return(
        <div className="health__block">
            <div className="health__container container">
                <div className="health__content">
                    <div className="health__text text">
                        Доступно в App Store и Google Play
                    </div>
                    <div className="health__title title">
                        Следите за своим здоровьем
                    </div>
                </div>
                <div className="health__images">
                    <img src={Images.health_1_2} alt="phone" className="health__content-img" />
                    <img src={Images.health_2_2} alt="phone" className="health__content-img" />
                    <img src={Images.health_3_2} alt="phone" className="health__content-img" />
                </div>
                <div className="health__buttons">
                    <a href="">
                        <img src={Images.appStore} alt="appStore" className="health__button" />
                    </a>
                    <a href="">
                        <img src={Images.googlePlay} alt="googlePlay" className="health__button" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Health;