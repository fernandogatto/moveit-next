import styles from '../styles/components/Profile.module.css';

export function Profile() {
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
                        Level 1
                    </p>
                </div>
            </div>

            {/* {currentTheme === 'theme-dark' ? <MdWbSunny onClick={toggleTheme} /> : <FaMoon color="#2E384D" onClick={toggleTheme} />} */}
        </div>
    );
}
