export const serviceGifs = async(category) => {
    const URL =`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=W1UUH81bwRbV7chiuyZ5gmn5Vmu54E7F&limit=10`;
    const response = await fetch(URL);
    const { data } = await response.json();
    return data;

}