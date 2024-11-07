const envMode = () => {
    if (import.meta.env.MODE === "development") {

        return "http://localhost:3000"
    } else if (import.meta.env.MODE === "production") {

        return "https://email-marketing-platform-server.vercel.app/"
    }
}

export default envMode;