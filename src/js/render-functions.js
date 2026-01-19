import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loaderText = document.querySelector('.loader-text');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images 
    .map(
        image => `
        <li>
        <a href="${image.largeImageURL}"> 
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
        </a>
        </li>`
    )
    .join('');
    
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}


export function showLoader() {
    loader.classList.add('is-visible');
    loaderText.classList.add('is-visible');
}

export function hideLoader() {
    loader.classList.remove('is-visible');
    loaderText.classList.remove('is-visible');
}
