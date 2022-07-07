import './Medicine.css'

import Images from '../../images/index'

function Medicine (){
    return(
        <div className="medicine_block">
            <div className="medicine_container container">
                <div className="medicine_content">
                    <div className="medicine_title">
                        Медицинская ИТ-компания
                    </div>
                    <div className="medicine_text">
                        Наша команда тесно сотрудничает с врачами и фармакологами для того, чтобы делать наш сервис лучше и эффективнее для пользователей. Мы работаем в “Национальном центре медицины” РБ-№1 Республики Саха (Якутия) в г. Якутске, который находится по адресу Сергеляхское шоссе, 4.
                    </div>
                </div>
                <img src={Images.team_medicine} alt="team_medicine" className="medicine__img" />
            </div>
        </div>
    )
}

export default Medicine;