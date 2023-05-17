import RegisterComponents from "@/components/auth/Register";
import AuthLayout from "@/layout/AuthLayout";
import Head from "next/head";

export default function RegisterPage(){
    return(
        <>
            <Head>
                <title>UMKM | Register</title>
            </Head>
            <main>
                <AuthLayout>
                    <RegisterComponents />
                </AuthLayout>
            </main>
        </>
    )
}