import { useContext } from 'react';

import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';

import styles from '../styles/components/Profile.module.css';

interface IUserGithub {
    name: string
    avatar_url: string
}

interface IProfileData {
    user: IUserGithub
}

export function Profile({ user }: IProfileData) {
    const { level } = useContext(ChallengesContext);

    const {  currentTheme, changeCurrentTheme } = useContext(ThemeContext);

    return (
        <div className={styles.profileRow}>
            <div className={styles.profileContainer}>
                <img src={user.avatar_url} alt={`name: ${user.name}`}/>

                <div>
                    <strong>{user.name}</strong>
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
