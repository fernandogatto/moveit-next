import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/challengeBox.module.css';

export function ChallengeBox() {
    const {
        activeChallenge,
        resetChallenge,
        completeChallenge,
    } = useContext(ChallengesContext);

    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeFailed() {
        resetCountdown();

        resetChallenge();
    }

    function handleChallengeSucceed() {
        completeChallenge();

        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeBoxContainerActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.ChallengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type='button'
                            className={styles.ChallengeSucceededButton}
                            onClick={handleChallengeSucceed}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeBoxContainerNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>

                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de nivel completandos os desafios
                    </p>
                </div>
            )}
        </div>
    );
}
