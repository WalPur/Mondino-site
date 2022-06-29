import './advertising.css'

import Images from '../../images/index'

function advertising (){
    return(
        <div className="advertising_block">
            <div className="advertising_container">
                <div className="advertising_content">
                    <div className="advertising_title">
                        Медицинская ИТ-компания
                    </div>
                    <div className="advertising_text">
                        Наша команда тесно сотрудничает с врачами и фармакологами для того, чтобы делать наш сервис лучше и эффективнее для пользователей. Мы работаем в “Национальном центре медицины” РБ-№1 Республики Саха (Якутия) в г. Якутске, который находится по адресу Сергеляхское шоссе, 4.
                    </div>
                </div>
                <img src={Images.team_medicine} alt="team_medicine" className="advertising__img" />
            </div>
        </div>
    )
}

export default advertising;