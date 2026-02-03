import { useState } from "react";
import { motion } from "motion/react";
import { LuEllipsis } from "react-icons/lu";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-10 h-10">
        {/* WRAPPER (layout + movement) */}
        <motion.div
          animate={{
            width: open ? 160 : 40,
            height: open ? 152 : 40,
            y: open ? -30 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.8,
          }}
          className="absolute bottom-0 left-0"
        >
          {/* MASK (this is the secret) */}
          <motion.div
            animate={{
              borderRadius: open ? 12 : 20,
            }}
            transition={{
              // delay radius change so eye never sees the snap
              duration: 0.001,
              delay: open ? 0.1 : 0,
            }}
            className="w-full h-full bg-white overflow-hidden shadow-lg ring-1 ring-black/5"
          >
            {!open ? (
              <button
                onClick={() => setOpen(true)}
                className="w-full h-full flex items-center justify-center"
              >
                <LuEllipsis className="text-neutral-500" />
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 0.15
                }}
                className="p-1"
                onClick={() => setOpen(false)}
              >
                {["Edit", "Copy", "Share", "Archive"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-neutral-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
