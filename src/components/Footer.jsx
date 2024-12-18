import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaHome } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const brandDetails = {
    brandIcon: <FaHome className="w-6 h-6 text-gray-600" />,
    brandName: 'BrandName',
    address: '2261 Market Street #5039 San <br /> Francisco, CA 94114',
  };

  const socialIcons = [
    { name: 'Twitter', icon: <RiTwitterXFill className="w-5 h-5" />, link: 'https://x.com/notfunnyadharsh' },
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, link: 'https://github.com/adharsh-a' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, link: 'https://www.linkedin.com/in/adharsh-boddul-6847a3235/' },
  ];

  const footerSections = [
    {
      title: 'Product',
      links: [
        { text: 'Features', url: '/features' },
        { text: 'Pricing', url: '/pricing' },
        { text: 'Case Studies', url: '/case-studies' },
        { text: 'Reviews', url: '/reviews' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', url: '/about' },
        { text: 'Careers', url: '/careers' },
        { text: 'Contact', url: '/contact' },
        { text: 'Blog', url: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', url: '/documentation' },
        { text: 'Help Center', url: '/help-center' },
        { text: 'API Reference', url: '/api-reference' },
        { text: 'Status', url: '/status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', url: '/privacy-policy' },
        { text: 'Terms of Service', url: '/terms-of-service' },
        { text: 'Cookie Policy', url: '/cookie-policy' },
        { text: 'GDPR', url: '/gdpr' },
      ],
    },
  ];

  return (
    <footer className="relative w-full bottom-0 bg-transparent text-gray-200 pt-8 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand and Address */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              {brandDetails.brandIcon}
              <span className="text-xl font-bold ml-2">{brandDetails.brandName}</span>
            </div>
            <p
              className="text-sm mb-4"
              dangerouslySetInnerHTML={{ __html: brandDetails.address }}
            />
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  className="text-gray-200 hover:text-gray-50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.name}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-sm text-gray-500 hover:text-gray-50 transition-colos hover:underline underline-offset-4 tracking-wider"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-80 h-80 rounded-full absolute top-[20%] -right-20 bg-rose-500"
        style={{
          imageRendering: "pixelated", // Ensures sharp edges for pixelation
          filter: "blur(200px)", // Adds a blur to simulate pixelation
        }}
      />
    </footer>
  );
};

export default Footer;
