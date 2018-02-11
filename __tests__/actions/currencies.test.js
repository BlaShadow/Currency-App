import { changeCurrencyAmount, swapCurrency, setBaseCurrency, setQuoteCurrency, setCurrencyRate } from '../../app/actions/currencies' 
import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, SET_BASE_CURRENCY, SET_QUOTE_CURRENCY, SET_RATE_CURRENCY  } from '../../app/actions/currencies'

test('Expected right changeCurrencyAmount action', () => {
    const randomNumber = Math.ceil(Math.random() * 10000)
    const action = changeCurrencyAmount(randomNumber)

    expect(action.type).toEqual(CHANGE_CURRENCY_AMOUNT)
    expect(action.amount).toEqual(randomNumber)
})

test('Expected right swapCurrency action', () => {
    const action = swapCurrency()

    expect(action.type).toEqual(SWAP_CURRENCY)
})

test('Expected right setBaseCurrency action', () => {
    const randomString = Math.random().toString()
    const action = setBaseCurrency(randomString)

    expect(action.type).toEqual(SET_BASE_CURRENCY)
    expect(action.baseCurrency).toEqual(randomString)
})

test('Expected right setQuoteCurrency action', () => {
    const randomString = Math.random().toString()
    const action = setQuoteCurrency(randomString)

    expect(action.type).toEqual(SET_QUOTE_CURRENCY)
    expect(action.quoteCurrency).toEqual(randomString)
})

test('Expected right setQuoteCurrency action', () => {
    const randomString = Math.random().toString()
    const action = setQuoteCurrency(randomString)

    expect(action.type).toEqual(SET_QUOTE_CURRENCY)
    expect(action.quoteCurrency).toEqual(randomString)
})

test('Expected right setCurrencyRate action', () => {
    const randomCurrency = Math.random().toString()
    const randomArray = []
    const action = setCurrencyRate(randomCurrency, randomArray)

    expect(action.type).toEqual(SET_RATE_CURRENCY)
    expect(action.currency).toEqual(randomCurrency)
    expect(action.rates).toEqual(randomArray)
})

