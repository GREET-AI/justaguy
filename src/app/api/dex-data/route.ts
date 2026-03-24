import { NextResponse } from 'next/server';
import { TOKEN_MINT } from '@/config/token';

type DexPair = {
  priceUsd?: string;
  fdv?: number;
  marketCap?: number;
  volume?: { h24?: number };
  liquidity?: { usd?: number };
  priceChange?: { h24?: number };
};

type DexPairsResponse = {
  pair?: DexPair;
  pairs?: DexPair[];
};

export async function GET() {
  console.log('🚀 Backend API called - fetching DexScreener data...');
  
  try {
    // Fetch DexScreener API
    const apiUrl = `https://api.dexscreener.com/latest/dex/tokens/solana/${TOKEN_MINT}`;
    console.log(`📡 Fetching: ${apiUrl}`);

    const response = await fetch(apiUrl,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (compatible; TheGreatRug/1.0)',
        },
        next: { revalidate: 30 }, // Cache for 30 seconds
      }
    );

    console.log(`📊 DexScreener Response Status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`DexScreener API failed: ${response.status}`);
    }

    const data = (await response.json()) as DexPairsResponse;
    console.log('📈 Raw DexScreener Data:', JSON.stringify(data, null, 2));
    
    if (!data.pair && (!data.pairs || data.pairs.length === 0)) {
      throw new Error('No trading pairs found');
    }

    const pair =
      data.pair ||
      (data.pairs && data.pairs.length > 0
        ? data.pairs
            .slice()
            .sort(
              (a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0)
            )[0]
        : null);
    
    if (!pair) {
      throw new Error('No valid pair found');
    }
    
    // Clean response
    const cleanData = {
      priceUsd: pair.priceUsd || '0.00',
      fdv: pair.fdv || 0,
      marketCap: pair.marketCap || 0,
      volume: {
        h24: pair.volume?.h24 || 0
      },
      liquidity: {
        usd: pair.liquidity?.usd || 0
      },
      priceChange: {
        h24: pair.priceChange?.h24 || 0
      },
      timestamp: new Date().toISOString(),
      success: true
    };

    console.log('✅ Cleaned Data sent to Frontend:', JSON.stringify(cleanData, null, 2));
    console.log('🚀 DexScreener live:', cleanData.priceUsd || 'offline');

    return NextResponse.json(cleanData, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
      },
    });

  } catch (error) {
    console.error('DexScreener API Error:', error);
    
    // Fallback data - use your original values
    const fallbackData = {
      priceUsd: '0',
      fdv: 0,
      marketCap: 0,
      volume: {
        h24: 0
      },
      liquidity: {
        usd: 0
      },
      priceChange: {
        h24: 0
      },
      timestamp: new Date().toISOString(),
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
    
    console.log('⚠️ Using fallback data:', fallbackData.priceUsd);

    return NextResponse.json(fallbackData, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, s-maxage=5, stale-while-revalidate=10',
      },
    });
  }
}
