import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'
import StageBlock from '../components/others/StageBlock'
import '../styles/main.css'
import '../styles/about.css'

import AnimatedText from '../components/others/AnimatedText';

import { motion } from 'framer-motion';

function About() {
    return (
        <div>
            <div class="header finisher-header" style={{ width: '100%' }}>
                <Bar></Bar>
                <Container>
                    <HeaderText>О монолитных работах</HeaderText>
                    <div className='about-header-outer'>
                        <div className="about-text-section">
                            <AnimatedText changeX={-200} duration={1}>
                                <p><b>Монолитное строительство</b>  - это сложная технология возведения монолитных зданий и сооружений из железобетона, которая позволяет нам в короткие сроки возводить строения и сооружения почти любой формы и высоты. Монолитные работы осуществляются с использованием различных типов опалубки и строительных материалов, которые определяются в зависимости от желаемых конфигураций и архитектурных запросов конкретного объекта и типа производимых работ.</p>
                            </AnimatedText>
                            <AnimatedText changeX={-200} duration={1}>
                                <p>Монолитное строительство жилых домов, офисных зданий и промышленных объектов может использовать стеновую опалубку для горизонтальных или вертикальных поверхностей, стеновую ползущую, а также  опалубку для возведения закругленных конструкций.</p>
                            </AnimatedText>
                        </div>
                        
                        <div className="about-image-section">
                        <motion.div
                            transition={{ duration: 0.4 }}
                            initial={{ x: "-300px", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <img src="http://m.asninfo.ru/images/analytics/22b17f50/5c9d82efa4ebaf133b6d9528.jpg" alt='monoliteimage' />
                        </motion.div>
                        </div>
                    </div>
                    <HeaderText>Этапы монолитных работ</HeaderText>
                    <div className="about-graphic">
                    <motion.div
                            transition={{ duration: 0.4 }}
                            initial={{ y: "-150px", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                        <StageBlock></StageBlock>
                    </motion.div>
                    </div>
                    <AnimatedText changeX={-200} duration={1}>
                        <p className="about-footer-text">Строительная опалубка — это прочные щиты разных форм и конфигураций, используя которые и создаются необходимые строительные формы. Монолитные работы осуществляются с использованием различных типов опалубки и строительных материалов, которые определяются в зависимости от желаемых конфигураций и архитектурных запросов конкретного объекта и типа производимых работ. Монолитное строительство жилых домов, офисных зданий и промышленных объектов может использовать стеновую опалубку для горизонтальных или вертикальных поверхностей, стеновую ползущую, а также  опалубку для возведения закругленных конструкций. В отличие от крупнопанельной технологии, для которой нужен кран и другая тяжелая техника, в  монолитном  строительстве применяют бетононасосы, с помощью которых бетонная смесь заливается в подготовленную опалубку, уплотняется и твердеет естественным образом или с подогревом, зимой. Основная цель управления качеством при проведении монолитных железобетонных работ – обеспечить однородность конструкции, уплотнить бетон, выдержать нормативы по прочности железобетона, по глубине размещения арматуры из стали, и, что не менее существенно – выдержать качество поверхности монолитного бетона.</p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={1}>
                        <p className="about-footer-text-bottom"><b>Компания «Элитстрой» можем проконсультировать вас по вопросам о монолитных и бетоных работах! Звоните или оставляйте заявку на сайте!</b></p>
                    </AnimatedText>
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

export default About;