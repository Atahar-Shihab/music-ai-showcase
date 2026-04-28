"use client";

import { motion } from "framer-motion";
import { FileText, Cpu, Music, Network } from "lucide-react";
import AudioPlayer from "./components/AudioPlayer";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function MusicAI() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight">Neural Music Gen</span>
          <div className="flex gap-4">
            <a href="https://github.com/Atahar-Shihab/cse425-project_music-generation-unsupervised" className="text-white/70 hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-8 mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
            Unsupervised Neural Network <br />
            Multi-Genre Music Generation
          </h1>
          <p className="max-w-2xl text-lg text-white/60 font-light tracking-wide leading-relaxed">
            An analysis of Bottleneck vs. Autoregressive Architectures using Long Short-Term Memory Autoencoders, Variational Autoencoders, and Transformers.
          </p>
        </motion.section>

        <section className="max-w-3xl mx-auto mb-32">
          <h2 className="text-2xl font-medium mb-8 text-center">Generated Samples</h2>
          <div className="flex flex-col gap-4">
            <AudioPlayer 
              title="Autoregressive Sequence 01" 
              model="Task 3: Transformer Decoder" 
              src="/transformer_sample.mp3" 
            />
            <AudioPlayer 
              title="C-Major Harmonics" 
              model="Task 4: RLHF Tuned VAE" 
              src="/rlhf_sample.mp3" 
            />
            <AudioPlayer 
              title="Latent Space Interpolation" 
              model="Task 2: Variational Autoencoder" 
              src="/vae_sample.mp3" 
            />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-32">
          <Card
            icon={<Cpu />}
            title="LSTM Autoencoder"
            desc="Bidirectional encoding layers mapping 128-timestep sequences to lower-dimensional latent spaces."
          />
          <Card
            icon={<Network />}
            title="Variational Autoencoder"
            desc="Probabilistic latent distributions utilizing the reparameterization trick for diverse generation."
          />
          <Card
            icon={<Music />}
            title="Transformer & RLHF"
            desc="Autoregressive self-attention mechanisms fine-tuned via Policy Gradients for perfect C-Major harmony."
          />
        </section>
      </main>
    </div>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-white/50 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}