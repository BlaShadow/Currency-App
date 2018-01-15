export const APP_STATE_WAIT = 'APP_STATE_WAIT';
export const APP_STATE_NORMAL = 'APP_STATE_NORMAL';
export const APP_PRIMARY_COLOR = 'APP_PRIMARY_COLOR';

export const setWaitingState = () => ({
    type: APP_STATE_WAIT
});

export const setNormalState = () => ({
    type: APP_STATE_NORMAL
});

export const setThemePrimaryColor = (color) => ({
    type: APP_PRIMARY_COLOR,
    color
});
