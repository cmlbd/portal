# Centre for Media Literacy — Member Portal

A fully static web portal for the **Centre for Media Literacy (CML)**, built with pure HTML, CSS, and JavaScript. No backend required — all data is stored in `localStorage`.

## 🌐 Live Preview
Open `index.html` in any modern browser, or deploy to GitHub Pages.

## 🚀 Quick Start (GitHub Pages)
1. Fork / clone this repository
2. Go to **Settings → Pages → Source** → set to `main` branch, `/ (root)`
3. Your site will be live at `https://<username>.github.io/<repo>/portal/`

## 📁 File Structure
```
portal/
├── index.html          # Home page
├── courses.html        # Course listing
├── course-detail.html  # Individual course page
├── login.html          # Sign in
├── signup.html         # Register
├── dashboard.html      # Member dashboard
├── profile.html        # Profile management
├── assignments.html    # Assignments
├── admin-panel.html    # Admin / permission management
├── organogram.html     # Team & org chart
├── css/
│   └── style.css       # Full design system
└── js/
    ├── data.js         # localStorage database
    └── app.js          # Shared utilities
```

## 🔑 Default Login
| Role | ID | Password |
|---|---|---|
| Director | `CML-DIR-001` | `director123` |

## 🎓 Courses
- **Advanced Canva Designing — Part 1** (started 1 August 2026, offline)
- Enrolment open until **1 September 2026**
- Members must be signed in to enrol

## 👥 Roles
| Role | Access |
|---|---|
| **Director** | Full access, manage all, grant any permission |
| **Admin** | Assignments, member management, courses |
| **Advisor** | Submit assignments, own profile, enrol in courses |
| **Member** | Submit assignments, own profile, enrol in courses |

## ✅ Features
- Responsive design (mobile-friendly)
- Professional editorial design inspired by MRDI & SAJA
- Member registration with auto-generated IDs (e.g. `CML-MBR-001`)
- Course enrolment with countdown timer
- Assignment creation & submission with file attachments
- Admin panel with role & permission management
- Organisational chart (dynamic, from real member data)
- Photo upload for profiles
- All data persisted in `localStorage` — GitHub-compatible

## 📄 License
© 2026 Centre for Media Literacy. All rights reserved.
