import React, {useState} from "react";
import { useInput } from '../hooks/useInput';

export default function ContactForm({ onNewContact = f => f }) {
    const [nameProps, resetName] = useInput("");
    const [emailProps, resetEmail] = useInput("");
    const [phoneProps, resetPhone] = useInput("");
    const [methodProps, resetMethod] = useInput("");
    const [typeProps, resetType] = useInput("");
    const [messageProps, resetMessage] = useInput("");
    const [fileProps, resetFile] = useState(null);

    const submit = event => {
        event.preventDefault();
        onNewContact(
            nameProps.value,
            emailProps.value,
            phoneProps.value,
            methodProps.value,
            typeProps.value,
            messageProps.value,
            fileProps.value);
        resetName();
        resetEmail();
        resetPhone();
        resetMethod();
        resetType();
        resetMessage();
        resetFile();
    }

    return (
        <form className="flex min-h-screen flex-col items-center justify-between p-24" onSubmit={submit}>
            <div className='flex flex-col'>
                <label for="name">Name</label>
                <input id="name" className="text-black w-300 p-1" type='text'></input>
            </div>
            <div className='flex flex-col'>
                <label for="email">Email Address</label>
                <input id="email" className="text-black w-300 p-1" type='email'></input>
            </div>
            <div className='flex flex-col'>
                <label for="phone">Phone Number</label>
                <div className='flex flex-col items-center'>
                    <input id='phone' className="text-black w-300 p-1" type='tel' name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                    <small>Format: 123-456-7890</small>
                </div>
            </div>
            <div className='flex flex-col'>
                <label for="method">Preferred Contact Method&nbsp;</label>
                <select id="method" className="text-black w-300 p-1">
                    <option value='' className='text-gray-500' selected disabled hidden>Select</option>
                    <option value='method-email'>Email</option>
                    <option value='method-phone'>Phone</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label for="type">Message Type&nbsp;</label>
                <select id="type" className="text-black w-300 p-1">
                    <option value='' className='text-gray-500' selected disabled hidden>Select</option>
                    <option value='business'>Business Inquiry</option>
                    <option value='comment'>Comment</option>
                    <option value='file share'>File Share</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label for='message'>Message</label>
                <div className='flex flex-col items-center'>
                    <textarea id="message" className="text-black w-300 p-1 max-h-64" rows='1' cols='50'></textarea>
                    <small>Your message cannot be changed once sent. Max 500 characters.</small>
                </div>
            </div>
            <div>
                <input id="file" className="text-black max-length" type='file' accept='.pdf'></input>
            </div>
            <button class="bg-transparent transition-colors: duration-150 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Send</button>
        </form>
    )
}


