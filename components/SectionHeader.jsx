const SectionHeader = ({data}) => {
  const { section_indicator, heading, desc } = data;

  return (
    <>
      <div className={`testmonialWrapper paddingWrapper`}>
        <style jsx>
          {`
            .sectionHeader span {
              font-size: 16px;
            }
            .sectionHeader h1 {
              font-size: 36px;
              margin-top: 20px;
            }
            .sectionHeader p {
              font-size: 16px;
              margin: 30px auto;
              opacity: 0.7;
            }

            @media only screen and (max-width: 992px) {
              .sectionHeader > h1 {
                font-size: 30px;
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
