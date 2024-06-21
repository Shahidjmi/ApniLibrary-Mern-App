import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid'
                }
              })}
              className={`w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className={`w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
