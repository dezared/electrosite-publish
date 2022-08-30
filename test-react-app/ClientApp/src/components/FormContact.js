import '../styles/formcontact.css' 
import Container from './others/Container'

function FormContact() {
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
                            <form className='form-factor'>
                                <div className='form-contact-top'>
                                    <div>
                                        <p className='form-label'>Ваше имя</p>
                                        <input className='form-input' type="text" name="name" placeholder='Антон' />
                                    </div>
                                    <div>
                                        <p className='form-label'>Ваша почта</p>
                                        <input className='form-input' type="text" name="name" placeholder='example@gmail.com' />
                                    </div>
                                </div>

                                <div className='form-contact-medium'>
                                    <div>
                                        <p className='form-label'>Сообщение</p>
                                        <textarea className='form-input big' type="text" name="name" placeholder='Задайте ваш вопрос' />
                                    </div>
                                </div>

                                <div className='form-contact-bottom'>
                                    <p className='form-label'>Мы ответим на ваш вопрос в течении часа!</p>
                                    <div className='button'>Отправить</div>
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