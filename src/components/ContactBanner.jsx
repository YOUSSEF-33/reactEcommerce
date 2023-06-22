import React from 'react';
import { useNavigate } from 'react-router-dom';


const ContactBanner = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div class="bg-blue-500 py-4 px-6 text-white flex items-center justify-between">
            <p class="text-3xl font-bold">Contact Us</p>
            <p class="text-sm">Have questions or need assistance?</p>
            <p class="text-sm">Reach out to our team today!</p>
            <button class="bg-white text-blue-500 py-2 px-4 rounded-md font-medium hover:bg-blue-100" onClick={()=> navigate('/contact')}>Get in touch</button>
        </div>

    </div>
  )
}

export default ContactBanner