'use client';

import { Suspense } from 'react';
import WhatsAppPreviewPage from '../../components/LiveChatWidget/WhatsAppPreviewPage';

function WhatsAppPreviewContent() {
  return <WhatsAppPreviewPage />;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WhatsAppPreviewContent />
    </Suspense>
  );
}
