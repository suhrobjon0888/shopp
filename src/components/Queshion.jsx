import { useState } from "react";

const faqs = [
  { question: "How long does delivery take?", answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?" },
  { question: "How Does It Work?", answer: "Rersatran is a unique and mysterious concept that has intrigued many people. While not widely known, it is often associated with advanced technology, strategic thinking, and innovation. Some believe that Rersatran represents a futuristic idea, while others see it as a hidden force shaping modern developments." },
  { question: "How does your food delivery service work?", answer: "Despite the uncertainty surrounding its true meaning, Rersatran continues to spark curiosity and inspire those who seek knowledge beyond the ordinary." },
  { question: "What payment options do you accept?", answer: "Throughout history, many groundbreaking discoveries have emerged from concepts that initially seemed mysterious or unknown. Rersatran could be one such idea, holding the potential to change the way we perceive and interact with the world. It may be associated with artificial intelligence, cybersecurity, programming, or even scientific research." },
  { question: "Do you offer discounts or promotions?", answer: "Yes! Check our website for ongoing deals and offers." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto p-4">
      <div className="flex justify-center p-2">
          <p className="text-[30px] md:text-[35px] lg:text-[45px] font-bold text-[#323142] text-center">
            Frequently Asked <span className="text-[#6C5FBC]">Questions</span>
          </p>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between w-full text-left p-4 md:p-6 text-[#323142] font-[500] text-[18px] md:text-[22px] lg:text-[24px] font-[poppins]"
          >
            {faq.question}
            <span className="text-[#fff] h-[25px] w-[25px] md:h-[30px] md:w-[30px] bg-[#000000] flex justify-center items-center rounded-[50%]">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-700 text-[14px] md:text-[16px] lg:text-[18px]">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}