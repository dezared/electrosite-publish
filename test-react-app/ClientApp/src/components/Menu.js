import Icon from '../components/others/Icon'
import { Link } from "react-router-dom";
import '../styles/bar.css' 
import { ReactComponent as LogoSite } from '../imgs/Logo.svg';

export default function Menu(props) {
  return (
    <div className={`app-menu ${props.isMenuOpen ? "menu-open" : ""}`}>
        <div className='bar-section-menu'>
            <div className='menu-logo-section'>
                <LogoSite className='bar-logo-mini'></LogoSite>
                <p className="bar-title">ЭЛИТСТРОЙ<span className='bar-title-gray'>СЕРВИС</span></p>
            </div>
            {/* <div className='bar-item-userblock'>
                <div className='bar-item-usericon'><Icon data="far fa-user" /></div>
                <div className='bar-item-username'><Link to="/login">Вход</Link></div>
                <div className='bar-item-username'>Регистрация</div>
            </div>

            <div className='bar-item-userblock'>
                <div className='bar-item-username'>Павел</div>
                <div className='bar-item-usericon'><Icon data="far fa-user" /></div>
            </div> */}
            <div className='bar-item-url'><Link to="/">Главная</Link></div>
            <div className='bar-item-url'><Link to="/about">О нас</Link></div>
            <div className='bar-item-url'><Link to="/contacts">Контакты</Link></div>
            <div className='bar-item-url'><Link to="/calc">Калькулятор</Link></div>
            <div className='bar-itemicon-wrapper-menu'>
                <a href="mailto:ets@elitestroyservice.ru"><Icon className='bar-itemicon secondary' data="fa-regular fa-envelope-dot"/><p className='mobile-off'>ets@elitestroyservice.ru</p></a>
                <a href="tel:+79154598165"><Icon className='bar-itemicon primary' data="fa-regular fa-phone"/><p>+7 915 459-81-65</p></a>
            </div>
        </div>
    </div>
  );
}
