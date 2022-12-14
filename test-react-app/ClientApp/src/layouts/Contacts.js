import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'
import StageBlock from '../components/others/StageBlock'
import '../styles/main.css'
import '../styles/contacts.css'
import Icon from "../components/others/Icon";

import AnimatedText from '../components/others/AnimatedText';

function Contacts() {
    return (
        <div>
            <div class="header finisher-header" style={{ width: '100%' }}>
                <Bar></Bar>
                <Container>
                    <HeaderText>Контакты</HeaderText>
                    <br />
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-info'></Icon>  ИНН: 5017127100/501701001</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-info'></Icon>  ОГРН: 1215000118563</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-info'></Icon>  БИК: 044525225</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-info'></Icon>  Расчётный счёт: 40702810940000116022</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-info'></Icon>  Корреспондентный счёт: 30101810400000000225</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-info'></Icon>  Банк: ПАО СБЕРБАНК</b></p>
                    </AnimatedText>
                    <br />
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-city'></Icon>  143500, Россия, Московская область, г. о. Истра, г. Истра, ул. Рябкина, д1, пом. 2Б.</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-phone'></Icon>  +7 915 459-81-65, Евгений</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-phone'></Icon>  +7 925 448‑32‑25, Владимир</b></p>
                    </AnimatedText>
                    <br /><br /><br />
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-mailbox'></Icon>  ets@elitestroyservice.ru</b></p>
                    </AnimatedText>
                    <HeaderText>Мы свяжемся с вами</HeaderText>
                </Container>
            </div>
            <FormContact />
            <div className='footer-outer'>
                <Container>
                    <div className='footer-outer'>
                        <p>ЭЛИТСТРОЙСЕРВИС</p><p className='mobile-off'>ets@elitestroyservice.ru</p>
                        <p>2022г.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contacts;