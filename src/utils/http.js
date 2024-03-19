export async function fetchData(url) {
    try {
        const response = await fetch('https://kurly-copy-default-rtdb.firebaseio.com/' + url);
        const resData = await response.json();
        return resData;
    } catch (error) {
        console.error(error);
    }
}