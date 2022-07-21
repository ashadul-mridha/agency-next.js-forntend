/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from "next/router";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect } from 'react';

const NotFoundPage = () => {
    const router = useRouter();
    useEffect( () => {
        setTimeout( () => {
            router.push('/')
        },3000)
    } ,[router])
    return (
        <>
            <div className="container-fluid">
                <style>{`
                    .notFound img{
                        height: 500px;
                        width: 100%;
                        object-fit: contain;
                    }
                `}</style>
                <div className="row">
                    <div className="col-12">
                        <div className="notFound"><img src="/images/notFound.jpg" alt="not found page" /></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;


//sent layout to app.js
NotFoundPage.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};