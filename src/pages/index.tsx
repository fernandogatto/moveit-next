import { useState } from 'react';

import { useRouter } from 'next/router';

import { FiArrowRight } from 'react-icons/fi';

import styles from '../styles/pages/Home.module.css';

function Home() {
    const { push } = useRouter();

    const [username, setUsername] = useState('');

    function  handleSubmit(event) {
        event.preventDefault();

        push(`/${username}`);
    }

    return (
        <div className={styles.container}>
            <section>
                <div>
                    <img src="/logo-white.svg" alt=""/>

                    <h2>Bem-vindo</h2>

                    <div className={styles.home}>
                        <p>Faça seu login com o GitHub para começar</p>
                    </div>


                    <div className={styles.home}>
                        <input
                            type="text"
                            placeholder='Usuário'
                            onChange={event => setUsername(event.target.value)}
                        />

                        <button
                            type='button'
                            onClick={handleSubmit}>
                                <FiArrowRight  size={24} color='#fff'/>
                            </button>
                    </div>
                </div>
            </section>

            <div className={styles.background} />
        </div>
    );
}

export default Home;
