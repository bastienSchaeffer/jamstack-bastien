import { useEffect, useState } from "react";
import { throttle } from "lodash";

const useStickMode = () => {
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;
    setShouldShowShadow(currentScrollTop > 20);
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, []);

  return [shouldShowShadow];
};

export default useStickMode;
