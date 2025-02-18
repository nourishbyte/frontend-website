


    import { MapPin, Phone, Mail } from "lucide-react";

    const Contact = () => {
      return (
        <div className="w-full min-h-[calc(100vh-300px)] flex items-center justify-center p-6 sm:p-2 bg-gray-100">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-white shadow-lg rounded-2xl border border-gray-300 p-4 sm:p-1">
            
            {/* Left Section - Map */}
            <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.778428284841!2d77.32123683767387!3d28.573089274973555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e83e5561d%3A0x29acd180d32fb024!2sAtta%20Market%2C%20Sector%2027%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1739856804183!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
    
            {/* Right Section - Contact Details */}
            <div className="flex flex-col justify-center text-gray-700 space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-amber-800">Contact</h2>
    
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-800 w-6 h-6 flex-shrink-0" />
                <p className="text-lg leading-snug">
                Shop no. 7 first floor prem palace sector 27 Noida
                </p>
              </div>
    
              {/* Phone Numbers */}
              <div className="flex items-start space-x-4">
                <Phone className="text-amber-800 w-6 h-6 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+918695970711" className="text-lg hover:text-amber-600 transition">
                    +91 86959 70711
                  </a>
                  <a href="tel:+919650245172" className="text-lg hover:text-amber-600 transition">
                    +91 96502 45172
                  </a>
                </div>
              </div>
    
              {/* Emails */}
              <div className="flex items-start space-x-4">
                <Mail className="text-amber-800 w-6 h-6 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:anshul@nourishbyte.com" className="text-lg hover:text-amber-600 transition">
                    anshul@nourishbyte.com
                  </a>
                  <a href="mailto:bhupinder.yadav@nourishbyte.com" className="text-lg hover:text-amber-600 transition">
                    bhupinder.yadav@nourishbyte.com
                  </a>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      );
    };
    
    export default Contact;
    
