import { FC } from 'react';
import Image from 'next/image';

const ServiceCard: FC<{
  title: string;
  icon: string;
  color: string;
  description?: string;
  buttonText?: string;
}> = ({ title, icon, color, description, buttonText }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 ${color === 'blue' ? 'bg-blue-500 text-white' : ''}`}>
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg ${color === 'blue' ? 'bg-blue-400' : 'bg-blue-100'}`}>
          <Image src={icon} alt={`${title} Icon`} width={24} height={24} />
        </div>
        <h3 className="ml-3 font-medium text-lg">{title}</h3>
      </div>
      
      {description && (
        <div className="mb-4">
          <p className="text-sm opacity-80">{description}</p>
        </div>
      )}
      
      {buttonText && (
        <button className={`mt-2 px-4 py-2 rounded-md text-sm font-medium ${
          color === 'blue' 
            ? 'bg-blue-400 text-white hover:bg-blue-300' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        } transition duration-300`}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

const ServiceCards: FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Opening Hours"
            icon="https://png.pngtree.com/png-vector/20250421/ourmid/pngtree-cartoon-doctor-with-clipboard-png-image_16070074.png"
            color="blue"
            description="Monday - Friday: 8:00AM - 10:00PM, Saturday - Sunday: 9:00AM - 8:00PM, Information Nederland BV"
          />
          
          <ServiceCard
            title="Appointment"
            icon="/images/calendar-icon.png"
            color="white"
            description="Make an appointment with one of our professional doctors in your preferred time slot. We're available for you."
            buttonText="Schedule"
          />
          
          <ServiceCard
            title="Find Doctors"
            icon="/images/doctor-icon.png"
            color="white"
            description="Find experienced doctors across all medical disciplines to fit your health needs and requirements."
            buttonText="Find Now"
          />
          
          <ServiceCard
            title="Find Locations"
            icon="/images/location-icon.png"
            color="white"
            description="Multiple locations available across the city for your convenience. Find the closest center to you."
            buttonText="Locations"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;