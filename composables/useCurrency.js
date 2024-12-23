export const useCurrency = (amount) => {
    const currency = computed(() => {
        return new Intl.NumberFormat('ua-UA', {
            style: 'currency',
            currency: 'UAH',
            currencyDisplay: 'narrowSymbol' // Ensures consistent symbol (₴) rendering
        }).format(isRef(amount) ? amount.value : amount)
    })
    return {
        currency
    }
}
