'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactForm } from '@/components/contact/contact-form';
import { Separator } from '@/components/ui/separator';

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-lg text-muted-foreground text-center">
          Have questions about booking, collaborations, or just want to say hello? Get in touch with us!
        </p>
        
        <ContactInfo />
        
        <Separator />
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
}