'use client'
import React from 'react';
import BrandSection from './ui/Brandsection';
import { FaApple, FaMicrosoft, FaGoogle, FaAmazon, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Brands = [
  { name: 'Apple', logo: FaApple },
  { name: 'Microsoft', logo: FaMicrosoft },
  { name: 'Google', logo: FaGoogle },
  { name: 'Amazon', logo: FaAmazon },
  { name: 'Facebook', logo: FaFacebook },
  { name: 'Twitter', logo: FaTwitter },
  { name: 'LinkedIn', logo: FaLinkedin },
  { name: 'Instagram', logo: FaInstagram },
];

const BrandScrollSection = () => {
  return (
    <BrandSection brands={Brands} scrollSpeed={0.1} scrollInterval={30}/>
  );
};

export default BrandScrollSection;
