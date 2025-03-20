export const useUrlBuilder = (url: string) => {
    const returnUrl = new URL(url, window.location.origin);
    returnUrl.search = window.location.search;
    return returnUrl.toString();
}