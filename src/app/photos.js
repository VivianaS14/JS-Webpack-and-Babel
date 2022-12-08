class Photos {
    async getPhotos() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        const photos = await resp.json();
        return photos
    }
}
export default Photos;