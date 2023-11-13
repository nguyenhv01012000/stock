import { useEffect, useRef, useState } from "react";

export default function TOC(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [currentHeadingID, setCurrentHeadingID] = useState("");
  const [levelHeading, setLevelHeading] = useState([]);


  const listWrapperRef = useRef(null);

  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   const closeListWrapper = (e) => {
  //     if (!wrapperRef.current?.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", closeListWrapper, true);
  //   return () => {
  //     document.removeEventListener("click", closeListWrapper, true);
  //   };
  // }, []);

  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    let headingNodeList = [];
    if (document.querySelectorAll(props.selector)) {
      headingNodeList = document
        .querySelectorAll(props.selector)[1]
        .querySelectorAll("h2,h3,h4,h5,h6");
    }

    if (headingNodeList.length) {
      const headingArray = Array.from(headingNodeList);
      headingArray.forEach((el) => {
        el.dataset.id = Math.round(Math.random() * 100000).toString();
      });
      let minHeading = [];
      headingArray.map((heading) => {
        const tagLevel = heading.tagName.match(/(\d+)/)?.[0] || "1";
        minHeading.push(Number(tagLevel))
      });
      minHeading = [...new Set(minHeading)]
      minHeading.sort();
      setLevelHeading(minHeading)
      setHeadings(headingArray);
    }
  }, [props.data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setCurrentHeadingID((entry.target).dataset.id);
          }
        });
      },
      {
        rootMargin: "0% 0% -60% 0%",
        threshold: 1,
      }
    );

    if (headings.length) {
      headings.forEach((s) => {
        observer.observe(s);
      });
    }

    return () => {
      return observer.disconnect();
    };
  }, [headings.length]);

  useEffect(() => {
    const element = listWrapperRef.current?.querySelector(
      'button[data-id="' + currentHeadingID + '"]'
    );

    if (currentHeadingID && element) {
      listWrapperRef.current?.scrollTo({
        top: (element).offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentHeadingID]);

  return (
    <div id="ez-toc-container" className="ez-toc-v2_0_57_1 ez-toc-wrap-center counter-hierarchy ez-toc-counter ez-toc-custom ez-toc-container-direction" style={{ width: "100%", fontSize: "larger", fontFamily: "Roboto, sans-serif" }} ref={wrapperRef}>
      <div className="ez-toc-title-container">
        <p className="ez-toc-title">Mục lục</p>
        <span className="ez-toc-title-toggle" >
          <a className="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle ez-toc-loaded" aria-label="Toggle Table of Content" role="button">
            <label htmlFor="item-655224da9f4f9"><span className><span style={{ display: 'none' }}>Toggle</span>
              <span onClick={() => setIsOpen(!isOpen)} className="ez-toc-icon-toggle-span"><svg style={{ fill: '#000000', color: '#000000' }} xmlns="http://www.w3.org/2000/svg" className="list-377408" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z" fill="currentColor" />
              </svg><svg style={{ fill: '#000000', color: '#000000' }} className="arrow-unsorted-368013" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny">
                  <path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z">
                  </path>
                </svg></span></span></label><input aria-label="Toggle" type="checkbox" id="item-655224da9f4f9" /></a></span>
      </div>
      <nav>
        {isOpen &&
          <ul className="ez-toc-list ez-toc-list-level-1 " ref={listWrapperRef}>
            <li className="ez-toc-page-1 ez-toc-heading-level-1">
              {headings.map((heading) => {
                const tagLevel = heading.tagName.match(/(\d+)/)?.[0] || "1";
                return (<div>

                  {
                    levelHeading.length > 0 && tagLevel == levelHeading[0].toString() && (<p><a className="ez-toc-link ez-toc-heading-1" title={heading.innerHTML}
                      onClick={() => {
                        window.scrollTo({
                          top:
                            heading.getBoundingClientRect().top + window.scrollY - 100,
                          behavior: "smooth",
                        });
                      }}>
                      {heading.innerHTML}
                    </a></p>)
                  }
                  {levelHeading.length > 1 && tagLevel == levelHeading[1].toString() &&
                    <ul className="ez-toc-list-level-2">
                      <li className="ez-toc-heading-level-2" onClick={() => {
                        window.scrollTo({
                          top:
                            heading.getBoundingClientRect().top + window.scrollY - 100,
                          behavior: "smooth",
                        });
                      }} ><a className="ez-toc-link ez-toc-heading-2" title={heading.innerHTML}>
                          {heading.innerHTML}</a>
                      </li>
                    </ul>
                  }
                  {levelHeading.length > 2 && tagLevel == levelHeading[2].toString() && <ul className="ez-toc-list-level-2">
                    <li className="ez-toc-heading-level-2">
                      <ul className="ez-toc-list-level-2">
                        <li className="ez-toc-heading-level-2" onClick={() => {
                          window.scrollTo({
                            top:
                              heading.getBoundingClientRect().top + window.scrollY - 100,
                            behavior: "smooth",
                          });
                        }} ><a className="ez-toc-link ez-toc-heading-2" title={heading.innerHTML}>
                            {heading.innerHTML}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>}
                </div>
                );
              })}
            </li>
          </ul>}
      </nav>
    </div>
  );
};
