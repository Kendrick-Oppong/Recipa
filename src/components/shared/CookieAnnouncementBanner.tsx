import { Cookie } from "lucide-react";
import { ButtonLink } from "./ButtonLink";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { getIsAuthenticated } from "@/redux/userAuthenticatedSlice";

export const CookieAnnouncementBanner = () => {
  const [removeCookieBanner, setRemoveCookieBanner] = useState(false);
  const isLoggedIn = useAppSelector(getIsAuthenticated);
  console.log(isLoggedIn);
  return (
    !isLoggedIn &&
    !removeCookieBanner && (
      <div className="fixed bottom-0 w-full z-[1000] text-lg">
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-5 py-4 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>

          <div className="w-full dark:text-background">
            <h3 className=" flex items-center justify-center gap-2">
              THIS WEBSITE USES COOKIES{" "}
              <Cookie color="#d28c14" className="hidden sm:inline-grid" />
            </h3>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 w-full">
              <p className=" leading-6 ">
                We use cookies to personalize your experience and improve our
                website. <br /> By continuing to use our site, you consent to
                our use of cookies.
              </p>
              <ButtonLink
                onClick={() => setRemoveCookieBanner((prev) => !prev)}
                className="w-full md:w-auto mx-auto"
              >
                I understand
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
