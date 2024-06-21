// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-8">
          Welcome to ApniLibrary, your number one source for all kinds of books. We're dedicated to giving you the very best of literature, with a focus on reliability, customer service, and uniqueness.
        </p>
        <p className="mb-8">
          Founded in 2023, ApniLibrary has come a long way from its beginnings. When we first started out, our passion for books drove us to do tons of research, so that ApniLibrary can offer you the world's best collection. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
        </p>
        <p className="mb-8">
          We hope you enjoy our books as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p> Sincerely, <br /> The ApniLibrary Team</p>
      </div>
      <footer className="mt-8">
        <p>&copy; 2024 ApniLibrary. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
