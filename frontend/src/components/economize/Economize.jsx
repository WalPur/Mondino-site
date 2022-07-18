import './Economize.css'

function Economize(){
    return(
        <div className="economize__block">
            <div className="economize__container container">
                <img src="/images/economize_img.svg" alt="phone" className="economize__img" />
                <div className="economize__content">
                    <div className="economize__title title">
                        Экономьте деньги, не выходя из дома и без долгих поисков.
                    </div>
                    <div className="economize__text text">
                        Все выгодные предложения на медицинские услуги в твоем телефоне. Все виды медицинских услуг Вашего города собраны в одном приложении. Выгодно, удобно и быстро.
                    </div>
                    <img src="/images/mondino_icon_dark.svg" alt="mondino-icon" className="economize__content-img" />
                </div>
            </div>
        </div>
    )
}

export default Economize;