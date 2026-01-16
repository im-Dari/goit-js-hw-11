// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
 
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', onSearch);

async function onSearch(event) {
    event.preventDefault();

    const query = event.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.warning({
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }
    clearGallery();
    showLoader();

    try {
        const data= await getImagesByQuery(query);

     if (!data.hits.length){
            iziToast.error({
                message: 'Sorry, there are no images matching <br>yoursearch query. Please, try again!',
                position: 'topRight',
                backgroundColor: '#e74c3c',
    messageColor: '#ffffff',
    iconColor: '#ffffff',
    icon: 'ico-error', 
    theme: 'dark',
    close: true,
    closeColor: '#ffffff',
            });
            return;
}

    createGallery(data.hits.slice(0, 9));

    } catch (error) {
        iziToast.error({
            message: 'Sorry, there are no images matching <br>your search query. Please, try again!',
            position: 'topRight',
            backgroundColor: '#e74c3c',
    messageColor: '#ffffff',
    iconColor: '#ffffff',
    icon: 'ico-error', 
    theme: 'dark',
    close: true,
    closeColor: '#ffffff',
        });
        console.error('Error fetching images:', error);
    } finally {
        hideLoader();
    }
}