import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const letters = text.split("");

  return (
    <div className="flex space-x-1 text-[18px] font-medium m-[10px]">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div>

    </div>
  );
}
