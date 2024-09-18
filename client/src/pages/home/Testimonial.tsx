import Testimonial_Cmp from "./Testimonial_Cmp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    personName: "SomeOne",
    personOccupation: "Some Occupation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logoUrl: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  },
  {
    personName: "SomeOne",
    personOccupation: "Some Occupation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logoUrl: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  },
  {
    personName: "SomeOne",
    personOccupation: "Some Occupation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logoUrl: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  },
  {
    personName: "SomeOne",
    personOccupation: "Some Occupation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logoUrl: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  },
];

const Testimonial = () => {
  return (
    <div>
        <section className="rounded-lg relative isolate overflow-hidden bg-slate-400 px-6 py-16 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-300 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Carousel plugins={[Autoplay({ delay: 8000 })]} className="relative  w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Testimonial_Cmp
                personName={testimonial.personName}
                personOccupation={testimonial.personOccupation}
                text={testimonial.text}
                imageUrl={testimonial.imageUrl}
                logoUrl={testimonial.logoUrl}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2  transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 transform -translate-y-1/2" />
        </Carousel>
        </div>
        </section>
    </div>
  );
};

export default Testimonial;
