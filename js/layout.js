// ============================================================
// layout.js — Shared Header, Footer & Sidebar
// Centre for Media Literacy Portal
// ============================================================

const Layout = {

  // ── Public Navbar HTML ──
  publicNav(activePage = '') {
    return `
    <div class="topbar">
      <div class="container">
        <div class="topbar-inner">
          <div class="topbar-left">
            <span>📍 Dhaka, Bangladesh</span>
            <span class="topbar-hide-sm">📞 +880 1700-000000</span>
            <span class="topbar-hide-sm">✉️ info@cml.org</span>
          </div>
          <div class="topbar-right">
            <a href="#" style="color:rgba(255,255,255,0.65)">Facebook</a>
            <a href="#" style="color:rgba(255,255,255,0.65)">Twitter</a>
            <a href="#" style="color:rgba(255,255,255,0.65)">YouTube</a>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar" id="main-navbar">
      <div class="container nav-inner">
        <a href="index.html" class="nav-brand">
          <div class="nav-logo-box">CML</div>
          <div class="nav-brand-text">
            <span class="nav-brand-name">Centre for Media Literacy</span>
            <span class="nav-brand-tagline">Building Informed Minds</span>
          </div>
        </a>

        <div class="nav-menu" id="desktop-nav">
          <div class="nav-item"><a href="index.html"      class="nav-link ${activePage==='home'     ?'active':''}">Home</a></div>
          <div class="nav-item nav-dropdown">
            <a href="#" class="nav-link ${activePage==='about'?'active':''}">About ▾</a>
            <div class="nav-dropdown-menu">
              <a href="organogram.html"   class="nav-dropdown-link">Our Team & Organogram</a>
              <a href="index.html#mission" class="nav-dropdown-link">Mission & Vision</a>
              <a href="index.html#contact" class="nav-dropdown-link">Contact Us</a>
            </div>
          </div>
          <div class="nav-item"><a href="courses.html"    class="nav-link ${activePage==='courses'  ?'active':''}">Courses</a></div>
          <div class="nav-item"><a href="index.html#news" class="nav-link ${activePage==='news'     ?'active':''}">News</a></div>
          <div class="nav-item"><a href="organogram.html" class="nav-link ${activePage==='team'     ?'active':''}">Our Team</a></div>
          <div class="nav-item"><a href="index.html#contact" class="nav-link">Contact</a></div>
        </div>

        <div class="nav-actions" id="nav-auth">
          <a href="login.html"  class="btn btn-ghost btn-sm">Sign In</a>
          <a href="signup.html" class="btn btn-primary btn-sm">Join CML</a>
        </div>
        <div class="nav-actions" id="nav-user-section" style="display:none">
          <a href="dashboard.html" class="nav-user-chip" id="nav-user-chip-link">
            <div class="nav-avatar" id="nav-user-avatar"></div>
            <span class="nav-user-name" id="nav-user-name-text"></span>
          </a>
          <a href="dashboard.html" class="btn btn-dark btn-sm">Dashboard</a>
        </div>
        <button class="nav-mobile-toggle" id="mobile-nav-toggle">☰</button>
      </div>

      <!-- Mobile menu -->
      <div id="mobile-nav-menu" class="hidden" style="background:var(--primary);padding:12px 16px;border-top:1px solid rgba(255,255,255,0.1)">
        <a href="index.html"      class="mob-link">🏠 Home</a>
        <a href="courses.html"    class="mob-link">🎓 Courses</a>
        <a href="organogram.html" class="mob-link">🏢 Our Team</a>
        <a href="index.html#contact" class="mob-link">✉️ Contact</a>
        <div id="mob-auth-links" style="display:flex;gap:10px;padding:10px 0">
          <a href="login.html"  class="btn btn-outline-white btn-sm btn-full">Sign In</a>
          <a href="signup.html" class="btn btn-primary btn-sm btn-full">Join</a>
        </div>
        <div id="mob-user-links" style="display:none;padding:10px 0">
          <a href="dashboard.html" class="mob-link">📊 Dashboard</a>
          <a href="profile.html"   class="mob-link">👤 My Profile</a>
          <button onclick="Auth.logout()" class="mob-link" style="border:none;background:none;cursor:pointer;color:rgba(255,255,255,0.75);width:100%;text-align:left">🚪 Sign Out</button>
        </div>
      </div>
    </nav>`;
  },

  // ── Footer HTML ──
  footer() {
    const year = new Date().getFullYear();
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="flex gap-12 mb-16 items-center">
              <div style="width:42px;height:42px;background:rgba(200,146,42,0.18);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--accent-light);font-weight:900;font-size:14px;flex-shrink:0">CML</div>
              <div class="footer-brand-name">Centre for Media Literacy</div>
            </div>
            <p class="footer-brand-desc">Empowering citizens through critical media consumption, digital safety, and responsible media creation.</p>
            <div style="margin-top:16px;display:flex;gap:12px">
              <a href="#" style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;background:rgba(255,255,255,0.08);border-radius:8px;color:rgba(255,255,255,0.65);font-size:15px;text-decoration:none;transition:background 0.2s">f</a>
              <a href="#" style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;background:rgba(255,255,255,0.08);border-radius:8px;color:rgba(255,255,255,0.65);font-size:15px;text-decoration:none;transition:background 0.2s">𝕏</a>
              <a href="#" style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;background:rgba(255,255,255,0.08);border-radius:8px;color:rgba(255,255,255,0.65);font-size:15px;text-decoration:none;transition:background 0.2s">▶</a>
            </div>
          </div>
          <div>
            <h4>Portal</h4>
            <div class="footer-links">
              <a href="login.html"    class="footer-link">Member Login</a>
              <a href="signup.html"   class="footer-link">Register</a>
              <a href="courses.html"  class="footer-link">Courses</a>
              <a href="dashboard.html" class="footer-link">Dashboard</a>
              <a href="organogram.html" class="footer-link">Our Team</a>
            </div>
          </div>
          <div>
            <h4>Organisation</h4>
            <div class="footer-links">
              <a href="organogram.html"    class="footer-link">Meet the Team</a>
              <a href="index.html#mission" class="footer-link">About Us</a>
              <a href="index.html#news"    class="footer-link">News & Updates</a>
              <a href="index.html#contact" class="footer-link">Contact</a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div class="footer-links">
              <a href="mailto:info@cml.org"  class="footer-link">✉️ info@cml.org</a>
              <a href="tel:+8801700000000"   class="footer-link">📞 +880 1700-000000</a>
              <span class="footer-link" style="cursor:default">📍 Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} Centre for Media Literacy. All rights reserved.</span>
          <div class="flex gap-16" style="flex-wrap:wrap">
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">Terms of Use</a>
            <a href="index.html#contact" class="footer-link">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>`;
  },

  // ── Dashboard Sidebar HTML ──
  sidebar(activePage = '') {
    return `
    <aside class="sidebar" id="sidebar">
      <a href="index.html" class="sidebar-brand">
        <div class="sidebar-logo">CML</div>
        <div>
          <div class="sidebar-brand-name">Centre for Media Literacy</div>
          <div class="sidebar-brand-sub">Member Portal</div>
        </div>
      </a>
      <nav class="sidebar-nav">
        <div class="sidebar-section-label">Main</div>
        <a href="dashboard.html"   class="sidebar-link ${activePage==='dashboard'  ?'active':''}"><span class="sidebar-icon">🏠</span> Dashboard</a>
        <a href="profile.html"     class="sidebar-link ${activePage==='profile'    ?'active':''}"><span class="sidebar-icon">👤</span> My Profile</a>
        <a href="courses.html"     class="sidebar-link ${activePage==='courses'    ?'active':''}"><span class="sidebar-icon">🎓</span> Courses</a>
        <a href="assignments.html" class="sidebar-link ${activePage==='assignments'?'active':''}"><span class="sidebar-icon">📝</span> Assignments</a>
        <a href="organogram.html"  class="sidebar-link ${activePage==='team'       ?'active':''}"><span class="sidebar-icon">🏢</span> Our Team</a>

        <div class="sidebar-section-label" id="sb-admin-label" style="display:none">Administration</div>
        <a href="admin-panel.html" class="sidebar-link ${activePage==='admin'?'active':''}" id="sb-admin-link" style="display:none">
          <span class="sidebar-icon">🛡</span> Admin Panel
        </a>
      </nav>
      <div class="sidebar-footer">
        <div id="sb-user-info" style="padding:10px 12px 10px;border-top:1px solid rgba(255,255,255,0.08);margin-bottom:6px;display:flex;align-items:center;gap:10px">
          <div id="sb-avatar" style="width:34px;height:34px;border-radius:50%;background:rgba(200,146,42,0.2);border:1px solid rgba(200,146,42,0.3);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--accent-light);overflow:hidden;flex-shrink:0"></div>
          <div style="flex:1;min-width:0">
            <div id="sb-name" style="font-size:13px;font-weight:600;color:white;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></div>
            <div id="sb-role" style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:capitalize"></div>
          </div>
        </div>
        <button class="sidebar-link" onclick="Auth.logout()" style="border:none;background:rgba(192,57,43,0.15);border-radius:var(--radius-sm);width:100%;text-align:left;cursor:pointer;color:rgba(255,100,100,0.85)">
          <span class="sidebar-icon">🚪</span> Sign Out
        </button>
      </div>
    </aside>
    <div id="sidebar-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:399;backdrop-filter:blur(2px)" onclick="Layout.closeSidebar()"></div>`;
  },

  // ── Dashboard Top Bar ──
  dashTopbar(pageTitle = 'Dashboard') {
    return `
    <div class="dash-topbar">
      <div class="flex items-center gap-12">
        <button id="sidebar-toggle" class="nav-mobile-toggle" style="display:flex" onclick="Layout.toggleSidebar()">☰</button>
        <div>
          <div style="font-weight:700;font-size:14px;color:var(--text-dark)" id="dash-greeting">Welcome!</div>
          <div style="font-size:11px;color:var(--text-muted)" id="dash-date"></div>
        </div>
      </div>
      <div class="flex items-center gap-10">
        <a href="index.html" class="btn btn-ghost btn-sm" title="Public site">🌐</a>
        <a href="profile.html" class="nav-user-chip" id="dash-user-chip">
          <div class="nav-avatar" id="dash-avatar"></div>
          <span class="nav-user-name" id="dash-name-text"></span>
        </a>
      </div>
    </div>`;
  },

  // ── Init: Public Pages ──
  initPublic(activePage = '') {
    // Inject nav before body content
    const navEl = document.createElement('div');
    navEl.innerHTML = this.publicNav(activePage);
    document.body.insertBefore(navEl, document.body.firstChild);

    // Inject footer at end
    const footerEl = document.createElement('div');
    footerEl.innerHTML = this.footer();
    document.body.appendChild(footerEl);

    // Mobile toggle
    document.getElementById('mobile-nav-toggle')?.addEventListener('click', () => {
      document.getElementById('mobile-nav-menu')?.classList.toggle('hidden');
    });

    // Update nav auth state
    this._updatePublicAuth();
  },

  // ── Init: Dashboard Pages ──
  initDashboard(activePage = '', pageTitle = '') {
    // Auth check first
    const user = Auth.requireAuth();
    if (!user) return null;
    const fresh = DB.getUserById(user.id);

    // Sidebar
    const sideEl = document.createElement('div');
    sideEl.innerHTML = this.sidebar(activePage);
    document.body.insertBefore(sideEl, document.body.firstChild);

    // Topbar
    const topEl = document.createElement('div');
    topEl.innerHTML = this.dashTopbar(pageTitle);
    const dashMain = document.getElementById('dash-main-content');
    if (dashMain) dashMain.insertBefore(topEl, dashMain.firstChild);

    // Admin links
    if (Auth.hasPermission(fresh, 'view_admin_panel')) {
      document.getElementById('sb-admin-label')?.style && (document.getElementById('sb-admin-label').style.display = '');
      document.getElementById('sb-admin-link')?.style  && (document.getElementById('sb-admin-link').style.display  = '');
    }

    // Sidebar user info
    const sbAv   = document.getElementById('sb-avatar');
    const sbName = document.getElementById('sb-name');
    const sbRole = document.getElementById('sb-role');
    if (sbAv)   { if (fresh.photo) sbAv.innerHTML=`<img src="${fresh.photo}" alt="" style="width:100%;height:100%;object-fit:cover">`; else sbAv.textContent=App.getInitials(fresh.name); }
    if (sbName) sbName.textContent = fresh.name;
    if (sbRole) sbRole.textContent = fresh.designation || fresh.role;

    // Topbar user
    const dAv = document.getElementById('dash-avatar');
    const dNm = document.getElementById('dash-name-text');
    if (dAv) { if(fresh.photo) dAv.innerHTML=`<img src="${fresh.photo}" alt="" style="width:100%;height:100%;object-fit:cover">`; else dAv.textContent=App.getInitials(fresh.name); }
    if (dNm) dNm.textContent = fresh.name;

    // Greeting
    const hr = new Date().getHours();
    const gr = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';
    const grEl = document.getElementById('dash-greeting');
    const dtEl = document.getElementById('dash-date');
    if (grEl) grEl.textContent = `${gr}, ${fresh.name.split(' ')[0]}!`;
    if (dtEl) dtEl.textContent = App.formatDate(new Date().toISOString());

    // Mobile sidebar
    document.getElementById('sidebar-toggle')?.addEventListener('click', () => this.toggleSidebar());

    return fresh;
  },

  toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebar-overlay');
    if (sb) sb.classList.toggle('open');
    if (ov) ov.style.display = sb?.classList.contains('open') ? 'block' : 'none';
  },
  closeSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebar-overlay');
    if (sb) sb.classList.remove('open');
    if (ov) ov.style.display = 'none';
  },

  _updatePublicAuth() {
    const user = DB.getCurrentUser();
    const navAuth = document.getElementById('nav-auth');
    const navUser = document.getElementById('nav-user-section');
    const mobAuth = document.getElementById('mob-auth-links');
    const mobUser = document.getElementById('mob-user-links');

    if (user) {
      const fresh = DB.getUserById(user.id);
      if (navAuth) navAuth.style.display = 'none';
      if (navUser) navUser.style.display = 'flex';
      if (mobAuth) mobAuth.style.display = 'none';
      if (mobUser) mobUser.style.display = 'block';
      const av = document.getElementById('nav-user-avatar');
      const nm = document.getElementById('nav-user-name-text');
      if (av) { if(fresh?.photo) av.innerHTML=`<img src="${fresh.photo}" alt="" style="width:100%;height:100%;object-fit:cover">`; else av.textContent=App.getInitials(fresh?.name||'?'); }
      if (nm) nm.textContent = fresh?.name || '';
    } else {
      if (navAuth) navAuth.style.display = 'flex';
      if (navUser) navUser.style.display = 'none';
    }
  }
};

// Mobile nav link style
const mobStyle = document.createElement('style');
mobStyle.textContent = `
  .mob-link { display:block; padding:9px 0; color:rgba(255,255,255,0.75); font-size:14px; font-weight:500; text-decoration:none; border-bottom:1px solid rgba(255,255,255,0.07); transition:color 0.2s; }
  .mob-link:hover { color:var(--accent-light); }
  .topbar-hide-sm { }
  @media(max-width:600px) { .topbar-hide-sm { display:none; } }
`;
document.head.appendChild(mobStyle);
