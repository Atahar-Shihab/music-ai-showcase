"use client";

import { motion } from "framer-motion";
import { FileText, Cpu, Music, Network } from "lucide-react";
import AudioPlayer from "./components/AudioPlayer";

export default function MusicAI() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight">Neural Music Gen</span>
          <div className="flex gap-4">
            <a href="https://github.com/Atahar-Shihab/cse425-project_music-generation-unsupervised" className="text-white/70 hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
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