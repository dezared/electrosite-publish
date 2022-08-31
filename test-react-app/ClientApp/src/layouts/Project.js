import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from "axios"

function Project() {
    const { id } = useParams();

    const [project, setProject] = useState(undefined);

    useEffect(() => {
    axios({
        method: 'get',
        url: 'https://194.67.109.62:5000/api/application/admin/allProjects/' + id
    })
        .then(function (response) {
            setProject(response.data)
            console.log(project)
            return Promise.resolve();
        });
    }, []);

    return (
        <div>
            {project != undefined &&
                <div>
                    <div className="header finisher-header" style={{ width: '100%' }}>
                        <Bar></Bar>
                        <Container>
                            <HeaderText>{project.name}</HeaderText>
                            <div className="gallery-single-info">
                                <div className="main-image-single-outer">
                                <div className="main-image-single">
                                        <img src={project.mainImageUrl} alt={project.name} />
                                </div>
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={2}
                                    navigation
                                >
                                    {project.projectMediasUrls.map((imgs) => (
                                        <SwiperSlide>
                                            <div className="slider-slide">
                                                <img src={imgs}></img>
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
                            <br />
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
            }
        </div>
    )
}

export default Project;