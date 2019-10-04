export const theme = {
    primary: 'hsl(49, 100%, 58%)',
    white: 'hsl(0, 0%, 100%)',
    grey: 'hsl(0, 0%, 97%)',
    black: 'hsl(0, 0%, 0%)',
    font: {
        size: {
            xxxs: '.9rem',
            xxs: '1.2rem',
            xs: '1.4rem',
            s: '2.6rem',
            m: '4.2rem',
            l: '5rem',
            xl: '7.2rem',
            xxl: '9.4rem',
        },
        family: {
            // TODO repair fonts
            montserrat: '"Montserrat-Regular", sans-serif',
            darkerGrotesque: '"DarkerGrotesque-Bold", sans-serif'
        }
    },
    mq: {
        huge: `@media (min-width: 1440px;)`,
        desktop_lt: `@media (max-width: 1023px)`,
        desktop: `@media (min-width: 1024px)`,
        tablet: `@media (min-width: 768px)`
    }
};