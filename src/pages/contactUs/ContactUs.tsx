import { usePageTitle } from "@/hooks";
import { ContactForm } from "./ContactForm";
import { MapLocation } from "./MapLocation";

export const ContactUs = () => {
  usePageTitle("Contact Us")
  return (
    <div className="text-lg max-w-[90%] mx-auto">
      <section className="text-center dark:pt-0 pb-10">
        <h2>
          Get in {""}
          <span>
            Touch.{" "}
            <img
              className="mx-auto"
              src="/twirl-layered.svg"
              alt=""
              width={30}
              height={30}
            />
          </span>{" "}
          {""}
        </h2>
        <p>
          Contact us today to discuss your company's employee wellbeing
          requirements. <br /> Please contact us by phone, email, or fill out
          the contact form, and we will get back to you.
        </p>
      </section>
      <section className="grid auto-fit gap-10 text-center dark:shadow-none  dark:pt-0 ">
        <div className="shadow-lg p-3 rounded-xl pb-5 border border-green600">
          <img className="mx-auto" src="/address-svgrepo-com.svg" alt="" />
          <h3 className="text-green">Address</h3>
          <p>Bostro 22, Labone Crescent, Accra, Ghana</p>
        </div>
        <div className="shadow-lg p-3 rounded-xl pb-5 border border-green600">
          <img
            className="mx-auto"
            src="/social-contact-svgrepo-com.svg"
            alt=""
          />
          <h3 className="text-green">Get in touch</h3>
          <p>
            Mobile:{" "}
            <strong>
              <a href="tel:+ 233 552199577">233 552199577</a>
            </strong>
          </p>
          <p>
            E-mail:
            <strong>
              <a href="mailto:recipa@gmail.com">recipa@gmail.com</a>
            </strong>
          </p>
        </div>
        <div className="shadow-lg p-3 rounded-xl pb-5 border border-green600">
          <img
            className="mx-auto"
            src="/time-stopwatch-watch-svgrepo-com.svg"
            alt=""
          />
          <h3 className="text-green">Opening days</h3>
          <div className="flex justify-between border-b border-gray-400 pb-1 mb-2">
            <p>Mon - Tue </p>
            <p>09:00 am - 4:00 pm</p>
          </div>
          <div className="flex justify-between">
            <p>Wed - Thu</p>
            <p>10:00 am - 11:00 pm</p>
          </div>
        </div>
      </section>
      <section className="border border-green-700 rounded-lg p-1 dark:p-2">
        <MapLocation />
      </section>
      <div className="dark:shadow-none ">
        <h2 className="text-center">
          Send us a {""}
          <span>
            message.{" "}
            <img
              className="mx-auto"
              src="/twirl-layered.svg"
              alt=""
              width={30}
              height={30}
            />
          </span>{" "}
          {""}
        </h2>
      </div>
      <ContactForm />
    </div>
  );
};
