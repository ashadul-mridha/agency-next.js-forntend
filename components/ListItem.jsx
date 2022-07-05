/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ListItem = ({content}) => {
    return (
      <>
        <li className="list-item d-flex justify-content-start align-items-center">
          <style jsx>{`
            .list-item {
              margin: 10px 0px;
            }
            .p_text {
              font-size: 1.6rem;
              margin: 0px 0px 0px 10px;
            }
          `}</style>
          <img
            src="/images/list-icon.png"
            alt="list icon"
            className="img-fluid"
          />
          <p className="p_text">{content}</p>
        </li>
      </>
    );
};

export default ListItem;