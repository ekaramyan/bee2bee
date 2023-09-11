
import React, { Fragment } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPage from '@/components/MainPage'
import Contacts from '@/components/Contacts'
import Rules from '@/components/Rules';
import background from '../assets/img/background.png'


export default function index() {
  return (
    <div style={{background:`url(${background.src})`, height: '100dvh'}}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}
