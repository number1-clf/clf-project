import videos from './videos.json' assert { type: 'json' };

const ALLOWED_ORIGIN = 'https://cloudflare.careerladder.pages.dev';

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function handleCors(request) {
  const origin = request.headers.get("Origin");
  if (origin === ALLOWED_ORIGIN) {
    return {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
  }
  return {};
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const headers = handleCors(request);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers,
      });
    }

    // Enforce allowed origin for GET requests
    const origin = request.headers.get("Origin");
    if (origin && origin !== ALLOWED_ORIGIN) {
      return new Response("Forbidden", { status: 403 });
    }

    // GET /video/random
    if (url.pathname === '/video/random') {
      const randomVideo = randomItem(videos);
      return new Response(JSON.stringify({ videoId: randomVideo.videoId }), {
        status: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      });
    }

    // GET /video/:id/similar
    const match = url.pathname.match(/^\/video\/([^/]+)\/similar$/);
    if (match) {
      const videoId = match[1];
      const video = videos.find(v => v.videoId === videoId);

      if (!video || !video.similar_videos?.length) {
        return new Response(JSON.stringify({ error: 'Video not found or no similar videos available' }), {
          status: 404,
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          },
        });
      }

      const randomSimilar = randomItem(video.similar_videos);
      return new Response(JSON.stringify({ videoId: randomSimilar }), {
        status: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      });
    }

    // Fallback for unmatched routes
    return new Response('Not found', { status: 404 });
  }
};