import '../styles/formcontact.css' 
import Container from './others/Container'
import React, { useEffect, useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormContact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    function handleChange(event, name) {
        var newData = { ...data };

        newData[name] = event.target.value;

        setData(newData);
    }

    function handleSubmit() {
        if (!data.name || !data.email || !data.number || !data.message) {
            toast.warn("Не все данные заполнены.");
            return;
        }

        axios.post('https://api.elitestroyservice.ru/api/application/sendMailContact/', {
            name: data.name,
            email: data.email,
            number: data.number,
            message: data.message
        })
            .then(res => {
                toast.success("Сообщение отправлено!");
                setData({
                    name: '',
                    email: '',
                    number: '',
                    message: ''
                });
            })
    }

    return (
        <div className='form-outer'>
            <Container>
                <div className='form-inner-wrapper'>
                    <div className='form-text-left'>
                        <div className='form-text-outer'>
                            <p className='form-text-top'>Форма обратной связи. Мы свяжемся с вами.</p>
                            <p className='form-text-medium'>Ваш вопрос не останется без овтета.</p>
                            <p className='form-text-bottom'>Оставьте заявку и наш менеджер свяжется с вами в ближайщее время.</p>
                        </div>
                    </div>
                    <div className='form-form-outer'>
                        <div className='form-block'>
                            <form className='form-factor' onSubmit={handleSubmit}>
                                <div className='form-contact-top'>
                                    <div>
                                        <p className='form-label'>Ваше имя</p>
                                        <input className='form-input' type="text" name="name" placeholder='Антон' value={data.name} onChange={evt => handleChange(evt, "name")} />
                                    </div>
                                    <div>
                                        <p className='form-label'>Ваша почта</p>
                                        <input className='form-input' type="text" name="email" placeholder='example@gmail.com' value={data.email} onChange={evt => handleChange(evt, "email")} />
                                    </div>
                                    <div>
                                        <p className='form-label'>Ваш номер</p>
                                        <input className='form-input' type="text" name="number" placeholder='+7 999 999 99 99' value={data.number} onChange={evt => handleChange(evt, "number")} />
                                    </div>
                                </div>

                                <div className='form-contact-medium'>
                                    <div>
                                        <p className='form-label'>Сообщение</p>
                                        <textarea className='form-input big' type="text" name="message" placeholder='Задайте ваш вопрос' value={data.message} onChange={evt => handleChange(evt, "message")} />
                                    </div>
                                </div>

                                <div className='form-contact-bottom'>
                                    <p className='form-label'>Мы ответим на ваш вопрос в течении часа!</p>
                                    <div className='button' onClick={handleSubmit}>Отправить</div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='form-blackbg-block' />
            <img className='form-image' alt="form-contact" src="https://s0.rbk.ru/v6_top_pics/media/img/5/42/756148486049425.jpg" />
        </div>
    )
}

export default FormContact