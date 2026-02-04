'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LiveChatWidget.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface LiveChatWidgetProps {
  service?: string;
}

const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({
  service = 'India Business Registration',
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [useWhatsApp, setUseWhatsApp] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [countryCode, setCountryCode] = useState('+91');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStartChat = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      const refId = Math.random().toString().slice(2, 13);
      if (useWhatsApp) {
        const queryParams = new URLSearchParams({
          service: service,
          ref: refId,
          name: formData.name,
          email: formData.email,
          phone: `${countryCode} ${formData.phone}`,
          message: formData.message,
        }).toString();
        router.push(`/whatsapp-preview?${queryParams}`);
      } else {
        // Handle live chat
        alert(
          `Chat started with ${formData.name}!\n\nUsing Live Chat`
        );
        resetForm();
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          className={styles.floatingButton}
          onClick={() => setIsOpen(true)}
          title="Open Live Chat"
        >
          <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
          Chat with us
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '24px', color: 'white' }}></i>
                <h2>Live Chat with Experts</h2>
              </div>
              <button
                className={styles.closeBtn}
                onClick={handleClose}
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className={styles.body}>
              <p className={styles.description}>
                Consult our team about{' '}
                <strong>{service}</strong> service on live chat.
              </p>

              {/* Form */}
              <form className={styles.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                />

                <div className={styles.phoneGroup}>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={styles.countrySelect}
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+49">🇩🇪 +49</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.phoneInput}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows={3}
                />
              </form>

              {/* Toggle */}
              <div className={styles.toggleContainer}>
                <span>Chat using WhatsApp</span>
                <button
                  className={`${styles.toggle} ${
                    useWhatsApp ? styles.active : ''
                  }`}
                  onClick={() => setUseWhatsApp(!useWhatsApp)}
                  type="button"
                >
                  <span className={styles.toggleSlider}></span>
                </button>
              </div>

              {/* Button */}
              <button
                className={styles.startButton}
                onClick={handleStartChat}
                type="button"
              >
                START LIVE CHAT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;
