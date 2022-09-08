import '../styles/bar.css' 
import Icon from '../components/others/Icon'
import { ReactComponent as LogoSite } from '../imgs/Logo.svg';
import Container from './others/Container';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactDimmer } from "react-dimmer";
import Menu from './Menu'

function Bar() {

    const [isMenuOpen, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };

    return (
        <div>
            <Menu isMenuOpen={isMenuOpen} />
            <ReactDimmer
              isOpen={isMenuOpen}
              exitDimmer={setMenu}
              zIndex={100}
              blur={1.5}
            />
            <div className='bar-wrapper-outer'>
                <Container>
                <div className='bar-wrapper'>
                    <Link to="/" className='bar-section-left'>
                        <LogoSite className='bar-logo'></LogoSite>
                        <p className="bar-title">ЭЛИТСТРОЙ<span className='bar-title-gray'>СЕРВИС</span></p>
                    </Link>
                    <div className='bar-section-right'>
                        <div className='bar-item-url'><Link to="/">Главная</Link></div>
                        <div className='bar-item-url'><Link to="/about">О нас</Link></div>
                        <div className='bar-item-url'><Link to="/contacts">Контакты</Link></div>
                        <div className='bar-item-url'><Link to="/calc">Калькулятор</Link></div>
                        <div className='bar-itemicon-wrapper'>
                            <a href="mailto:ets@elitestroyservice.ru"><Icon className='bar-itemicon secondary' data="fa-regular fa-envelope-dot"/></a>
                            <a href="tel:+79154598165"><Icon className='bar-itemicon primary' data="fa-regular fa-phone"/></a>
                        </div>
                    </div>
                    <div class="bar-section-mobile">
                        <div onClick={handleMenu}><Icon data="fa-solid fa-bars"></Icon></div>
                    </div>
                    <div class="blur"></div>
                </div>
                </Container>
            </div>
        </div>
    )
}

export default Bar