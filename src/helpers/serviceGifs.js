export const serviceGifs = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=W1UUH81bwRbV7chiuyZ5gmn5Vmu54E7F&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const filterData = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })
    return filterData;

}