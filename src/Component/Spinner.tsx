import { motion } from 'framer-motion'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <motion.div
        className="w-10 h-10 border-4 border-t-[#ffc86b] border-[#39393952] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  )
}

export default Spinner;
