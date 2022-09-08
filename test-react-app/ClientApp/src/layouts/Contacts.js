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
                    <br />
                    <HeaderText>Мы свяжемся с вами</HeaderText>
                </Container>
            </div>
            <FormContact />
            <div className='footer-outer'>
                <Container>
                    <div className='footer-outer'>
                        <p>ЭЛИТСТРОЙСЕРВИС</p><p>ets@elitestroyservice.ru</p>
                        <p>2022г.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contacts;