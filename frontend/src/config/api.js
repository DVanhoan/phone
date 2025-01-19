let base;
if (window.location.href.includes('localhost')) {
    base = 'http://localhost:8080';
} else {
    base = 'https://pokemones-api.onrender.com';
}
console.log(base);
export const API_URL = `${base}/api/`;