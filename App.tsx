import React from 'react';

// --- Icon Components ---
const HeartStethoscopeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 12.5a7.5 7.5 0 0 1-7.5 7.5c-2.6 0-5-1.4-6.4-3.5" />
        <path d="M19.5 12.5a7.5 7.5 0 0 0-7.5-7.5c-2.6 0-5 1.4-6.4 3.5" />
        <path d="M12 22v-6" />
        <path d="M12 8V2l-3 3" />
        <path d="M12 2l3 3" />
        <circle cx="12" cy="8" r="2" />
    </svg>
);


const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.902-.539-5.57-1.502L0 24h.057zM6.597 4.843c1.36-.011 2.682.497 3.718 1.488 1.036.99 1.599 2.333 1.614 3.733-.016 1.4-.582 2.731-1.615 3.72-1.036.989-2.358 1.496-3.718 1.485-2.739-.025-4.96-2.247-4.985-4.986-.025-2.739 2.246-4.96 4.986-4.985zm8.173 12.288l-.137-.082c-1.353-.81-2.079-1.34-2.383-1.49-.302-.15-.521-.233-.74-.233-.219 0-.419.083-.58.233-.162.15-.633.723-.775.873-.143.15-.285.171-.527.087s-1.018-.376-1.938-1.199c-.724-.645-1.2-1.446-1.32-1.691-.12-.245-.02-.38.06-.508.07-.12.16-.21.24-.3.08-.09.12-.15.18-.255.06-.105.03-.195-.015-.285-.045-.09-.418-.99-.57-1.353-.152-.363-.305-.313-.418-.313h-.114c-.114 0-.27.045-.405.18s-.51.5-.51 1.23c0 .73.525 1.44 1.2 2.4 1.08 1.52 2.61 3.2 4.82 4.21 2.21 1.01 2.85 1.05 3.39.87.54-.18 1.04-.72 1.18-1.36.14-.64.14-1.18 0-1.36s-.2-.27-.418-.42z"/>
    </svg>
);


const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/>
    </svg>
);


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
    <div className="flex justify-center items-center mb-4 text-teal-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);


const App = () => {
    const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z" /><path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 1.5.4 2.9 1.2 4.1L5 20h14l-1.2-5.9c.8-1.2 1.2-2.6 1.2-4.1zM5.5 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /><path d="M17.5 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /></svg>,
      title: "رعاية كبار السن",
      description: "نوفر رعاية شاملة ومحبة لكبار السن لضمان راحتهم وصحتهم في بيئة منزلية آمنة.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l-2.5 5L5 8l4 3.5L8 16l4-2 4 2-1-4.5L20 8l-4.5-1z" /><circle cx="12" cy="12" r="10" /></svg>,
      title: "التمريض المنزلي",
      description: "فريق تمريض متخصص لتقديم الخدمات الطبية والعلاجية اللازمة في راحة منزلك.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 10.5c-.333 1.667 0 3.333 1 5s2.333 2.667 4.5 3.5" /><path d="M19.5 10.5c.333 1.667 0 3.333-1 5s-2.333 2.667-4.5 3.5" /><path d="M12 15.5V14" /><path d="M12 6.5V5" /><path d="M12 2c-3 0-5 2-5 5v3.5" /><path d="M12 2c3 0 5 2 5 5v3.5" /><path d="M12 14h-1.5c-1.667-.333-3.333 0-5-1s-2.667-2.333-3.5-4.5" /><path d="M12 14h1.5c1.667-.333 3.333 0 5-1s2.667-2.333 3.5-4.5" /></svg>,
      title: "العلاج الطبيعي",
      description: "جلسات علاج طبيعي متخصصة للمساعدة في استعادة الحركة وتخفيف الألم.",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12.98c-.13.13-.28.24-.45.32"/><path d="m5.24 15.62.26.13c.2.1.41.18.63.24"/><path d="M9.3 18.25c.23.08.46.14.7.18"/><path d="m14.7 18.25.7-.18c.22-.06.43-.14.63-.24l.26-.13"/><path d="m18.78 15.96.45-.32c.17-.08.32-.19.45-.32"/></svg>,
        title: "متابعة الحالات المزمنة",
        description: "مراقبة وإدارة الحالات الصحية المزمنة مثل السكري والضغط لضمان استقرار الحالة.",
    },
  ];
  
  const phoneNumbers = ["201024193594"];
  const whatsappNumber = "201024193594";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="text-teal-500">
                <HeartStethoscopeIcon />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">
              نبض الحياة <span className="text-teal-500">للرعاية المنزلية</span>
            </h1>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 rtl:space-x-reverse bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
          >
            <WhatsAppIcon />
            <span>تواصل معنا عبر واتساب</span>
          </a>
        </nav>
      </header>
      
      {/* Hero Section */}
      <main>
        <section className="relative h-[60vh] flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" alt="Caregiver with elderly person" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="container mx-auto px-6 text-center z-20">
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                    رعاية فائقة في راحة منزلك
                </h2>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
                    لأن صحتكم تهمنا، نوفر لكم أفضل خدمات الرعاية الصحية والتمريض المنزلي بحب واهتمام.
                </p>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-teal-600 transition duration-300 transform hover:scale-105 inline-flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <WhatsAppIcon />
                    <span>اطلب خدمتك الآن</span>
                </a>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">خدماتنا</h2>
                    <p className="text-lg text-slate-600">نقدم مجموعة متكاملة من خدمات الرعاية المنزلية لتلبية كافة احتياجاتكم</p>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Numbers Section */}
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-4xl font-bold text-slate-800 mb-4">تواصل معنا</h2>
                 <p className="text-lg text-slate-600 mb-10">نحن هنا لمساعدتك. يمكنك التواصل معنا عبر واتساب أو الاتصال المباشر.</p>
                 
                 <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* WhatsApp Card */}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 bg-green-50 text-green-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                         <div className="text-4xl"><WhatsAppIcon/></div>
                         <h3 className="text-2xl font-bold my-3">واتساب</h3>
                         <p className="text-xl font-semibold tracking-wider" style={{direction: 'ltr'}}>+20 102 419 3594</p>
                         <span className="mt-4 bg-green-500 text-white font-bold py-2 px-6 rounded-full">اضغط للتواصل</span>
                    </a>
                    
                    {/* Phone Numbers Card */}
                    <div className="w-full md:w-1/3 bg-teal-50 text-teal-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                        <div className="text-4xl"><PhoneIcon/></div>
                        <h3 className="text-2xl font-bold my-3">اتصال مباشر</h3>
                        <div className="space-y-2">
                        {phoneNumbers.map(number => (
                             <a key={number} href={`tel:${number}`} className="block text-xl font-semibold tracking-wider hover:text-teal-600 transition-colors" style={{direction: 'ltr'}}>
                                {number}
                             </a>
                        ))}
                        </div>
                    </div>
                 </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-10">
          <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
                 <h2 className="text-xl font-bold">نبض الحياة للرعاية المنزلية</h2>
              </div>
              <p className="mb-4">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
              <div className="flex justify-center space-x-6 rtl:space-x-reverse">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    <WhatsAppIcon />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                    <FacebookIcon />
                </a>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default App;
