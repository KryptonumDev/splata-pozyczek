
export function datalayerArguments() {
    if (typeof window !== "undefined" && !!arguments) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(arguments)
    }
}