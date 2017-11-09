const HEADERS = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

function get(endpoint) {
  return fetch(endpoint, {headers: HEADERS}).then((res) => res.json());
}

// Site Status
const all = document.getElementById('all');
const allSub = document.getElementById('all-sub');
const allIcon = document.getElementById('all-icon');
get('/api/services/all').then((data) => {
  if (!data.success) {
    all.innerHTML = 'Error loading status.';
    return;
  }
  if (data.isUp) {
    all.innerHTML = 'All Systems Go!';
    allSub.innerHTML = 'Nothing to report. You are ready to pley!';
    allIcon.style.backgroundColor = '#41C39F';
    allIcon.style.boxShadow = '0 0 20px RGBA(65, 195, 159, .5)';
    allIcon.innerHTML = '✓';
  } else {
    all.innerHTML = 'Houston we have a problem.';
    allSub.innerHTML = data.message;
    allIcon.style.backgroundColor = '#E94F5F';
    allIcon.style.boxShadow = '0 0 20px RGBA(233, 79, 95, .5)';
    allIcon.innerHTML = '!';
  }
})

// Ceph Status
const ceph = document.getElementById('ceph-status');
get('/api/services/ceph').then((data) => {
  if (!data.success) {
    ceph.innerHTML = 'Error loading status.';
    return;
  }
  if (data.isUp) {
    ceph.innerHTML = 'No Issues'
  } else {
    ceph.innerHTML = data.message;
  }
});

// RGW Status
const rgw = document.getElementById('rgw-status');
get('/api/services/rgw').then((data) => {
  if (!data.success) {
    rgw.innerHTML = 'Error loading status.';
    return;
  }
  if (data.isUp) {
    rgw.innerHTML = 'No Issues'
  } else {
    rgw.innerHTML = data.message;
  }
});

// Registry Status
const registry = document.getElementById('registry-status');
get('/api/services/registry').then((data) => {
  if (!data.success) {
    registry.innerHTML = 'Error loading status.';
    return;
  }
  if (data.isUp) {
    registry.innerHTML = 'No Issues'
  } else {
    registry.innerHTML = data.message;
  }
});

// Draft Status
const draft = document.getElementById('draft-status');
get('/api/services/draft').then((data) => {
  if (!data.success) {
    draft.innerHTML = 'Error loading status.';
    return;
  }
  if (data.isUp) {
    draft.innerHTML = 'No Issues'
  } else {
    draft.innerHTML = data.message;
  }
});
