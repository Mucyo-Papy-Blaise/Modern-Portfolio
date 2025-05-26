import {motion} from 'framer-motion'

interface NotificationProps {
  message: string;
  type: "success" | "error";
}

const Notification = ({ message, type }: NotificationProps) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }} 
      exit={{ x: 300, opacity: 0 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`p-4 rounded-md text-white absolute top-44 right-0 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </motion.div>
  );
};

export default Notification;
