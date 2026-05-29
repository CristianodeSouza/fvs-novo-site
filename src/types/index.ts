// Common types used across the application

export interface Property {
  id: string
  title: string
  location: string
  price: string
  image: string
  imageAlt: string
  beforeImage?: string
  beforeImageAlt?: string
  description: string
  slug: string
  featured: boolean
  gallery?: string[]
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  propertyInterest?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  country: string
  socialLinks?: {
    instagram?: string
    facebook?: string
    linkedin?: string
    whatsapp?: string
  }
}
