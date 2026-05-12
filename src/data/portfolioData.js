export const NAV = ["About", "Skills", "Projects", "Resume", "Achievements", "Contact"];

export const ROLES = [
  "Backend & AI/ML Engineer",
  "Embedded Systems Developer",
  "Computer Vision Builder",
  "Multi-Agent Systems Designer",
  "Research-Driven Developer",
];

export const SKILLS = [
  { icon: "🤖", title: "AI / ML", pills: ["PyTorch", "TensorFlow", "Transformers", "CodeBERT", "VADER / NLP", "XGBoost", "LSTM", "Random Forest", "SVM", "GBT", "Multi-Head Attention", "Gemini 1.5 Flash"] },
  { icon: "👁️", title: "Computer Vision", pills: ["OpenCV", "Deep Learning (CV)", "Facial Recognition", "Object Detection", "HSV Color Tracking", "Google Earth Engine", "Satellite Imagery"] },
  { icon: "🔧", title: "Backend & APIs", pills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "Docker", "Firebase Admin SDK", "Cloud Storage", "Google SDK", "Streamlit"] },
  { icon: "⚙️", title: "Embedded & IoT", pills: ["Embedded C", "LoRaWAN", "Arduino / C++", "Dual-MCU Architecture", "GNSS / Geofencing", "Industrial Automation", "Sensor Fusion", "Hardware Integrity"] },
  { icon: "🗄️", title: "Data & Storage", pills: ["Firebase", "Time-Series Data", "Persistent Storage", "NLU Pipelines", "Multi-Agent Systems"] },
  { icon: "🛠️", title: "Tools & Practices", pills: ["Git / GitHub", "Agile / Scrum", "SMTP Pipelines", "smtplib", "Wireless Networking", "IBM Mainframes", "Excel / Macros"] },
];

export const PROJECTS = [
  { cat: "backend", badge: "Backend · Agents", badgeColor: "cyan", icon: "🏥", title: "MedAssist: AI Medication Adherence Agent", desc: "Sophisticated Multi-Agent System (MAS) with FastAPI + Gemini 1.5 Flash. Privacy-centric medical agent with natural-language adherence logging and an Escalation Protocol for red-flag emergencies.", techs: ["Python", "FastAPI", "Streamlit", "Docker", "Gemini 1.5", "Google SDK"] },
  { cat: "backend", badge: "Backend · Cloud", badgeColor: "cyan", icon: "🎵", title: "Firebase Music API", desc: "Cloud-integrated REST API built with Node.js for managing MP3 file lifecycles — secure auth and distributed storage via the Firebase Admin SDK.", techs: ["Node.js", "Express", "Firebase", "Cloud Storage", "REST API"] },
  { cat: "backend", badge: "Full Stack · Healthcare", badgeColor: "cyan", icon: "🧩", title: "Autism Support Application", desc: "Full-stack healthcare app featuring an AI chatbot, virtual schedulers, and interactive sensory quizzes designed for neurodivergent patient support.", techs: ["Full-Stack", "NLU", "Persistent Storage", "AI Chatbot"] },
  { cat: "ai", badge: "AI · Software Reliability", badgeColor: "green", icon: "🐛", title: "Multimodal Software Defect Prediction", desc: "PyTorch framework that predicts if a GitHub PR contains a bug by fusing code changes (CodeBERT) with developer sentiment (VADER) using Multi-Head Attention.", techs: ["PyTorch", "Transformers", "CodeBERT", "VADER", "Multi-Head Attention"] },
  { cat: "ai", badge: "AI · Remote Sensing", badgeColor: "green", icon: "🛰️", title: "Enhanced Calibrated Deforestation Detector", desc: "Ensemble ML framework achieving 99.18% accuracy detecting vegetation changes via multi-temporal satellite imagery from Google Earth Engine.", techs: ["Google Earth Engine", "Random Forest", "SVM", "GBT", "Ensemble ML"] },
  { cat: "ai", badge: "AI · Safety", badgeColor: "green", icon: "⛏️", title: "Smart AI Rockfall Prediction System", desc: "Mining safety system using XGBoost + LSTM models to forecast structural risks from historical IoT sensor time-series feeds.", techs: ["XGBoost", "LSTM", "Time-Series", "IoT Sensors", "Forecasting"] },
  { cat: "ai", badge: "AI · Research", badgeColor: "green", icon: "🧠", title: "Self-Pruning Neural Network (CIFAR-10)", desc: "PyTorch model that dynamically learns which weights to remove via learnable gates, sigmoid-based gating (STE), and L1 sparsity. Achieved 93.7% sparsity at minimal accuracy cost.", techs: ["PyTorch", "CIFAR-10", "L1 Regularization", "Cosine Scheduler", "Neural Pruning"] },
  { cat: "cv", badge: "CV · Security", badgeColor: "amber", icon: "🔐", title: "Advanced Threat Detection Security System", desc: "Multimodal security solution monitoring facial recognition, firearm detection, and audio anomalies. Automated SMTP pipeline emails threat images to security in real-time.", techs: ["Python", "OpenCV", "Deep Learning", "smtplib", "Multimodal"] },
  { cat: "cv", badge: "CV · Mobility", badgeColor: "amber", icon: "🚗", title: "GNSS-Based Traffic Violation Detection", desc: "Camera-free mobility system using satellite positioning and geofencing to detect traffic violations — no cameras required.", techs: ["GNSS", "Geofencing", "Wireless Networking", "Real-Time"], award: "🏆 Top 8 / 200+ Teams — EmpowerTech National Hackathon" },
  { cat: "embedded", badge: "Embedded · IoT", badgeColor: "purple", icon: "⚡", title: "Automated Safety & Monitoring for Distribution Lines", desc: "Utility Patent-published industrial IoT system using LoRaWAN for real-time fault detection in power grids via solar-powered localized sensor nodes.", techs: ["LoRaWAN", "Embedded C", "Solar Power", "Industrial Automation"], award: "🏆 Utility Patent Published" },
  { cat: "embedded", badge: "Embedded · Security", badgeColor: "purple", icon: "⚖️", title: "Fail-Secure Tamper Prevention for Weighing Scales", desc: "Dual-MCU Guard/Worker architecture implementing a Brick State firmware lockout to prevent electronic tampering and fraudulent readings.", techs: ["Embedded C", "Dual-MCU Logic", "Hardware Integrity", "Fail-Secure"] },
];

export const ACHIEVEMENTS = [
  { color: "gold", icon: "🏆", title: "Honorable Mention — EmpowerTech National Hackathon", sub: "VIT Chennai · Top 8 / 200+ teams · 2025" },
  { color: "gold", icon: "🥈", title: "Top 8 — GNSS Traffic Violation System", sub: "Camera-free road safety using satellite positioning · 2025" },
  { color: "blue", icon: "🧾", title: "Utility Patent Published", sub: "Automated Safety & Monitoring for Distribution Lines using LoRaWAN" },
  { color: "blue", icon: "🖥️", title: "IBM Z Day 2025 SE — AI & Data", sub: "Sustainable computing & AI on mainframes · 2025" },
  { color: "blue", icon: "🔒", title: "IBM Z Day 2025 SE — Security", sub: "Enterprise security practices on Z platform · 2025" },
  { color: "purple", icon: "🤖", title: "IBM: Build Your Own Chatbot — Level 1", sub: "Verified badge on Credly · NLP & conversational AI · 2024" },
  { color: "green", icon: "🌱", title: "IBM: Responsible Computing & Sustainability", sub: "IBM Z · EmpowerTech Hackathon 2025" },
  { color: "gold", icon: "⏱️", title: "HackNight25 — 36-Hour Hackathon", sub: "HackClub VIT Chennai · Certificate of Participation" },
  { color: "purple", icon: "📐", title: "Agile & Scrum Practitioner", sub: "Infosys Springboard · Sprint ceremonies, backlog management" },
  { color: "green", icon: "🎨", title: "Generative AI — Real-Time Image via Voice", sub: "OpenWeaver · Creating real-time images through voice" },
  { color: "blue", icon: "📊", title: "What Is Generative AI? — LinkedIn Learning", sub: "Pinar Seyhan Demirdag · Foundations of generative AI" },
  { icon: "⚡", title: "Arduino & Embedded Systems Workshop", sub: "Robotics Club VIT Chennai · Rev-Up workshop · C++ embedded", color: "green" },
];