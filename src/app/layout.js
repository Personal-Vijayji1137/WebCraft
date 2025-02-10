import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import nodemailer from "nodemailer"
import { GoogleAnalyticsTracking } from "./tag";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const title = "WebCraft Pro - Professional Landing Pages at ₹999 | Web Design Services"
const description = "Get stunning, professional landing pages designed at just ₹999. Showcase your business with our expert web design services. View our portfolio of attractive 3D dark-themed websites and contact us today!";
const keywords = "landing page design, custom landing page, affordable landing pages, best landing page service, responsive web design, fast loading websites, SEO optimized landing pages, high-converting landing pages, website for ₹999, business website design, best website for startups, landing page development, modern UI landing pages, smooth animations websites, mobile-friendly landing page, website with 3D effects, creative web design, custom website development, lead generation landing pages, website for small business, professional landing pages, best website for startups, UI/UX design services, cheap web development, digital marketing landing pages, interactive website design, top web design company, creative website builder, SEO-friendly landing pages, stunning website layouts, professional business website, one-page website design, ecommerce landing pages, real estate landing pages, tech startup websites, portfolio website design, premium website for ₹999, modern website solutions, best website for online business, fast website creation, custom design services, UI/UX optimized landing page, best website for branding, top-rated web design service, best website builder, website optimization services, best website layout, custom HTML landing pages, mobile-responsive websites, cheap website for businesses, website for freelancers, top web developers, website maintenance services, secure website hosting, WordPress landing pages, website for marketing agencies, stunning portfolio websites, website for influencers, landing page agency, digital presence website, creative business website, stylish website design, premium UI websites, beautiful website design, website speed optimization, website with smooth animations, branding website design, best website for social media marketing, effective lead capture pages, website development in India, custom business website, one-time website payment, best UI design landing pages, affordable website solutions, best website for high conversions, quick website setup, website with call-to-action, top-quality web pages, modern and sleek website, low-cost website development, website for startups in India, digital growth website, website for lead generation, single-page website, best SEO practices for websites, website with user-friendly navigation, futuristic website design, best mobile-optimized websites, website with fast delivery, instant website design, lightweight website development, website with engaging visuals, website for personal branding, easy-to-manage website, best-in-class website UI, AI-powered website solutions, simple and elegant website, and web design company in India.";
const logo = `https://www.web.iplust.in/logo.png`;
const openGraphImage = { images: [logo] }
const BaseURL = "https://www.web.iplust.in"
export const metadata = {
  title: title,
  description: description,
  canonical: BaseURL,
  openGraph: {
    ...openGraphImage,
    url: BaseURL,
    type: 'website',
    title: title,
    siteName: title,
    description: description,
  },
};
export const EmailTransporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href={logo} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="I Plus T Solution" />
        <meta name='subject' content={title} />
        <meta name="robots" content="index, follow" />
        <meta name='language' content='ES' />
        <meta name='author' content='Jitender, info@iplust.in' />
        <meta name='reply-to' content='info@iplust.in' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='DC.title' content={title} />
        <meta name='rating' content='General' />
        <meta name='target' content='all' />
        <meta name="news_keywords" content={keywords} />
        <meta name='HandheldFriendly' content='True' />
        <meta name='MobileOptimized' content='320' />
        <link rel="alternate" hrefLang="en" href={BaseURL} />
        <meta name='Classification' content='Business' />
        <meta name='copyright' content='I Plus T Solution' />
        <meta name='identifier-URL' content={BaseURL} />
        <link rel="canonical" href={BaseURL} />
        <meta name="google-site-verification" content="iwD0eTWm9aVBCqPmJiLYNn029CC-qUWZufvdoYmn0sc" />
        <meta name="googlebot-news" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="robots" content="noarchive" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalyticsTracking />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Product",
              "name": title,
              "image": 'https://www.web.iplust.in/banner.png',
              "@id": BaseURL,
              "description": description,
              "url": BaseURL,
              "telephone": "+91-8307056141",
              "category": "Web Development Services",
              "brand": {
                "@type": "Brand",
                "name": "WebCraft",
                "logo": logo,
                "sameAs": [
                  "https://www.iplust.in/",
                  "https://www.linkedin.com/company/i-plus-t-solution/",
                  "http://wa.me/918307056141",
                  "mailto:web@iplust.in",
                  BaseURL
                ],
              },
              "offers": {
                "@type": "Offer",
                "url": `https://www.web.iplust.in/#services`,
                "priceCurrency": "INR",
                "price": 999,
                "priceValidUntil": "2026-01-01",
                "itemCondition": "http://schema.org/NewCondition",
                "availability": "http://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "WebCraft",
                  "url": BaseURL,
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-8307056141",
                    "contactType": "customer service",
                    "email": "web@iplust.in",
                  },
                },
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "286",
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Rohan Sharma",
                  },
                  "datePublished": "2025-06-15",
                  "description": "WebCraft provided an outstanding service! Highly recommended.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                  },
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Aditi Verma",
                  },
                  "datePublished": "2025-07-10",
                  "description": "Amazing experience! My website is now super fast and SEO optimized.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                  },
                }
              ],
              "merchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "returnPolicyCategory": "http://schema.org/NoReturns",
                "returnPolicyCountry": "IN",
                "validFrom": "2024-01-01",
              },
              "faqPage": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What services does WebCraft offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "WebCraft offers high-quality web development, SEO optimization, and digital marketing services."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I contact WebCraft support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can contact us via email at web@iplust.in or call +91-8307056141."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's included in the ₹999 package?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our ₹999 package includes 7-10 custom pages, modern 3D elements, smooth animations, responsive design, and High Level SEO optimization. You'll get a professionally designed website that works perfectly on all devices."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to complete a website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Typically, we complete projects within 1-2 business days. However, the exact timeline may vary depending on the complexity and your specific requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer revisions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we offer up to 2 rounds of revisions to ensure you're completely satisfied with your website. Additional revisions can be discussed if needed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I customize the design?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! We work closely with you to customize the design according to your brand and preferences while maintaining modern design principles."
                    }
                  }
                ]
              },
              "breadcrumb": {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": `${BaseURL}`
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": `${BaseURL}/#services`
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Projects",
                    "item": `${BaseURL}/#portfolio`
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Pricing",
                    "item": `${BaseURL}/#pricing`
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Landing Pages",
                    "item": `${BaseURL}/#features`
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "What Our Clients Say",
                    "item": `${BaseURL}/#testimonials`
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "How It Works",
                    "item": `${BaseURL}/#process`
                  },
                  {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Privacy Policy",
                    "item": `${BaseURL}/privacy`
                  },
                  {
                    "@type": "ListItem",
                    "position": 9,
                    "name": "Terms of Service",
                    "item": `${BaseURL}/terms`
                  },
                  {
                    "@type": "ListItem",
                    "position": 10,
                    "name": "How It Works",
                    "item": `${BaseURL}/#process`
                  },
                  {
                    "@type": "ListItem",
                    "position": 11,
                    "name": "AI World",
                    "item": `${BaseURL}/ai.html`
                  },
                  {
                    "@type": "ListItem",
                    "position": 12,
                    "name": "Find Your Perfect Land Investment",
                    "item": `${BaseURL}/land.html`
                  },
                  {
                    "@type": "ListItem",
                    "position": 13,
                    "name": "I Plus T Solution : We Help Startups to Grow in there business",
                    "item": `https://www.iplust.in/`
                  },
                  {
                    "@type": "ListItem",
                    "position": 14,
                    "name": "Fitness Studio",
                    "item": `${BaseURL}/gym`
                  },
                  {
                    "@type": "ListItem",
                    "position": 15,
                    "name": "Experience Culinary Perfection",
                    "item": `${BaseURL}/restaurant`
                  },
                  {
                    "@type": "ListItem",
                    "position": 16,
                    "name": "Beauty Salon",
                    "item": `${BaseURL}/salon`
                  }
                ]
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
