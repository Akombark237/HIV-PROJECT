// HIV Crisis Support Service Worker - Cameroon
// Provides offline functionality and background sync

const CACHE_NAME = 'hiv-support-cameroon-v1.0.0';
const OFFLINE_URL = '/offline';

// Critical resources to cache for offline functionality
const CRITICAL_RESOURCES = [
  '/',
  '/offline',
  '/crisis-support',
  '/medical-support',
  '/communication-tools',
  '/safety-security',
  '/educational-content',
  '/support-resources',
  '/hiv-care-integration',
  '/admin-dashboard',
  // Add critical CSS and JS files
  '/_next/static/css/app.css',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/webpack.js',
  // Emergency resources
  '/emergency-contacts.json',
  '/crisis-protocols.json'
];

// Resources that can be cached on demand
const CACHE_ON_DEMAND = [
  '/api/emergency-contacts',
  '/api/crisis-support',
  '/api/providers',
  '/api/resources'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching critical resources...');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('Critical resources cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache critical resources:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful navigation responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // Serve from cache when offline
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Serve offline page for uncached navigation requests
              return caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }

  // Handle API requests with network-first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful API responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // Serve from cache when offline
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static resources with cache-first strategy
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'image' ||
      request.destination === 'font') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, responseClone);
                  });
              }
              return response;
            });
        })
    );
    return;
  }

  // Default: try network first, fallback to cache
  event.respondWith(
    fetch(request)
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);

  if (event.tag === 'emergency-sync') {
    event.waitUntil(syncEmergencyData());
  } else if (event.tag === 'message-sync') {
    event.waitUntil(syncMessages());
  } else if (event.tag === 'case-sync') {
    event.waitUntil(syncCaseData());
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event);

  const options = {
    body: 'You have a new message or update',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'view',
        title: 'View',
        icon: '/icons/view-action.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/close-action.png'
      }
    ],
    requireInteraction: true,
    silent: false
  };

  if (event.data) {
    const data = event.data.json();
    options.body = data.body || options.body;
    options.title = data.title || 'HIV Support';
    
    // Handle emergency notifications
    if (data.type === 'emergency') {
      options.requireInteraction = true;
      options.vibrate = [300, 100, 300, 100, 300];
      options.badge = '/icons/emergency-badge.png';
    }
  }

  event.waitUntil(
    self.registration.showNotification('HIV Support', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);

  event.notification.close();

  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions for background sync
async function syncEmergencyData() {
  try {
    // Sync emergency contact updates
    const emergencyData = await getStoredEmergencyData();
    if (emergencyData.length > 0) {
      await fetch('/api/emergency-sync', {
        method: 'POST',
        body: JSON.stringify(emergencyData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await clearStoredEmergencyData();
    }
  } catch (error) {
    console.error('Emergency sync failed:', error);
  }
}

async function syncMessages() {
  try {
    // Sync offline messages
    const messages = await getStoredMessages();
    if (messages.length > 0) {
      await fetch('/api/messages-sync', {
        method: 'POST',
        body: JSON.stringify(messages),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await clearStoredMessages();
    }
  } catch (error) {
    console.error('Message sync failed:', error);
  }
}

async function syncCaseData() {
  try {
    // Sync case updates
    const caseUpdates = await getStoredCaseUpdates();
    if (caseUpdates.length > 0) {
      await fetch('/api/cases-sync', {
        method: 'POST',
        body: JSON.stringify(caseUpdates),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      await clearStoredCaseUpdates();
    }
  } catch (error) {
    console.error('Case sync failed:', error);
  }
}

// IndexedDB helper functions (simplified)
async function getStoredEmergencyData() {
  // Implementation would use IndexedDB to retrieve stored data
  return [];
}

async function clearStoredEmergencyData() {
  // Implementation would clear IndexedDB emergency data
}

async function getStoredMessages() {
  // Implementation would use IndexedDB to retrieve stored messages
  return [];
}

async function clearStoredMessages() {
  // Implementation would clear IndexedDB messages
}

async function getStoredCaseUpdates() {
  // Implementation would use IndexedDB to retrieve stored case updates
  return [];
}

async function clearStoredCaseUpdates() {
  // Implementation would clear IndexedDB case updates
}
