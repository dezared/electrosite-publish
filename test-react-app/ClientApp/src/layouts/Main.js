import { Navigation, Pagination } from 'swiper';
import Container from "../components/others/Container";
import Bar from '../components/Bar'
import { Swiper, SwiperSlide } from 'swiper/react';
import InfoBlock from '../components/others/InfoBlock'

import Gallery from '../components/Gallery'
import TextSep from '../components/others/TextSep'

import HeaderText from '../components/others/HeaderText'
import Icon from '../components/others/Icon'

import Chart from '../components/Chart'

import FormContact from '../components/FormContact'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import axios from "axios"

import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/main.css'
import AnimatedText from '../components/others/AnimatedText';

import StarRatingComponent from 'react-star-rating-component';

function Main() {

    axios({
        method: 'get',
        url: '/api/application/admin/allProjects',
        responseType: 'stream'
    })
        .then(function (response) {
            console.log(response)
        });

    return (
        <div>
            <div class="header finisher-header" style={{ width: '100%' }}>
                <Bar></Bar>
                <Container>
                    <motion.div
                        initial={{ x: "-300px", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="slider-slide">
                                    <p>Монолитное строительство</p>
                                    <div className="slider-image-black" />
                                    <img src='https://poselkiguru.ru/uploads/news/monolitnoe-stroitelstvo-sut-tehnologii-dostoinstva-i-nedostatki_l.jpg' alt="slide 1"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider-slide">
                                    <p>Создание каркаса из арматуры</p>
                                    <div className="slider-image-black" />
                                    <img src='https://poselkiguru.ru/uploads/5dd49ad44d3e06ff7762733d6402a13b42376.jpg' alt="slide 1"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider-slide">
                                    <p>Установка опалубки</p>
                                    <div className="slider-image-black" />
                                    <img src='https://poselkiguru.ru/uploads/6cee33e502b38b23f473b4c9d02a8ff147175.jpg' alt="slide 1"></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider-slide">
                                    <p>Заливка бетона</p>
                                    <div className="slider-image-black" />
                                    <img src='https://www.ccnova.ru/images/blog/tekhnologiya-monolitnogo-stroitelstva/zalivka-betona.jpg' alt="slide 1"></img>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>

                    <HeaderText>Монолитные работы</HeaderText>

                    <div className='outer-infoblocks'>
                        <motion.div
                            initial={{ y: "-300px", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <div class="infoblock">
                                <Icon data="fa-duotone fa-ribbon"></Icon>
                                <p>Ленточный фундамент</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "-300px", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <div class="infoblock">
                                <Icon data="fa-duotone fa-block-brick-fire"></Icon>
                                <p> УШП ФУНДАМЕНТ</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "-300px", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <div class="infoblock">
                                <Icon data="fa-duotone fa-hammer-crash"></Icon>
                                <p>Строительство монолитных стен и полов, монтаж перекрытий</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "-300px", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <div class="infoblock">
                                <Icon data="fa-duotone fa-house-building"></Icon>
                                <p>Монолитное малоэтажное строительство</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: "-300px", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <div class="infoblock">
                                <Icon data="fa-duotone fa-stairs"></Icon>
                                <p>ВОЗВЕДЕНИЕ МОНОЛИТНЫХ ЛЕСТНИЦ ИЗ ЖЕЛЕЗОБЕТОНА</p>
                            </div>
                        </motion.div>
                    </div>

                    <HeaderText>Галлерея</HeaderText>
                    <motion.div
                        initial={{ x: "-300px", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <Gallery></Gallery>
                    </motion.div>
                    <Link to="/gallery" className='gallery-info'>Ещё <span>24</span> изоображения...</Link>
                    <HeaderText>Почему монолитные работы это выгодно?</HeaderText>
                    <div className='infoblock-outer'>
                        <InfoBlock></InfoBlock>
                        <div className='text-sep-outer-block'>
                            <AnimatedText changeX={-200} duration={1}>
                                <TextSep>Монолитный бетон - устойчивый к деформациям материал, способный выдержать любые погодные условия и идеально подходящий для средней полосы России. Преимуществом монолитного каркаса является возможность заливки любой конфигурации по желанию Заказчика. Для монолитных конструкций предусмотрено большое количество архитектурных стилей например: Модерн, Минимализм, Ар-деко, Скандинавский и т.д. Равномерная и незначительная усадка позволит сразу приступить к отделке, при этом риск возникновения трещин минимизирован. Прочная конструкция может треснуть только при нарушении технологии, а за её соблюдением наши специалисты тщательно следят.</TextSep>
                            </AnimatedText>
                            <AnimatedText changeX={-200} duration={1}>
                                <TextSep>УШП фундамент послужит хорошим основанием для вашего дома. Большое количество преимуществ делает его лидером на рынке частного строительства в Московской области. Срок выполнения работы 2-3 недели, все коммуникации на этапе возведения фундамента, возможность устройства на «проблемных» почвах, высокая энергоэффективность. Единственным минусом является невозможность обустройства погреба.</TextSep>
                            </AnimatedText>
                            <AnimatedText changeX={-200} duration={1}>
                                <TextSep>Ленточный фундамент также является хорошим вариантом для начала строительства. Есть два типа ленточного фундамента: заглубленный и малозаглубленный. Глубина заложения ленточного фундамента зависит от большого количества факторов, в основном от земли и этажности. Такой тип фундамента является универсальным вариантом для наших Клиентов, так как у него простая конструкция, следовательно, высокая вариативность, хорошая несущая способность и длительный срок службы. </TextSep>
                            </AnimatedText>
                        </div>
                    </div>

                    <HeaderText>Почему именно мы?</HeaderText>
                    <div className='infoblock-outer'>
                        <div style={{ flex: 1 }}>
                            <div className='iconText-block'>
                                <Icon data="fa-duotone fa-file-certificate"></Icon>
                            </div>
                        </div>
                        <div style={{ flex: 3 }} className='text-sep-outer-block'>
                            <AnimatedText changeX={-150} duration={1}>
                                <TextSep>Клиент при выборе между частными лицами и строительными компаниями часто руководствуется желанием сэкономить или рекомендациями своих близких. Важно понимать основное различие между этими двумя типами застройщиков. Компания всегда предоставляет гарантию и договор клиенту, в отличие от частных лиц. Наша компания готова Вам предоставить гарантию на все типы монолитных работ сроком на 10 лет.</TextSep>
                            </AnimatedText>
                        </div>
                    </div>

                    <div className='infoblock-outer'>
                        <div style={{ flex: 1 }}>
                            <div className='iconText-block'>
                                <Icon data="fa-duotone fa-treasure-chest"></Icon>
                            </div>
                        </div>
                        <div style={{ flex: 3 }} className='text-sep-outer-block'>
                            <AnimatedText changeX={-150} duration={1}>
                                <TextSep>Основным нашим преимуществом мы считаем высокий темп и качество выполнения. Достигается это за счет продуманной логистики по Москве и Московской области. Мы оперативно приступаем к работе и имеем список проверенных поставщиков сырья по всей территории области.</TextSep>
                            </AnimatedText>
                        </div>
                    </div>

                    <div className='infoblock-outer'>
                        <div style={{ flex: 1 }}>
                            <div className='iconText-block'>
                                <Icon data="fa-duotone fa-comments-dollar"></Icon>
                            </div>
                        </div>
                        <div style={{ flex: 3 }} className='text-sep-outer-block'>
                            <AnimatedText changeX={-150} duration={1}>
                                <TextSep>Индивидуальный подход к каждому Клиенту в современном мире очень распространён. Тем не менее мы считаем это обязательным. Поэтому мы озвучиваем предварительную стоимость в день обращения, выезжаем бесплатно на место будущего строительства, предоставляем свою опалубку, отчитываемся за каждый этап выполненных работ.</TextSep>
                            </AnimatedText>
                        </div>
                    </div>

                    <HeaderText>Отзывы</HeaderText>

                    <div className='review-list-outer'>
                        <a href="https://profi.ru/profile/KornilovEV3/" className='review-item'>
                            <div className='review-header-block'>
                                <div className='review-lay'>
                                    <p className='review-user-name'>Павел Щербаков</p>
                                    <StarRatingComponent 
                                        editing={false}
                                        starCount={5}
                                        value={5}
                                        
                                    />
                                </div>
                                <div className='review-lay'>
                                    <p>5 января 2022</p>
                                    <p>Стоимость работ: 200000 ₽</p>
                                </div>
                            </div>
                            <div className='review-text-block'>
                                <p>Работали с Евгением по заливке фундамента УШП. Сотрудничество очень понравилось, Евгений внимательно относится к поставленной задаче, подбирает хорошую команду, выбирает качественные материалы (все покупки с кассовыми чеками), своевременно отчитывается. Конечно в такой работе возникает много вопросов и накладок, нельзя пускать проект на самотёк, лучше заказчика даже первоклассный строитель не знает. Все сложные моменты были учтены, все (единичные) ошибки своевременно исправлялись. Евгению можно поручить масштабные работы. Если заказчик вовлечён в работу, ресурсов достаточно, то отличный результат работы Евгения будет гарантирован!</p>
                            </div>
                        </a>

                        <a href="https://profi.ru/profile/KornilovEV3/" className='review-item'>
                            <div className='review-header-block'>
                                <div className='review-lay'>
                                    <p className='review-user-name'>Валерия Владимировна</p>
                                    <StarRatingComponent 
                                        editing={false}
                                        starCount={5}
                                        value={5}
                                        
                                    />
                                </div>
                                <div className='review-lay'>
                                    <p>16 февраля 2020</p>
                                    <p></p>
                                </div>
                            </div>
                            <div className='review-text-block'>
                                <p>Евгений отличный специалист! Очень оперативно выезжает на место, всегда вежлив и приятен в общении. Сначала осмотрел место работы, посоветовал другое решение поставленной задачи, которое оказалось намного лучше. На следующий день приехал с двумя помощниками точно в оговорённое время. Они укрепили нам забор от подкопов собаки очень быстро и качественно. Никогда ещё у меня оставалось такого хорошего впечатления от работы с мастерами по ремонту.</p>
                            </div>
                        </a>

                        <a href="https://profi.ru/profile/KornilovEV3/" className='review-item'>
                            <div className='review-header-block'>
                                <div className='review-lay'>
                                    <p className='review-user-name'>Мария</p>
                                    <StarRatingComponent 
                                        editing={false}
                                        starCount={5}
                                        value={5}
                                        
                                    />
                                </div>
                                <div className='review-lay'>
                                    <p>19 декабря 2021</p>
                                    <p>Стоимость работ: 45000 ₽</p>
                                </div>
                            </div>
                            <div className='review-text-block'>
                                <p>Оперативность на высшем уровне! Надо было срочно сделать временный цоколь для каркасного дома, поскольку наступает резкое похолодание. Евгений единственный, кто не только быстро откликнулся, но и в этот же день все сделал! Съездил на рынок, купил материал, привез рабочих и смонтировал цоколь! Спасибо большое! Ещё и мусор на помойку вынесли в качестве бонуса). Не их мусор, а тот, который был у меня на участке до этого.</p>
                            </div>
                        </a>
                    </div>

                    <HeaderText>Мы свяжемся с вами</HeaderText>
                </Container>
            </div>
            <FormContact />
            <div className='footer-outer'>
                <Container>
                    <div className='footer-outer'>
                        <p>ЭЛЕКТРОСТРОЙ</p>
                        <p>2022г.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Main;