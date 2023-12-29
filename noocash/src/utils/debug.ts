export const DEBUG =(...args: any[]) => {
    if (import.meta.env.DEV) {
        console.log(...args)
    }
}