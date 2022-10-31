export function getSearchData(form) {
    const formData = new FormData(form)
    return Object.fromEntries(formData)
}