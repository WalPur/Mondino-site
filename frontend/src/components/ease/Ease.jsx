import './Ease.css'

import Images from '../../images/index'

function Ease(){
    return(
        <div className="ease__block">
            <div className="ease__container container">
                <div className="ease__content">
                    <div className="ease__text text">
                        Доступно в App Store и Google Play
                    </div>
                    <div className="ease__title title">
                        Сделайте свою работу проще и эффективнее
                    </div>
                </div>
                <div className="ease__images">
                    <img src={Images.ease_1_2} alt="phone" className="ease__content-img" />
                    <img src={Images.ease_2_2} alt="phone" className="ease__content-img" />
                    <img src={Images.ease_3_2} alt="phone" className="ease__content-img" />   
                </div>
                <div className="ease__buttons">
                    <a href="https://apps.apple.com/ru/app/%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80/id1582953573">
                        <img src={Images.appStore_dark} alt="appStore" className="ease__button" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mondino.pocketmedic">
                        <img src={Images.googlePlay_dark} alt="googlePlay" className="ease__button" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ease;