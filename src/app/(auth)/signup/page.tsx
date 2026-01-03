"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signUpFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface SignUpPageProps {

};

const SignUpPage: FC<SignUpPageProps> = ({ }) => {
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const onSubmit = (val: z.infer<typeof signUpFormSchema>) => {
        console.log(val);
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="border border-border rounded-sm p-5 w-full max-w-sm">
                <div className="font-semibold text-2xl text-center mb-2">
                    Sign Up Account
                </div>
                <div className="text-sm text-gray-500 text-center">
                    Enter your email to access dashboard
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-5 space-y-5"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-full">Sign Up</Button>

                        <div className='text-sm text-gray-500'>
                            Already have an account? {" "}
                            <Link href="/signin" className='text-primary hover:font-semibold'>Sign In</Link>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );

};

export default SignUpPage;