
import React, { useState, useEffect } from 'react';
import { Eye, Cpu, Database, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TerminalWindow from '@/components/TerminalWindow';
import PersonTracker from '@/components/PersonTracker';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'tracker'>('landing');
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState('');

  const bootSequence = [
    'Initializing ShadowTrace Pro...',
    'Loading neural networks...',
    'Connecting to shadow servers...',
    'Bypassing firewalls...',
    'System ready. Welcome, Agent.',
  ];

  useEffect(() => {
    if (isBooting) {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < bootSequence.length) {
          setBootText(prev => prev + '\n> ' + bootSequence[currentLine]);
          currentLine++;
        } else {
          setTimeout(() => setIsBooting(false), 1000);
          clearInterval(interval);
        }
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isBooting]);

  if (isBooting) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-cyber-cyan/5"></div>
        <div className="z-10 max-w-2xl w-full px-4">
          <TerminalWindow title="SYSTEM_BOOT.exe">
            <div className="font-mono text-cyber-green whitespace-pre-line min-h-[200px]">
              {bootText}
              <span className="animate-pulse">_</span>
            </div>
          </TerminalWindow>
        </div>
      </div>
    );
  }

  if (currentView === 'tracker') {
    return (
      <div className="min-h-screen bg-cyber-darker p-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Button
              onClick={() => setCurrentView('landing')}
              variant="outline"
              className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark"
            >
              ← Back to Command Center
            </Button>
          </div>
          <PersonTracker />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-cyber-cyan/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cyber text-6xl md:text-8xl text-cyber-green mb-4 glitch animate-glow" data-text="SHADOWTRACE">
            SHADOWTRACE
          </h1>
          <h2 className="font-cyber text-2xl md:text-3xl text-cyber-cyan mb-6">
            PRO
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-cyber-green/80 font-mono text-lg mb-4">
              Advanced Virtual Hacking Platform
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Experience the thrill of cyber-espionage in this immersive simulation. 
              Track targets, access surveillance networks, crack encrypted systems, 
              and browse classified databases - all in a safe, fictional environment.
            </p>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-cyber-red/10 border border-cyber-red/30 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Eye className="h-6 w-6 text-cyber-red animate-pulse" />
            <span className="text-cyber-red font-mono text-sm md:text-base text-center">
              [DISCLAIMER] THIS IS A FICTIONAL SIMULATION FOR ENTERTAINMENT ONLY
            </span>
            <Eye className="h-6 w-6 text-cyber-red animate-pulse" />
          </div>
        </div>

        {/* Main Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Person Tracker */}
          <div 
            onClick={() => setCurrentView('tracker')}
            className="bg-cyber-dark border border-cyber-green/30 rounded-lg p-6 hover:border-cyber-green hover:shadow-lg hover:shadow-cyber-green/20 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <MapPin className="h-8 w-8 text-cyber-green group-hover:animate-pulse" />
              <span className="text-xs text-cyber-cyan font-mono">ACTIVE</span>
            </div>
            <h3 className="font-cyber text-xl text-cyber-green mb-2">Person Tracker</h3>
            <p className="text-white/70 text-sm font-mono">
              Enter a name or phone number to track someone's location on a live world map
            </p>
          </div>

          {/* Surveillance Cameras */}
          <div className="bg-cyber-dark border border-cyber-cyan/30 rounded-lg p-6 hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/20 transition-all cursor-pointer group opacity-60">
            <div className="flex items-center justify-between mb-4">
              <Eye className="h-8 w-8 text-cyber-cyan group-hover:animate-pulse" />
              <span className="text-xs text-cyber-red font-mono">OFFLINE</span>
            </div>
            <h3 className="font-cyber text-xl text-cyber-cyan mb-2">Surveillance Access</h3>
            <p className="text-white/70 text-sm font-mono">
              Access CCTV networks in major cities worldwide
            </p>
          </div>

          {/* System Hack */}
          <div className="bg-cyber-dark border border-cyber-purple/30 rounded-lg p-6 hover:border-cyber-purple hover:shadow-lg hover:shadow-cyber-purple/20 transition-all cursor-pointer group opacity-60">
            <div className="flex items-center justify-between mb-4">
              <Cpu className="h-8 w-8 text-cyber-purple group-hover:animate-pulse" />
              <span className="text-xs text-cyber-red font-mono">LOCKED</span>
            </div>
            <h3 className="font-cyber text-xl text-cyber-purple mb-2">System Hack</h3>
            <p className="text-white/70 text-sm font-mono">
              Infiltrate secure servers through code-cracking mini-games
            </p>
          </div>

          {/* Database */}
          <div className="bg-cyber-dark border border-cyber-red/30 rounded-lg p-6 hover:border-cyber-red hover:shadow-lg hover:shadow-cyber-red/20 transition-all cursor-pointer group opacity-60">
            <div className="flex items-center justify-between mb-4">
              <Database className="h-8 w-8 text-cyber-red group-hover:animate-pulse" />
              <span className="text-xs text-cyber-red font-mono">ENCRYPTED</span>
            </div>
            <h3 className="font-cyber text-xl text-cyber-red mb-2">Suspect Database</h3>
            <p className="text-white/70 text-sm font-mono">
              Browse classified profiles and fictional character dossiers
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-cyber-green/50 font-mono text-sm">
          <p>Ready to enter the shadow world?</p>
          <p className="mt-2">
            <span className="animate-pulse">Press ENTER to continue...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
