"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useMemo, useState } from "react";
import { Wand2 } from "lucide-react";
import { usePathname } from "next/navigation";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const magicIconVariants = {
  initial: {
    opacity: 0,
    scale: 0.6,
    filter: "drop-shadow(0 0 0px transparent)",
  },
  animate: {
    opacity: 1,
    scale: [0.6, 1.2, 1],
    filter: [
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 12px #8B5CF6)",
      "drop-shadow(0 0 0px transparent)",
    ],
    transition: { duration: 0.6, ease: "easeOut" },
  },
  vanish: {
    opacity: [1, 0],
    scale: [1, 0.6],
    filter: [
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 10px #8B5CF6)",
      "drop-shadow(0 0 0px transparent)",
    ],
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const sparkleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 1, 0],
    scale: [0, 2, 0],
    transition: { duration: 0.7, ease: "easeOut" },
  },
  off: {
    opacity: [0, 1, 0],
    scale: [0, 1.5, 0],
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = resolve;
  });

export default function TechSkillsCard({ techGroups }) {
  const pathname = usePathname(); // 📍 detecta la ruta actual
  const [hovered, setHovered] = useState(null);
  const [activeTab, setActiveTab] = useState(techGroups[0].title);
  const [magicMode, setMagicMode] = useState(false);
  const [modeKey, setModeKey] = useState(0);

  // 🧭 Establecer el modo por defecto según la ruta
  useEffect(() => {
    if (pathname === "/skills") {
      setMagicMode(true);
    } else {
      setMagicMode(false);
    }
  }, [pathname]);

  const skillIconUrls = useMemo(() => {
    const urls = [];
    for (const group of techGroups) {
      for (const sub of group.subcategories) {
        for (const tech of sub.techs) {
          if (!tech.customIcon) {
            urls.push(`https://skillicons.dev/icons?i=${tech.slug}`);
          }
        }
      }
    }
    return urls;
  }, [techGroups]);

  useEffect(() => {
    Promise.all(skillIconUrls.map(preloadImage)).catch(() => {});
  }, [skillIconUrls]);

  const toggleMagic = () => {
    setModeKey((prev) => prev + 1);
    setMagicMode((prev) => !prev);
  };

  return (
    <Card className="relative bg-card/90 border border-white/10 shadow-xl overflow-hidden backdrop-blur-sm rounded-2xl m-4 lg:m-0 p-8 md:p-10 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
      <motion.button
        onClick={toggleMagic}
        className="absolute top-4 right-4 text-white rounded-full p-2 hover:bg-white/10"
        whileTap={{ scale: 0.9 }}
        whileHover={{
          scale: [1, 1.15, 1],
          transition: { duration: 0.6 },
        }}
      >
        <Wand2 size={20} />
      </motion.button>

      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-6 flex flex-wrap justify-start gap-3 bg-transparent p-0">
          {techGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <TabsTrigger
                value={group.title}
                className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all
                  ${
                    activeTab === group.title
                      ? "bg-primary text-white shadow-md"
                      : "text-foreground hover:text-primary"
                  }`}
              >
                {group.title}
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>

        {techGroups.map((group) => (
          <TabsContent key={group.title} value={group.title}>
            <AnimatePresence mode="wait">
              {activeTab === group.title && (
                <motion.div
                  key={group.title + modeKey}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="flex flex-col lg:flex-row justify-between">
                    {group.subcategories.map((subcategory, idx) => (
                      <div key={idx} className="flex-1 min-w-[250px]">
                        {subcategory.subtitle && (
                          <h5 className="text-xs font-semibold text-muted-foreground mb-3 tracking-wider uppercase">
                            {subcategory.subtitle}
                          </h5>
                        )}
                        <div className="flex flex-wrap gap-4">
                          {subcategory.techs.map((tech) => {
                            const Icon = tech.icon;
                            const skillIconUrl = tech.customIcon
                              ? tech.customIcon
                              : `https://skillicons.dev/icons?i=${tech.slug}`;

                            return (
                              <motion.div
                                key={tech.name}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setHovered(tech.name)}
                                onMouseLeave={() => setHovered(null)}
                                whileHover={{ scale: 1.15 }}
                                transition={{ type: "spring", stiffness: 200 }}
                              >
                                <div className="relative overflow-hidden rounded-xl border-2 border-blue-500/30 hover:border-primary bg-background/80 backdrop-blur w-20 h-20 flex items-center justify-center transition-all duration-300 shadow-sm">
                                  {!magicMode ? (
                                    <motion.div
                                      key={`normal-${tech.name}-${modeKey}`}
                                      variants={magicIconVariants}
                                      initial="vanish"
                                      animate="animate"
                                      exit="vanish"
                                    >
                                      <Icon size={36} className="relative z-10" />
                                    </motion.div>
                                  ) : (
                                    <>
                                      <motion.img
                                        key={`magic-${tech.name}-${modeKey}`}
                                        src={skillIconUrl}
                                        alt={tech.name}
                                        className={`object-contain relative z-10 ${
                                          tech.name === "Warp" || tech.name === "DataGrip"
                                            ? "w-14 h-14"
                                            : "w-12 h-12"
                                        }`}
                                        variants={magicIconVariants}
                                        initial="vanish"
                                        animate="animate"
                                        exit="vanish"
                                      />
                                      <motion.div
                                        className="absolute rounded-full bg-primary/50 blur-lg w-10 h-10 z-0"
                                        variants={
                                          magicMode
                                            ? sparkleVariants
                                            : sparkleVariants.off
                                        }
                                        initial="hidden"
                                        animate={magicMode ? "visible" : "off"}
                                      />
                                    </>
                                  )}
                                </div>

                                <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
                                  <span
                                    className="relative z-10 text-[12px] font-semibold text-white
                                               opacity-0 translate-y-[2px]
                                               transition-all duration-300
                                               group-hover:opacity-100 group-hover:translate-y-0
                                               whitespace-nowrap"
                                  >
                                    {tech.name}
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}
