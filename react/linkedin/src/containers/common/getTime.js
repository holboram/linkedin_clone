export const getTime = date => {
  const timeElapsed = Date.now() - date;

  const timeDiffSeconds = Math.floor(timeElapsed / 1000);
  const timeDiffMinutes = Math.floor(timeElapsed / 60000);
  const timeDiffHours = Math.floor(timeElapsed / 3600000);
  const timeDiffDays = Math.floor(new Date(timeElapsed) / 86400000);

  if (timeDiffMinutes < 1 && timeDiffHours < 1 && timeDiffDays < 1) {
    return `${timeDiffSeconds}sec`;
  }

  if (timeDiffHours < 1 && timeDiffDays < 1) {
    return `${timeDiffMinutes}min`;
  }

  if (timeDiffDays >= 1 && timeDiffDays < 7) {
    return `${timeDiffDays}d`;
  }

  if (timeDiffDays >= 7 && timeDiffDays < 30) {
    return `${timeDiffDays}w`;
  }

  if (timeDiffDays >= 30 && timeDiffDays < 365) {
    return `${timeDiffDays}year`;
  }

  if (timeDiffDays < 1) {
    return `${timeDiffHours}h`;
  }
};
