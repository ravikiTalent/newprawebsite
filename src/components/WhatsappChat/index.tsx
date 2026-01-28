'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './whatsappChat.module.css';

interface Message {
  id: string;
  sender: 'user' | 'contact';
  text: string;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

const WhatsappChat: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Alice Johnson',
      avatar: '👩‍💼',
      lastMessage: 'See you soon!',
      timestamp: '2:30 PM',
      unread: 2,
      online: true,
    },
    {
      id: '2',
      name: 'Bob Smith',
      avatar: '👨‍💻',
      lastMessage: 'Thanks for the update',
      timestamp: '1:15 PM',
      unread: 0,
      online: true,
    },
    {
      id: '3',
      name: 'Carol Davis',
      avatar: '👩‍🔬',
      lastMessage: 'Let me check that for you',
      timestamp: 'Yesterday',
      unread: 1,
      online: false,
    },
    {
      id: '4',
      name: 'David Wilson',
      avatar: '👨‍🎨',
      lastMessage: 'Perfect! Let\'s go ahead',
      timestamp: 'Yesterday',
      unread: 0,
      online: true,
    },
    {
      id: '5',
      name: 'Emma Brown',
      avatar: '👩‍🏫',
      lastMessage: 'Got it, thanks!',
      timestamp: '2 days ago',
      unread: 0,
      online: false,
    },
  ]);

  const [selectedContactId, setSelectedContactId] = useState<string>('1');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'contact',
      text: 'Hey! How are you doing?',
      timestamp: new Date(Date.now() - 3600000),
      status: 'read',
    },
    {
      id: '2',
      sender: 'user',
      text: 'Hi! I\'m doing great, thanks for asking!',
      timestamp: new Date(Date.now() - 3000000),
      status: 'read',
    },
    {
      id: '3',
      sender: 'contact',
      text: 'That\'s awesome! Want to grab coffee later?',
      timestamp: new Date(Date.now() - 2400000),
      status: 'read',
    },
    {
      id: '4',
      sender: 'user',
      text: 'Sure! What time works for you?',
      timestamp: new Date(Date.now() - 1800000),
      status: 'read',
    },
    {
      id: '5',
      sender: 'contact',
      text: 'How about 3 PM at the cafe?',
      timestamp: new Date(Date.now() - 1200000),
      status: 'read',
    },
    {
      id: '6',
      sender: 'user',
      text: 'Perfect! See you soon!',
      timestamp: new Date(Date.now() - 600000),
      status: 'delivered',
    },
    {
      id: '7',
      sender: 'contact',
      text: 'See you soon!',
      timestamp: new Date(Date.now() - 300000),
      status: 'read',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedContact = contacts.find((c) => c.id === selectedContactId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: 'user',
        text: inputValue,
        timestamp: new Date(),
        status: 'sent',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate receiving a response
      setTimeout(() => {
        const responses = [
          'That sounds great!',
          'I agree with you',
          'Let me think about that',
          'Sounds good to me!',
          'Thanks for letting me know',
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        const replyMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'contact',
          text: randomResponse,
          timestamp: new Date(),
          status: 'read',
        };
        setMessages((prev) => [...prev, replyMessage]);
      }, 1000);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className={styles.whatsappContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        {/* Header */}
        <div className={styles.sidebarHeader}>
          <h1>Chats</h1>
          <div className={styles.headerIcons}>
            <button className={styles.iconBtn} title="New chat">
              ✏️
            </button>
            <button className={styles.iconBtn} title="More options">
              ⋮
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search or start a new chat"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Contacts List */}
        <div className={styles.contactsList}>
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`${styles.contactItem} ${
                selectedContactId === contact.id ? styles.active : ''
              }`}
              onClick={() => setSelectedContactId(contact.id)}
            >
              <div className={styles.contactAvatar}>
                <span className={styles.avatar}>{contact.avatar}</span>
                {contact.online && (
                  <div className={styles.onlineIndicator}></div>
                )}
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>{contact.name}</div>
                <div className={styles.lastMessage}>{contact.lastMessage}</div>
              </div>
              <div className={styles.contactMeta}>
                <div className={styles.timestamp}>{contact.timestamp}</div>
                {contact.unread > 0 && (
                  <div className={styles.unreadBadge}>{contact.unread}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={styles.chatArea}>
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className={styles.chatHeader}>
              <div className={styles.contactHeaderInfo}>
                <div className={styles.contactHeaderAvatar}>
                  <span>{selectedContact.avatar}</span>
                  {selectedContact.online && (
                    <div className={styles.onlineIndicator}></div>
                  )}
                </div>
                <div>
                  <h2>{selectedContact.name}</h2>
                  <p className={styles.status}>
                    {selectedContact.online ? 'Active now' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className={styles.chatHeaderIcons}>
                <button className={styles.iconBtn} title="Call">
                  📞
                </button>
                <button className={styles.iconBtn} title="Video call">
                  📹
                </button>
                <button className={styles.iconBtn} title="More">
                  ⋮
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={styles.messagesContainer}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.messageWrapper} ${
                    message.sender === 'user' ? styles.userMessage : ''
                  }`}
                >
                  <div className={styles.message}>
                    <p>{message.text}</p>
                    <div className={styles.messageFooter}>
                      <span className={styles.time}>
                        {formatTime(message.timestamp)}
                      </span>
                      {message.sender === 'user' && (
                        <span className={styles.status}>
                          {message.status === 'sent' && '✓'}
                          {message.status === 'delivered' && '✓✓'}
                          {message.status === 'read' && '✓✓'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={styles.inputArea}>
              <button className={styles.attachBtn} title="Attach file">
                📎
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className={styles.messageInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <button
                className={styles.sendBtn}
                onClick={handleSendMessage}
                title="Send message"
              >
                {inputValue.trim() ? '📤' : '🎤'}
              </button>
            </div>
          </>
        ) : (
          <div className={styles.emptyState}>
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsappChat;
