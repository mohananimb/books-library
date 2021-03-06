const fetchBooks = async () => {
    const res = await fetch("http://localhost:5000/books")
    const data = await res.json()

    if (res.status >= 400) {
        throw new Error(data.errors)
    }
    return data
};

const fetchFav = async () => {
    
    const res = await fetch("http://localhost:5000/favorite-books", {
        method: "GET",
        headers: {
            "Authorization": (localStorage.token)
        }
    })
    
    if (res.status >= 400) {
        throw new Error()
    }

    const data = await res.json()
   
    return data
};

export { fetchBooks, fetchFav }
