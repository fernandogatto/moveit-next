import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from '../../components/ChallengeBox';
import { CompletedChallenges } from '../../components/CompletedChallenges';
import { Countdown } from '../../components/Countdown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';

import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { CountdownProvider } from '../../contexts/CountdownContext';

import styles from '../../styles/pages/Dashboard.module.css';

interface IUserGithub {
    name: string;
    avatar_url: string;
}

interface IHomeProps {
    user: IUserGithub;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

function Dashboard({ user, level, currentExperience, challengesCompleted }: IHomeProps) {
    return (
        <ChallengesProvider
            level={level}
            currentExperience={currentExperience}
            challengesCompleted={challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Início | move.it</title>
                </Head>

                <ExperienceBar />

                <CountdownProvider>
                    <section>
                        <div>
                            <Profile user={user} />

                            <CompletedChallenges />

                            <Countdown />
                        </div>

                        <div>
                            <ChallengeBox />
                        </div>
                    </section>
                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { username } = context.params;

    const {
        level,
        currentExperience,
        challengesCompleted,
    } = context.req.cookies;

    const response = await fetch(`https://api.github.com/users/${username}`);

    const user = await response.json();

    return {
        props: {
            user,
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        },
    };
}

export default Dashboard;
