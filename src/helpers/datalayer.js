
export function datalayerArguments(data) {
    if (typeof window !== "undefined" && !!data) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(data)
    }
}