import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Detail from '../pages/Detail';
import Main from '../pages/Main';

const router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default router;
