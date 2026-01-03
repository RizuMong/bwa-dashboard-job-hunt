import { Metadata } from 'next';
import React, { FC } from 'react';

interface SignUpPageProps {

};

export const metadata: Metadata = {
    title: "Sign Up",
    description: "Authentication Sign Up Page",
};

const SignUpPage: FC<SignUpPageProps> = ({ }) => {
    return (
        <div>
            Sign Up Page
        </div>
    );
};

export default SignUpPage;