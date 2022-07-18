import './Footer.css'

// import Images from '../../images/footer'
import { NavLink } from 'react-router-dom';

function Footer(){

    return(
        <div className='footer__block'>
            <div className="footer__container container">
                <div className="col-10 left_footer">
                    <img src="/images/footer_logo.svg" alt="" className="top_footer" />
                    <div className="footer__title">
                        Tracker
                    </div>
                    <div className="mid_footer">
                        <div className="phone">
                            <img src="/images/footer_phone.svg" alt="" className='phone_image' />
                            <div className="phone_text">
                                <div className="phone_number">+7 914 278 64 40</div>
                                <div className="phone_bottom">24 часа на связи</div>
                            </div>
                        </div>
                        <div className="geo">
                            <img src="/images/footer_geo.svg" className="geo_image" alt="" />
                            <div className="geo_text">
                                <div className="geo_top">
                                    Россия, Республика Саха 
                                </div>
                                <div className="geo_bottom">
                                    (Якутия), г.Якутск, ул. Ленина 1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_footer">
                        <img src="/images/footer_mail.svg" alt="" className='mail_image' />
                        mondino.tech@gmail.com
                    </div>
                </div>
                <div className="col-2 right_footer">
                    <div className="footer_menu">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/team">Команда</NavLink>
                        <NavLink to="/contacts">Контакты</NavLink>
                        <NavLink to="/interactions">DDI</NavLink>
                        <NavLink to="/application">Заявка для партнерства</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;