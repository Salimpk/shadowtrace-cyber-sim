
import React, { useState } from 'react';
import { Search, MapPin, Satellite, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TerminalWindow from './TerminalWindow';

const PersonTracker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackedData, setTrackedData] = useState<null | {
    name: string;
    location: string;
    coordinates: string;
    lastSeen: string;
  }>(null);

  const handleTrack = () => {
    if (!searchQuery.trim()) return;
    
    setIsTracking(true);
    
    // Simulate tracking process
    setTimeout(() => {
      setTrackedData({
        name: searchQuery,
        location: `${['New York', 'Los Angeles', 'Chicago', 'Miami', 'Seattle'][Math.floor(Math.random() * 5)]}, USA`,
        coordinates: `${(Math.random() * 180 - 90).toFixed(6)}, ${(Math.random() * 360 - 180).toFixed(6)}`,
        lastSeen: new Date().toLocaleString()
      });
      setIsTracking(false);
    }, 3000);
  };

  return (
    <TerminalWindow title="PERSON_TRACKER.exe" className="w-full max-w-4xl">
      <div className="space-y-6">
        {/* Warning Banner */}
        <div className="bg-cyber-red/10 border border-cyber-red/30 rounded p-3 flex items-center space-x-3">
          <AlertTriangle className="h-5 w-5 text-cyber-red animate-pulse" />
          <span className="text-cyber-red text-sm font-mono">
            [WARNING] FICTIONAL SIMULATION - FOR ENTERTAINMENT ONLY
          </span>
        </div>

        {/* Search Interface */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-cyber-green">
            <span className="font-mono">shadowtrace@terminal:~$</span>
            <span className="animate-pulse">_</span>
          </div>
          
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Enter target name or phone number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-cyber-dark border-cyber-green/50 text-cyber-green placeholder:text-cyber-green/50 font-mono"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyber-green/50" />
            </div>
            <Button
              onClick={handleTrack}
              disabled={isTracking || !searchQuery.trim()}
              className="bg-cyber-green text-cyber-dark hover:bg-cyber-cyan font-mono px-6"
            >
              {isTracking ? 'TRACKING...' : 'INITIATE TRACE'}
            </Button>
          </div>
        </div>

        {/* Tracking Animation */}
        {isTracking && (
          <div className="space-y-3 text-cyber-green font-mono text-sm">
            <div className="flex items-center space-x-2">
              <Satellite className="h-4 w-4 animate-spin" />
              <span>Connecting to satellite network...</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 animate-bounce" />
              <span>Triangulating GPS coordinates...</span>
            </div>
            <div className="text-cyber-cyan">
              <span className="animate-pulse">████████████████████</span> 87%
            </div>
          </div>
        )}

        {/* Results */}
        {trackedData && !isTracking && (
          <div className="bg-cyber-gray/30 border border-cyber-cyan/30 rounded p-4 space-y-3">
            <div className="text-cyber-cyan font-cyber text-lg">TRACE COMPLETE</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <span className="text-cyber-green">TARGET:</span>
                <span className="text-white ml-2">{trackedData.name}</span>
              </div>
              <div>
                <span className="text-cyber-green">LOCATION:</span>
                <span className="text-white ml-2">{trackedData.location}</span>
              </div>
              <div>
                <span className="text-cyber-green">COORDINATES:</span>
                <span className="text-white ml-2">{trackedData.coordinates}</span>
              </div>
              <div>
                <span className="text-cyber-green">LAST SEEN:</span>
                <span className="text-white ml-2">{trackedData.lastSeen}</span>
              </div>
            </div>
            
            {/* Fake World Map */}
            <div className="mt-4 bg-cyber-darker p-4 rounded border border-cyber-green/20">
              <div className="text-cyber-cyan text-sm mb-2">LIVE SATELLITE VIEW</div>
              <div className="relative h-40 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded border border-cyber-green/30 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  {/* Fake map grid */}
                  <div className="grid grid-cols-8 grid-rows-6 h-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border border-cyber-green/10"></div>
                    ))}
                  </div>
                </div>
                {/* Pulsing target marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-cyber-red rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyber-red rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </TerminalWindow>
  );
};

export default PersonTracker;
