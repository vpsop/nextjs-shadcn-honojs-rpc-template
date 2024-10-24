"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {

    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image src="/logo.svg" alt="logo" width={150} height={55} />
                    <Button asChild variant="outline">
                        <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                            {isSignIn ? "Sign Up" : "Sign In"}
                        </Link>
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center p-4 md:p-14">
                    {children}
                </div>
            </div>
        </main>
    );
}
