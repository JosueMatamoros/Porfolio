"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const tabVariants = {
  initial: { scale: 1 },
  active: { scale: 1.05, transition: { duration: 0.2 } },
  hover: { scale: 1.1 },
};

export default function TechSkillsCard({ techGroups }) {
  const [hovered, setHovered] = useState(null);
  const [activeTab, setActiveTab] = useState(techGroups[0].title);

  return (
    <Card className="bg-card/90 border border-white/10 shadow-xl overflow-hidden backdrop-blur-sm rounded-2xl m-4 lg:m-0 p-8 md:p-10 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-6 flex flex-wrap justify-start gap-3 bg-transparent p-0">
          {techGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={tabVariants}
              initial="initial"
              animate={activeTab === group.title ? "active" : "initial"}
              whileHover="hover"
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
                  key={group.title}
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
                            return (
                              <motion.div
                                key={tech.name}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setHovered(tech.name)}
                                onMouseLeave={() => setHovered(null)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                              >
                                <div
                                  className={`relative overflow-hidden rounded-xl border-2 border-blue-500/30 hover:border-primary
                                    bg-background/80 backdrop-blur w-20 h-20 flex items-center justify-center
                                    transition-all duration-300 shadow-sm`}
                                >
                                  <Icon size={36} className="relative z-10" />
                                  <div
                                    className={`absolute bottom-0 left-0 right-0 h-0 group-hover:h-4
                                      bg-primary transition-all duration-300 ease-in-out rounded-b-lg`}
                                  />
                                </div>
                                <div
                                  className={`absolute inset-x-0 bottom-0 text-[12px] font-semibold text-center
                                    text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1
                                    transition-all duration-300 pointer-events-none`}
                                >
                                  {tech.name}
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
