import { useContext, useEffect, useState } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    let countdownTimeout: NodeJS.Timeout;

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] =  String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] =  String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown(){
        setIsActive(false);

        clearTimeout(countdownTimeout);

        setHasFinished(false);

        setTime(.1  * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);

            setIsActive(false);

            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            onClick={resetCountdown}
                            type='button'
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        >
                            Abandonar Ciclo
                        </button>
                    ) : (
                        <button
                            onClick={startCountdown}
                            type='button'
                            className={styles.countdownButton}
                        >
                            Iniciar um Ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}