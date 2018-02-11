import { setWaitingState, setNormalState, setThemePrimaryColor } from '../../app/actions/appState'
import { APP_STATE_NORMAL, APP_STATE_WAIT, APP_PRIMARY_COLOR}  from '../../app/actions/appState'

test('Expected right setNormalState Action', () => {
    const action = setNormalState()

    expect(action.type).toEqual(APP_STATE_NORMAL)
})

test('Expected right setWaitState Action', () => {
    const action = setWaitingState()

    expect(action.type).toEqual(APP_STATE_WAIT)
})

test('Expected right setThemePrimaryColor Action', () => {
    const color = "#333333"
    const action = setThemePrimaryColor(color)

    expect(action.type).toEqual(APP_PRIMARY_COLOR)
    expect(action.color).toEqual(color)
})
