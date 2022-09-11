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
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from "axios"

function Calculator() {
    const [state, setState] = useState({
        num_8: '',
        num_9: '',
        num_10: '',
        num_11: '',
        num_12: '',
        num_13: '',
        num_14: '',
        num_15: '',
        num_16: '',
        result: 0
    });

    function updateInputValue(e, name, value) {
        var newState = { ...state };

        if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/))
            newState[name] = value;

        let result = (
            (parseFloat(newState.num_8) || 0) * 5000 +
            (parseFloat(newState.num_9) || 0) * 5000 +
            (parseFloat(newState.num_10) || 0) * 9000 +
            (parseFloat(newState.num_11) || 0) * 9000 +
            (parseFloat(newState.num_12) || 0) * 9000 +
            (parseFloat(newState.num_13) || 0) * 8000 +
            (parseFloat(newState.num_14) || 0) * 9000 +
            (parseFloat(newState.num_15) || 0) * 9000 +
            (parseFloat(newState.num_16) || 0) * 15000).toFixed(2);

        newState.result = result;

        setState(newState);
    };

    function handleFloat(e, name, value) {
        var newState = { ...state };

        newState[name] = parseFloat(value) || '';

        let result = (
            (parseFloat(newState.num_8) || 0) * 5000 +
            (parseFloat(newState.num_9) || 0) * 5000 +
            (parseFloat(newState.num_10) || 0) * 9000 +
            (parseFloat(newState.num_11) || 0) * 9000 +
            (parseFloat(newState.num_12) || 0) * 9000 +
            (parseFloat(newState.num_13) || 0) * 8000 +
            (parseFloat(newState.num_14) || 0) * 9000 +
            (parseFloat(newState.num_15) || 0) * 9000 +
            (parseFloat(newState.num_16) || 0) * 15000).toFixed(2);

        newState.result = result;

        setState(newState);
    };


    return (
        <div>
            <div>
                <div className="header finisher-header" style={{ width: '100%' }}>
                    <Bar></Bar>
                    <Container>
                        <HeaderText>Калькулятор</HeaderText>
                        <div>
                            <motion.div
                                initial={{ x: "-100px", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <div className="calc-main-wrapper">
                                <div className="calc-outer">
                                    <p className="calc-text">Вязка и установка арматурных каркасов и сеток:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_8}
                                            name="num_8"
                                            type="text"
                                            onChange={evt => updateInputValue(evt, "num_8", evt.target.value)}
                                            onBlur={evt => handleFloat(evt, "num_8", evt.target.value)}
                                        />
                                        <div className="calc-num">тн</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                    <p className="calc-text">Устройство бетонной подготовки, бетон М100 (товарный):</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_9}
                                            name="num_9"
                                            type="text"
                                            onChange={evt => updateInputValue(evt, "num_9", evt.target.value)}
                                            onBlur={evt => handleFloat(evt, "num_9", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                    <p className="calc-text">Устройство монолитного бетонного фундамента под колонны объёмом до 3м³ с установкой опалубки:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_10}
                                            name="num_10"
                                            type="text"
                                                onChange={evt => updateInputValue(evt, "num_10", evt.target.value)}
                                                onBlur={evt => handleFloat(evt, "num_10", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                    <p className="calc-text">Устройство фундаментов-столбов бетонных с установкой опалубки:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_11}
                                            name="num_11"
                                            type="text"
                                                onChange={evt => updateInputValue(evt, "num_11", evt.target.value)}
                                                onBlur={evt => handleFloat(evt, "num_11", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                    <p className="calc-text">Устройство фундаментных плит плоских железнобетонных с установкой опалубки и армированием:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_12}
                                            name="num_12"
                                            type="text"
                                                onChange={evt => updateInputValue(evt, "num_12", evt.target.value)}
                                                onBlur={evt => handleFloat(evt, "num_12", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                    <p className="calc-text">Устройство фундаментов ленточных с установкой опалубки:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_13}
                                            name="num_13"
                                            type="text"
                                                onChange={evt => updateInputValue(evt, "num_13", evt.target.value)}
                                                onBlur={evt => handleFloat(evt, "num_13", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                    <p className="calc-text">Устройство подопорных стен и стен подвалов бетонных с установкой опалубки:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_14}
                                            name="num_14"
                                            type="text"
                                                onChange={evt => updateInputValue(evt, "num_14", evt.target.value)}
                                                onBlur={evt => handleFloat(evt, "num_14", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                        <p className="calc-text">Устройстово ж/бетонных перекрытий толщиной до 200 мм с устройством опалубки и армированием:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_15}
                                            name="num_15"
                                            type="text"
                                                onChange={evt => updateInputValue(evt, "num_15", evt.target.value)}
                                                onBlur={evt => handleFloat(evt, "num_15", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                </div>

                                <div className="calc-outer">
                                    <p className="calc-text">Устройство монолитных железнобетонных ступней с приготовлением бетона с установкой опалубки и армированием:</p>
                                    <div className="calc-input-outer">
                                        <input
                                            className="input-calc"
                                            placeholder="Вводите значение..."
                                            value={state.num_16}
                                            name="num_16"
                                            type="text"
                                                onChange={evt => updateInputValue(evt, "num_16", evt.target.value)}
                                                onBlur={evt => handleFloat(evt, "num_16", evt.target.value)}
                                        />
                                        <div className="calc-num">м³</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="calc-costs">Итоговой расчёт: Не менее <span>{state.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₽</span></div>
                                <p className="calc-info">Стоимость строительных работ зависит от программы строительных материалов и видов строительных работ. Для уточнения цены свяжитесь с нами по номеру телефона, почте, либо заполнив заявку ниже.</p>
                            </motion.div>
                        </div>
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
        </div>
    )
}

export default Calculator;