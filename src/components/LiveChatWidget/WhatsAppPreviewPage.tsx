'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './whatsappPreview.module.css';

const WhatsAppPreviewPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const service = searchParams.get('service') || 'INDIA Business Registration';
  const referenceId = searchParams.get('ref') || '';
  const name = searchParams.get('name') || 'there';
  const email = searchParams.get('email') || '';
  const message = searchParams.get('message') || '';
  const phone = searchParams.get('phone') || '';

  const handleBack = () => {
    router.back();
  };

  const whatsappMessage = `Hi, I am ${name}.\n\nI am interested in ${service}.\n\n${message}\n\nEmail: ${email}\nPhone: ${phone}\n\nRef: ${referenceId}`;

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={handleBack} title="Back">
          ←
        </button>
        <h2>WhatsApp Message</h2>
        <div style={{ width: "32px" }}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* User Info Section */}
        <div className={styles.userInfoSection}>
          <h1>Hi, {name}! 👋</h1>
          <p className={styles.userDescription}>
            We've received your interest in <strong>{service}</strong>. 
          </p>Our experts are ready to assist you with your inquiry. Let's connect on WhatsApp to discuss your needs!
          {message && (
            <div className={styles.userMessage}>
              <p><strong>Your Message:</strong></p>
              <p>{message}</p>
            </div>
          )}
        </div>

        {/* Company Profile */}
        <div className={styles.companyProfile}>
          <div className={styles.companyAvatar}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#E8F4F8" />
              <text
                x="30"
                y="35"
                textAnchor="middle"
                fontSize="24"
                fill="#0084FF"
              >
                LI
              </text>
            </svg>
          </div>
          <div className={styles.companyInfo}>
            <h3>legallens india</h3>
            <span className={styles.verified}>✓</span>
          </div>
        </div>

        {/* Message Preview */}
        <div className={styles.messagePreview}>
          <p style={{ whiteSpace: 'pre-line' }}>
            {whatsappMessage}
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.whatsappButtons}>
          <a
            href={`https://wa.me/919535410707?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openAppBtn}
          >
            Open app
          </a>
          <a
            href={`https://web.whatsapp.com/send?phone=919535410707&text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.webBtn}
          >
            Continue to WhatsApp Web
          </a>
        </div>

        {/* Download Link */}
        <div className={styles.downloadLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.739-.86-2.012-.96-.273-.099-.471-.149-.67.149-.198.297-.768.96-.941 1.159-.173.198-.347.223-.645.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.918-2.207-.242-.579-.487-.501-.669-.51-.173-.009-.371-.009-.569-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006c-1.052 0-2.088.298-2.977.86l-.214-.108L3.36 5.534l.828 2.84c-.563.9-.861 1.948-.861 3.054 0 3.364 2.735 6.122 6.088 6.122 3.353 0 6.088-2.758 6.088-6.122 0-3.364-2.735-6.122-6.088-6.122m5.064 15.55s-.28.067-.72.067c-3.906 0-7.529-1.525-10.265-4.29-2.736-2.764-4.237-6.432-4.237-10.328 0-.533.031-1.062.087-1.585C.888 4.148.117 2.7.117 1.053 0 .472.472 0 1.053 0 10.902 0 19 8.15 19 18.128c0 .584-.474 1.058-1.057 1.058-.643 0-1.172-.432-1.164-1.058h-.715" />
          </svg>
          Don't have the app?{" "}
          <a
            href="https://www.whatsapp.com/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download it now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPreviewPage;
