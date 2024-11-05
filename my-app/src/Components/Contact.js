import React, { useState } from 'react';
 // Import a CSS file for specific styling (optional)

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Thank you for your message!');
    };

    return (
        <div>
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                    style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '10px' }} 
                />
                <textarea 
                    placeholder="Your Message" 
                    required 
                    style={{ width: '100%', height: '150px', padding: '10px', fontSize: '16px', marginBottom: '10px' }} 
                />
                <button 
                    type="submit" 
                    style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
                >
                    Send
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Contact;