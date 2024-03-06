import { TestimonyCarousel } from "../Home";
import banner_about from "../../assets/banner-about.jpg";

export const AboutUs = () => {
  return (
    <div className="text-center text-lg px-10">
      <div>
        <li className="flex items-center justify-center sm:text-lg">
          <svg
            className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Our Strength
        </li>
      </div>
      <div className="mb-12">
        <h2>
          Enjoy The Best {""}
          <span>
            Food Restaurant.
            <img src="/twirl-layered.svg" alt="" width={30} height={30} />
          </span>
        </h2>
        <p >
          Indulge in a world of flavors meticulously curated by our culinary
          experts. <br /> From farm-fresh ingredients to exotic spices, each
          dish tells a story of quality. <br /> Our chefs draw inspiration from
          global culinary traditions.
        </p>
      </div>
      <div className="h-[510px]">
        <img
          src={banner_about}
          alt=""
          className="min-h-96 object-cover rounded-lg"
        />
        <div className="bg-white dark:bg-[#2a2a2abf] pt-8 px-4 md:px-8 pb-20 rounded-lg -translate-y-[60%] max-w-sm sm:max-w-xl  md:max-w-2xl lg:max-w-4xl mx-auto shadow-lg font-medium">
          <p className="text-left mx-auto  ">
            At Recipa, we believe that food should never compromise on taste or
            quality. <br />
            That's why we use only the freshest ingredients, locally-sourced
            whenever possible, to create our mouth-watering menu items.
          </p>
        </div>
      </div>
      <section className="dark:pt-0 pb-20 dark:pb-28 dark:shadow-none">
        <li className="flex items-center justify-center sm:text-lg">
          <svg
            className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Testimonials
        </li>
        <h2>
          Stories from {""}
          <span>
            our clients.
            <img src="/twirl-layered.svg" alt="" width={30} height={30} />
          </span>
        </h2>
        <TestimonyCarousel />
      </section>
    </div>
  );
};
//   style={{ background: `url(${banner_about})` }}
//         className="min-h-[20rem] bg-cover bg-no-repeat bg-left"
