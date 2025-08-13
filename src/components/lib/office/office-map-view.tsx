"use client";

import { type FunctionComponent, type JSX, useState } from "react";

const OfficeMapView: FunctionComponent = (): JSX.Element => {
  const [isMapLoading, setIsMapLoading] = useState<boolean>(true);

  return (
    <div className="lg-xl-2:w-1/2 h-[200px] xs:h-[300px] xs-2:h-[400px] xl-2xl:h-[450px] relative">
      {isMapLoading && (
        <div className="absolute w-full h-full inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="w-12 h-12 border-4 border-primary-text border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-primary-text">
            Loading Map...
          </p>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29190.78128768677!2d90.42975419999999!3d23.8595427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5de3830bacb%3A0xc6f002ab36d783c3!2sDakshin%20Khan%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1754768690111!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute w-full h-full"
        onLoad={() => setIsMapLoading(false)}
      ></iframe>
    </div>
  );
};

export default OfficeMapView;
