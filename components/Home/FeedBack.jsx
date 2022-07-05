import SectionHeader from "../SectionHeader";
import GridSlider from "../Slider/GridSlider";

const FeedBack = () => {
  const data = {
    section_indicator: "Feedback",
    heading: "What our client are saying"
  };

  const feedbackList = [
    {
      username: "Sani",
      location: "Lisbon, Portugal",
      img: "user2.avif",
      says: `“Yo! Thanks a lot for everything youve helped me with so far.
                  Love all the personalised voice messages as well. Theyve been
                  so good and helpful. Legend.”`,
    },
    {
      username: "Sourav",
      location: "Norway",
      img: "user2.avif",
      says: `I'm only 17 and this was legit the best decision of my life lol, Im
          going to be honest i was so hestiant with this but i just said F**k it
          and i did it. I LOVE IT`,
    },
    {
      username: "Asraful",
      location: "Srilanka",
      img: "user2.avif",
      says: `Been in the group for just over 2 months now, its just constant gains
          lmfao. Love it bro keep going. Thanks a lot for everything youve helped me with so far.`,
    },
    {
      username: "Honey",
      location: "Madrid,Spain",
      img: "user2.avif",
      says: `“Yo! Thanks a lot for everything youve helped me with so far.
                  Love all the personalised voice messages as well. Theyve been
                  so good and helpful. Legend.”`,
    },
    {
      username: "Tazbin",
      location: "Pakistan",
      img: "user2.avif",
      says: `Bruh i was so lost with crypto, just wanted to write this review
          because how insane this group actually is. Im up over $3k so far man.
          Forever staying bro`,
    },
    {
      username: "Zarif",
      location: "Riyad,KSA",
      img: "user2.avif",
      says: `Thank you so much for your personal advice on Crypto this has helped
          me in so many ways i had to leave this review man, keep it up.
          Unbelievable.`,
    },
    {
      username: "Ahad",
      location: "South Africa",
      img: "user2.avif",
      says: `Been in the group for just over 2 months now, its just constant gains
          lmfao. Love it bro keep going. Thanks a lot for everything youve helped me with so far.`,
    },
  ];

  return (
    <>
      <SectionHeader data={data} />
      <GridSlider feedbackList={feedbackList} />
    </>
  );
};

export default FeedBack;
