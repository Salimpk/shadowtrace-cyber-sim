
import React, { useState, useEffect } from 'react';
import { Terminal, Wifi, Shield, Lock } from 'lucide-react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow = ({ title, children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`bg-cyber-dark border border-cyber-green/30 rounded-lg overflow-hidden shadow-2xl ${className}`}>
      {/* Terminal Header */}
      <div className="bg-cyber-gray border-b border-cyber-green/30 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Terminal className="h-4 w-4 text-cyber-green" />
          <span className="text-cyber-green font-cyber text-sm">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-cyber-red animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-cyber-green animate-glow"></div>
          </div>
          <div className="flex items-center space-x-1 ml-3">
            <Wifi className="h-3 w-3 text-cyber-cyan" />
            <Shield className="h-3 w-3 text-cyber-green" />
            <Lock className="h-3 w-3 text-cyber-red" />
          </div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 bg-cyber-darker relative scanlines">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
