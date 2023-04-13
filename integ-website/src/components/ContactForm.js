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
        <form  className="flex min-h-screen flex-col items-center justify-between p-24" onSubmit={submit}>
            <input type='text'></input>
            <input type='email'></input>
            <input type='tel' id='phone' name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
            <small>Format: 123-456-7890</small>
            <select>
                <option> </option>
                <option> </option>
                <option> </option>
            </select>
            <select>
                <option> </option>
                <option> </option>
                <option> </option>
            </select>
            <textarea rows='10' cols='50'></textarea>
            <input type='file' accept='.pdf'></input>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Send</button>
        </form>
    )
}


