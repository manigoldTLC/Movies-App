import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os filmes salvos

export async function getMoviesSalve(key) {
    const myMovies = await AsyncStorage.getItem(key);

    let movieSave = JSON.parse(myMovies) || [];
    return movieSave;
}

// Salvar um novo filme

export async function saveMovie(key, newMovie) {
    let movieStored = await getMoviesSalve(key);

    // Se tiver algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar
    const hasMovie = movieStored.some(item => item.id === newMovie.id);

    if (hasMovie) {
        return;
    }

    movieStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(movieStored));
    
}

// Deletar algum filme específico

export async function deleteMovie(id) {
    let movieStorage = await getMoviesSalve('gabriel-key');

    let myMovies = movieStorage.filter(item => {
        return (item.id !== id);
    })

    await AsyncStorage.setItem('gabriel-key', JSON.stringify(myMovies));
    
    return myMovies;
}

// Filtrar algum filme se já está salvo

export async function hasMovie(movie) {
    let moviesStored = await getMoviesSalve('gabriel-key');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if (hasMovie) {
        return true;
    } else {
        return false;
    }
}