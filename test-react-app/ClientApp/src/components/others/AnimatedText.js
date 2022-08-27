import { motion } from "framer-motion";


function AnimatedText(props) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: props.duration}}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: props.changeX }
        }}
      >
        {props.children}
      </motion.div>
    );
  }

  export default AnimatedText