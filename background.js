chrome.runtime.onInstalled.addListener(() => {
    console.log('Site-Specific Extension Manager installed');
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      checkAndToggleExtensions(tab.url);
    }
  });
  
  function checkAndToggleExtensions(url) {
    chrome.storage.local.get('blockedSites', (data) => {
      const blockedSites = data.blockedSites || [];
      const isBlocked = blockedSites.some(site => url.includes(site));
  
      chrome.management.getAll((extensions) => {
        extensions.forEach((extension) => {
          if (extension.id !== chrome.runtime.id && extension.type === 'extension') {
            chrome.management.setEnabled(extension.id, !isBlocked);
          }
        });
      });
    });
  }
  