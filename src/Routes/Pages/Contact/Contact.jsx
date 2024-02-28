import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import ContactImg from '../../../assets/event pic/contact.jpg'

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Hope Hues | Contact</title>
            </Helmet>
            <Cover img={ContactImg} titel='contact us' subTitel='how are you men'></Cover>
        </div>
    )
}
