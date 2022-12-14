import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import { motion } from 'framer-motion';
import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom'

import axios from "axios"

function Project() {
    const { id } = useParams();

    const [project, setProject] = useState(undefined);

    useEffect(() => {
    axios({
        method: 'get',
        url: 'https://api.elitestroyservice.ru/api/application/admin/allProjects/' + id
    })
        .then(function (response) {
            setProject(response.data)
            console.log(project)
            return Promise.resolve();
        });
    }, []);

    return (
        <div>
                <div>
                    <div className="header finisher-header" style={{ width: '100%' }}>
                        <Bar></Bar>
                    <Container>
                        {project != undefined &&
                            <motion.div
                                initial={{ x: "-100px", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                            <div>
                            <HeaderText>{project.name}</HeaderText>
                            <div className="gallery-single-info">
                                <div className="main-image-single-outer">
                                <div className="main-image-single">
                                        <Zoom><img src={project.mainImageUrl} alt={project.name} /></Zoom>
                                </div>
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    navigation
                                >
                                    {project.projectMediasUrls.map((imgs) => (
                                        <SwiperSlide>
                                            <div className="slider-slide">
                                                <Zoom><img src={imgs}></img></Zoom>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    </Swiper>
                                </div>

                                <div className="description-block">
                                    <h2 className="ak-left section-title description-block__title">
                                        Характеристики объекта
                                    </h2>
                                    <div className="description-wrapper">
                                        <ul className="description-list description-list--double">
                                            <li className="description-list__item">
                                                <span className="description-list__name">Площадь дома</span>
                                                <span className="description-list__value">{project.meter} м<span className="squared">2</span></span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Цена строительства</span>
                                                <span className="description-list__value">{project.money} руб</span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Год постройки</span>
                                                <span className="description-list__value">{project.year} год</span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Фундамент</span>
                                                <span className="description-list__value">{project.foundamentInfo}</span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Стены</span>
                                                <span className="description-list__value">{project.wallsInfo}</span>
                                            </li>
                                        </ul>
                                        <ul className="description-list description-list--double">
                                            <li className="description-list__item">
                                                <span className="description-list__name">Перекрытие</span>
                                                <span className="description-list__value">{project.perekritie}</span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Крыша</span>
                                                <span className="description-list__value">{project.roofInfo}</span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Утепление крыши</span>
                                                <span className="description-list__value">{project.wareSaftyInfo}</span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Фасад</span>
                                                <span className="description-list__value">{project.facadeInfo}</span>
                                            </li>
                                            <li className="description-list__item">
                                                <span className="description-list__name">Перегородки</span>
                                                <span className="description-list__value">{project.peregorodgiInfo}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </motion.div>
                            }
                            <br />
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
        </div>
    )
}

export default Project;