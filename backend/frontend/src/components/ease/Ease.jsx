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
                    <a href="">
                        <img src={Images.appStore_dark} alt="appStore" className="ease__button" />
                    </a>
                    <a href="">
                        <img src={Images.googlePlay_dark} alt="googlePlay" className="ease__button" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ease;