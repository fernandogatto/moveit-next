import { useContext } from 'react';

import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    const {  currentTheme, changeCurrentTheme } = useContext(ThemeContext);

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

            {currentTheme === 'dark' ? (
                <MdWbSunny onClick={changeCurrentTheme} />
            ) : (
                <FaMoon color="#2E384D" onClick={changeCurrentTheme} />
            )}
        </div>
    );
}
