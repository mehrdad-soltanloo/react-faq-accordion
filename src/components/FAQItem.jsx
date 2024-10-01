import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <article className="question">
      <header>
        <h5>{question}</h5>
        <button onClick={toggleAnswer} aria-expanded={isOpen}>
          {isOpen ? (
            <FaMinusCircle className="question-btn" />
          ) : (
            <FaPlusCircle className="question-btn" />
          )}
        </button>
      </header>
      {isOpen && <p>{answer}</p>}
    </article>
  );
};
export default FAQItem;
