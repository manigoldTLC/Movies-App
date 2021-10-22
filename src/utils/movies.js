// criando lista de filmes de acordo com um tamanho recebido

export const getListMovies = (size, movies) => {
    let listMovies = [];

    for (let i = 0, l = size; i < l; i++) {
        listMovies.push(movies[i]);
    }

    return listMovies;
}

// gera um número aleatório baseado na lista de filmes

export const randomMovie = (movies) => {
    return Math.floor(Math.random() * movies.length)
}
