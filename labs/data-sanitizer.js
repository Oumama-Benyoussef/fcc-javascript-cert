function sanitizeLog(entry, disallowedCharacters) {
  // Strings are immutable, so convert to array for mutation
  const result = entry.split('');
  
  for (let i = 0; i < result.length; i++) {
    for (let char of disallowedCharacters) {
      if (result[i] === char) {
        result[i] = '#';
      }
    }
  }
  return result.join('');
}

function cleanLogs(logs, disallowedCharacters) {
  let infoCount = 0;
  let sanitizeCount = 0;

  for (let entry of logs) { 
    // Check for informational entries
    if (entry[0] === '/') {
      infoCount++;
      continue;
    }
    
    // Check for fatal $ character
    if (entry.includes('$')) {  
      return 'Sanitizing stopped. Failure Reason: Fatal character occurred.';
    }
    
    // Call sanitizeLog ( we don't need return value)
    sanitizeLog(entry, disallowedCharacters);
    sanitizeCount++;
  }
  
  return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${sanitizeCount}. Informational Entry Count: ${infoCount}. Finished sanitizing logs.`;
}
