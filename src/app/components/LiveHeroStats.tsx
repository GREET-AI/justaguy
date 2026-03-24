"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useLiveTokenData, formatMarketCap, formatPrice, formatVolume } from '../hooks/useLiveTokenData';

interface StatCardProps {
  label: string;
  value: string | number;
  detail: string;
  isLoading?: boolean;
  isLive?: boolean;
  priceChange?: number;
}

function StatCard({ label, value, detail, isLoading, isLive, priceChange }: StatCardProps) {
  return (
    <div className="space-y-2 border-white/10 pb-4 last:border-none lg:border-l lg:border-transparent lg:border-l-white/10 lg:pl-4">
      <div className="flex items-center gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">{label}</p>
        {isLive && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-brand-lime rounded-full animate-pulse"></div>
            <span className="text-xs text-brand-lime">LIVE</span>
          </div>
        )}
      </div>
      
      <div className="text-2xl font-semibold tracking-tight text-white">
        {isLoading ? (
          <div className="animate-pulse bg-white/20 h-6 rounded w-20"></div>
        ) : typeof value === 'number' ? (
          <CountUp
            end={value}
            duration={2}
            separator=","
            prefix="$"
            decimals={value < 1 ? 6 : 0}
          />
        ) : (
          value
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <p className="text-sm text-white/60">{detail}</p>
        {priceChange !== undefined && (
          <span className={`text-xs px-2 py-1 rounded-full ${
            priceChange >= 0 
              ? 'bg-brand-lime/20 text-brand-lime' 
              : 'bg-red-500/20 text-red-400'
          }`}>
            {priceChange >= 0 ? '↗' : '↘'} {Math.abs(priceChange).toFixed(2)}%
          </span>
        )}
      </div>
    </div>
  );
}

export function LiveHeroStats() {
  const { data, isLoading, isError } = useLiveTokenData();
  
  console.log('🎯 LiveHeroStats render:', { data, isLoading, isError });

  // Prepare stats data
  const stats = [
    {
      label: "Market Cap",
      value: data?.fdv ? formatMarketCap(data.fdv) : "—",
      detail: "Solana · DexScreener",
      isLive: !isError && data?.success,
    },
    {
      label: "Price",
      value: data?.priceUsd ? formatPrice(data.priceUsd) : "—",
      detail: "Live price",
      isLive: !isError && data?.success,
      priceChange: data?.priceChange?.h24,
    },
    {
      label: "Volume 24h",
      value: data?.volume?.h24 ? formatVolume(data.volume.h24) : "—",
      detail: "24h volume",
      isLive: !isError && data?.success,
    },
    {
      label: "Launch",
      value: "Pump.fun",
      detail: "Bonding curve → DEX",
      isLive: false,
    },
  ];

  return (
    <motion.div
      className="glass grid gap-4 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur lg:grid-cols-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          detail={stat.detail}
          isLoading={isLoading && stat.isLive}
          isLive={stat.isLive}
          priceChange={stat.priceChange}
        />
      ))}
      {/* Error indicator */}
      {isError && (
        <div className="col-span-full mt-1 text-center">
          <p className="text-xs text-yellow-400 bg-yellow-400/10 rounded-lg px-3 py-1 inline-block">
            ⚠ Live data temporarily unavailable • Showing cached values
          </p>
        </div>
      )}
    </motion.div>
  );
}
