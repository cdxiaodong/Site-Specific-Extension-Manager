document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-site').addEventListener('click', addCurrentSite);
    loadBlockedSites();
  });
  
  function addCurrentSite() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = new URL(tabs[0].url).hostname;
      chrome.storage.local.get('blockedSites', (data) => {
        const blockedSites = data.blockedSites || [];
        if (!blockedSites.includes(currentUrl)) {
          blockedSites.push(currentUrl);
          chrome.storage.local.set({ blockedSites: blockedSites }, () => {
            loadBlockedSites();
          });
        }
      });
    });
  }
  
  function loadBlockedSites() {
    chrome.storage.local.get('blockedSites', (data) => {
      const blockedSites = data.blockedSites || [];
      const siteList = document.getElementById('site-list');
      siteList.innerHTML = '';
      blockedSites.forEach((site) => {
        const listItem = document.createElement('li');
        listItem.textContent = site;
        siteList.appendChild(listItem);
      });
    });
  }
  