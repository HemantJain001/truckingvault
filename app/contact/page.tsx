import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us | The Trucking Vault',
  description: 'Get in touch with The Trucking Vault for CDL training inquiries, course information, and support. Located in your area with flexible scheduling options.',
  keywords: 'contact trucking vault, CDL training contact, truck driving school contact, commercial driving license contact',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}