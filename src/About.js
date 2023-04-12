import React from "react";

function About({
  setIsCartVisible,
  setIsCardsVisible,
  setShowCategories,
  showAbout,
  setShowAbout,
}) {
  return (
    <div className="aboutPage">
      {showAbout && (
<div>
          <div
            className="aboutContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h1
              className="aboutPara"
              style={{
                fontFamily: "Gill Sans",
                fontSize: "3.5em",
                color: "rgba(51, 39, 39, 0.744)",
                fontWeight: "bolder",
              }}
            >
              My Story
            </h1>
            <button
              className="aboutBack"
              onClick={(event) => {
                setShowAbout(false);
                setIsCardsVisible(true);
                setShowCategories(true);
                setIsCartVisible(false);
                setShowCategories("true");
              }}
            >
              Back
            </button>
          </div>

          <figure className="family">
            <img
              src={require("./images/family.png")}
              alt="Family"
              width="250em"
            />
            <figcaption>So greatful for all of these people</figcaption>
          </figure>
          <figure className="halloween">
            <img
              src={require("./images/halloween.png")}
              alt="halloween"
              width="250em"
            />
            <figcaption>Halloween is just around the corner</figcaption>
          </figure>
          <figure>
            <img
              src={require("./images/nature.png")}
              alt="Nature"
              width="250em"
            />
            <figcaption>
              “I bet a Viking got stabbed here.” - Carver Thoughts
            </figcaption>
          </figure>

          <p id="aboutP">
            During the recent pandemic, I went to the Bridger Forge shop with my
            friend ,Colton, to learn how to make knives, he let me use his shop
            to make and sell my own creations. And without him my life would not
            be what it is today. Colton decided to make me his apprentice, and
            ever since then I have continued to make progress with his
            teachings. We plan on expanding our businesses and our names in this
            trade.
          </p>

          <p id="aboutP">
            At a young age, I fell in love with medieval fantasy. Especially
            with the swords. There was always something about blades that
            attracted me. I loved the artistry behind it. Every blade has a
            symbolic meaning, as if they are sacred. For example in Europe, the
            English swords were designed to resemble the cathedral. With my love
            for blades, and sheer luck. I became lucky enough to find this
            passion.
          </p>
          <p id="aboutP">
            Ever since I was 13 I decided to start lifting weights. Throughout
            the years of strict eating, building up my mental fortitude and
            determination. I eventually decided to compete in bodybuilding
            shows. My third show, I met Colton Arias. Luck tends to follow hard
            work. And I was definitely lucky to meet Colton. I had just bought
            my own forge back home a few weeks before that show. Got talking
            backstage with him about bladesmithing and telling him that. He
            mentioned that he was going on Forged In Fire in a few weeks. He
            ended up winning his first champion title. We kept in touch
            throughout that year, we both transitioned into college. We got
            chatting about bodybuilding and how I wanted him to join my team
            Awaken the Warrior. He ended up driving three hours to where I was
            going to college at the time. We found out that we have way to much
            in common and became best friends, if not brothers. Later went up to
            my coaches gym and he eventually joined the team. As the months went
            on I took a few trips up to Lincoln to hang out with him. He made me
            a few knives and showed me how.
          </p>

          <p id="aboutLastParagraph">
            Coronavirus hit the U.S. and the world stopped in place. During the
            lockdown I was doing online classes. I knew college wasn’t for me.
            Too many people go without knowing what they want, everyone ends up
            getting a safe job and they waste their lives at it. They never
            really find their passion. That wasn’t my path. I was already taking
            the unconventional route with trying to make it as a pro bodybuilder
            and having my name rise through the fitness industry. Flustered with
            myself and the direction I want my life to go. I decided to leave
            college, move to Lincoln and get a job. I went to the Bridger Forge
            shop with Colton to learn how to make knives, he let me use his shop
            to make and sell my own creations. And without him my life would not
            be what it is today. Colton decided to make me his apprentice, and
            ever since then I have continued to make progress with his
            teachings. We plan on expanding our businesses and our names in this
            trade.
          </p>
        </div>
      )}
    </div>
  );
}

export default About;
