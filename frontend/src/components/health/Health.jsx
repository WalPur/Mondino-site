import './Health.css'

// import Images from '../../images/index'

function Health(){
    return(
        <div className="health__block">
            <div className="health__container container">
                <div className="health__content">
                    <div className="health__text text" id='download'>
                        Доступно в App Store и Google Play
                    </div>
                    <div className="health__title title">
                        Следите за своим здоровьем
                    </div>
                </div>
                <div className="health__images">
                    <img src="/images/health_1_2.svg" alt="phone" className="health__content-img" />
                    <img src="/images/health_2_2.svg" alt="phone" className="health__content-img" />
                    <img src="/images/health_3_2.svg" alt="phone" className="health__content-img" />
                </div>
                <div className="health__buttons">
                    <a href="https://apps.apple.com/ru/app/%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80/id1582953573">
                        <img src="/images/appStore.svg" alt="appStore" className="health__button" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mondino.pocketmedic">
                        <img src="/images/googlePlay.svg" alt="googlePlay" className="health__button" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Health;