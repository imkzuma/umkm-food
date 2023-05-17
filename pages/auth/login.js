import LoginComponents from "@/components/auth/Login";
import AuthLayout from "@/layout/AuthLayout";
import Head from "next/head";

export default function LoginPage(){
    return(
        <>
            <Head>
                <title>UMKM | Login</title>
            </Head>
            <main>
                <AuthLayout>
                    <LoginComponents />
                </AuthLayout>
            </main>
        </>
    )
}