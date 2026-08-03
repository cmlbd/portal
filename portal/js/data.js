// ============================================================
// data.js v7 — Pre-seeded Accounts for Cross-Browser Login
// Centre for Media Literacy Portal
// ============================================================

const DB = {
  KEYS: {
    USERS:        'cml_users',
    ASSIGNMENTS:  'cml_assignments',
    COURSES:      'cml_courses',
    ENROLLMENTS:  'cml_enrollments',
    CANVA_TASKS:  'cml_canva_tasks',
    CANVA_SUBS:   'cml_canva_subs',
    CERTIFICATES: 'cml_certificates',
    EXAM_RESULTS: 'cml_exam_results',
    CURRENT_USER: 'cml_current_user'
  },

  init() {
    // Pre-seed accounts so ANY browser can log in immediately
    if (!localStorage.getItem(this.KEYS.USERS)) {
      localStorage.setItem(this.KEYS.USERS, JSON.stringify([
        {
          id: 'CML-DIR-001', password: 'director123',
          role: 'director', name: 'Director General',
          email: 'director@cml.org', phone: '+880 1700-000001',
          bio: 'Director General of Centre for Media Literacy. Leading the organisation towards a media-literate society.',
          photo: null, designation: 'Director General',
          department: 'Management',
          joinDate: '2024-01-01',
          customPermissions: ['all'],
          createdAt: new Date().toISOString()
        },
        {
          id: 'CML-ADM-001', password: 'admin123',
          role: 'admin', name: 'Executive Administrator',
          email: 'admin@cml.org', phone: '+880 1700-000002',
          bio: 'Administrator of CML Portal.',
          photo: null, designation: 'System Admin',
          department: 'Administration',
          joinDate: '2024-01-05',
          customPermissions: ['assign_assignments','view_assignments','view_profiles','manage_members','view_admin_panel','manage_courses'],
          createdAt: new Date().toISOString()
        },
        {
          id: 'CML-ADV-001', password: 'advisor123',
          role: 'advisor', name: 'Media Advisor',
          email: 'advisor@cml.org', phone: '+880 1700-000003',
          bio: 'Senior Media Advisory Board Member.',
          photo: null, designation: 'Senior Advisor',
          department: 'Advisory',
          joinDate: '2024-01-10',
          customPermissions: [],
          createdAt: new Date().toISOString()
        },
        {
          id: 'CML-MBR-001', password: 'member123',
          role: 'member', name: 'General Member',
          email: 'member@cml.org', phone: '+880 1700-000004',
          bio: 'Active member of Centre for Media Literacy.',
          photo: null, designation: 'Media Activist',
          department: 'General Member',
          joinDate: '2024-02-01',
          customPermissions: [],
          createdAt: new Date().toISOString()
        }
      ]));
    }

    if (!localStorage.getItem(this.KEYS.ASSIGNMENTS)) {
      localStorage.setItem(this.KEYS.ASSIGNMENTS, JSON.stringify([]));
    }

    if (!localStorage.getItem(this.KEYS.COURSES)) {
      const enrollDeadline = new Date('2026-09-01').toISOString().split('T')[0];
      localStorage.setItem(this.KEYS.COURSES, JSON.stringify([
        {
          id: 'CML-CRS-001',
          title: 'Advanced Canva Designing — Part 1',
          slug: 'advanced-canva-designing-part-1',
          category: 'Design',
          description: 'A comprehensive training course on advanced Canva design techniques, covering professional graphic design, social media content creation, infographics, presentations, and branding materials.',
          instructor: 'CML-DIR-001',
          instructorName: 'Director General',
          emoji: '🎨',
          startDate: '2026-08-01',
          enrollDeadline: enrollDeadline,
          duration: '4 Weeks',
          format: 'Offline (Physical)',
          level: 'Advanced',
          language: 'Bangla',
          seats: 30,
          enrolled: 1,
          fee: 'Free for Members',
          outcomes: [
            'Master Canva tools & templates for news card creation',
            'Recreate professional editorial designs',
            'Produce self-reported news cards for media publications'
          ],
          syllabus: [
            { week: 1, title: 'Recreating Reference Designs', topics: ['Canva Layouts','Typography & Colors','Image Alignment'] },
            { week: 2, title: 'News Card Creation', topics: ['Headline Design','Branding','Social Media Sizing'] }
          ],
          status: 'active',
          type: 'offline',
          createdAt: '2026-08-01T00:00:00.000Z'
        }
      ]));
    }

    if (!localStorage.getItem(this.KEYS.ENROLLMENTS)) {
      // Pre-enroll default member CML-MBR-001 so they are ready
      localStorage.setItem(this.KEYS.ENROLLMENTS, JSON.stringify([
        { userId: 'CML-MBR-001', courseId: 'CML-CRS-001', enrolledAt: new Date().toISOString(), progress: 0, completed: false }
      ]));
    }

    // ── 11 Renamed Photos (1.jpg to 11.jpg / 1.png to 11.png in folder) ──
    const tasks = [
      // Question 1: 11 Designs
      { id: 'Q1-TASK-01', question: 1, num: 1, title: 'Recreate Reference Design #1', filename: '1', deadline: '2026-08-06', points: 10 },
      { id: 'Q1-TASK-02', question: 1, num: 2, title: 'Recreate Reference Design #2', filename: '2', deadline: '2026-08-06', points: 10 },
      { id: 'Q1-TASK-03', question: 1, num: 3, title: 'Recreate Reference Design #3', filename: '3', deadline: '2026-08-06', points: 10 },

      { id: 'Q1-TASK-04', question: 1, num: 4, title: 'Recreate Reference Design #4', filename: '4', deadline: '2026-08-09', points: 10 },
      { id: 'Q1-TASK-05', question: 1, num: 5, title: 'Recreate Reference Design #5', filename: '5', deadline: '2026-08-09', points: 10 },
      { id: 'Q1-TASK-06', question: 1, num: 6, title: 'Recreate Reference Design #6', filename: '6', deadline: '2026-08-09', points: 10 },

      { id: 'Q1-TASK-07', question: 1, num: 7, title: 'Recreate Reference Design #7', filename: '7', deadline: '2026-08-16', points: 10 },
      { id: 'Q1-TASK-08', question: 1, num: 8, title: 'Recreate Reference Design #8', filename: '8', deadline: '2026-08-16', points: 10 },
      { id: 'Q1-TASK-09', question: 1, num: 9, title: 'Recreate Reference Design #9', filename: '9', deadline: '2026-08-16', points: 10 },
      { id: 'Q1-TASK-10', question: 1, num: 10, title: 'Recreate Reference Design #10', filename: '10', deadline: '2026-08-16', points: 10 },
      { id: 'Q1-TASK-11', question: 1, num: 11, title: 'Recreate Reference Design #11', filename: '11', deadline: '2026-08-16', points: 10 },

      // Question 2: 4 Self-Reported News Cards
      { id: 'Q2-TASK-01', question: 2, num: 1, title: 'News Card #1 (Own Report)', deadline: '2026-08-20', points: 15 },
      { id: 'Q2-TASK-02', question: 2, num: 2, title: 'News Card #2 (Own Report)', deadline: '2026-08-20', points: 15 },
      { id: 'Q2-TASK-03', question: 2, num: 3, title: 'News Card #3 (Own Report)', deadline: '2026-08-20', points: 15 },
      { id: 'Q2-TASK-04', question: 2, num: 4, title: 'News Card #4 (Own Report)', deadline: '2026-08-20', points: 15 }
    ];
    localStorage.setItem(this.KEYS.CANVA_TASKS, JSON.stringify(tasks));

    if (!localStorage.getItem(this.KEYS.CANVA_SUBS)) {
      localStorage.setItem(this.KEYS.CANVA_SUBS, JSON.stringify([]));
    }

    if (!localStorage.getItem(this.KEYS.CERTIFICATES)) {
      localStorage.setItem(this.KEYS.CERTIFICATES, JSON.stringify([]));
    }

    if (!localStorage.getItem(this.KEYS.EXAM_RESULTS)) {
      localStorage.setItem(this.KEYS.EXAM_RESULTS, JSON.stringify([]));
    }
  },

  // ── USERS ──
  getUsers()              { return JSON.parse(localStorage.getItem(this.KEYS.USERS)) || []; },
  getUserById(id)         { return this.getUsers().find(u => u.id === id) || null; },
  getUsersByRole(role)    { return this.getUsers().filter(u => u.role === role); },
  saveUser(user) {
    const list = this.getUsers();
    const idx  = list.findIndex(u => u.id === user.id);
    if (idx >= 0) list[idx] = { ...list[idx], ...user };
    else list.push(user);
    localStorage.setItem(this.KEYS.USERS, JSON.stringify(list));
  },
  deleteUser(id) {
    localStorage.setItem(this.KEYS.USERS, JSON.stringify(this.getUsers().filter(u => u.id !== id)));
  },
  generateId(role) {
    const pre = { director:'DIR', admin:'ADM', advisor:'ADV', member:'MBR' };
    const p   = pre[role] || 'USR';
    const nums = this.getUsers().filter(u => u.role === role).map(u => parseInt(u.id.split('-')[2]) || 0);
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return `CML-${p}-${String(next).padStart(3,'0')}`;
  },
  isEmailTaken(email, excludeId = null) {
    return this.getUsers().some(u => u.email?.toLowerCase() === email.toLowerCase() && u.id !== excludeId);
  },
  login(id, password) {
    const user = this.getUserById(id.trim().toUpperCase());
    if (user && user.password === password) { this.setCurrentUser(user.id); return user; }
    return null;
  },

  // ── CANVA COURSE TASKS & SUBMISSIONS ──
  getCanvaTasks() {
    return JSON.parse(localStorage.getItem(this.KEYS.CANVA_TASKS)) || [];
  },
  getCanvaSubmissions() {
    return JSON.parse(localStorage.getItem(this.KEYS.CANVA_SUBS)) || [];
  },
  getCanvaSubmission(taskId, userId) {
    return this.getCanvaSubmissions().find(s => s.taskId === taskId && s.userId === userId) || null;
  },
  submitCanvaTask(taskId, userId, data) {
    const subs = this.getCanvaSubmissions();
    const idx  = subs.findIndex(s => s.taskId === taskId && s.userId === userId);
    const subObj = {
      taskId,
      userId,
      submittedAt: new Date().toISOString(),
      imageData: data.imageData,
      fileName: data.fileName || 'design.png',
      notes: data.notes || '',
      status: 'submitted',
      marks: null,
      feedback: null,
      gradedBy: null,
      gradedAt: null
    };
    if (idx >= 0) {
      subs[idx] = { ...subs[idx], ...subObj, status: 'submitted' };
    } else {
      subs.push(subObj);
    }
    localStorage.setItem(this.KEYS.CANVA_SUBS, JSON.stringify(subs));
  },
  gradeCanvaSubmission(taskId, userId, gradeData) {
    const subs = this.getCanvaSubmissions();
    const idx  = subs.findIndex(s => s.taskId === taskId && s.userId === userId);
    if (idx >= 0) {
      subs[idx].marks = gradeData.marks;
      subs[idx].feedback = gradeData.feedback;
      subs[idx].status = gradeData.status;
      subs[idx].gradedBy = gradeData.gradedBy || 'CML-DIR-001';
      subs[idx].gradedAt = new Date().toISOString();
      localStorage.setItem(this.KEYS.CANVA_SUBS, JSON.stringify(subs));
      return true;
    }
    return false;
  },

  // ── EXAM & CERTIFICATE LOCKING ──
  getExamResults() {
    return JSON.parse(localStorage.getItem(this.KEYS.EXAM_RESULTS)) || [];
  },
  getExamResult(userId, courseId) {
    return this.getExamResults().find(r => r.userId === userId && r.courseId === courseId) || null;
  },
  saveExamResult(userId, courseId, data) {
    const results = this.getExamResults();
    const idx = results.findIndex(r => r.userId === userId && r.courseId === courseId);
    const obj = {
      userId,
      courseId,
      writtenExamPassed: data.writtenExamPassed || false,
      examMarks: data.examMarks || 0,
      approvedForCertificate: data.approvedForCertificate || false,
      gradedBy: 'CML-DIR-001',
      gradedAt: new Date().toISOString()
    };
    if (idx >= 0) results[idx] = obj;
    else results.push(obj);
    localStorage.setItem(this.KEYS.EXAM_RESULTS, JSON.stringify(results));
  },

  getCertificates() {
    return JSON.parse(localStorage.getItem(this.KEYS.CERTIFICATES)) || [];
  },
  getCertificate(userId, courseId) {
    return this.getCertificates().find(c => c.userId === userId && c.courseId === courseId) || null;
  },

  checkEligibility(userId, courseId) {
    const user = this.getUserById(userId);
    if (!user) return { eligible: false, reason: 'User not found' };

    if (user.role === 'director') return { eligible: true, isDirector: true };

    const cert = this.getCertificate(userId, courseId);
    if (cert) return { eligible: true, cert };

    const exam = this.getExamResult(userId, courseId);
    const tasks = this.getCanvaTasks();
    const userSubs = this.getCanvaSubmissions().filter(s => s.userId === userId && (s.status === 'marked' || s.status === 'submitted'));

    const allTasksSubmitted = userSubs.length >= tasks.length;
    const examPassed = exam ? exam.writtenExamPassed || exam.approvedForCertificate : false;

    if (allTasksSubmitted && examPassed) {
      return { eligible: true, allTasksSubmitted, examPassed };
    }

    return {
      eligible: false,
      allTasksSubmitted,
      examPassed,
      totalTasks: tasks.length,
      submittedTasks: userSubs.length,
      missingCount: tasks.length - userSubs.length,
      reason: !allTasksSubmitted 
        ? `You have submitted ${userSubs.length}/${tasks.length} assignments. Complete all 15 tasks first.`
        : `Written exam not completed or approved by Director General yet.`
    };
  },

  issueCertificate(userId, courseId, grade = 'A+') {
    const eligibility = this.checkEligibility(userId, courseId);
    if (!eligibility.eligible) return null;

    const certs = this.getCertificates();
    let existing = certs.find(c => c.userId === userId && c.courseId === courseId);
    if (!existing) {
      const num = String(certs.length + 1).padStart(4, '0');
      existing = {
        id: `CML-CERT-2026-${num}`,
        userId,
        courseId,
        issuedAt: new Date().toISOString(),
        grade,
        issuedBy: 'CML-DIR-001',
        status: 'approved'
      };
      certs.push(existing);
      localStorage.setItem(this.KEYS.CERTIFICATES, JSON.stringify(certs));
    }
    return existing;
  },

  // ── COURSES ──
  getCourses()              { return JSON.parse(localStorage.getItem(this.KEYS.COURSES)) || []; },
  getCourseById(id)         { return this.getCourses().find(c => c.id === id) || null; },
  getCourseBySlug(slug)     { return this.getCourses().find(c => c.slug === slug) || null; },
  saveCourse(course) {
    const list = this.getCourses();
    const idx  = list.findIndex(c => c.id === course.id);
    if (idx >= 0) list[idx] = { ...list[idx], ...course }; else list.push(course);
    localStorage.setItem(this.KEYS.COURSES, JSON.stringify(list));
  },
  deleteCourse(id) {
    localStorage.setItem(this.KEYS.COURSES, JSON.stringify(this.getCourses().filter(c => c.id !== id)));
  },

  // ── ENROLLMENTS ──
  getEnrollments()          { return JSON.parse(localStorage.getItem(this.KEYS.ENROLLMENTS)) || []; },
  getEnrollmentsByUser(uid) { return this.getEnrollments().filter(e => e.userId === uid); },
  getEnrollmentsByCourse(cid){ return this.getEnrollments().filter(e => e.courseId === cid); },
  isEnrolled(userId, courseId) {
    return this.getEnrollments().some(e => e.userId === userId && e.courseId === courseId);
  },
  enroll(userId, courseId) {
    if (this.isEnrolled(userId, courseId)) return false;
    const enrollments = this.getEnrollments();
    enrollments.push({ userId, courseId, enrolledAt: new Date().toISOString(), progress: 0, completed: false });
    localStorage.setItem(this.KEYS.ENROLLMENTS, JSON.stringify(enrollments));
    const course = this.getCourseById(courseId);
    if (course) { course.enrolled = (course.enrolled || 0) + 1; this.saveCourse(course); }
    return true;
  },

  // ── SESSION ──
  getCurrentUser()    { const id = sessionStorage.getItem(this.KEYS.CURRENT_USER); return id ? this.getUserById(id) : null; },
  setCurrentUser(id)  { sessionStorage.setItem(this.KEYS.CURRENT_USER, id); },
  clearCurrentUser()  { sessionStorage.removeItem(this.KEYS.CURRENT_USER); }
};
