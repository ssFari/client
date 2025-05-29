import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <form
            className='flex flex-col gap-4 w-full max-w-xl mx-auto'
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full border rounded px-3 py-2'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full border rounded px-3 py-2'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='message'>Message</label>
                <textarea
                    id='message'
                    name='message'
                    className='w-full border rounded px-3 py-2'
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Type your message here...'
                />
            </div>
            <button
                type='submit'
                className='bg-blue-600 text-white rounded px-4 py-2 mt-2 hover:bg-blue-700'
                disabled
            >
                Send Message (Coming Soon)
            </button>
            <p className='text-xs text-gray-400 mt-2'>
                * The email feature will be available after backend integration.
            </p>
        </form>
    );
};

export default ContactForm;
