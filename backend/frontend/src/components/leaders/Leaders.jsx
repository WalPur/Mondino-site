import './Leaders.css'

import Images from '../../images/index'

function Leaders (){
    return(
        <div className="leaders_block">
            <div className="leaders__container container">
                <div className="leaders_content">
                    <div className="leaders_title">
                        Команда Mondino
                    </div>
                    <div className="leaders_text">
                        Команда ООО “Мондино Технолоджес”
                    </div>
                </div>
                <div className="leaders_content_under">
                    <div className="leaders_title_leader">
                        Руководители
                    </div>
                </div>
                <div className="leaders_content_lower">
                    <div className="leaders_block_img">
                        <img src={Images.team_img_1} alt="team_img_1" className="leaders_img" />
                        <div className="leaders_title_block">
                            Титов Михаил
                        </div>
                        <div className="leaders_text_block">
                            Founder, CVO
                        </div>
                    </div>
                    <div className="leaders_block_img">
                        <img src={Images.team_img_2} alt="team_img_2" className="leaders_img" />
                        <div className="leaders_title_block">
                            Белостоцкий Виктор
                        </div>
                        <div className="leaders_text_block">
                            CEO, team lead
                        </div>
                    </div>
                    <div className="leaders_block_img">
                        <img src={Images.team_img_3} alt="team_img_3" className="leaders_img" />
                        <div className="leaders_title_block">
                            Виктор Павлов
                        </div>
                        <div className="leaders_text_block">
                            CTO, Full stack developer
                        </div>
                    </div>
                    <div className="leaders_block_img">
                        <img src={Images.team_img_4} alt="team_img_4" className="leaders_img" />
                        <div className="leaders_title_block">
                            Слава Скосырский
                        </div>
                        <div className="leaders_text_block">
                            Frontend developer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaders;