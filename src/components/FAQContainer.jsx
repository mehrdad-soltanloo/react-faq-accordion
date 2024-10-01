import questions from "../data";
import FAQItem from "./FAQItem";

const FAQContainer = () => {
  return (
    <section className="container">
      <h1>React FAQ</h1>
      {questions.map((item) => {
        return <FAQItem key={item.id} {...item} />;
      })}
    </section>
  );
};
export default FAQContainer;
