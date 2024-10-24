"use client"

import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/features/auth/schemas";
import { useSignUp } from "@/features/auth/api/use-sign-up";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";




export const SignUpCard = () => {

    const { mutate } = useSignUp();

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof signUpSchema>) => {
        mutate({ json: values });
    }


    return (
        <Card className="w-full h-full md:w-[480px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up you aree to our {" "}
                    <span className="text-primary hover:underline cursor-pointer">Privacy policy</span>
                    {" "}and{" "}
                    <span className="text-primary hover:underline cursor-pointer">Terms and conditions</span>
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                name="name"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="name">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="name"
                                                id="name"
                                                placeholder="Enter name"
                                                disabled={false}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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
                                                placeholder="Enter email"
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
                                                placeholder="Create a password"
                                                disabled={false}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit" className="w-full">Sign Up</Button>
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
                <p>Already have an account?{" "}
                    <Link href="/sign-in">
                        <span className="text-primary hover:underline">Sign In</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}