export function getFormData(form) {
    const formData = new FormData(form)
    return Object.fromEntries(formData)
}