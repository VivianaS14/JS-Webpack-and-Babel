import Photos from "./photos";
import "./index.css";

console.log('Elimine build');

const photos = new Photos()
async function main() {
    console.log(await photos.getPhotos());
}
main();