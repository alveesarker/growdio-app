"use client"
import React from 'react';
import Styles from './Buttont.module.css';
import Link from 'next/link';

const Buttont = () => {


  return (
    <div>
      <Link href={'/learn-more'}>
        <button className={Styles.btnDonate}>
          Learn more
        </button>
      </Link>
    </div>
  );
}

export default Buttont;
