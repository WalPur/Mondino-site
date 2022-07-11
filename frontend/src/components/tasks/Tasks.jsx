import './Tasks.css'

import Images from '../../images/index'

function Tasks(){
    return(
        <div className="tasks__block">
            <div className="tasks__container container">
                <div className="tasks__content-container">
                    <div className="tasks__content">
                        <div className="tasks_content_text">
                            <div className="tasks__title title">
                                наша миссия
                            </div>
                            <div className="tasks__text text">
                                Сделаем ваш менеджмент лекарств эффективнее
                            </div>
                        </div>
                        <div className="tasks_content_under">
                            <div className="tasks_under_text">
                                <div className="tasks_text_block">
                                    <div className="tasks_text_title">
                                        6
                                    </div>
                                    <div className="tasks_text_text">
                                        Мед. Проекта
                                    </div>
                                </div>
                                <div className="tasks_text_block">
                                    <div className="tasks_text_title">
                                        2021
                                    </div>
                                    <div className="tasks_text_text">
                                        Начало
                                    </div>
                                </div>
                                <div className="tasks_text_block">
                                    <div className="tasks_text_title">
                                        $250 000
                                    </div>
                                    <div className="tasks_text_text">
                                        Инвестиций
                                    </div>
                                </div>
                                <div className="tasks_text_block">
                                    <div className="tasks_text_title">
                                        23
                                    </div>
                                    <div className="tasks_text_text">
                                        Человек в команде
                                    </div>
                                </div>
                            </div>
                            <div className="tasks_content_icon">
                                <img src={Images.mondino_tech} alt="mondino_tech" className="tasks__content-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Images.team_general} alt="team_general" className="tasks__img" />
            </div>
        </div>
    )
}

export default Tasks;