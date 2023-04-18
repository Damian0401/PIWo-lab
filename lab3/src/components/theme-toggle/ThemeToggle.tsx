import * as React from 'react';
import { useEffect, useState } from 'react';
import colors from '../../assets/styles/colors.module.scss';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(true);

    useEffect(() => {
        const root = document.documentElement;

        const backgroundColor = isLight
            ? colors.lightBackgroundColor
            : colors.darkBackgroundColor;
        root.style.setProperty('--background-color', backgroundColor);

        const fontColor = isLight
            ? colors.lightFontColor
            : colors.darkFontColor;
        root.style.setProperty('--font-color', fontColor);

        const primaryColor = isLight
            ? colors.lightPrimaryColor
            : colors.darkPrimaryColor;
        root.style.setProperty('--primary-color', primaryColor);

        const secondaryColor = isLight
            ? colors.lightSecondaryColor
            : colors.darkSecondaryColor;
        root.style.setProperty('--secondary-color', secondaryColor);

        const tertiaryColor = isLight
            ? colors.lightTertiaryColor
            : colors.darkTertiaryColor;
        root.style.setProperty('--tertiary-color', tertiaryColor);
    }, [isLight])

    useEffect(() => {
        const currentHour = new Date().getHours();
        const isDayTime = currentHour > 6 && currentHour < 20;
        setIsLight(isDayTime);
    }, [])

    const handleToggle = (): void => {
        setIsLight(!isLight);
    }

    return (
        <button onClick={handleToggle} className={styles.toggle}>
            {isLight ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
    );
}

export default ThemeToggle;