// ============================================================
// app.js v2 — Shared UI Utilities (light theme)
// ============================================================

const PERMISSIONS = {
  all:                'Full Access',
  assign_assignments: 'Assign Assignments',
  view_assignments:   'View Assignments',
  submit_assignments: 'Submit Assignments',
  grade_assignments:  'Grade Submissions',
  view_profiles:      'View All Profiles',
  edit_own_profile:   'Edit Own Profile',
  manage_members:     'Manage Members',
  manage_admins:      'Manage Admins',
  manage_advisors:    'Manage Advisors',
  view_admin_panel:   'View Admin Panel',
  grant_permissions:  'Grant Permissions',
  manage_courses:     'Manage Courses'
};

const ROLE_DEFAULTS = {
  director: ['all'],
  admin:    ['assign_assignments','view_assignments','view_profiles','manage_members','view_admin_panel','edit_own_profile','submit_assignments','manage_courses'],
  advisor:  ['view_assignments','submit_assignments','edit_own_profile'],
  member:   ['view_assignments','submit_assignments','edit_own_profile']
};

const Auth = {
  requireAuth(redirectTo = 'login.html') {
    const user = DB.getCurrentUser();
    if (!user) { window.location.href = redirectTo; return null; }
    return DB.getUserById(user.id);
  },
  requireRole(roles, redirectTo = 'dashboard.html') {
    const user = this.requireAuth();
    if (!user) return null;
    if (this.hasPermission(user, 'all')) return user;
    if (!roles.includes(user.role)) { window.location.href = redirectTo; return null; }
    return user;
  },
  hasPermission(user, permission) {
    if (!user) return false;
    if (user.role === 'director') return true;
    const custom = user.customPermissions || [];
    if (custom.includes('all') || custom.includes(permission)) return true;
    return (ROLE_DEFAULTS[user.role] || []).includes(permission);
  },
  getEffectivePermissions(user) {
    if (!user) return [];
    if (user.role === 'director' || (user.customPermissions||[]).includes('all')) return Object.keys(PERMISSIONS);
    return [...new Set([...(ROLE_DEFAULTS[user.role]||[]), ...(user.customPermissions||[])])];
  },
  grantPermission(targetId, permission, granterId) {
    const granter = DB.getUserById(granterId);
    if (!granter || !this.hasPermission(granter,'grant_permissions')) return false;
    const target = DB.getUserById(targetId);
    if (!target) return false;
    target.customPermissions = target.customPermissions || [];
    if (!target.customPermissions.includes(permission)) target.customPermissions.push(permission);
    DB.saveUser(target); return true;
  },
  revokePermission(targetId, permission, revokerId) {
    const revoker = DB.getUserById(revokerId);
    if (!revoker || !this.hasPermission(revoker,'grant_permissions')) return false;
    const target = DB.getUserById(targetId);
    if (!target) return false;
    target.customPermissions = (target.customPermissions||[]).filter(p => p !== permission);
    DB.saveUser(target); return true;
  },
  logout() { DB.clearCurrentUser(); window.location.href = 'index.html'; }
};

const App = {
  init() {
    DB.init();
    this._initToasts();
    this._updateNavbar();
    this._initMobileNav();
    this._setActiveLinks();
  },

  _initToasts() {
    if (!document.getElementById('toast-container')) {
      const tc = document.createElement('div');
      tc.id = 'toast-container';
      tc.className = 'toast-container';
      document.body.appendChild(tc);
    }
  },

  showToast(message, type = 'success') {
    const tc    = document.getElementById('toast-container');
    const icons = { success:'✓', error:'✗', info:'ℹ', warning:'⚠' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type]||'ℹ'}</span><span class="toast-msg">${message}</span>`;
    tc.appendChild(toast);
    requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3500);
  },

  _updateNavbar() {
    const user = DB.getCurrentUser();
    const navAuth = document.getElementById('nav-auth');
    const navUser = document.getElementById('nav-user-section');
    if (!navAuth && !navUser) return;

    if (user) {
      const fresh = DB.getUserById(user.id);
      if (navAuth) navAuth.style.display = 'none';
      if (navUser) {
        navUser.style.display = 'flex';
        const nameEl   = document.getElementById('nav-user-name');
        const avatarEl = document.getElementById('nav-user-avatar');
        if (nameEl)   nameEl.textContent  = fresh.name;
        if (avatarEl) {
          if (fresh.photo) avatarEl.innerHTML = `<img src="${fresh.photo}" alt="">`;
          else             avatarEl.textContent = this.getInitials(fresh.name);
        }
      }
    } else {
      if (navAuth)  navAuth.style.display  = 'flex';
      if (navUser)  navUser.style.display  = 'none';
    }
  },

  _initMobileNav() {
    const toggle = document.getElementById('mobile-nav-toggle');
    const menu   = document.getElementById('mobile-nav-menu');
    const sidebar= document.getElementById('sidebar');
    const overlay= document.getElementById('sidebar-overlay');
    if (toggle && menu) {
      toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
    if (sidebar && overlay) {
      document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('hidden');
      });
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.add('hidden');
      });
    }
  },

  _setActiveLinks() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && (href === page || href.includes(page.split('.')[0]))) {
        link.classList.add('active');
      }
    });
  },

  getInitials(name) {
    if (!name) return '?';
    return name.trim().split(/\s+/).map(n=>n[0]).join('').toUpperCase().slice(0,2);
  },

  getRoleBadge(role) {
    const map = {
      director: `<span class="badge badge-director">⭐ Director</span>`,
      admin:    `<span class="badge badge-admin">🛡 Admin</span>`,
      advisor:  `<span class="badge badge-advisor">💡 Advisor</span>`,
      member:   `<span class="badge badge-member">👤 Member</span>`
    };
    return map[role] || `<span class="badge">${role}</span>`;
  },

  avatarHtml(user, size = 'md') {
    const sz  = { sm:'32px', md:'48px', lg:'80px', xl:'110px' }[size] || size;
    const fs  = { sm:'12px', md:'16px', lg:'26px',  xl:'32px' }[size] || '16px';
    const cls = user?.role || 'member';
    if (user?.photo) {
      return `<div style="width:${sz};height:${sz};border-radius:50%;overflow:hidden;flex-shrink:0"><img src="${user.photo}" alt="${user.name}" style="width:100%;height:100%;object-fit:cover"></div>`;
    }
    return `<div class="org-avatar ${cls}" style="width:${sz};height:${sz};font-size:${fs};flex-shrink:0">${this.getInitials(user?.name||'?')}</div>`;
  },

  formatDate(str) {
    if (!str) return 'N/A';
    return new Date(str).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });
  },
  formatDateTime(str) {
    if (!str) return 'N/A';
    return new Date(str).toLocaleString('en-GB', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
  },
  timeAgo(str) {
    if (!str) return '';
    const diff = Date.now() - new Date(str).getTime();
    const m = Math.floor(diff/60000);
    if (m < 1) return 'just now'; if (m < 60) return `${m}m ago`;
    const h = Math.floor(m/60);
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h/24);
    if (d < 30) return `${d}d ago`;
    return this.formatDate(str);
  },
  daysLeft(str) {
    if (!str) return null;
    return Math.ceil((new Date(str) - new Date()) / 86400000);
  },
  isDue(str) { return str && new Date(str) < new Date(); },

  openModal(id)  { document.getElementById(id)?.classList.add('open'); },
  closeModal(id) { document.getElementById(id)?.classList.remove('open'); },

  confirm(message, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';
    overlay.innerHTML = `
      <div class="modal" style="max-width:400px">
        <h3 class="modal-title">Confirm Action</h3>
        <p style="color:var(--text-muted);margin-bottom:24px;line-height:1.6;font-size:14px">${message}</p>
        <div class="flex gap-12">
          <button class="btn btn-danger btn-full" id="conf-yes">Confirm</button>
          <button class="btn btn-ghost btn-full" id="conf-no">Cancel</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#conf-yes').onclick = () => { overlay.remove(); onConfirm(); };
    overlay.querySelector('#conf-no').onclick  = () => overlay.remove();
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  },

  fileToBase64(file) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.readAsDataURL(file);
      r.onload  = () => res(r.result);
      r.onerror = rej;
    });
  },

  initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('[data-tabs]') || document;
        parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab)?.classList.add('active');
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
  document.querySelectorAll('.modal-overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
  });
});
