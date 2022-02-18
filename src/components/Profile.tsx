import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileRow}>
            <div className={styles.profileContainer}>
                <img
                    src="https://github.com/fernandogatto.png"
                    alt="Fernando Gatto"
                />

                <div>
                    <strong>Fernando Gatto</strong>
                    <p>
                        <img
                            src="icons/level.svg"
                            alt="Level"
                        />
                        Level {level}
                    </p>
                </div>
            </div>

            {/* {currentTheme === 'theme-dark' ? <MdWbSunny onClick={toggleTheme} /> : <FaMoon color="#2E384D" onClick={toggleTheme} />} */}
        </div>
    );
}
