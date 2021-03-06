import { useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <style>{`
        .accordion_item {
            border-top: 1px solid #9f9f9f;
        }

        .button {
            font-size: 16px;
            background-color: #008593;
            color: #fff;
            text-align: left;
            font-weight: 700;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 18px 8px;
            cursor: pointer;
            border: none;
        }

        .control {
            font-size: 20px;
        }

        .answer {
            background-color: #f7f7f7;
            padding: 20px;
        }

        .accordion_item.active .button {
            background-color: #105057;
        }
        .answer_wrapper {
            height: 0;
            overflow: hidden;
            transition: height ease 0.2s;
        }
        `}</style>
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
