import './Showboat.css'

import Images from '../../images/index'

function Showboat (){
    return(
        <div className="showboat_block">
            <div className="showboat_container container">
                <div className="showboat_block_img">
                    <img src={Images.team_icon_1} alt="team_icon_1" className="showboat_img" />
                    <div className="showboat_title">
                        Командный дух
                    </div>
                    <div className="showboat_text">
                        Мы “Dream team” благодаря чувству командного духа. Для нас важно развиваться и поддерживать друг друга плечом к плечу.
                    </div>
                </div>
                <div className="showboat_block_img">
                    <img src={Images.team_icon_2} alt="team_icon_2" className="showboat_img" />
                    <div className="showboat_title">
                        Гибкость
                    </div>
                    <div className="showboat_text">
                        Мыслить и работать намного эффективнее и приятнее, используя гибкий подход. А также уметь действовать здесь и сейчас.
                    </div>
                </div>
                <div className="showboat_block_img">
                    <img src={Images.team_icon_3} alt="team_icon_3" className="showboat_img" />
                    <div className="showboat_title">
                        Позитивный настрой
                    </div>
                    <div className="showboat_text">
                        Мы уверенно смотрим вперед и ценим вклад каждого. Даже в самые тяжелые моменты все убеждены, что справятся.
                    </div>
                </div>
                <div className="showboat_block_img">
                    <img src={Images.team_icon_4} alt="team_icon_4" className="showboat_img" />
                    <div className="showboat_title">
                        Проактивность
                    </div>
                    <div className="showboat_text">
                     Мы команда, которая проявляет инициативу и принимает вывоз. Мы ценим легкость на подъем и ищем лучшие способы решения задач.   
                    </div>
                </div>
                <div className="showboat_block_img">
                    <img src={Images.team_icon_5} alt="team_icon_5" className="showboat_img" />
                    <div className="showboat_title">
                        Вовлеченность
                    </div>
                    <div className="showboat_text">
                        Наши глаза горят во время процесса работы. Нам нравится то, что мы делаем. Благодаря данной ценности мы способны добиваться высоких результатов.
                    </div>
                </div>
                <div className="showboat_block_img">
                    <img src={Images.team_icon_6} alt="team_icon_6" className="showboat_img" />
                    <div className="showboat_title">
                        Уважение и доверие 
                    </div>
                    <div className="showboat_text">
                        Мы ценим доверие, как воздух. Поскольку мы дышим легко и привольно в такой командной культуре. Каждый в команде может рассчитывать на коллег. 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showboat;