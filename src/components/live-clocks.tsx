'use client';

import { useEffect, useState } from 'react';

function formatTime(date: Date, timeZone: string) {
  return date.toLocaleTimeString('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function LiveClocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const melbourne = now ? formatTime(now, 'Australia/Melbourne') : '--:--';
  const eastern = now ? formatTime(now, 'America/New_York') : '--:--';

  return (
    <div className="mb-3 flex items-center justify-end text-sm text-white/80">
      <div className="flex items-center gap-3 rounded-full bg-black/35 px-3.5 py-1.5 backdrop-blur-sm border border-white/10 tabular-nums">
        <span>
          <span className="text-white/50  text-xr mr-1.5">AUS</span>
          <span className="text-white font-medium">{melbourne}</span>
        </span>
        <span className="text-white/25">|</span>
        <span>
          <span className="text-white/50 text-xr mr-1.5">EST</span>
          <span className="text-white font-medium">{eastern}</span>
        </span>
      </div>
    </div>
  );
}
