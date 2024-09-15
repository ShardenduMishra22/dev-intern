interface TestimonialProps {
  personName: string;
  personOccupation: string;
  text: string;
  imageUrl: string;
  logoUrl: string;
}

const Testimonial_Cmp = ({ personName, personOccupation, text, imageUrl, logoUrl }: TestimonialProps) => {
  return (
    <div>
          <img className="mx-auto h-16" src={logoUrl} alt="Company Logo" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>{text}</p>
            </blockquote>
            <figcaption className="mt-10">
              <img className="mx-auto h-12 w-12 rounded-full" src={imageUrl} alt="Person" />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{personName}</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600">{personOccupation}</div>
              </div>
            </figcaption>
          </figure> 
    </div>
  );
};

export default Testimonial_Cmp;
