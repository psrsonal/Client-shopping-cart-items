export let API: string

if (process.env.NODE_ENV === "development") {
    API = process.env.REACT_APP_DEVLOPMENT_API_RUL!
} else if (process.env.NODE_ENV === "production") {
    API = process.env.REACT_APP_PRODUCTION_API_RUL!
}
