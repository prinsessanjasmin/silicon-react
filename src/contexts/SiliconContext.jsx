import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SiliconContext = createContext(); 

const SiliconProvider = ({ children }) => {
    const swaggerApi = `https://win24-assignment.azurewebsites.net/api/`;
    const [faq, setFaq] = useState([]); 
    const [testimonials, setTestimonials] = useState([]); 
    
    useEffect(() => {
        const getFaqAxios = async() => {
            try {
                const res = await axios.get(`${swaggerApi}faq`);
                setFaq(res.data);
            }
            catch {
                console.error("Error fetching FAQs:", error);
            }
        }

        const getTestimonialsAxios = async() => {
            try {
                const res = await axios.get(`${swaggerApi}testimonials`);
                setTestimonials(res.data);
            }
            catch {
                console.error("Error fetching testimonials:", error);
            }
        }

        getFaqAxios();
        getTestimonialsAxios();
    }, [])


    return (
        <SiliconContext.Provider value={{ faq, testimonials }}>{ children }</SiliconContext.Provider>
    )
}

export default SiliconProvider