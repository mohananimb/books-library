export const getBooks = async () => {
    const res = await fetch("https://5eb82be6bb17460016b326b8.mockapi.io/books")
    const data = await res.json()
    if (res.status >= 400) {
        throw new Error(data.errors)
    }

    return data
};