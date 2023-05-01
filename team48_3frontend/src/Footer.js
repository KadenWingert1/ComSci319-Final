import React from "react";

function Footer({
  setIsCartVisible,
  setIsCardsVisible,
  setShowCategories,
  setShowAbout,
  setShowCredits,
  showFooter
}) {
  //Causes the footer to appear when you scoll up, and disappear otherwise
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let footer = document.querySelector(".footer");
    if (footer) {
      if (prevScrollPos > currentScrollPos) {
        // User is scrolling up, show hidden footer
        footer.classList.remove("hidden");
      } else {
        // User is scrolling down, hide footer
        footer.classList.add("hidden");
      }
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <>
      {showFooter && (
        <footer className="footer">
          <div className="foot">
            <div className="flex-container">
              <div className="home link">
                <a href="#top">Back to top</a>
              </div>
              <div className="about link">
                <a
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    setShowAbout(true);
                    setIsCardsVisible(false);
                    setShowCategories(false);
                    setIsCartVisible(false);
                    setShowCredits(false);
                  }}
                >
                  About Us
                </a>
              </div>
              <div className="credits link">
                <a
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    setShowCredits(true);
                    setIsCardsVisible(false);
                    setShowCategories(false);
                    setIsCartVisible(false);
                    setShowAbout(false);
                  }}
                >
                  Credits
                </a>
              </div>
              <div className="email link">
                <a href="mailto:carvergfit@gmail.com">
                  <img
                    src={require("./images/emailBlackAndWhite.png")}
                    alt="Email"
                    width="40em"
                  />
                </a>
              </div>
              <div className="insta link">
                <a href="https://www.instagram.com/nordland_forge/">
                  <img
                    src={require("./images/instagram.jfif")}
                    alt="Instagram Logo"
                    width="40em"
                  />
                </a>
              </div>
              <div className="tiktok link">
                <a href="https://www.tiktok.com/@nordlandforge?_t=8a7j7ED2n4o&_r=1">
                  <img
                    src={require("./images/tiktok.png")}
                    alt="TikTok"
                    width="40em"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
