import { cookies } from "next/headers";

export default async function AboutPage() {
    console.log("About Server Component.");

    const cookieStore = await cookies()
    const theme = cookieStore.get('name')
    console.log(theme);
    
    return (
        <h1>About Page</h1>
    )
}