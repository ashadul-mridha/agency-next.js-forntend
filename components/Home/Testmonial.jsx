import SectionHeader from "../SectionHeader";
import GridSlider from "../Slider/GridSlider";

const Testmonial = () => {
  const data = {
    section_indicator: "Testimonial",
    heading: "What our member are saying",
    desc: "Become a Crypto God Community Member and get access to the best trading information",
  };

  const feedbackList = [
    {
      username: "pap***g2423",
      location: "USA",
      img: "testmonialUser.jfif",
      says: `“Yo! Thanks a lot for everything youve helped me with so far.
                  Love all the personalised voice messages as well. Theyve been
                  so good and helpful. Legend.”`,
    },
    {
      username: "sou***g5424",
      location: "UK",
      img: "testmonialUser.jfif",
      says: `I'm only 17 and this was legit the best decision of my life lol, Im
          going to be honest i was so hestiant with this but i just said F**k it
          and i did it. I LOVE IT`,
    },
    {
      username: "asad**23",
      location: "Bangladesh",
      img: "testmonialUser.jfif",
      says: `Been in the group for just over 2 months now, its just constant gains
          lmfao. Love it bro keep going. Thanks a lot for everything youve helped me with so far.`,
    },
    {
      username: "has**na",
      location: "India",
      img: "testmonialUser.jfif",
      says: `“Yo! Thanks a lot for everything youve helped me with so far.
                  Love all the personalised voice messages as well. Theyve been
                  so good and helpful. Legend.”`,
    },
    {
      username: "bcv***w932",
      location: "Pakistan",
      img: "testmonialUser.jfif",
      says: `Bruh i was so lost with crypto, just wanted to write this review
          because how insane this group actually is. Im up over $3k so far man.
          Forever staying bro`,
    },
    {
      username: "zdd**jds33",
      location: "FL",
      img: "testmonialUser.jfif",
      says: `Thank you so much for your personal advice on Crypto this has helped
          me in so many ways i had to leave this review man, keep it up.
          Unbelievable.`,
    },
    {
      username: "gic***fds8",
      location: "Africa",
      img: "testmonialUser.jfif",
      says: `Been in the group for just over 2 months now, its just constant gains
          lmfao. Love it bro keep going. Thanks a lot for everything youve helped me with so far.`,
    },
  ];

  return (
    <>
      <div id="testmonial">
        <SectionHeader data={data} />
        <GridSlider feedbackList={feedbackList} />
      </div>
    </>
  );
};

export default Testmonial;
