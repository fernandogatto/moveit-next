import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    startCountdown: () => void;
    resetCountdown: () => void;
    hasFinished: boolean;
    isActive: boolean;
}

interface CountdownContextProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownContextProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    let countdownTimeout: NodeJS.Timeout;

    const [time, setTime] = useState(.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        setIsActive(false);

        clearTimeout(countdownTimeout);

        setHasFinished(false);

        setTime(.1  * 60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    },[isActive, time])

    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                startCountdown,
                resetCountdown,
                hasFinished,
                isActive
            }}
        >
            { children }
        </CountdownContext.Provider>
    );
}
