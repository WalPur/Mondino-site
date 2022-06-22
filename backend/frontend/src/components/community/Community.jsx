import './Community.css'

import Images from '../../images/index'

function Community(){
    return(
        <div className="community__block">
            <div className="community__container container">
                <img src={Images.community} alt="laptop" className="community__img" />
                <div className="community__content">
                    <div className="community__title title">
                        Экспертное сообщество врaчей и фармакологов РС(Я)
                    </div>
                    <div className="community__text text">
                        Сервис способствует  повышению эффективности лечения, благодаря персонализированному подходу  с использованием искусственного интеллекта (ИИ), нейронных сетей и Big Data (больших данных).
                    </div>
                    <img src={Images.mondino_icon} alt="mondino-icon" className="community__icon" />
                </div>
            </div>
        </div>
    )
}

export default Community;