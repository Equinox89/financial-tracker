export const useCurrency = (amount) => {
    const currency = computed(() => {
        return new Intl.NumberFormat('ua-ua', {
            style: 'currency',
            currency: 'UAH'
        }).format(isRef(amount) ? amount.value : amount)
    })
    return {
        currency
    }
}