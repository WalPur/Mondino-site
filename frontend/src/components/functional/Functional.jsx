import React from 'react'

import './Functional.css'

import Images from '../../images/index'

function Functional() {
  return (
    <div className='functional__block'>
      <div className='functional__container container'>
        <div className="functional__content">

          <div className="functional__item">
            <img src={Images.icon_1} alt="icon" className="functional__item-icon" />
            <div className="functional__item-title">
              Менеджмент
            </div>
            <div className="functional__item-text">
              Менеджмент прописанных вам лекарств
            </div>
          </div>

          <div className="functional__item">
            <img src={Images.icon_2} alt="icon" className="functional__item-icon" />
            <div className="functional__item-title">
              Напоминание
            </div>
            <div className="functional__item-text">
              Напоминания о приеме и пропусках лекарств
            </div>
          </div>

          <div className="functional__item">
            <img src={Images.icon_3} alt="icon" className="functional__item-icon" />
            <div className="functional__item-title">
              Акции
            </div>
            <div className="functional__item-text">
              Поиск выгодных акций скидок на платные медицинские услуги вашего города
            </div>
          </div>

          <div className="functional__item">
            <img src={Images.icon_4} alt="icon" className="functional__item-icon" />
            <div className="functional__item-title">
              Чат
            </div>
            <div className="functional__item-text">
              Чат с врачем для поддержки связи
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Functional;
