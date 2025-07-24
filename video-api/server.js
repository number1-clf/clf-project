const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const useragent = require('useragent');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Uncomment the following lines to restrict CORS to a specific origin
// app.use(cors({
//   origin: 'https://myapp.com'
// }));


// Load video list from videos.json
const videos = JSON.parse(fs.readFileSync('videos.json', 'utf-8'));

// Ensure logs directory exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Helper to get today's log filename
function getLogFilePath() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  return path.join(__dirname, 'logs', `${today}.json`);
}

function logRequest(req, info) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const agent = useragent.parse(req.headers['user-agent']);
  const logEntry = {
    timestamp: new Date().toISOString(),
    ip,
    browser: agent.toString(),
    ...info
  };

  fs.appendFile(getLogFilePath(), JSON.stringify(logEntry) + '\n', (err) => {
    if (err) console.error('Logging error:', err);
  });
}

// GET /video/random → returns a random videoId
app.get('/video/random', (req, res) => {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  logRequest(req, { route: '/video/random', videoId: randomVideo.videoId });
  res.json({ videoId: randomVideo.videoId });
});

// GET /video/:id/similar → returns one random similar videoId
app.get('/video/:id/similar', (req, res) => {
  const videoId = req.params.id;
  const video = videos.find(v => v.videoId === videoId);

  if (!video || !video.similar_videos?.length) {
    return res.status(404).json({ error: 'Video not found or no similar videos available' });
  }

  const randomSimilar = video.similar_videos[Math.floor(Math.random() * video.similar_videos.length)];
  logRequest(req, { route: '/video/:id/similar', originalId: videoId, similarReturned: randomSimilar });
  res.json({ videoId: randomSimilar });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});