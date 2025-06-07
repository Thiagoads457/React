
import React from "react";
import { Link } from "react-router-dom";

import './Atv05.css';

import { useState } from 'react';
import FormQuiz from './componentes/FormQuiz';
import FormTicket from './componentes/FormTicket';
import Accordion from './componentes/Accordion';
import ContactList from './componentes/ContactList';
import Chat from './componentes/Chat';



const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

export default function Atv05() {
    const [to, setTo] = useState(contacts[0]);
    
    return (
        <div className="atv05">
            <h1>Atividade 05 - Gerenciamento de Estado</h1>
            
            <section>
                <h2>FormQuiz</h2>
                <FormQuiz />
            </section>
            
            <section>
                <h2>FormTicket</h2>
                <FormTicket />
            </section>
            
            <section>
                <h2>Accordion</h2>
                <Accordion />
            </section>
            
            <section>
                <h2>Messenger</h2>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <ContactList
                        contacts={contacts}
                        selectedContact={to}
                        onSelect={contact => setTo(contact)}
                    />
                    <Chat key={to.email} contact={to} />
                </div>
            </section>
            <Link to="/" className="link-inferior">Voltar</Link>
        </div>
    );
}