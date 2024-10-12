import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('input[name="searchQuery"]');
const loader = document.querySelector('.loader');
let page = 1;
let searchQuery = '';

form.addEventListener('submit', onSearch);

async function onSearch(event) {
    event.preventDefault();

    searchQuery = input.value.trim();
    if (!searchQuery) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query.',
        });
        return;
    }

    clearGallery();
    loader.classList.add('show');
    page = 1;

    try {
        const images = await fetchImages(searchQuery, page);
        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }
        renderGallery(images);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
        });
    } finally {
        loader.classList.remove('show');
    }
}
