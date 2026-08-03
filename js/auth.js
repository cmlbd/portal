// ============================================================
// auth.js — Authentication & Permission Management
// Centre for Media Literacy Portal
// ============================================================

const PERMISSIONS = {
  all:                'Full Access (All Permissions)',
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
  grant_permissions:  'Grant Permissions'
};

const ROLE_DEFAULTS = {
  director: ['all'],
  admin:    ['assign_assignments','view_assignments','view_profiles','manage_members','view_admin_panel','edit_own_profile','submit_assignments'],
  advisor:  ['view_assignments','submit_assignments','edit_own_profile'],
  member:   ['view_assignments','submit_assignments','edit_own_profile']
};

const Auth = {
  // ── Guard: redirect if not logged in ──
  requireAuth(redirectTo = 'login.html') {
    const user = DB.getCurrentUser();
    if (!user) {
      window.location.href = redirectTo;
      return null;
    }
    return DB.getUserById(user.id); // always get fresh copy
  },

  // ── Guard: redirect if role not allowed ──
  requireRole(roles, redirectTo = 'dashboard.html') {
    const user = this.requireAuth();
    if (!user) return null;
    if (this.hasPermission(user, 'all')) return user;
    if (!roles.includes(user.role)) {
      window.location.href = redirectTo;
      return null;
    }
    return user;
  },

  // ── Permission check ──
  hasPermission(user, permission) {
    if (!user) return false;

    // Director always has everything
    if (user.role === 'director') return true;

    // Custom permissions override
    const custom = user.customPermissions || [];
    if (custom.includes('all')) return true;
    if (custom.includes(permission)) return true;

    // Role defaults
    const defaults = ROLE_DEFAULTS[user.role] || [];
    return defaults.includes(permission);
  },

  // ── Get effective permissions list ──
  getEffectivePermissions(user) {
    if (!user) return [];
    if (user.role === 'director' || (user.customPermissions || []).includes('all')) {
      return Object.keys(PERMISSIONS);
    }
    const custom   = user.customPermissions || [];
    const defaults = ROLE_DEFAULTS[user.role] || [];
    return [...new Set([...defaults, ...custom])];
  },

  // ── Grant permission to user ──
  grantPermission(targetUserId, permission, grantedBy) {
    const granter = DB.getUserById(grantedBy);
    if (!granter || !this.hasPermission(granter, 'grant_permissions')) return false;

    const target = DB.getUserById(targetUserId);
    if (!target) return false;

    target.customPermissions = target.customPermissions || [];
    if (!target.customPermissions.includes(permission)) {
      target.customPermissions.push(permission);
    }
    DB.saveUser(target);
    return true;
  },

  // ── Revoke permission ──
  revokePermission(targetUserId, permission, revokedBy) {
    const revoker = DB.getUserById(revokedBy);
    if (!revoker || !this.hasPermission(revoker, 'grant_permissions')) return false;

    const target = DB.getUserById(targetUserId);
    if (!target) return false;

    target.customPermissions = (target.customPermissions || [])
      .filter(p => p !== permission);
    DB.saveUser(target);
    return true;
  },

  // ── Logout ──
  logout() {
    DB.clearCurrentUser();
    window.location.href = 'index.html';
  }
};
