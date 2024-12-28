export const useRedirectIfAuthenticated = (url ='/') => {
    const user = useSupabaseUser()
    watch(user, (user) => {
        if (user) {
            console.log(user)
        }
    }, { immediate: true })

    return user
}