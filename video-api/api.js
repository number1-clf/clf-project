import videos from './videos.json' assert { type: 'json' };

// Helper to get a random item from an array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // GET /video/random
    if (url.pathname === '/video/random') {
      const randomVideo = randomItem(videos);
      return new Response(JSON.stringify({ videoId: randomVideo.videoId }), {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "https://cloudflare.careerladder.pages.dev", // allow your Pages site
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
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
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "https://cloudflare.careerladder.pages.dev", // allow your Pages site
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
          },
        });
      }

      const randomSimilar = randomItem(video.similar_videos);
      return new Response(JSON.stringify({ videoId: randomSimilar }), {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "https://cloudflare.careerladder.pages.dev", // allow your Pages site
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        },
      });
    }

    // Not found
    return new Response('Not found', { status: 404 });
  }
};