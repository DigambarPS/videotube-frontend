export const formatViews = (views) => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(views || 0);
};

export const formatTimeSinceUpload = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((past - now) / 1000);

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'week', seconds: 604800 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 },
  ];

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  for (const { name, seconds } of units) {
    if (Math.abs(diffInSeconds) >= seconds || name === 'second') {
      const value = Math.round(diffInSeconds / seconds);
      return rtf.format(value, name);
    }
  }
};