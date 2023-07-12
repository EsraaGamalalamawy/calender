import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export const Form = () => {
    const form = useRef();
    const [y,setY]=useState()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vu1c6bg', 'template_c8bscue', form.current, 'mJRtwjheTmbmNvWSX')
        .then((result) => {
            console.log(result.text);
            console.log("done")
        }, (error) => {
            console.log(error.text);
        });

        setY("")
    };

    
        return (
            <form className='right' ref={form} onSubmit={sendEmail}>
                    <div className='one '>
                        <label>First Name</label>
                        <input value={y} type='text' required name="from_name" />
                    </div>
                    <div className='one'>
                        <label>Second Name</label>
                            <input value={y} type='text' required name='second_name'/>
                    </div>
                    <div className='two'>
                        <label>Email</label>
                        <input value={y} type='Email' required name="form_email"/>
                    </div>
                    <div className='two'>
                        <label>Mobile Number</label>
                        <input value={y} type='text' required name='form_num'/>
                    </div>
                    <div className='two'>
                        <label>Message</label>
                        <textarea value={y} name='message' />
                    </div>
                    <div className='two x'>
                        <button type="submit">submit <i class="fa-solid fa-paper-plane"></i> </button>
                    </div>
            </form>
        );
    };
export default Form;