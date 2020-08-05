import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/11438830?s=460&u=321e3003676fd66b1882545bd974217241fa4f7b&v=4" alt="Bruno Godoi Machado"/>
                <div>
                    <strong>Bruno Machado</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/>
                Mauris semper odio at quam placerat vehicula. Curabitur convallis metus vel mauris mattis pharetra non venenatis est.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;