const SectionHeader = ({data}) => {
  const { section_indicator, heading, desc } = data;

  return (
    <>
      <div className={`testmonialWrapper paddingWrapper`}>
        <style jsx>
          {`
            .sectionHeader span {
              font-size: 1.6rem;
            }
            .sectionHeader h1 {
              font-size: 3.6rem;
              margin-top: 20px;
            }
            .sectionHeader p {
              font-size: 1.6rem;
              margin: 30px auto;
              opacity: 0.7;
            }

            @media only screen and (max-width: 992px) {
              .sectionHeader > h1 {
                font-size: 3rem;
              }
            }
          `}
        </style>
        <div className={`sectionHeader text-center`}>
          {section_indicator && (
            <span className="section__indicator mb-2">{section_indicator}</span>
          )}

          {heading && <h1 className="heading mb-2">{heading}</h1>}

          {desc && <p className="p_text mb-5">{desc}</p>}
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
