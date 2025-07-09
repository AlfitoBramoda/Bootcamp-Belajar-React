// src/pages/AboutPage.jsx
import React from 'react';
import {Link} from 'react-router'

function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        About Blog Kelompok 5
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Gaada apa apa disini
                    </p>
                    <Link 
                        to="/"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;