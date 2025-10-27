# VITAR – WebAR Campus Navigator

A modern, full-stack web-based campus navigation app combining WebAR overlays with a 3D map fallback for seamless campus wayfinding.

## 🚀 Features
- WebAR Navigation – Real-time AR overlays for routes and building names  
- 3D Map Fallback – Interactive map for devices without AR support  
- GPS & Route Tracking – Live position and dynamic route visualization  
- AI Chatbot – Answers campus-specific questions and directions  
- Developer Tools – Route scanner, waypoint capture, and building manager  
- Firestore Integration – Real-time cloud data storage and sync  

## ⚙️ Setup
### Prerequisites
- Node.js 18+  
- Firebase project (Firestore enabled)  
- OpenAI API key  

### Environment Variables
Create `.env.local`:
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
OPENAI_API_KEY=your_openai_key

### Installation
npm install
npm run dev
Visit → http://localhost:3000  

## 🗺️ Usage
- Start Navigation: Grant camera & location access  
- AR Mode: View real-time overlays for directions  
- Map Mode: Explore routes via the 3D interface  
- Chatbot: Ask about routes, buildings, or campus facilities  
- Developer Tools: Create routes, mark waypoints, and manage buildings  

## 🧩 Tech Stack
- Frontend: Next.js, React, Three.js, Tailwind CSS  
- Backend: Firebase Firestore  
- AI: OpenAI API  
- AR: WebXR / AR.js  

## 📄 License
MIT License © 2025 — VITAR Development Team

