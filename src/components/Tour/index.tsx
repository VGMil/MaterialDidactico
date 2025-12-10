import React, { useState, useEffect } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { useColorMode } from '@docusaurus/theme-common';

interface TourProps {
    steps: Step[];
}

export default function Tour({ steps }: TourProps) {
    const [mounted, setMounted] = useState(false);
    const [run, setRun] = useState(false);
    const { colorMode } = useColorMode();
    const isDarkTheme = colorMode === 'dark';

    useEffect(() => {
        setMounted(true);
        // Start the tour once mounted
        const timer = setTimeout(() => setRun(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { status } = data;
        const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            setRun(false);
        }
    };

    if (!mounted) return null;

    return (
        <Joyride
            callback={handleJoyrideCallback}
            continuous
            run={run}
            scrollToFirstStep
            showProgress
            showSkipButton
            spotlightClicks={false}
            steps={steps}
            scrollOffset={60}
            scrollDuration={700}
            floaterProps={{
                hideArrow: false,
            }}
            styles={{
                options: {
                    zIndex: 10000,
                    // Colors matching the neon/dark theme vibe
                    primaryColor: '#00f2ff', // Neon Blue
                    backgroundColor: isDarkTheme ? '#2a2a2a' : '#ffffff',
                    textColor: isDarkTheme ? '#e0e0e0' : '#1f2937',
                    arrowColor: isDarkTheme ? '#2a2a2a' : '#ffffff',
                    overlayColor: 'rgba(0, 0, 0, 0.85)', // Darker overlay for focus
                },
                buttonNext: {
                    backgroundColor: '#00f2ff',
                    color: '#000000',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                },
                buttonBack: {
                    color: isDarkTheme ? '#fff' : '#000',
                    marginRight: 10,
                }
            }}
            locale={{
                back: 'Atrás',
                close: 'Cerrar',
                last: 'Finalizar',
                next: 'Siguiente',
                skip: 'Saltar',
            }}
        />
    );
}
