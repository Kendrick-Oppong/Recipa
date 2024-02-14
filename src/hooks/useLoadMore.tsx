// import { useEffect, useState } from "react";

// export const useLoadMore = () => {
//   const [visibleItems, setVisibleItems] = useState(6);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return { visibleItems, setVisibleItems };
// };
