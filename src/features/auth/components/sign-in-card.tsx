"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { signInSchema } from "@/features/auth/schemas";
import { useSignIn } from "@/features/auth/api/use-sign-in";


export const SignInCard = () => {

    const { mutate } = useSignIn();

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof signInSchema>) => {
        mutate({json: values});
    }

    return (
        <Card className="w-full h-full md:w-[480px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                disabled={false}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                disabled={false}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit" className="w-full">Sign In</Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button variant="secondary" className="w-full"> <FaGoogle /> Continue with Google</Button>
                <Button variant="secondary" className="w-full"> <FaFacebookF />Continue with Facebook</Button>
            </CardContent>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7 text-center text-sm">
                <p>Don&apos;t have an account?{" "}
                    <Link href="/sign-up">
                        <span className="text-primary hover:underline">Sign Up</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}