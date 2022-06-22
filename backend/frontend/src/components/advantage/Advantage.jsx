import './Advantage.css'

import Images from '../../images/index'

function Advantage(){
    return(
        <div className="advantage__block">
            <div className="advantage__container container">
                <div className="advantage__items">
                    <div className="advantage__item">
                        <img src={Images.advantage_icon_1} alt="icon" className="advantage__item-logo" />
                        <div className="advantage__item-content">
                            <div className="advantage__content-title">
                                Поток пациентов
                            </div>
                            <div className="advantage__content-text">
                                Больше пациентов благодаря нашему удобному сервису
                            </div>
                        </div>
                    </div>
                    <div className="advantage__item">
                        <img src={Images.advantage_icon_2} alt="icon" className="advantage__item-logo" />
                        <div className="advantage__item-content">
                            <div className="advantage__content-title">
                                Инструменты
                            </div>
                            <div className="advantage__content-text">
                                Все инструменты нужные для врачей в одном месте
                            </div>
                        </div>
                    </div>
                    <div className="advantage__item">
                        <img src={Images.advantage_icon_3} alt="icon" className="advantage__item-logo" />
                        <div className="advantage__item-content">
                            <div className="advantage__content-title">
                                Качество
                            </div>
                            <div className="advantage__content-text">
                                Увеличивется качество обслуживания
                            </div>
                        </div>
                    </div>
                    <div className="advantage__item">
                        <img src={Images.advantage_icon_4} alt="icon" className="advantage__item-logo" />
                        <div className="advantage__item-content">
                            <div className="advantage__content-title">
                                Онлайн
                            </div>
                            <div className="advantage__content-text">
                                Взаимодействие с пациентами онлайн
                            </div>
                        </div>
                    </div>
                    <div className="advantage__item">
                        <img src={Images.advantage_icon_5} alt="icon" className="advantage__item-logo" />
                        <div className="advantage__item-content">
                            <div className="advantage__content-title">
                                Эффективность
                            </div>
                            <div className="advantage__content-text">
                                У персонала увеличивается работоспособность
                            </div>
                        </div>
                    </div>
                    <div className="advantage__item">
                        <img src={Images.advantage_icon_6} alt="icon" className="advantage__item-logo" />
                        <div className="advantage__item-content">
                            <div className="advantage__content-title">
                                Анализ
                            </div>
                            <div className="advantage__content-text">
                                Аналитическая панель по всем пациентам для врача
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage;