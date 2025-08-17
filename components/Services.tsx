"use client";

import React from "react";
import { motion } from "motion/react";

export default function Services() {
  const tasks = [
    { icon: "💰", name: "Cost Management", completed: true },
    { icon: "💳", name: "Payment reminder", progress: true },
    { icon: "👥", name: "Employee Tracking", completed: true },
    { icon: "📱", name: "Social media post", progress: true },
  ];

  const apps = [
    { icon: "📧", name: "Email" },
    { icon: "📋", name: "CRM" },
    { icon: "📊", name: "Analytics" },
    { icon: "💬", name: "Chat" },
    { icon: "📅", name: "Calendar" },
    { icon: "🔧", name: "Tools" },
    { icon: "📈", name: "Reports" },
    { icon: "🎯", name: "Marketing" },
  ];

  return (
    <section id="services" className="relative bg-black py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] opacity-10 z-0">
        <div className="w-full h-full bg-gradient-radial from-gray-300/70 to-transparent rounded-lg transform rotate-[-13deg]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border border-white/10 rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 8v8M8 12h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                SERVICES
              </span>
            </div>
          </motion.div>

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent">
                Smarter Services,{" "}
                <span className="font-serif italic font-normal">
                  Built with AI
                </span>
              </span>
            </h2>
          </motion.div>

          {/* Section Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Everything you need to automate operations, boost productivity
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* First Row */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1: Automate repetitive tasks */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="h-auto bg-black border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                {/* Task List Interface */}
                <div className="space-y-3 mb-6">
                  {tasks.map((task, index) => (
                    <motion.div
                      key={task.name}
                      initial={{ opacity: 0, x: -20, filter: "blur(3px)" }}
                      whileInView={{
                        opacity: index === 0 ? 1 : 0.6,
                        x: 0,
                        filter: index === 0 ? "blur(0px)" : "blur(1px)",
                        scale: index === 0 ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-black border border-white/10 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{task.icon}</span>
                        <span className="text-white/80 text-sm">
                          {task.name}
                        </span>
                      </div>
                      <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center">
                        {task.completed && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-green-400"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {task.progress && (
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Automate repetitive tasks
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We help you streamline internal operations by automating
                    manual workflows
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Service 2: Automated Workflows */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="h-auto bg-black border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                {/* Workflow Visualization */}
                <div className="relative h-64 mb-6">
                  {/* Central AI Hub */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Orbiting App Icons */}
                  {apps.map((app, index) => {
                    const angle = (index * 360) / apps.length;
                    return (
                      <motion.div
                        key={app.name}
                        initial={{ rotate: angle }}
                        animate={{ rotate: angle + 360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                        style={{ transformOrigin: "center" }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center"
                        >
                          <span className="text-lg">{app.icon}</span>
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Background Blur Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/20 to-gray-900/40 rounded-full" />
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Automated Workflows
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Boost efficiency across teams with smart automation. Build
                    intelligent workflows that automate multi-step processes
                    across tools and platforms
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service 3: Real-Time Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-96 bg-black border border-white/10 rounded-3xl p-6 relative overflow-hidden">
                {/* Research Interface Mockup */}
                <div className="relative h-full">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-900/50 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-white/60 text-xs">AI Research</div>
                  </div>

                  {/* Search Bar */}
                  <div className="mb-4 p-4 bg-black border border-white/10 rounded-xl">
                    <div className="text-white/40 text-sm mb-2">
                      Research anything...
                    </div>
                    <div className="w-16 h-1 bg-gray-600 rounded" />
                    <motion.div
                      animate={{ width: ["25%", "100%", "25%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="mt-2 h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-xs text-black"
                    >
                      Research
                    </motion.div>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    {[
                      "Software & App Industry",
                      "UX & UI Design Industry",
                      "High Converting Customer",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-3 bg-black border border-white/10 rounded-lg flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-white/60 text-xs">{item}</span>
                        </div>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-gray-400"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    ))}
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Real-Time Intelligence
                  </h3>
                  <p className="text-white/60 text-sm">
                    Make smarter decisions with live data insights
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Service 4: Custom AI Agent development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-96 bg-black border border-white/10 rounded-3xl p-6 relative overflow-hidden">
                {/* Code Editor Interface */}
                <div className="relative h-full">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-900/50 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-white/60 text-xs flex items-center gap-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-blue-400"
                      >
                        <path
                          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Code
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="space-y-1 text-xs font-mono">
                    <div className="text-white">class AutomationAgent:</div>
                    <div className="text-gray-400 pl-4">
                      def __init__(self, activation_limit):
                    </div>
                    <div className="text-gray-400 pl-8">
                      self.activation_limit = activation_limit
                    </div>
                    <div className="text-gray-400 pl-8">
                      self.current_mode = &quot;idle&quot;
                    </div>
                    <div className="text-white mt-2">
                      def evaluate_task(self, workload_value):
                    </div>
                    <div className="text-gray-400 pl-4">
                      if workload_value &gt; self.activation_limit:
                    </div>
                    <div className="text-gray-400 pl-8">
                      self.current_mode = &quot;engaged&quot;
                    </div>
                    <div className="text-gray-400 pl-8">
                      return &quot;Automation agent activated!&quot;
                    </div>
                    <div className="text-white pl-4">else:</div>
                    <div className="text-white pl-8">
                      return &quot;Agent stays idle.&quot;
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="mt-2 text-white text-xs"
                  >
                    |
                  </motion.div>

                  {/* Overlay Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Custom AI Agent development
                  </h3>
                  <p className="text-white/60 text-sm">
                    We develop custom AI agents that integrate seamlessly with
                    your tools
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
