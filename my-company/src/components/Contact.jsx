import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '1rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '1rem' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px', fontSize: '1rem', minHeight: '100px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none' }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
