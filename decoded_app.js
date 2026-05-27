ï»؟/**
 * Smart EPS - High School Edition (v2.0)
 * Core Logic Engine
 */

// ==========================================
// 1. Translation System & Localization Dictionary
// ==========================================
const TRANSLATIONS = {
    ar: {
        "app-subtitle": "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ - ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½U?",
        "menu-dashboard": "Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½?ï؟½",
        "menu-students": "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½",
        "menu-grading": "?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½",
        "menu-settings": "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½??",
        "title-dashboard": "Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½",
        "title-classes": "???ï؟½U?U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½",
        "title-grading": "?ï؟½U????ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½",
        "title-settings": "?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½",
        "status-classes": "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½:",
        "status-students": "?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½:",
        "status-attendance": "?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?:",
        "dash-total-classes": "?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½",
        "dash-total-students": "?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½",
        "dash-avg-attendance": "Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½",
        "dash-avg-grade": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½",
        "dash-panel-leaderboard": "???ï؟½??U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½",
        "dash-panel-info": "?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U? ?ï؟½Uï؟½U?Uï؟½Uï؟½U?",
        "dash-quote-title": "?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½U?",
        "dash-quote-text": "Aï؟½?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ U?U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½Aï؟½. ???ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ U?U? ?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½?ï؟½ ???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ U?U? ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½.",
        "dash-quick-links": "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½U??ï؟½?ï؟½",
        "btn-add-student": "?ï؟½?ï؟½?ï؟½U??ï؟½ ??Uï؟½Uï؟½U??ï؟½",
        "btn-evaluate": "??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½",
        "th-class": "?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?",
        "th-students-count": "?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½",
        "th-attendance": "Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½",
        "th-avg-score": "Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½",
        "th-actions": "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½???ï؟½??",
        "lbl-select-class": "?ï؟½?ï؟½???ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:",
        "btn-new-class": "Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½U??ï؟½",
        "btn-new-student": "??Uï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½U??ï؟½",
        "btn-import-excel": "?ï؟½?ï؟½??U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½ (XLSX)",
        "btn-export-class": "???ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½",
        "btn-export-all": "???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½",
        "btn-delete-class-text": "?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½",
        "roster-panel-title": "??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½:",
        "badge-boys": "?ï؟½Uï؟½Uï؟½?ï؟½:",
        "badge-girls": "?ï؟½Uï؟½?ï؟½?ï؟½:",
        "badge-exempted": "?ï؟½?ï؟½U??ï؟½?? Uï؟½Uï؟½U?:",
        "th-student-lastname": "?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½",
        "th-student-firstname": "?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½",
        "th-gender": "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½",
        "th-birthdate": "???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½U?Uï؟½?ï؟½?ï؟½",
        "th-student-phone": "?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½??U? ?ï؟½Uï؟½Uï؟½Uï؟½U?",
        "th-exemptions-status": "?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½???ï؟½?? (U?1/U?2/U?3)",
        "lbl-select-term": "?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:",
        "lbl-ind-sport": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U?:",
        "lbl-col-sport": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?:",
        "btn-save-all-grades": "?ï؟½U??ï؟½ ?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½",
        "menu-continuous": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½?ï؟½",
        "menu-assignment": "?ï؟½Uï؟½U??ï؟½?ï؟½",
        "menu-exam": "?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½",
        "menu-summary": "Uï؟½?ï؟½U? ?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?",
        "lbl-school": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:",
        "lbl-teacher": "?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½:",
        "lbl-year": "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½:",
        "btn-undo": "???ï؟½?ï؟½?ï؟½?ï؟½",
        "btn-guide": "?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½Uï؟½",
        "btn-scales": "?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½",
        "btn-export-backup": "Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½??U??ï؟½?ï؟½U??ï؟½",
        "btn-import-backup": "?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½",
        "btn-archive": "?ï؟½?ï؟½?ï؟½U?U? Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½U??ï؟½?ï؟½",
        "btn-config-activities": "?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½U??ï؟½Uï؟½Uï؟½",
        "modal-class-title": "?ï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½U??ï؟½",
        "lbl-class-name": "?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ (Uï؟½?ï؟½?ï؟½Uï؟½: 1 ?ï؟½ Uï؟½ ?ï؟½ ?? 1 ?ï؟½Uï؟½ 3 ?ï؟½ ?? 2):",
        "lbl-class-grade": "?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½:",
        "btn-cancel": "?ï؟½Uï؟½???ï؟½??",
        "btn-confirm": "???ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½U??ï؟½",
        "modal-student-title": "?ï؟½?ï؟½?ï؟½U??ï؟½ / ???ï؟½?ï؟½U?Uï؟½ ?ï؟½U??ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½",
        "lbl-student-phone": "?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½??U? ?ï؟½Uï؟½Uï؟½Uï؟½U? (Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½):",
        "lbl-exemptions": "?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½Uï؟½:",
        "gender-m": "?ï؟½Uï؟½?ï؟½",
        "gender-f": "?ï؟½Uï؟½?ï؟½Uï؟½",
        "term-1": "?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½",
        "term-2": "?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?",
        "term-3": "?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½",
        "edit": "???ï؟½?ï؟½U?Uï؟½",
        "delete": "?ï؟½?ï؟½U?",
        "saved-success": "??Uï؟½ ?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!",
        "reset-confirm": "Uï؟½Uï؟½ ?ï؟½Uï؟½?? Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ??Uï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U?Uï؟½?? ?ï؟½U???Uï؟½ ?ï؟½?ï؟½U? Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½Uï؟½?ï؟½?? Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½.",
        "class-delete-confirm": "Uï؟½Uï؟½ ?ï؟½Uï؟½?? Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?? ?ï؟½U???Uï؟½ ?ï؟½?ï؟½U? ?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½ Uï؟½?ï؟½ Uï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½.",
        "csv-imported-success": "??Uï؟½ ?ï؟½?ï؟½??U??ï؟½?ï؟½?ï؟½ {count} ??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!",
        "invalid-csv-format": "Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ??U??ï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½. U??ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½???ï؟½??U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ (?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½) U?U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½.",
        "student-added-success": "??Uï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!",
        "student-updated-success": "??Uï؟½ ???ï؟½?ï؟½U??ï؟½ ?ï؟½U??ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!",
        "class-added-success": "??Uï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!",
        "backup-imported-success": "??Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??U??ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!",
        "invalid-backup-file": "Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ??U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½.",
        "no-students-in-class": "Uï؟½?ï؟½ U?Uï؟½?ï؟½?ï؟½ ??Uï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U?Uï؟½ U?U? Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½.",
        "sport-speed-run": "?ï؟½?ï؟½?ï؟½?ï؟½ (60Uï؟½)",
        "sport-endurance": "Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½ (800Uï؟½ / 600Uï؟½)",
        "sport-long-jump": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½",
        "sport-shot-put": "?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½",
        "sport-triple-jump": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?",
        "sport-volleyball": "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½",
        "sport-handball": "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½",
        "sport-basketball": "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½",
        "th-performance": "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½",
        "th-calculated-grade": "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½U?",
        "exempted-abrv": "Uï؟½?ï؟½U?Uï؟½",
        "active-abrv": "Uï؟½?ï؟½Uï؟½Uï؟½",
        "btn-close": "?ï؟½??Uï؟½?ï؟½Uï؟½",
        "manual-title": "?ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½Uï؟½ ???ï؟½?ï؟½U?Uï؟½ Smart EPS",
        "scale-manager-title": "???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½",
        "modal-config-activities-title": "??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½U??ï؟½Uï؟½Uï؟½",
        "menu-pedagogical": "?ï؟½Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U?",
        "title-pedagogical": "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½"
    },
    fr: {
        "app-subtitle": "Gestion de l'EPS - Enseignement Secondaire",
        "menu-dashboard": "Tableau de bord",
        "menu-students": "Classes & ?ï؟½l?ï؟½ves",
        "menu-grading": "Notes & ?ï؟½valuations",
        "menu-settings": "Param?ï؟½tres",
        "title-dashboard": "Tableau de Bord G?ï؟½n?ï؟½ral",
        "title-classes": "Gestion des Classes & ?ï؟½l?ï؟½ves",
        "title-grading": "Carnet de Notes & R?ï؟½sultats",
        "title-settings": "Param?ï؟½tres de l'Application",
        "status-classes": "Classes:",
        "status-students": "?ï؟½l?ï؟½ves:",
        "status-attendance": "Pr?ï؟½sence Annuelle:",
        "dash-total-classes": "Total des Classes",
        "dash-total-students": "Total des ?ï؟½l?ï؟½ves",
        "dash-avg-attendance": "Taux de Pr?ï؟½sence Annuel",
        "dash-avg-grade": "Moyenne Annuelle G?ï؟½n?ï؟½rale",
        "dash-panel-leaderboard": "Classement des Classes par R?ï؟½sultats Annuels",
        "dash-panel-info": "Orientation P?ï؟½dagogique Quotidienne",
        "dash-quote-title": "Sport Scolaire au Lyc?ï؟½e",
        "dash-quote-text": "Aï؟½ Un esprit sain dans un corps sain Aï؟½. L'?ï؟½ducation physique et sportive (EPS) contribue ?ï؟½ forger la personnalit?ï؟½ de l'?ï؟½l?ï؟½ve, ?ï؟½ renforcer la discipline et ?ï؟½ d?ï؟½velopper les aptitudes physiques.",
        "dash-quick-links": "Raccourcis Rapides",
        "btn-add-student": "Ajouter ?ï؟½l?ï؟½ve",
        "btn-evaluate": "?ï؟½valuer Classe",
        "th-class": "Classe",
        "th-students-count": "Nombre d'?ï؟½l?ï؟½ves",
        "th-attendance": "Taux Pr?ï؟½sence",
        "th-avg-score": "Moyenne Classe",
        "th-actions": "Actions",
        "lbl-select-class": "S?ï؟½lectionner la classe:",
        "btn-new-class": "Nouvelle Classe",
        "btn-new-student": "Nouvel ?ï؟½l?ï؟½ve",
        "btn-import-excel": "Importer Excel (XLSX)",
        "btn-export-class": "Exporter Fiche Classe",
        "btn-export-all": "Exporter Toutes les Classes",
        "btn-delete-class-text": "Supprimer Classe",
        "roster-panel-title": "?ï؟½l?ï؟½ves de la classe:",
        "badge-boys": "Gar?ï؟½ons:",
        "badge-girls": "Filles:",
        "badge-exempted": "Exempt?ï؟½s Totaux:",
        "th-student-lastname": "Nom",
        "th-student-firstname": "Pr?ï؟½nom",
        "th-gender": "Genre",
        "th-birthdate": "Date de Naissance",
        "th-student-phone": "T?ï؟½l. Tuteur",
        "th-exemptions-status": "Exemptions (T1/T2/T3)",
        "lbl-select-term": "Trimestre:",
        "lbl-ind-sport": "Activit?ï؟½ Individuelle:",
        "lbl-col-sport": "Activit?ï؟½ Collective:",
        "btn-save-all-grades": "Enregistrer Notes",
        "menu-continuous": "Contr?ï؟½le Continu",
        "menu-assignment": "Devoir",
        "menu-exam": "Composition",
        "menu-summary": "Fiche Trimestrielle",
        "lbl-school": "Lyc?ï؟½e:",
        "lbl-teacher": "Enseignant:",
        "lbl-year": "Ann?ï؟½e Scolaire:",
        "btn-undo": "Annuler",
        "btn-guide": "Guide d'utilisation",
        "btn-scales": "Bar?ï؟½mes",
        "btn-export-backup": "Sauvegarde",
        "btn-import-backup": "Restaurer",
        "btn-archive": "Archiver & Nouvelle Ann?ï؟½e",
        "btn-config-activities": "Configurer les ?ï؟½preuves Sportives",
        "modal-class-title": "Cr?ï؟½er une Nouvelle Classe",
        "lbl-class-name": "Nom de la classe (ex: 1AS1 ou 3AS2):",
        "lbl-class-grade": "Niveau d'?ï؟½tudes:",
        "btn-cancel": "Annuler",
        "btn-confirm": "Sauvegarder",
        "modal-student-title": "Ajouter / Modifier ?ï؟½l?ï؟½ve",
        "lbl-student-phone": "T?ï؟½l. Parent (pour envoi r?ï؟½sultats) :",
        "lbl-exemptions": "Exempter l'?ï؟½l?ï؟½ve par trimestre :",
        "gender-m": "Masculin",
        "gender-f": "F?ï؟½minin",
        "term-1": "1er Trimestre",
        "term-2": "2?ï؟½me Trimestre",
        "term-3": "3?ï؟½me Trimestre",
        "edit": "Modifier",
        "delete": "Supprimer",
        "saved-success": "Enregistr?ï؟½ avec succ?ï؟½s !",
        "reset-confirm": "??tes-vous s?ï؟½r de vouloir tout effacer ? Cette action est irr?ï؟½versible.",
        "class-delete-confirm": "Confirmez-vous la suppression de cette classe ? Tous les ?ï؟½l?ï؟½ves et leurs notes seront supprim?ï؟½s.",
        "csv-imported-success": "{count} ?ï؟½l?ï؟½ves import?ï؟½s avec succ?ï؟½s !",
        "invalid-csv-format": "Format Excel invalide. Veuillez faire correspondre les colonnes (Pr?ï؟½nom, Nom, Genre) dans la premi?ï؟½re feuille.",
        "student-added-success": "?ï؟½l?ï؟½ve ajout?ï؟½ !",
        "student-updated-success": "Donn?ï؟½es ?ï؟½l?ï؟½ve mises ?ï؟½ jour !",
        "class-added-success": "Nouvelle classe cr?ï؟½?ï؟½e !",
        "backup-imported-success": "Sauvegarde restaur?ï؟½e !",
        "invalid-backup-file": "Fichier invalide.",
        "no-students-in-class": "Aucun ?ï؟½l?ï؟½ve dans cette classe.",
        "sport-speed-run": "Vitesse (60m)",
        "sport-endurance": "Demi-fond (800m / 600m)",
        "sport-long-jump": "Saut en longueur",
        "sport-shot-put": "Lancer de poids",
        "sport-triple-jump": "Triple saut",
        "sport-volleyball": "Volleyball",
        "sport-handball": "Handball",
        "sport-basketball": "Basketball",
        "th-performance": "Performance",
        "th-calculated-grade": "Moyenne Finale",
        "exempted-abrv": "Exempt?ï؟½",
        "active-abrv": "Apte",
        "btn-close": "Fermer",
        "manual-title": "Guide d'Utilisation - Smart EPS",
        "scale-manager-title": "Modifier les Bar?ï؟½mes Physiques",
        "modal-config-activities-title": "R?ï؟½partition des activit?ï؟½s par trimestre",
        "menu-pedagogical": "Dossier P?ï؟½dagogique",
        "title-pedagogical": "Dossier P?ï؟½dagogique et Pr?ï؟½paration de l'Enseignant"
    }
};

// ==========================================
// 2. Default State Database
// ==========================================
const DEFAULT_DATABASE = {
    metadata: {
        schoolName: "?ï؟½?ï؟½Uï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U??ï؟½",
        teacherName: "?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½",
        academicYear: "2026/2027",
        wilaya: "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½",
        messageTemplateExcellent: "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½ Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½(?ï؟½) {?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½}.\n??Uï؟½?ï؟½Uï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½! Uï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½/?ï؟½?ï؟½Uï؟½??Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½U? Uï؟½Uï؟½???ï؟½?ï؟½ U?U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½ {?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½} Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ {?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?} (U?1: {U?1}?ï؟½ U?2: {U?2}?ï؟½ U?3: {U?3}). Uï؟½??Uï؟½Uï؟½Uï؟½ Uï؟½Uï؟½/Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½.\nUï؟½?ï؟½ ???ï؟½U??ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½.",
        messageTemplateAverage: "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½ Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½(?ï؟½) {?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½}.\nUï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½ Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½ {?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½} Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? {?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½}. ?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½(?ï؟½) ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½U? Uï؟½?ï؟½?ï؟½Uï؟½ {?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?} (U?1: {U?1}?ï؟½ U?2: {U?2}?ï؟½ U?3: {U?3}). Uï؟½??Uï؟½Uï؟½Uï؟½ Uï؟½Uï؟½/Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½U??ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½.\nUï؟½?ï؟½ ???ï؟½U??ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½.",
        messageTemplateWeak: "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½ Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½(?ï؟½) {?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½}.\nUï؟½?ï؟½???ï؟½?ï؟½U? ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½ {?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½} Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? {?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½}.\nUï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½/?ï؟½?ï؟½Uï؟½??Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U? ??U??ï؟½ Uï؟½?ï؟½U?U? Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ {?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?} (U?1: {U?1}?ï؟½ U?2: {U?2}?ï؟½ U?3: {U?3}). U??ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½/?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½.\nUï؟½?ï؟½ ???ï؟½U??ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½.",
        messageTemplateExempt: "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½ Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½(?ï؟½) {?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½}.\nUï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½/?ï؟½?ï؟½Uï؟½??Uï؟½?ï؟½ Uï؟½?ï؟½U?Uï؟½ Uï؟½Uï؟½ ??Uï؟½U?U?Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½ {?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½} Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? {?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½} ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½??Uï؟½?ï؟½?ï؟½.\nUï؟½?ï؟½ ???ï؟½U??ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½."
    },
    termActivities: {
        term_1: { individual: "speed-run", collective: "volleyball" },
        term_2: { individual: "endurance-run", collective: "handball" },
        term_3: { individual: "long-jump", collective: "basketball" }
    },
    sports: {
        individual: [
            { id: "speed-run", name: "?ï؟½?ï؟½?ï؟½?ï؟½ (60Uï؟½)", unit: "sec", lowerIsBetter: true },
            { id: "endurance-run", name: "Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½ (800Uï؟½ / 600Uï؟½)", unit: "sec", lowerIsBetter: true },
            { id: "long-jump", name: "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½", unit: "m", lowerIsBetter: false },
            { id: "shot-put", name: "?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½", unit: "m", lowerIsBetter: false },
            { id: "triple-jump", name: "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?", unit: "m", lowerIsBetter: false }
        ],
        collective: [
            { id: "volleyball", name: "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½" },
            { id: "handball", name: "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½" },
            { id: "basketball", name: "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½" }
        ]
    },
    scales: {
        "speed-run": {
            "1": {
                M: { best: 7.8, worst: 10.5, lowerIsBetter: true },
                F: { best: 8.8, worst: 11.8, lowerIsBetter: true }
            },
            "2": {
                M: { best: 7.5, worst: 10.2, lowerIsBetter: true },
                F: { best: 8.5, worst: 11.5, lowerIsBetter: true }
            },
            "3": {
                M: { best: 7.2, worst: 9.8, lowerIsBetter: true },
                F: { best: 8.2, worst: 11.2, lowerIsBetter: true }
            }
        },
        "endurance-run": {
            "1": {
                M: { best: 2.8, worst: 4.8, lowerIsBetter: true }, // e.g. 2m48s to 4m48s
                F: { best: 3.2, worst: 5.2, lowerIsBetter: true }
            },
            "2": {
                M: { best: 2.6, worst: 4.6, lowerIsBetter: true },
                F: { best: 3.0, worst: 5.0, lowerIsBetter: true }
            },
            "3": {
                M: { best: 2.4, worst: 4.4, lowerIsBetter: true },
                F: { best: 2.8, worst: 4.8, lowerIsBetter: true }
            }
        },
        "long-jump": {
            "1": {
                M: { best: 5.5, worst: 3.2, lowerIsBetter: false },
                F: { best: 4.2, worst: 2.0, lowerIsBetter: false }
            },
            "2": {
                M: { best: 5.8, worst: 3.5, lowerIsBetter: false },
                F: { best: 4.5, worst: 2.2, lowerIsBetter: false }
            },
            "3": {
                M: { best: 6.0, worst: 3.8, lowerIsBetter: false },
                F: { best: 4.8, worst: 2.5, lowerIsBetter: false }
            }
        },
        "shot-put": {
            "1": {
                M: { best: 10.5, worst: 5.5, lowerIsBetter: false },
                F: { best: 8.0, worst: 4.0, lowerIsBetter: false }
            },
            "2": {
                M: { best: 11.0, worst: 6.0, lowerIsBetter: false },
                F: { best: 8.5, worst: 4.5, lowerIsBetter: false }
            },
            "3": {
                M: { best: 11.5, worst: 6.5, lowerIsBetter: false },
                F: { best: 9.0, worst: 5.0, lowerIsBetter: false }
            }
        },
        "triple-jump": {
            "1": {
                M: { best: 11.5, worst: 8.5, lowerIsBetter: false },
                F: { best: 9.5, worst: 6.5, lowerIsBetter: false }
            },
            "2": {
                M: { best: 12.0, worst: 9.0, lowerIsBetter: false },
                F: { best: 10.0, worst: 7.0, lowerIsBetter: false }
            },
            "3": {
                M: { best: 12.5, worst: 9.5, lowerIsBetter: false },
                F: { best: 10.5, worst: 7.5, lowerIsBetter: false }
            }
        }
    },
    classes: [
        { id: "class_1", name: "1 ?ï؟½ Uï؟½ ?ï؟½ ?? 1", grade: 1 },
        { id: "class_2", name: "3 ?ï؟½ ?? 2", grade: 3 }
    ],
    students: [
        { id: "std_1", classId: "class_1", firstname: "?ï؟½?ï؟½Uï؟½?ï؟½", lastname: "?ï؟½Uï؟½ ?ï؟½Uï؟½U?", gender: "M", birthdate: "2010-04-12", phone: "0661122334", exemptions: [false, false, false], order: 0 },
        { id: "std_2", classId: "class_1", firstname: "U??ï؟½?ï؟½Uï؟½?ï؟½", lastname: "Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½U?", gender: "F", birthdate: "2010-08-25", phone: "0770998877", exemptions: [false, false, false], order: 1 },
        { id: "std_3", classId: "class_1", firstname: "U??ï؟½?ï؟½U?Uï؟½", lastname: "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½", gender: "M", birthdate: "2010-01-05", phone: "0550112233", exemptions: [false, false, false], order: 2 },
        { id: "std_4", classId: "class_1", firstname: "?ï؟½Uï؟½U?Uï؟½", lastname: "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½", gender: "M", birthdate: "2009-11-15", phone: "0663445566", exemptions: [true, false, false], order: 3 }, // Term 1 Exempted
        { id: "std_5", classId: "class_1", firstname: "Uï؟½?ï؟½U?Uï؟½", lastname: "?ï؟½?ï؟½?ï؟½?ï؟½", gender: "F", birthdate: "2010-09-02", phone: "0772113355", exemptions: [false, false, false], order: 4 },
        
        { id: "std_6", classId: "class_2", firstname: "?ï؟½?ï؟½Uï؟½?ï؟½", lastname: "?ï؟½?ï؟½?ï؟½?ï؟½", gender: "M", birthdate: "2008-05-18", phone: "0667332211", exemptions: [false, false, false], order: 0 },
        { id: "std_7", classId: "class_2", firstname: "?ï؟½?ï؟½?ï؟½?ï؟½", lastname: "?ï؟½Uï؟½?ï؟½U??ï؟½", gender: "F", birthdate: "2009-02-14", phone: "0771889900", exemptions: [false, false, false], order: 1 },
        { id: "std_8", classId: "class_2", firstname: "?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½", lastname: "Uï؟½Uï؟½Uï؟½U??ï؟½", gender: "M", birthdate: "2008-12-30", phone: "0556114422", exemptions: [false, false, false], order: 2 }
    ],
    // Grading stores continuous, assignment and exam details
    grades: {
        // Continuous: { sessions: [P/M/A, P/M/A, ... 7 times], discipline: 0-2, participation: 0-2, creativity: 0-2 }
        // Assignment/Exam: { attempts: [float, float, float], collective: float }
        "std_1_1_continuous": { sessions: ["P", "P", "M", "P", "P", "P", "P"], discipline: 2, participation: 2, creativity: 1.5 },
        "std_1_1_assignment": { attempts: [8.2, 7.9, 8.0], collective: 14.5 },
        "std_1_1_exam": { attempts: [8.0, 7.8, 8.1], collective: 15.0 },
        
        "std_2_1_continuous": { sessions: ["P", "A", "P", "P", "P", "P", "P"], discipline: 1.5, participation: 2, creativity: 2 },
        "std_2_1_assignment": { attempts: [9.2, 9.0, 9.4], collective: 12.0 },
        "std_2_1_exam": { attempts: [9.0, 8.8, 8.9], collective: 13.0 }
    }
};

// ==========================================
// 3. Collective Sport Evaluation Rubrics
// ==========================================
const COLLECTIVE_RUBRIC = [
    { code: "A2", score: 20, appreciation: "Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½", indicator: "?ï؟½?ï؟½Uï؟½?ï؟½ U??ï؟½?ï؟½Uï؟½. U???U?Uï؟½?ï؟½ Uï؟½??U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½??Uï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½." },
    { code: "A1", score: 19, appreciation: "Uï؟½Uï؟½???ï؟½?ï؟½", indicator: "???ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½??. ?ï؟½Uï؟½?ï؟½?? ??Uï؟½??U?Uï؟½U? Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½." },
    { code: "A", score: 18, appreciation: "Uï؟½Uï؟½???ï؟½?ï؟½", indicator: "?ï؟½Uï؟½?ï؟½ Uï؟½U??ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½. U?Uï؟½?ï؟½Uï؟½?ï؟½ U?U? ?ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½." },
    { code: "B2", score: 18, appreciation: "?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½", indicator: "Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½. ?ï؟½?ï؟½?ï؟½?? U??ï؟½Uï؟½?ï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½." },
    { code: "B1", score: 17, appreciation: "?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½", indicator: "?ï؟½?ï؟½?ï؟½?? ?ï؟½U??ï؟½?ï؟½?ï؟½U? U?U? Uï؟½?ï؟½??Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½." },
    { code: "B", score: 16, appreciation: "?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½", indicator: "U?Uï؟½U?U? ?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½?ï؟½??. U????ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½." },
    { code: "C2", score: 15, appreciation: "?ï؟½?ï؟½Uï؟½", indicator: "?ï؟½?ï؟½?ï؟½?? ?ï؟½U??ï؟½ U?U? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½. Uï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½??." },
    { code: "C1", score: 14, appreciation: "?ï؟½?ï؟½Uï؟½", indicator: "U??ï؟½?ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½. U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½." },
    { code: "C", score: 13, appreciation: "Uï؟½??Uï؟½?ï؟½?ï؟½", indicator: "U????ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½Uï؟½. U??ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½U? ?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½." },
    { code: "D2", score: 12, appreciation: "Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½", indicator: "?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½??U??ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½??. ???ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½." },
    { code: "D1", score: 11, appreciation: "Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½", indicator: "Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½???ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½U?Uï؟½?ï؟½Uï؟½. U??ï؟½???ï؟½Uï؟½ ?ï؟½?ï؟½U??ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½." },
    { code: "D", score: 10, appreciation: "Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½", indicator: "Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ U??ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½. U??ï؟½?ï؟½U? ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½. ?ï؟½?ï؟½?ï؟½?ï؟½?? ??Uï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½U??ï؟½?ï؟½." }
];

// ==========================================
// 4. Application Class Engine Definition
// ==========================================
class SmartEPS {
    constructor() {
        this.currentLang = localStorage.getItem("smart_eps_lang") || "ar";
        this.theme = localStorage.getItem("smart_eps_theme") || "dark";
        this.database = null;
        this.activeTab = "dashboard";
        
        // Navigation states
        this.activeRosterClassId = "";
        this.activeGradingClassId = "";
        this.activeGradingType = "continuous"; // continuous | assignment | exam | term-summary
        
        // Undo stack history
        this.undoStack = [];

        // Timer state variables
        this.timerInterval = null;
        this.timerTotalSeconds = 15 * 60;
        this.timerCurrentSeconds = 15 * 60;
        this.isTimerRunning = false;
        this.timerLabel = "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½U??ï؟½ (?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½??Uï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½)";
    }

    /**
     * App initialization
     */
    init() {
        this.loadDatabase();
        this.applyTheme();
        this.applyLanguage();
        this.bindGlobalEvents();
        this.initRouting();
        
        this.populateClassDropdowns();
        this.populateSportDropdowns();
        this.populateCollectiveRubricTable();
        
        // Listen to print preview event
        window.addEventListener("beforeprint", () => {
            this.updatePrintHeader();
        });
        
        this.switchTab(this.activeTab);
        this.updateGlobalStats();
        this.toggleNewSportFields("individual"); // default custom sport form to individual
        
        // Generate initial QR Code after short delay to ensure DOM is ready
        setTimeout(() => this.updateQRCode(), 500);
    }

    /**
     * Load state
     */
    loadDatabase() {
        const stored = localStorage.getItem("smart_eps_db_v2");
        if (stored) {
            try {
                this.database = JSON.parse(stored);
                // Schema checks
                if (!this.database.metadata) this.database.metadata = {};
                if (!this.database.metadata.schoolName) this.database.metadata.schoolName = "";
                if (!this.database.metadata.teacherName) this.database.metadata.teacherName = "";
                if (!this.database.metadata.academicYear) this.database.metadata.academicYear = "";
                if (!this.database.metadata.wilaya) this.database.metadata.wilaya = "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½";
                if (!this.database.metadata.messageTemplateExcellent) this.database.metadata.messageTemplateExcellent = DEFAULT_DATABASE.metadata.messageTemplateExcellent;
                if (!this.database.metadata.messageTemplateAverage) this.database.metadata.messageTemplateAverage = DEFAULT_DATABASE.metadata.messageTemplateAverage;
                if (!this.database.metadata.messageTemplateWeak) this.database.metadata.messageTemplateWeak = DEFAULT_DATABASE.metadata.messageTemplateWeak;
                if (!this.database.metadata.messageTemplateExempt) this.database.metadata.messageTemplateExempt = DEFAULT_DATABASE.metadata.messageTemplateExempt;
                
                if (!this.database.termActivities) this.database.termActivities = DEFAULT_DATABASE.termActivities;
                if (!this.database.sports) this.database.sports = DEFAULT_DATABASE.sports;
                if (!this.database.scales) this.database.scales = DEFAULT_DATABASE.scales;
                if (!this.database.classes) this.database.classes = [];
                if (!this.database.students) this.database.students = [];
                if (!this.database.grades) this.database.grades = {};
                if (!this.database.dailyLogbook) this.database.dailyLogbook = [];
                if (this.database.dailyLogbook.length === 0) {
                    const defaultClassName = this.database.classes[0] ? this.database.classes[0].name : "1 ?ï؟½ Uï؟½ ?ï؟½ ?? 1";
                    this.database.dailyLogbook.push({
                        id: "default_entry_1",
                        date: "2026-04-20",
                        className: defaultClassName,
                        session: "08:00 - 10:00",
                        sport: "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½",
                        objective: "?ï؟½Uï؟½ U????ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ Uï؟½U?U?U??ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½??Uï؟½U? ??Uï؟½Uï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½",
                        situations: "?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½. ??1: ?ï؟½Uï؟½??Uï؟½U?U? Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½U? Uï؟½?ï؟½??Uï؟½U??ï؟½. ??2: Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½. ??3: Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½U??ï؟½ Uï؟½?ï؟½???ï؟½?ï؟½ U?U? Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ U?Uï؟½?ï؟½ U?U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½U?Uï؟½?ï؟½ U?U? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½.",
                        evaluation: "??U??ï؟½?ï؟½Uï؟½ ?ï؟½U??ï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½U? ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½. ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½U??ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½ Uï؟½?ï؟½???ï؟½?ï؟½ Uï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? Uï؟½???ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½??Uï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½."
                    });
                    this.database.dailyLogbook.push({
                        id: "default_entry_2",
                        date: "2026-04-27",
                        className: defaultClassName,
                        session: "10:00 - 12:00",
                        sport: "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½",
                        objective: "?ï؟½Uï؟½ U??ï؟½Uï؟½U? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ???ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½U? ?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½",
                        situations: "?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½. ??1: ??Uï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½U?Uï؟½U?Uï؟½ Uï؟½Uï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½. ??2: Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½.",
                        evaluation: "Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½. ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ U?U? ?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½?ï؟½ ??Uï؟½ ???ï؟½?ï؟½U??ï؟½Uï؟½?ï؟½ U?U? ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½."
                    });
                }
                 
                 // Migrate legacy scales to grade-specific if needed
                 if (this.database.scales) {
                     let needsMigration = false;
                     for (let sportId in this.database.scales) {
                         const sportScale = this.database.scales[sportId];
                         if (sportScale && (sportScale.M || sportScale.F)) {
                             needsMigration = true;
                             break;
                         }
                     }
                     if (needsMigration) {
                         const migratedScales = {};
                         for (let sportId in this.database.scales) {
                             const legacyScale = this.database.scales[sportId];
                             if (legacyScale && (legacyScale.M || legacyScale.F)) {
                                 migratedScales[sportId] = {
                                     "1": JSON.parse(JSON.stringify(legacyScale)),
                                     "2": JSON.parse(JSON.stringify(legacyScale)),
                                     "3": JSON.parse(JSON.stringify(legacyScale))
                                 };
                             } else {
                                 migratedScales[sportId] = legacyScale;
                             }
                         }
                         this.database.scales = migratedScales;
                     }
                 }
            } catch (e) {
                console.error("DB parsing error. Seeding default database.", e);
                this.database = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
            }
        } else {
            this.database = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
            this.saveDatabase(false); // don't push initial state to undo stack
        }

        // Initialize header text fields
        document.getElementById("meta-school-name").value = this.database.metadata.schoolName || "";
        document.getElementById("meta-teacher-name").value = this.database.metadata.teacherName || "";
        document.getElementById("meta-academic-year").value = this.database.metadata.academicYear || "";

        // Initialize settings fields
        document.getElementById("settings-school-name").value = this.database.metadata.schoolName || "";
        document.getElementById("settings-school-wilaya").value = this.database.metadata.wilaya || "";
        document.getElementById("settings-teacher-name").value = this.database.metadata.teacherName || "";
        document.getElementById("settings-academic-year").value = this.database.metadata.academicYear || "";
        
        document.getElementById("settings-msg-excellent").value = this.database.metadata.messageTemplateExcellent || "";
        document.getElementById("settings-msg-average").value = this.database.metadata.messageTemplateAverage || "";
        document.getElementById("settings-msg-weak").value = this.database.metadata.messageTemplateWeak || "";
        document.getElementById("settings-msg-exempt").value = this.database.metadata.messageTemplateExempt || "";
    }

    saveDatabase(pushUndo = true) {
        if (pushUndo) {
            // Keep stack size limited to 20
            if (this.undoStack.length >= 20) this.undoStack.shift();
            this.undoStack.push(JSON.stringify(this.database));
        }
        localStorage.setItem("smart_eps_db_v2", JSON.stringify(this.database));
        this.updateGlobalStats();
        this.updateQRCode();
    }

    undo() {
        if (this.undoStack.length === 0) {
            this.showToast(this.currentLang === "ar" ? "Uï؟½?ï؟½ U?Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½!" : "Aucune action ?ï؟½ annuler !");
            return;
        }
        const previousState = this.undoStack.pop();
        try {
            this.database = JSON.parse(previousState);
            localStorage.setItem("smart_eps_db_v2", previousState);
            this.populateClassDropdowns();
            this.updateGlobalStats();
            this.renderActiveViewContent();
            this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!" : "Action annul?ï؟½e avec succ?ï؟½s !");
        } catch (e) {
            console.error("Undo parsing error", e);
        }
    }

    /**
     * Night & Day Themes Toggler
     */
    applyTheme() {
        const bodyClass = document.body.classList;
        const themeIcon = document.getElementById("theme-icon");
        const themeText = document.getElementById("theme-text");
        
        if (this.theme === "dark") {
            bodyClass.add("dark-theme");
            bodyClass.remove("light-theme");
            if (themeIcon) themeIcon.style.fill = "#fbbf24"; // gold sun
            if (themeText) themeText.textContent = this.currentLang === "ar" ? "????U?U??ï؟½ Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½" : "Mode Jour";
        } else {
            bodyClass.add("light-theme");
            bodyClass.remove("dark-theme");
            if (themeIcon) themeIcon.style.fill = "#3b82f6"; // blue moon
            if (themeText) themeText.textContent = this.currentLang === "ar" ? "????U?U??ï؟½ Uï؟½Uï؟½U?Uï؟½" : "Mode Nuit";
        }
    }

    toggleTheme() {
        this.theme = this.theme === "dark" ? "light" : "dark";
        localStorage.setItem("smart_eps_theme", this.theme);
        this.applyTheme();
    }

    /**
     * Custom Localisation Switching
     */
    applyLanguage() {
        const htmlTag = document.documentElement;
        htmlTag.setAttribute("lang", this.currentLang);
        
        if (this.currentLang === "ar") {
            htmlTag.setAttribute("dir", "rtl");
            document.body.classList.remove("ltr-layout");
            document.getElementById("lang-toggle-btn").innerHTML = "<span>Fran?ï؟½ais</span>";
        } else {
            htmlTag.setAttribute("dir", "ltr");
            document.body.classList.add("ltr-layout");
            document.getElementById("lang-toggle-btn").innerHTML = "<span>?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</span>";
        }

        // Apply string keys
        document.querySelectorAll("[data-i18n]").forEach(node => {
            const key = node.getAttribute("data-i18n");
            const translation = this.getTranslation(key);
            if (translation) {
                if (node.tagName === "INPUT" && (node.type === "text" || node.type === "search")) {
                    node.setAttribute("placeholder", translation);
                } else {
                    node.textContent = translation;
                }
            }
        });

        // Option groups translation
        document.querySelectorAll("[data-i18n-group]").forEach(node => {
            const key = node.getAttribute("data-i18n-group");
            const translation = this.getTranslation(key);
            if (translation) node.setAttribute("label", translation);
        });

        this.applyTheme(); // Refresh theme text string
        this.updatePageTitle();
        this.renderActiveViewContent();
    }

    getTranslation(key) {
        return TRANSLATIONS[this.currentLang][key] || TRANSLATIONS["ar"][key] || key;
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === "ar" ? "fr" : "ar";
        localStorage.setItem("smart_eps_lang", this.currentLang);
        this.applyLanguage();
    }

    /**
     * Routing Switcher
     */
    initRouting() {
        const hash = window.location.hash.replace("#", "");
        if (hash && document.querySelector(`.menu-item[data-tab="${hash}"]`)) {
            this.activeTab = hash;
        } else {
            this.activeTab = "dashboard";
        }
    }

    switchTab(tabName) {
        this.activeTab = tabName;
        window.location.hash = tabName;
        
        document.querySelectorAll(".menu-item").forEach(item => {
            if (item.getAttribute("data-tab") === tabName) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        document.querySelectorAll(".app-view").forEach(view => {
            if (view.id === `view-${tabName}`) {
                view.classList.add("active");
            } else {
                view.classList.remove("active");
            }
        });

        this.updatePageTitle();
        this.renderActiveViewContent();
    }

    updatePageTitle() {
        const titleKey = `title-${this.activeTab}`;
        const titleElement = document.getElementById("page-title");
        if (titleElement) {
            titleElement.textContent = this.getTranslation(titleKey);
        }
    }

    /**
     * UI Event Binding
     */
    bindGlobalEvents() {
        // Sidebar Navigation links
        document.querySelectorAll(".menu-item").forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                this.switchTab(item.getAttribute("data-tab"));
            });
        });

        // Header controls (Manual, backup, restore, scales, undo)
        document.getElementById("theme-toggle-btn").addEventListener("click", () => this.toggleTheme());
        document.getElementById("lang-toggle-btn").addEventListener("click", () => this.toggleLanguage());
        document.getElementById("btn-undo-action").addEventListener("click", () => this.undo());
        
        // Metadata inputs autosave and syncing
        const saveMeta = () => {
            this.database.metadata.schoolName = document.getElementById("meta-school-name").value.trim();
            this.database.metadata.teacherName = document.getElementById("meta-teacher-name").value.trim();
            this.database.metadata.academicYear = document.getElementById("meta-academic-year").value.trim();
            
            // Sync to settings
            document.getElementById("settings-school-name").value = this.database.metadata.schoolName;
            document.getElementById("settings-teacher-name").value = this.database.metadata.teacherName;
            document.getElementById("settings-academic-year").value = this.database.metadata.academicYear;
            
            this.saveDatabase(false); // auto-save metadata changes without polluting undo stack
            this.updatePrintHeader();
        };
        const saveMetaSettings = (showToast = false) => {
            this.database.metadata.schoolName = document.getElementById("settings-school-name").value.trim();
            this.database.metadata.wilaya = document.getElementById("settings-school-wilaya").value.trim();
            this.database.metadata.teacherName = document.getElementById("settings-teacher-name").value.trim();
            this.database.metadata.academicYear = document.getElementById("settings-academic-year").value.trim();
            
            this.database.metadata.messageTemplateExcellent = document.getElementById("settings-msg-excellent").value;
            this.database.metadata.messageTemplateAverage = document.getElementById("settings-msg-average").value;
            this.database.metadata.messageTemplateWeak = document.getElementById("settings-msg-weak").value;
            this.database.metadata.messageTemplateExempt = document.getElementById("settings-msg-exempt").value;
            
            // Sync to header
            document.getElementById("meta-school-name").value = this.database.metadata.schoolName;
            document.getElementById("meta-teacher-name").value = this.database.metadata.teacherName;
            document.getElementById("meta-academic-year").value = this.database.metadata.academicYear;
            
            this.saveDatabase(false);
            this.updatePrintHeader();

            if (showToast) {
                this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!" : "Param?ï؟½tres enregistr?ï؟½s !");
            }
        };
        document.getElementById("meta-school-name").addEventListener("input", saveMeta);
        document.getElementById("meta-teacher-name").addEventListener("input", saveMeta);
        document.getElementById("meta-academic-year").addEventListener("input", saveMeta);

        document.getElementById("settings-school-name").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-school-wilaya").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-teacher-name").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-academic-year").addEventListener("input", () => saveMetaSettings(false));

        document.getElementById("settings-msg-excellent").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-msg-average").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-msg-weak").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-msg-exempt").addEventListener("input", () => saveMetaSettings(false));

        // Save buttons click events in settings
        document.getElementById("btn-save-settings-meta").addEventListener("click", () => saveMetaSettings(true));
        document.getElementById("btn-save-settings-templates").addEventListener("click", () => saveMetaSettings(true));

        // Modals listeners
        const bindModal = (triggerId, modalId, closeId, cancelId) => {
            const trg = document.getElementById(triggerId);
            const mdl = document.getElementById(modalId);
            const cls = document.getElementById(closeId);
            const cnc = document.getElementById(cancelId);
            if (trg) trg.addEventListener("click", () => mdl.classList.add("active"));
            if (cls) cls.addEventListener("click", () => mdl.classList.remove("active"));
            if (cnc) cnc.addEventListener("click", () => mdl.classList.remove("active"));
        };
        bindModal("btn-open-add-class", "modal-add-class", "modal-close-class", "btn-cancel-class");
        bindModal("btn-open-add-student", "modal-add-student", "modal-close-student", "btn-cancel-student");
        bindModal("btn-open-import-csv", "modal-import-csv", "modal-close-import", "btn-close-import");
        bindModal("btn-open-user-manual", "modal-user-manual", "modal-close-manual", "btn-close-manual-bottom");
        bindModal("btn-open-activities-config", "modal-activities-config", "modal-close-activities", "btn-cancel-activities");
        bindModal("btn-open-scale-manager", "modal-scale-manager", "modal-close-scales", "btn-cancel-scales");
        document.getElementById("btn-open-scale-manager").addEventListener("click", () => this.loadScaleValuesToModal());
        bindModal("btn-open-collective-rubric-guide", "modal-collective-rubric", "modal-close-collective-rubric", "btn-close-collective-rubric");

        // Custom sports handler trigger
        document.getElementById("btn-add-new-sport").addEventListener("click", () => this.addNewSport());

        // Backups from headers
        document.getElementById("btn-export-backup-hdr").addEventListener("click", () => this.exportDatabaseBackup());
        document.getElementById("btn-import-backup-hdr").addEventListener("click", () => document.getElementById("backup-file-input").click());

        // Backups and database operations from settings panel
        document.getElementById("btn-settings-export").addEventListener("click", () => this.exportDatabaseBackup());
        document.getElementById("btn-settings-import").addEventListener("click", () => document.getElementById("settings-backup-file-input").click());
        document.getElementById("settings-backup-file-input").addEventListener("change", (e) => this.importDatabaseBackup(e.target.files[0]));
        document.getElementById("btn-settings-reset").addEventListener("click", () => {
            if (confirm(this.getTranslation("reset-confirm"))) {
                this.database = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
                this.saveDatabase();
                this.populateClassDropdowns();
                this.switchTab("dashboard");
                this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ??Uï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!" : "Base de donn?ï؟½es r?ï؟½initialis?ï؟½e !");
            }
        });

        // Dynamic Class Roster inputs loading
        document.getElementById("class-select-roster").addEventListener("change", (e) => {
            this.activeRosterClassId = e.target.value;
            this.renderActiveViewContent();
        });

        // Add class submit
        document.getElementById("form-add-class").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("class-name-input").value.trim();
            const grade = parseInt(document.getElementById("class-grade-input").value);
            
            const newClass = {
                id: `class_${Date.now()}`,
                name: name,
                grade: grade
            };

            this.database.classes.push(newClass);
            this.saveDatabase();
            
            this.populateClassDropdowns();
            this.activeRosterClassId = newClass.id;
            document.getElementById("class-select-roster").value = newClass.id;

            document.getElementById("form-add-class").reset();
            document.getElementById("modal-add-class").classList.remove("active");
            this.showToast(this.getTranslation("class-added-success"));
            this.renderActiveViewContent();
        });

        // Add/Edit student submit
        document.getElementById("form-add-student").addEventListener("submit", (e) => {
            e.preventDefault();
            const idFlag = document.getElementById("student-id-edit-flag").value;
            const fname = document.getElementById("student-firstname-input").value.trim();
            const lname = document.getElementById("student-lastname-input").value.trim();
            const gender = document.getElementById("student-gender-input").value;
            const birth = document.getElementById("student-birth-input").value;
            const phone = document.getElementById("student-phone-input").value.trim();
            
            const ex1 = document.getElementById("student-ex-1").checked;
            const ex2 = document.getElementById("student-ex-2").checked;
            const ex3 = document.getElementById("student-ex-3").checked;

            const activeClassId = this.activeRosterClassId || (this.database.classes[0] ? this.database.classes[0].id : "");

            if (!activeClassId) {
                alert(this.currentLang === "ar" ? "U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½" : "Cr?ï؟½ez une classe d'abord.");
                return;
            }

            if (idFlag) {
                // Update mode
                const student = this.database.students.find(s => s.id === idFlag);
                if (student) {
                    student.firstname = fname;
                    student.lastname = lname;
                    student.gender = gender;
                    student.birthdate = birth;
                    student.phone = phone;
                    student.exemptions = [ex1, ex2, ex3];
                    this.showToast(this.getTranslation("student-updated-success"));
                }
            } else {
                // Create mode
                const classStudents = this.database.students.filter(s => s.classId === activeClassId);
                const orderIndex = classStudents.length;

                const newStudent = {
                    id: `std_${Date.now()}`,
                    classId: activeClassId,
                    firstname: fname,
                    lastname: lname,
                    gender: gender,
                    birthdate: birth,
                    phone: phone,
                    exemptions: [ex1, ex2, ex3],
                    order: orderIndex
                };
                this.database.students.push(newStudent);
                this.showToast(this.getTranslation("student-added-success"));
            }

            this.saveDatabase();
            document.getElementById("form-add-student").reset();
            document.getElementById("student-id-edit-flag").value = "";
            document.getElementById("modal-add-student").classList.remove("active");
            this.renderActiveViewContent();
        });

        // Search roster
        document.getElementById("roster-search-input").addEventListener("input", () => this.renderRosterStudents());

        // Bulk delete and select all
        document.getElementById("cb-select-all-students").addEventListener("change", (e) => {
            const checkboxes = document.querySelectorAll(".cb-student-select");
            checkboxes.forEach(cb => cb.checked = e.target.checked);
            this.updateBulkDeleteButton();
        });
        document.getElementById("btn-delete-selected-students").addEventListener("click", () => this.deleteSelectedStudents());


        // Class delete
        document.getElementById("btn-delete-class").addEventListener("click", () => this.deleteActiveClass());

        // Excel imports
        document.getElementById("btn-export-csv").addEventListener("click", () => this.exportRosterToExcel());
        document.getElementById("btn-export-all-classes").addEventListener("click", () => this.exportAllClassesCSV());
        document.getElementById("btn-export-all-grades-pdf").addEventListener("click", () => this.exportAllGradesPDF());
        document.getElementById("btn-export-all-grades-excel").addEventListener("click", () => this.exportAllGradesExcel());

        const dragArea = document.getElementById("csv-drag-area");
        const csvInput = document.getElementById("csv-file-input");
        dragArea.addEventListener("click", () => csvInput.click());
        csvInput.addEventListener("change", (e) => this.handleExcelFileSelect(e.target.files[0]));

        // Sports activities configuration submit
        document.getElementById("form-activities-config").addEventListener("submit", (e) => {
            e.preventDefault();
            this.database.termActivities.term_1.individual = document.getElementById("act-ind-1").value;
            this.database.termActivities.term_1.collective = document.getElementById("act-col-1").value;
            this.database.termActivities.term_2.individual = document.getElementById("act-ind-2").value;
            this.database.termActivities.term_2.collective = document.getElementById("act-col-2").value;
            this.database.termActivities.term_3.individual = document.getElementById("act-ind-3").value;
            this.database.termActivities.term_3.collective = document.getElementById("act-col-3").value;

            this.saveDatabase();
            document.getElementById("modal-activities-config").classList.remove("active");
            this.showToast(this.getTranslation("saved-success"));
            this.renderActiveViewContent();
        });

        // Interactive scales manager selectors
        const scaleSportSelect = document.getElementById("scale-select-sport");
        const scaleGradeSelect = document.getElementById("scale-select-grade");
        if (scaleSportSelect) scaleSportSelect.addEventListener("change", () => this.loadScaleValuesToModal());
        if (scaleGradeSelect) scaleGradeSelect.addEventListener("change", () => this.loadScaleValuesToModal());
        
        const btnSaveScales = document.getElementById("btn-save-scales-data");
        if (btnSaveScales) btnSaveScales.addEventListener("click", () => this.saveScalesDataFromModal());

        const scaleTabIndividual = document.getElementById("scale-tab-btn-individual");
        const scaleTabCollective = document.getElementById("scale-tab-btn-collective");
        const scaleContentIndividual = document.getElementById("scale-tab-content-individual");
        const scaleContentCollective = document.getElementById("scale-tab-content-collective");

        if (scaleTabIndividual && scaleTabCollective) {
            scaleTabIndividual.addEventListener("click", () => {
                scaleTabIndividual.classList.add("active");
                scaleTabCollective.classList.remove("active");
                scaleTabIndividual.style.borderBottom = "3px solid var(--color-primary)";
                scaleTabIndividual.style.color = "#fff";
                scaleTabCollective.style.borderBottom = "3px solid transparent";
                scaleTabCollective.style.color = "var(--text-secondary)";
                
                if (scaleContentIndividual) scaleContentIndividual.style.display = "block";
                if (scaleContentCollective) scaleContentCollective.style.display = "none";
                if (btnSaveScales) btnSaveScales.style.display = "flex";
            });

            scaleTabCollective.addEventListener("click", () => {
                scaleTabCollective.classList.add("active");
                scaleTabIndividual.classList.remove("active");
                scaleTabCollective.style.borderBottom = "3px solid var(--color-primary)";
                scaleTabCollective.style.color = "#fff";
                scaleTabIndividual.style.borderBottom = "3px solid transparent";
                scaleTabIndividual.style.color = "var(--text-secondary)";
                
                if (scaleContentIndividual) scaleContentIndividual.style.display = "none";
                if (scaleContentCollective) scaleContentCollective.style.display = "block";
                if (btnSaveScales) btnSaveScales.style.display = "none";
            });
        }

        const btnPrintCollective = document.getElementById("btn-print-collective-rubric");
        if (btnPrintCollective) btnPrintCollective.addEventListener("click", () => this.printCollectiveRubric());

        const btnDownloadCollective = document.getElementById("btn-download-collective-rubric");
        if (btnDownloadCollective) btnDownloadCollective.addEventListener("click", () => this.downloadCollectiveRubricExcel());

        const btnPrintAllScales = document.getElementById("btn-print-all-scales");
        if (btnPrintAllScales) btnPrintAllScales.addEventListener("click", () => this.printAllScales());

        // Grading selectors
        document.getElementById("class-select-grading").addEventListener("change", (e) => {
            this.activeGradingClassId = e.target.value;
            this.renderActiveViewContent();
        });

        document.getElementById("term-select-grading").addEventListener("change", () => this.renderActiveViewContent());

        document.querySelectorAll(".grading-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".grading-tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.activeGradingType = btn.getAttribute("data-eval");
                this.renderGradingSheet();
            });
        });

        // Grading submit save
        document.getElementById("btn-save-grading").addEventListener("click", () => this.saveActiveGradingSheetData());
        document.getElementById("btn-print-grading-sheet").addEventListener("click", () => this.printGradingSheet());

        // Archiving
        document.getElementById("btn-archive-year").addEventListener("click", () => this.archiveAndNewYear());

        // ==========================================
        // PEDAGOGICAL VIEW EVENT BINDINGS
        // ==========================================
        document.querySelectorAll(".ped-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".ped-tab-btn").forEach(b => {
                    b.classList.remove("active");
                    b.style.background = "transparent";
                    b.style.color = "var(--text-secondary)";
                });
                btn.classList.add("active");
                btn.style.background = "var(--color-primary-soft)";
                btn.style.color = "var(--color-primary)";
                
                const tabId = btn.getAttribute("data-ped-tab");
                document.querySelectorAll(".ped-tab-content").forEach(content => {
                    content.style.display = content.id === `ped-content-${tabId}` ? "block" : "none";
                });
            });
        });

        const formCahier = document.getElementById("form-add-cahier-entry");
        if (formCahier) {
            formCahier.addEventListener("submit", (e) => {
                e.preventDefault();
                this.saveCahierJournalEntry();
            });
        }

        const btnGenFiche = document.getElementById("btn-generate-fiche");
        if (btnGenFiche) {
            btnGenFiche.addEventListener("click", () => this.generateFichePreview());
        }

        const btnPrintCycle = document.getElementById("btn-print-cycle");
        if (btnPrintCycle) {
            btnPrintCycle.addEventListener("click", () => this.printActiveCycle());
        }

        const btnPrintInspection = document.getElementById("btn-print-inspection-file");
        if (btnPrintInspection) {
            btnPrintInspection.addEventListener("click", () => this.printFullInspectionFile());
        }

        const btnTimerToggle = document.getElementById("btn-timer-toggle");
        if (btnTimerToggle) {
            btnTimerToggle.addEventListener("click", () => this.toggleFieldTimer());
        }
        const btnTimerReset = document.getElementById("btn-timer-reset");
        if (btnTimerReset) {
            btnTimerReset.addEventListener("click", () => this.resetFieldTimer());
        }
        const btnTimerWhistle = document.getElementById("btn-timer-whistle");
        if (btnTimerWhistle) {
            btnTimerWhistle.addEventListener("click", () => this.playWhistleSound());
        }

        document.querySelectorAll(".btn-timer-select").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".btn-timer-select").forEach(b => {
                    b.classList.remove("active");
                    b.style.background = "transparent";
                    b.style.borderColor = "var(--border-color)";
                    b.style.color = "var(--text-secondary)";
                });
                btn.classList.add("active");
                btn.style.background = "var(--color-primary-soft)";
                btn.style.borderColor = "var(--color-primary)";
                btn.style.color = "var(--color-primary)";
                this.setupFieldTimerMinutes(parseInt(btn.getAttribute("data-timer-mins")), btn.getAttribute("data-timer-label"));
            });
        });
        
        const customMinsInput = document.getElementById("timer-custom-mins");
        if (customMinsInput) {
            customMinsInput.addEventListener("change", (e) => {
                const mins = parseInt(e.target.value);
                if (!isNaN(mins) && mins > 0) {
                    this.setupFieldTimerMinutes(mins, this.currentLang === "ar" ? "??Uï؟½Uï؟½U??? Uï؟½?ï؟½?ï؟½?ï؟½" : "Temps personnalis?ï؟½");
                }
            });
        }
    }

    /**
     * Populate selectors
     */
    populateClassDropdowns() {
        const rosterSelect = document.getElementById("class-select-roster");
        const gradingSelect = document.getElementById("class-select-grading");
        
        const selectors = [rosterSelect, gradingSelect];
        selectors.forEach(sel => {
            if (sel) sel.innerHTML = "";
        });

        if (this.database.classes.length === 0) {
            selectors.forEach(sel => {
                if (sel) {
                    const opt = document.createElement("option");
                    opt.value = "";
                    opt.textContent = this.currentLang === "ar" ? "-- Uï؟½?ï؟½ U?Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ --" : "-- Aucune classe --";
                    sel.appendChild(opt);
                }
            });
            this.activeRosterClassId = "";
            this.activeGradingClassId = "";
            return;
        }

        const checkActive = (id) => this.database.classes.some(c => c.id === id) ? id : this.database.classes[0].id;
        this.activeRosterClassId = checkActive(this.activeRosterClassId);
        this.activeGradingClassId = checkActive(this.activeGradingClassId);

        this.database.classes.forEach(c => {
            selectors.forEach(sel => {
                if (sel) {
                    const opt = document.createElement("option");
                    opt.value = c.id;
                    opt.textContent = `${c.name} (${c.grade}AS)`;
                    sel.appendChild(opt);
                }
            });
        });

        rosterSelect.value = this.activeRosterClassId;
        gradingSelect.value = this.activeGradingClassId;
    }

    /**
     * Content views router
     */
    renderActiveViewContent() {
        switch(this.activeTab) {
            case "dashboard":
                this.renderDashboard();
                break;
            case "classes":
                this.renderRosterStudents();
                break;
            case "grading":
                this.renderGradingSheet();
                break;
            case "settings":
                // Static fields populated on load
                break;
            case "pedagogical":
                this.renderPedagogicalView();
                break;
        }
    }

    updateGlobalStats() {
        const classesCount = this.database.classes.length;
        const studentsCount = this.database.students.length;
        
        document.getElementById("global-stat-classes").textContent = classesCount;
        document.getElementById("global-stat-students").textContent = studentsCount;
        
        // Cumulative presence rate
        let totalSessions = 0;
        let totalPresents = 0;
        
        Object.keys(this.database.grades).forEach(key => {
            if (key.endsWith("_continuous")) {
                const logs = this.database.grades[key];
                if (logs && logs.sessions) {
                    logs.sessions.forEach(s => {
                        totalSessions++;
                        if (s === "P" || s === "M") totalPresents++;
                    });
                }
            }
        });

        const attendanceRate = totalSessions > 0 ? Math.round((totalPresents / totalSessions) * 100) : 100;
        document.getElementById("global-stat-attendance").textContent = `${attendanceRate}%`;
    }

    /**
     * ==========================================
     * VIEW 1: DASHBOARD VIEW
     * ==========================================
     */
    renderDashboard() {
        const classesCount = this.database.classes.length;
        const studentsCount = this.database.students.length;
        
        document.getElementById("dash-stat-classes").textContent = classesCount;
        document.getElementById("dash-stat-students").textContent = studentsCount;

        // Presence
        let totalSessions = 0;
        let totalPresents = 0;
        Object.keys(this.database.grades).forEach(key => {
            if (key.endsWith("_continuous")) {
                const logs = this.database.grades[key];
                if (logs && logs.sessions) {
                    logs.sessions.forEach(s => {
                        totalSessions++;
                        if (s === "P" || s === "M") totalPresents++;
                    });
                }
            }
        });
        const attendanceRate = totalSessions > 0 ? Math.round((totalPresents / totalSessions) * 100) : 100;
        document.getElementById("dash-stat-attendance").textContent = `${attendanceRate}%`;

        // Calculate overall average
        let sumAverages = 0;
        let countAverages = 0;
        
        this.database.students.forEach(student => {
            const annualAvgObj = this.calculateStudentAnnualAverage(student.id);
            if (annualAvgObj && annualAvgObj.value !== null) {
                sumAverages += annualAvgObj.value;
                countAverages++;
            }
        });

        const totalAvg = countAverages > 0 ? (sumAverages / countAverages).toFixed(2) : "--";
        document.getElementById("dash-stat-average").textContent = totalAvg !== "--" ? `${totalAvg}/20` : "--/20";

        // Table ranking
        const leaderboardTbody = document.getElementById("dashboard-leaderboard-tbody");
        leaderboardTbody.innerHTML = "";

        if (this.database.classes.length === 0) {
            leaderboardTbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted">${this.currentLang === "ar" ? "Uï؟½?ï؟½ U?Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½Uï؟½." : "Aucune classe enregistr?ï؟½e."}</td></tr>`;
            return;
        }

        const leaderboardData = this.database.classes.map(c => {
            const classStudents = this.database.students.filter(s => s.classId === c.id);
            const studentIds = classStudents.map(s => s.id);
            
            // Presence per class
            let classSessions = 0;
            let classPresents = 0;
            studentIds.forEach(stdId => {
                for (let term = 1; term <= 3; term++) {
                    const logs = this.database.grades[`${stdId}_${term}_continuous`];
                    if (logs && logs.sessions) {
                        logs.sessions.forEach(s => {
                            classSessions++;
                            if (s === "P" || s === "M") classPresents++;
                        });
                    }
                }
            });
            const presRate = classSessions > 0 ? Math.round((classPresents / classSessions) * 100) : 100;

            // Class annual average
            let classGradesCount = 0;
            let classGradesSum = 0;
            studentIds.forEach(stdId => {
                const annualAvgObj = this.calculateStudentAnnualAverage(stdId);
                if (annualAvgObj && annualAvgObj.value !== null) {
                    classGradesSum += annualAvgObj.value;
                    classGradesCount++;
                }
            });
            const classAvg = classGradesCount > 0 ? parseFloat((classGradesSum / classGradesCount).toFixed(2)) : 0;

            return {
                id: c.id,
                name: c.name,
                studentsCount: classStudents.length,
                presenceRate: presRate,
                averageScore: classAvg
            };
        });

        leaderboardData.sort((a, b) => b.averageScore - a.averageScore);

        leaderboardData.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${row.name}</strong></td>
                <td><span class="badge badge-blue">${row.studentsCount}</span></td>
                <td><span class="badge badge-emerald">${row.presenceRate}%</span></td>
                <td><span class="badge badge-amber font-bold">${row.averageScore > 0 ? row.averageScore + '/20' : '--'}</span></td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="app.navigateToClass('${row.id}')">
                        <svg viewBox="0 0 24 24" style="width:14px; height:14px;"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                        <span>${this.currentLang === 'ar' ? 'Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½' : 'D?ï؟½tails'}</span>
                    </button>
                </td>
            `;
            leaderboardTbody.appendChild(tr);
        });
    }

    navigateToClass(classId) {
        this.activeRosterClassId = classId;
        document.getElementById("class-select-roster").value = classId;
        this.switchTab("classes");
    }

    /**
     * ==========================================
     * VIEW 2: ROSTER & STUDENTS MANAGEMENT
     * ==========================================
     */
    renderRosterStudents() {
        const tbody = document.getElementById("roster-students-tbody");
        const classNameSpan = document.getElementById("roster-class-name");
        tbody.innerHTML = "";

        // Reset badge counters
        document.getElementById("roster-stat-boys").textContent = 0;
        document.getElementById("roster-stat-girls").textContent = 0;
        document.getElementById("roster-stat-exempted").textContent = 0;

        const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
        
        if (!activeClass) {
            classNameSpan.textContent = "--";
            tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${this.getTranslation("no-data-select-class")}</td></tr>`;
            return;
        }

        classNameSpan.textContent = activeClass.name;

        // Fetch students & sort by order index
        const query = document.getElementById("roster-search-input").value.toLowerCase().trim();
        let classStudents = this.database.students.filter(s => s.classId === activeClass.id);
        
        // Ensure student ordering indexes exist
        classStudents.forEach((s, idx) => {
            if (s.order === undefined) s.order = idx;
        });
        classStudents.sort((a, b) => a.order - b.order);

        // Statistics badges
        const boys = classStudents.filter(s => s.gender === "M").length;
        const girls = classStudents.filter(s => s.gender === "F").length;
        // Total exemption is when exempted in all three terms
        const exempted = classStudents.filter(s => s.exemptions && s.exemptions[0] && s.exemptions[1] && s.exemptions[2]).length;

        document.getElementById("roster-stat-boys").textContent = boys;
        document.getElementById("roster-stat-girls").textContent = girls;
        document.getElementById("roster-stat-exempted").textContent = exempted;

        if (query) {
            classStudents = classStudents.filter(s => 
                s.firstname.toLowerCase().includes(query) || s.lastname.toLowerCase().includes(query)
            );
        }

        if (classStudents.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${this.getTranslation("no-students-in-class")}</td></tr>`;
            return;
        }

        classStudents.forEach((student, index) => {
            const tr = document.createElement("tr");
            
            const genderBadge = student.gender === "M" 
                ? `<span class="badge badge-blue">${this.getTranslation("gender-m")}</span>`
                : `<span class="badge badge-pink">${this.getTranslation("gender-f")}</span>`;
                
            // Exemption display per term
            const exLabels = student.exemptions.map((ex, termIdx) => {
                if (ex) return `<span class="badge badge-danger">U?${termIdx+1}</span>`;
                return `<span class="badge badge-emerald">U?${termIdx+1}</span>`;
            }).join(" ");

            tr.innerHTML = `
                <td style="text-align: center;">
                    <input type="checkbox" class="cb-student-select" value="${student.id}" style="transform: scale(1.2); cursor: pointer;" onchange="app.updateBulkDeleteButton()">
                </td>
                <td>
                    <div class="order-btn-col">
                        <button class="order-arrow-btn" onclick="app.moveStudentInRoster('${student.id}', -1)" title="?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½">
                            <svg viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>
                        </button>
                        <span style="font-size:0.75rem;">${index + 1}</span>
                        <button class="order-arrow-btn" onclick="app.moveStudentInRoster('${student.id}', 1)" title="?ï؟½U?Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U?Uï؟½">
                            <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                        </button>
                    </div>
                </td>
                <td><strong>${student.lastname}</strong></td>
                <td><strong>${student.firstname}</strong></td>
                <td>${genderBadge}</td>
                <td>${student.birthdate}</td>
                <td>${student.phone || "--"}</td>
                <td>${exLabels}</td>
                <td>
                    <div style="display:flex; gap: 8px;">
                        <button class="btn btn-secondary btn-sm" onclick="app.openEditStudent('${student.id}')">${this.getTranslation("edit")}</button>
                        <button class="btn btn-danger btn-sm" onclick="app.deleteStudent('${student.id}')">${this.getTranslation("delete")}</button>
                        <div class="contact-actions">
                            <button class="contact-icon-btn whatsapp-color" onclick="app.sendMessageToParent('${student.id}', 'whatsapp')" title="?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½?ï؟½">
                                <svg viewBox="0 0 24 24" style="fill:currentColor;"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.966L2 22l5.222-1.37a9.924 9.924 0 0 0 4.782 1.22c5.504 0 9.986-4.478 9.988-9.985 0-2.669-1.039-5.176-2.927-7.068A9.907 9.907 0 0 0 12.012 2zm5.72 13.916c-.244.688-1.201 1.26-1.649 1.345-.448.085-.826.31-2.775-.461-2.493-.988-4.088-3.528-4.212-3.693-.125-.164-1.01-1.342-1.01-2.559 0-1.218.636-1.815.862-2.062.227-.248.497-.31.662-.31.166 0 .332.002.476.008.149.006.349-.056.545.419.2.485.682 1.662.742 1.785.06.124.099.269.017.433-.082.164-.124.269-.247.412-.124.145-.262.325-.375.437-.124.123-.254.257-.109.505.145.247.643 1.057 1.38 1.713.95.843 1.748 1.106 1.996 1.229.248.124.393.104.538-.063.146-.166.621-.722.787-.968.165-.247.331-.206.559-.124.227.082 1.446.68 1.694.804.248.123.413.185.474.288.06.104.06.598-.184 1.286z"/></svg>
                            </button>
                            <button class="contact-icon-btn sms-color" onclick="app.sendMessageToParent('${student.id}', 'sms')" title="?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½U??ï؟½ SMS">
                                <svg viewBox="0 0 24 24" style="fill:currentColor;"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
                            </button>
                        </div>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    /**
     * Shifts order index of a student record up/down in array list
     */
    moveStudentInRoster(studentId, direction) {
        const student = this.database.students.find(s => s.id === studentId);
        if (!student) return;

        const classStudents = this.database.students.filter(s => s.classId === student.classId);
        classStudents.sort((a, b) => a.order - b.order);

        const currentIdx = classStudents.findIndex(s => s.id === studentId);
        const targetIdx = currentIdx + direction;

        if (targetIdx < 0 || targetIdx >= classStudents.length) return;

        // Swap order values
        const tempOrder = classStudents[currentIdx].order;
        classStudents[currentIdx].order = classStudents[targetIdx].order;
        classStudents[targetIdx].order = tempOrder;

        this.saveDatabase();
        this.renderRosterStudents();
    }

    openEditStudent(studentId) {
        const student = this.database.students.find(s => s.id === studentId);
        if (student) {
            document.getElementById("student-id-edit-flag").value = student.id;
            document.getElementById("student-firstname-input").value = student.firstname;
            document.getElementById("student-lastname-input").value = student.lastname;
            document.getElementById("student-gender-input").value = student.gender;
            document.getElementById("student-birth-input").value = student.birthdate;
            document.getElementById("student-phone-input").value = student.phone || "";
            
            document.getElementById("student-ex-1").checked = student.exemptions[0];
            document.getElementById("student-ex-2").checked = student.exemptions[1];
            document.getElementById("student-ex-3").checked = student.exemptions[2];
            
            document.getElementById("modal-student-title-text").textContent = this.currentLang === "ar" ? "???ï؟½?ï؟½U?Uï؟½ ?ï؟½U??ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½" : "Modifier l'?ï؟½l?ï؟½ve";
            document.getElementById("modal-add-student").classList.add("active");
        }
    }

    deleteStudent(studentId) {
        if (confirm(this.currentLang === "ar" ? "Uï؟½Uï؟½ ?ï؟½Uï؟½?? Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½??" : "Confirmez-vous la suppression de cet ?ï؟½l?ï؟½ve ?")) {
            this.database.students = this.database.students.filter(s => s.id !== studentId);
            // Clean associated scores
            for (let term = 1; term <= 3; term++) {
                delete this.database.grades[`${studentId}_${term}_continuous`];
                delete this.database.grades[`${studentId}_${term}_assignment`];
                delete this.database.grades[`${studentId}_${term}_exam`];
            }
            this.saveDatabase();
            this.renderActiveViewContent();
        }
    }

    updateBulkDeleteButton() {
        const checkboxes = document.querySelectorAll(".cb-student-select:checked");
        const btnDeleteSelected = document.getElementById("btn-delete-selected-students");
        if (checkboxes.length > 0) {
            btnDeleteSelected.style.display = "flex";
            btnDeleteSelected.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg> ?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ (${checkboxes.length})`;
        } else {
            btnDeleteSelected.style.display = "none";
        }
    }

    deleteSelectedStudents() {
        const checkboxes = document.querySelectorAll(".cb-student-select:checked");
        if (checkboxes.length === 0) return;

        if (confirm(this.currentLang === "ar" ? `Uï؟½Uï؟½ ?ï؟½Uï؟½?? Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½U? ${checkboxes.length} ??Uï؟½?ï؟½Uï؟½U??ï؟½??` : `Confirmez-vous la suppression de ${checkboxes.length} ?ï؟½l?ï؟½ves ?`)) {
            const idsToDelete = Array.from(checkboxes).map(cb => cb.value);
            
            this.database.students = this.database.students.filter(s => !idsToDelete.includes(s.id));
            
            idsToDelete.forEach(studentId => {
                for (let term = 1; term <= 3; term++) {
                    delete this.database.grades[`${studentId}_${term}_continuous`];
                    delete this.database.grades[`${studentId}_${term}_assignment`];
                    delete this.database.grades[`${studentId}_${term}_exam`];
                }
            });

            document.getElementById("cb-select-all-students").checked = false;
            this.updateBulkDeleteButton();
            
            this.saveDatabase();
            this.renderActiveViewContent();
            this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½" : "Suppression r?ï؟½ussie");
        }
    }

    deleteActiveClass() {
        const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
        if (!activeClass) return;

        if (confirm(this.getTranslation("class-delete-confirm"))) {
            this.database.classes = this.database.classes.filter(c => c.id !== activeClass.id);
            const classStudents = this.database.students.filter(s => s.classId === activeClass.id);
            classStudents.forEach(s => {
                for (let term = 1; term <= 3; term++) {
                    delete this.database.grades[`${s.id}_${term}_continuous`];
                    delete this.database.grades[`${s.id}_${term}_assignment`];
                    delete this.database.grades[`${s.id}_${term}_exam`];
                }
            });
            this.database.students = this.database.students.filter(s => s.classId !== activeClass.id);
            this.saveDatabase();
            this.activeRosterClassId = "";
            this.populateClassDropdowns();
            this.renderActiveViewContent();
        }
    }

    /**
     * ==========================================
     * VIEW 3: GRADING SHEET & SCORING CALCULATIONS
     * ==========================================
     */
    renderGradingSheet() {
        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        const termSelectVal = document.getElementById("term-select-grading").value;
        const activeTerm = termSelectVal === "annual" ? "annual" : parseInt(termSelectVal);
        
        // Hide/show guide buttons and badge sports info for annual term
        const indSportBadge = document.getElementById("grading-ind-sport-name");
        const colSportBadge = document.getElementById("grading-col-sport-name");
        
        if (activeTerm === "annual") {
            if (indSportBadge) indSportBadge.textContent = "?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?";
            if (colSportBadge) colSportBadge.textContent = "?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?";
        } else {
            const termActivity = this.database.termActivities[`term_${activeTerm}`];
            if (indSportBadge) indSportBadge.textContent = this.getSportName(termActivity.individual, "individual");
            if (colSportBadge) colSportBadge.textContent = this.getSportName(termActivity.collective, "collective");
        }



        const sheetTable = document.getElementById("table-grading-sheet");
        sheetTable.innerHTML = "";

        if (!activeClass) {
            sheetTable.innerHTML = `<tr><td class="text-center text-muted">${this.getTranslation("no-data-select-class")}</td></tr>`;
            return;
        }

        const classStudents = this.database.students.filter(s => s.classId === activeClass.id);
        classStudents.sort((a, b) => a.order - b.order);

        if (classStudents.length === 0) {
            sheetTable.innerHTML = `<tr><td class="text-center text-muted">${this.getTranslation("no-students-in-class")}</td></tr>`;
            return;
        }

        if (activeTerm === "annual") {
            this.renderAnnualTermSheet(sheetTable, classStudents);
            return;
        }

        // Branching according to active grading tab (continuous, assignment, exam, term-summary)
        const type = this.activeGradingType;
        const termActivity = this.database.termActivities[`term_${activeTerm}`];
        
        if (type === "continuous") {
            this.renderContinuousAssessmentSheet(sheetTable, classStudents, activeTerm);
        } else if (type === "assignment" || type === "exam") {
            this.renderAssignmentExamSheet(sheetTable, classStudents, activeTerm, type, termActivity, activeClass);
        } else if (type === "term-summary") {
            this.renderTermSummarySheet(sheetTable, classStudents, activeTerm);
        }
    }

    printGradingSheet() {
        const sheetTable = document.getElementById("table-grading-sheet");
        if (!sheetTable || sheetTable.innerHTML.trim() === "") return;

        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        if (!activeClass) return;

        const termSelectVal = document.getElementById("term-select-grading").value;
        const activeTerm = termSelectVal === "annual" ? "annual" : parseInt(termSelectVal);
        
        let printTitleBase = "";
        if (activeTerm === "annual") {
            printTitleBase = "Uï؟½?ï؟½U? ?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?";
        } else {
            const type = this.activeGradingType;
            if (type === "continuous") printTitleBase = "?ï؟½?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½U??ï؟½Uï؟½ " + activeTerm;
            else if (type === "assignment") printTitleBase = "Uï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½U??ï؟½Uï؟½ " + activeTerm;
            else if (type === "exam") printTitleBase = "Uï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½U??ï؟½Uï؟½ " + activeTerm;
            else if (type === "term-summary") printTitleBase = "Uï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ " + activeTerm;
        }
        
        const title = `${printTitleBase} - Uï؟½?ï؟½Uï؟½: ${activeClass.name}`;

        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        // Get inner HTML of table but replace inputs with their values for printing
        let tableClone = sheetTable.cloneNode(true);
        const inputs = sheetTable.querySelectorAll("input");
        const clonedInputs = tableClone.querySelectorAll("input");
        inputs.forEach((input, index) => {
            if (clonedInputs[index]) {
                const span = document.createElement("span");
                span.textContent = input.value;
                clonedInputs[index].parentNode.replaceChild(span, clonedInputs[index]);
            }
        });

        // Also replace interactive session labels with static text
        const sessionLabels = tableClone.querySelectorAll(".session-lbl");
        sessionLabels.forEach(lbl => {
            const span = document.createElement("span");
            span.textContent = lbl.textContent;
            span.style.fontWeight = "bold";
            if (lbl.classList.contains("session-lbl-sick") || lbl.classList.contains("session-lbl-absent")) {
                span.style.color = "#ef4444";
            } else {
                span.style.color = "#10b981";
            }
            lbl.parentNode.replaceChild(span, lbl);
        });

        let html = `
            <div class="print-page" style="padding: 10px; font-family: 'Cairo', sans-serif; direction: rtl;">
                <div style="text-align: center; margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                    <div style="font-weight: bold; font-size: 0.9rem;">?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</div>
                    <div style="font-weight: bold; font-size: 0.9rem;">Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</div>
                    <div style="display: flex; justify-content: space-between; margin-top: 5px; font-size: 0.8rem;">
                        <div style="text-align: right;">
                            <div>${wilaya}</div>
                            <div>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½: ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div>?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½: ${academicYear}</div>
                            <div>?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½: ${teacherName}</div>
                        </div>
                    </div>
                    <h2 style="margin: 10px 0 5px 0; font-size: 1.1rem;">${title}</h2>
                </div>
                <div style="overflow-x: hidden;">
                    <table style="width: 100%; max-width: 100%; border-collapse: collapse; text-align: right; font-size: 0.75rem; table-layout: auto;">
                        ${tableClone.innerHTML}
                    </table>
                </div>
                <div style="margin-top: 20px; display: flex; justify-content: space-between; font-weight: bold; font-size: 0.9rem;">
                    <div>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½:</div>
                    <div>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½):</div>
                </div>
                <div style="text-align: center; font-size: 0.6rem; color: #666; margin-top: 30px;">
                    Smart_Eps | Mai26 | Delbaz_Med
                </div>
            </div>
        `;

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;
        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ${title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Cairo', sans-serif; }
                    table, th, td { border: 1px solid #000; padding: 4px 2px; }
                    th { background: #f3f4f6; }
                    .badge { padding: 1px 4px; border-radius: 4px; font-size: 0.65rem; }
                    .badge-blue { background: #e0f2fe; color: #0284c7; }
                    .badge-pink { background: #fce7f3; color: #db2777; }
                    .badge-danger { background: #fee2e2; color: #ef4444; }
                    .badge-amber { background: #fef3c7; color: #d97706; }
                    .badge-emerald { background: #d1fae5; color: #059669; }
                    .text-center { text-align: center; }
                    .session-cell-group { display: flex; gap: 2px; justify-content: center; }
                    @media print {
                        @page { size: landscape; margin: 10mm; }
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; zoom: 95%; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0;">
                ${html}
                <div class="no-print" style="text-align: center; margin: 10px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem;">?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½</button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    /**
     * Renders continuous assessment input grids
     */
    renderContinuousAssessmentSheet(tableNode, students, term) {
        // Table headers
        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th style="width: 200px;" class="text-center">7 ?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ (14 Uï؟½)</th>
                    <th style="width: 80px;" class="text-center">?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (2Uï؟½)</th>
                    <th style="width: 80px;" class="text-center">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ (2Uï؟½)</th>
                    <th style="width: 80px;" class="text-center">?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (2Uï؟½)</th>
                    <th style="width: 80px;" class="text-center">Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ (20)</th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const isExempted = student.exemptions && student.exemptions[term - 1];
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            // Load saved continuous scores
            const gradeKey = `${student.id}_${term}_continuous`;
            const scoreObj = this.database.grades[gradeKey] || { sessions: ["P","P","P","P","P","P","P"], discipline: 2, participation: 2, creativity: 2 };

            if (isExempted) {
                // Disabled row for exempted students
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted">${student.lastname}</td>
                        <td class="text-muted">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td colspan="4" class="text-center"><span class="badge badge-danger">${this.getTranslation("exempted-abrv")}</span></td>
                        <td><strong class="highlight-text">${this.getTranslation("exempted-abrv")}</strong></td>
                    </tr>
                `;
            } else {
                // Interactive sessions grid
                let sessionsHtml = `<div class="session-cell-group">`;
                for (let sIdx = 0; sIdx < 7; sIdx++) {
                    const status = scoreObj.sessions[sIdx] || "P";
                    let labelText = "âœ“";
                    let labelClass = "session-lbl-present";
                    if (status === "M") {
                        labelText = "M";
                        labelClass = "session-lbl-sick active";
                    } else if (status === "A") {
                        labelText = "A";
                        labelClass = "session-lbl-absent active";
                    }

                    sessionsHtml += `
                        <span class="session-lbl ${labelClass}" 
                              id="lbl_${student.id}_${sIdx}" 
                              onclick="app.cycleSessionStatus('${student.id}', ${sIdx})">${labelText}</span>
                    `;
                }
                sessionsHtml += `</div>`;

                // Calculate current sum
                const caSumObj = this.calculateStudentContinuousSum(scoreObj);

                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td><strong>${student.lastname}</strong></td>
                        <td><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td>${sessionsHtml}</td>
                        <td>
                            <input type="number" min="0" max="2" step="0.5" class="grading-input ca-input disc-input"
                                   value="${scoreObj.discipline}" data-student="${student.id}" data-field="discipline" style="width: 70px;">
                        </td>
                        <td>
                            <input type="number" min="0" max="2" step="0.5" class="grading-input ca-input part-input"
                                   value="${scoreObj.participation}" data-student="${student.id}" data-field="participation" style="width: 70px;">
                        </td>
                        <td>
                            <input type="number" min="0" max="2" step="0.5" class="grading-input ca-input crea-input"
                                   value="${scoreObj.creativity}" data-student="${student.id}" data-field="creativity" style="width: 70px;">
                        </td>
                        <td class="final-grade-cell" id="ca_total_${student.id}"><strong>${caSumObj.total}</strong></td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;

        // Register dynamic event listeners for inputs
        tableNode.querySelectorAll(".ca-input").forEach(input => {
            input.addEventListener("input", (e) => {
                const tr = e.target.closest("tr");
                const stdId = e.target.getAttribute("data-student");
                this.recalculateContinuousSumRow(stdId, tr);
            });
        });
    }

    /**
     * Cycles attendance sessions: Present (âœ“) -> Sick (M) -> Absent (A) -> Present (âœ“)
     */
    cycleSessionStatus(studentId, sessionIndex) {
        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const gradeKey = `${studentId}_${activeTerm}_continuous`;

        // Initialize object if not existing
        if (!this.database.grades[gradeKey]) {
            this.database.grades[gradeKey] = {
                sessions: ["P","P","P","P","P","P","P"],
                discipline: 2,
                participation: 2,
                creativity: 2
            };
        }

        const log = this.database.grades[gradeKey];
        const current = log.sessions[sessionIndex] || "P";
        
        let nextStatus = "P";
        let nextLabel = "âœ“";
        
        if (current === "P") {
            nextStatus = "M";
            nextLabel = "M";
        } else if (current === "M") {
            nextStatus = "A";
            nextLabel = "A";
        }

        log.sessions[sessionIndex] = nextStatus;

        // Update DOM labels
        const node = document.getElementById(`lbl_${studentId}_${sessionIndex}`);
        node.className = "session-lbl";
        if (nextStatus === "P") {
            node.classList.add("session-lbl-present");
        } else if (nextStatus === "M") {
            node.classList.add("session-lbl-sick", "active");
        } else if (nextStatus === "A") {
            node.classList.add("session-lbl-absent", "active");
        }
        node.textContent = nextLabel;

        // Update row total
        const tr = node.closest("tr");
        this.recalculateContinuousSumRow(studentId, tr);
    }

    /**
     * Calculates continuous assessment points from session logs & rubrics
     */
    calculateStudentContinuousSum(scoreObj) {
        let attScore = 0;
        scoreObj.sessions.forEach(status => {
            if (status === "P") attScore += 2;
            else if (status === "M") attScore += 1;
        });

        const disc = parseFloat(scoreObj.discipline) || 0;
        const part = parseFloat(scoreObj.participation) || 0;
        const crea = parseFloat(scoreObj.creativity) || 0;

        const total = attScore + disc + part + crea;
        return {
            attendance: attScore,
            total: Math.min(20, Math.max(0, total))
        };
    }

    recalculateContinuousSumRow(studentId, rowElement) {
        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const gradeKey = `${studentId}_${activeTerm}_continuous`;
        const log = this.database.grades[gradeKey];
        
        // Grab current values from inputs
        const disc = parseFloat(rowElement.querySelector(".disc-input").value) || 0;
        const part = parseFloat(rowElement.querySelector(".part-input").value) || 0;
        const crea = parseFloat(rowElement.querySelector(".crea-input").value) || 0;

        log.discipline = disc;
        log.participation = part;
        log.creativity = crea;

        const sumObj = this.calculateStudentContinuousSum(log);
        rowElement.querySelector(".final-grade-cell").textContent = sumObj.total;
    }

    /**
     * Renders Fard (Assignment) / Ikhtibar (Exam) sheets
     */
    renderAssignmentExamSheet(tableNode, students, term, type, sports, activeClass) {
        const indSportName = this.getSportName(sports.individual, "individual");
        const colSportName = this.getSportName(sports.collective, "collective");

        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th colspan="3" class="text-center">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U?: ${indSportName} (3 Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½??)</th>
                    <th style="width: 90px;" class="text-center">Uï؟½. ?ï؟½Uï؟½U??ï؟½?ï؟½U?</th>
                    <th style="width: 160px;" class="text-center">Uï؟½. ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?: ${colSportName}</th>
                    <th style="width: 100px;" class="text-center">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½U?</th>
                </tr>
                <tr class="subheader-attempts">
                    <th colspan="4"></th>
                    <th style="width: 70px;" class="text-center">1</th>
                    <th style="width: 70px;" class="text-center">2</th>
                    <th style="width: 70px;" class="text-center">3</th>
                    <th colspan="3"></th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const isExempted = student.exemptions && student.exemptions[term - 1];
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            // Load saved marks
            const gradeKey = `${student.id}_${term}_${type}`;
            const scoreObj = this.database.grades[gradeKey] || { attempts: ["", "", ""], collective: "" };

            if (isExempted) {
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted">${student.lastname}</td>
                        <td class="text-muted">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td colspan="5" class="text-center"><span class="badge badge-danger">${this.getTranslation("exempted-abrv")}</span></td>
                        <td><strong class="highlight-text">${this.getTranslation("exempted-abrv")}</strong></td>
                    </tr>
                `;
            } else {
                const att1 = scoreObj.attempts[0] !== undefined ? scoreObj.attempts[0] : "";
                const att2 = scoreObj.attempts[1] !== undefined ? scoreObj.attempts[1] : "";
                const att3 = scoreObj.attempts[2] !== undefined ? scoreObj.attempts[2] : "";
                const colScore = scoreObj.collective !== undefined ? scoreObj.collective : "";

                // Calculate best attempt and convert to score out of 20
                const gradingMath = this.calculateStudentAttemptsMark(activeClass.grade || 1, sports.individual, student.gender, [att1, att2, att3]);
                const indPoints = gradingMath.score > 0 ? gradingMath.score.toFixed(1) : "--";

                const finalSum = (gradingMath.score > 0 && colScore !== "") 
                    ? ((gradingMath.score + parseFloat(colScore)) / 2).toFixed(1)
                    : "--";

                const rubricOptions = COLLECTIVE_RUBRIC.map(r => {
                    const selected = colScore !== "" && parseFloat(colScore) === r.score ? "selected" : "";
                    return `<option value="${r.score}" ${selected} title="${r.appreciation} - ${r.indicator}">${r.code} (${r.score})</option>`;
                }).join("");

                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td><strong>${student.lastname}</strong></td>
                        <td><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td>
                            <input type="number" step="0.01" class="grading-input attempt-input att1" 
                                   value="${att1}" data-student="${student.id}" placeholder="0.0" style="width: 70px;">
                        </td>
                        <td>
                            <input type="number" step="0.01" class="grading-input attempt-input att2" 
                                   value="${att2}" data-student="${student.id}" placeholder="0.0" style="width: 70px;">
                        </td>
                        <td>
                            <input type="number" step="0.01" class="grading-input attempt-input att3" 
                                   value="${att3}" data-student="${student.id}" placeholder="0.0" style="width: 70px;">
                        </td>
                        <td class="text-center font-bold text-blue ind-points-cell" id="ind_score_${student.id}">${indPoints}</td>
                        <td>
                            <div class="collective-grade-container">
                                <input type="number" min="0" max="20" step="0.5" class="grading-input collective-input" 
                                       value="${colScore}" data-student="${student.id}" placeholder="0" style="width: 60px;">
                                <select class="rubric-select" data-student="${student.id}" style="width: 60px; font-family: inherit; font-size: 0.75rem; padding: 2px;" title="?ï؟½?ï؟½???ï؟½ ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½U?U?Uï؟½ Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½">
                                    <option value="">--</option>
                                    ${rubricOptions}
                                </select>
                            </div>
                        </td>
                        <td class="final-grade-cell" id="final_term_avg_${student.id}"><strong>${finalSum}</strong></td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;

        // Listeners for instant calculations
        tableNode.querySelectorAll(".attempt-input, .collective-input").forEach(input => {
            input.addEventListener("input", (e) => {
                const tr = e.target.closest("tr");
                const stdId = e.target.getAttribute("data-student");
                this.recalculateAttemptExamRow(stdId, tr, sports.individual);
            });
        });

        tableNode.querySelectorAll(".rubric-select").forEach(select => {
            select.addEventListener("change", (e) => {
                const tr = e.target.closest("tr");
                const stdId = e.target.getAttribute("data-student");
                const colInput = tr.querySelector(".collective-input");
                if (colInput && e.target.value !== "") {
                    colInput.value = e.target.value;
                }
                this.recalculateAttemptExamRow(stdId, tr, sports.individual);
            });
        });
    }

    /**
     * Determines best attempt and scales to /20
     */
    calculateStudentAttemptsMark(grade, sportId, gender, attemptsArray) {
        const floatAttempts = attemptsArray.map(a => parseFloat(a)).filter(a => !isNaN(a) && a > 0);
        if (floatAttempts.length === 0) return { best: 0, score: 0 };

        let scale = null;
        if (this.database.scales[sportId]) {
            const sportScales = this.database.scales[sportId];
            if (sportScales[grade] && sportScales[grade][gender]) {
                scale = sportScales[grade][gender];
            } else if (sportScales["1"] && sportScales["1"][gender]) {
                scale = sportScales["1"][gender];
            } else if (sportScales[gender]) {
                scale = sportScales[gender];
            }
        }
        if (!scale) return { best: 0, score: 0 };

        // Best attempt depends on lowerIsBetter (running vs jumping/throwing)
        let best = floatAttempts[0];
        if (scale.lowerIsBetter) {
            best = Math.min(...floatAttempts);
        } else {
            best = Math.max(...floatAttempts);
        }

        // Interpolate out of 20 (limits: best gives 20/20, worst gives 5/20)
        let score = 5;
        const bLimit = scale.best;
        const wLimit = scale.worst;

        if (scale.lowerIsBetter) {
            if (best <= bLimit) score = 20;
            else if (best >= wLimit) score = 5;
            else {
                score = 20 - ((best - bLimit) / (wLimit - bLimit)) * 15;
            }
        } else {
            if (best >= bLimit) score = 20;
            else if (best <= wLimit) score = 5;
            else {
                score = 5 + ((best - wLimit) / (bLimit - wLimit)) * 15;
            }
        }

        return {
            best: best,
            score: Math.min(20, Math.max(0, score))
        };
    }

    recalculateAttemptExamRow(studentId, rowElement, sportId) {
        const student = this.database.students.find(s => s.id === studentId);
        
        const att1 = rowElement.querySelector(".att1").value;
        const att2 = rowElement.querySelector(".att2").value;
        const att3 = rowElement.querySelector(".att3").value;
        const colVal = rowElement.querySelector(".collective-input").value;

        const activeClass = student ? this.database.classes.find(c => c.id === student.classId) : null;
        const grade = activeClass ? activeClass.grade : 1;

        const gradingMath = this.calculateStudentAttemptsMark(grade, sportId, student.gender, [att1, att2, att3]);
        
        // Show points out of 20
        const indPointsCell = rowElement.querySelector(".ind-points-cell");
        if (gradingMath.score > 0) {
            indPointsCell.textContent = gradingMath.score.toFixed(1);
        } else {
            indPointsCell.textContent = "--";
        }

        // Recalculate average
        const finalCell = rowElement.querySelector(".final-grade-cell");
        if (gradingMath.score > 0 && colVal !== "") {
            const avg = (gradingMath.score + parseFloat(colVal)) / 2;
            finalCell.innerHTML = `<strong>${avg.toFixed(1)}</strong>`;
        } else {
            finalCell.innerHTML = `<strong>--</strong>`;
        }
    }

    /**
     * Renders term grade summary sheet (with printing options)
     */
    renderTermSummarySheet(tableNode, students, term) {
        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th class="text-center">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ (/20)</th>
                    <th class="text-center">?ï؟½Uï؟½U??ï؟½?ï؟½ (/20)</th>
                    <th class="text-center">?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½ (/20)</th>
                    <th class="text-center" style="width: 110px;">Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ ${term}</th>
                    <th class="text-center">?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½</th>
                    <th class="text-center" style="min-width: 150px;">?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½</th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const isExempted = student.exemptions && student.exemptions[term - 1];
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            if (isExempted) {
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted">${student.lastname}</td>
                        <td class="text-muted">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td colspan="3" class="text-center"><span class="badge badge-danger">${this.getTranslation("exempted-abrv")}</span></td>
                        <td><strong class="highlight-text">${this.getTranslation("exempted-abrv")}</strong></td>
                        <td class="text-center">--</td>
                        <td class="text-center">--</td>
                    </tr>
                `;
            } else {
                const results = this.calculateStudentTermAverage(student.id, term);
                
                const caText = results.ca !== null ? results.ca.toFixed(1) : "--";
                const assText = results.assignment !== null ? results.assignment.toFixed(1) : "--";
                const examText = results.exam !== null ? results.exam.toFixed(1) : "--";
                const termAvgText = results.termAverage !== null ? results.termAverage.toFixed(2) : "--";

                let appreciation = "";
                let appreciationClass = "";
                let guideline = "";
                if (results.termAverage !== null) {
                    if (results.termAverage < 10) {
                        appreciation = "?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½??Uï؟½?ï؟½?ï؟½";
                        appreciationClass = "badge-danger";
                        guideline = "?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½";
                    } else if (results.termAverage < 13) {
                        appreciation = "?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½";
                        appreciationClass = "badge-amber";
                        guideline = student.gender === "F" ? "?ï؟½?ï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½" : "?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½";
                    } else if (results.termAverage <= 14.5) {
                        appreciation = "?ï؟½U??ï؟½";
                        appreciationClass = "badge-blue";
                        guideline = "Uï؟½?ï؟½?ï؟½Uï؟½";
                    } else if (results.termAverage < 17) {
                        appreciation = "?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½";
                        appreciationClass = "badge-emerald";
                        guideline = "Uï؟½?ï؟½?ï؟½Uï؟½";
                    } else {
                        appreciation = "Uï؟½Uï؟½???ï؟½?ï؟½";
                        appreciationClass = "badge-pink";
                        guideline = "Uï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½";
                    }
                }

                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td><strong>${student.lastname}</strong></td>
                        <td><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td class="text-center">${caText}</td>
                        <td class="text-center">${assText}</td>
                        <td class="text-center">${examText}</td>
                        <td class="final-grade-cell text-center" style="font-size:1.1rem;color:var(--color-primary);"><strong>${termAvgText}</strong></td>
                        <td class="text-center"><span class="badge ${appreciationClass}">${appreciation || "--"}</span></td>
                        <td class="text-center" style="font-size: 0.85rem; color: #555;">${guideline || "--"}</td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;
    }

    renderAnnualTermSheet(tableNode, students) {
        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th class="text-center">Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½</th>
                    <th class="text-center">Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?</th>
                    <th class="text-center">Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½</th>
                    <th class="text-center" style="width: 130px;">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?</th>
                    <th class="text-center">?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½</th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            const isExemptedAll = student.exemptions && student.exemptions[0] && student.exemptions[1] && student.exemptions[2];

            if (isExemptedAll) {
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted">${student.lastname}</td>
                        <td class="text-muted">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td class="text-center"><span class="badge badge-danger">Uï؟½?ï؟½U?Uï؟½</span></td>
                        <td class="text-center"><span class="badge badge-danger">Uï؟½?ï؟½U?Uï؟½</span></td>
                        <td class="text-center"><span class="badge badge-danger">Uï؟½?ï؟½U?Uï؟½</span></td>
                        <td class="text-center"><strong class="highlight-text">?ï؟½?ï؟½U??ï؟½?? Uï؟½Uï؟½U?</strong></td>
                        <td class="text-center">--</td>
                    </tr>
                `;
            } else {
                const term1 = this.calculateStudentTermAverage(student.id, 1);
                const term2 = this.calculateStudentTermAverage(student.id, 2);
                const term3 = this.calculateStudentTermAverage(student.id, 3);
                
                const t1Avg = term1.termAverage !== null ? term1.termAverage : null;
                const t2Avg = term2.termAverage !== null ? term2.termAverage : null;
                const t3Avg = term3.termAverage !== null ? term3.termAverage : null;

                const validTerms = [t1Avg, t2Avg, t3Avg].filter(a => a !== null);
                let annualAvg = null;
                if (validTerms.length > 0) {
                    annualAvg = validTerms.reduce((sum, val) => sum + val, 0) / validTerms.length;
                }

                const formatAvg = (avg) => avg !== null ? avg.toFixed(2) : '<span class="badge badge-danger">Uï؟½?ï؟½U?Uï؟½</span>';
                const annualAvgText = annualAvg !== null ? annualAvg.toFixed(2) : "--";

                let appreciation = "";
                let appreciationClass = "";
                if (annualAvg !== null) {
                    if (annualAvg < 10) {
                        appreciation = "?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½??Uï؟½?ï؟½?ï؟½";
                        appreciationClass = "badge-danger";
                    } else if (annualAvg < 13) {
                        appreciation = "?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½";
                        appreciationClass = "badge-amber";
                    } else if (annualAvg < 14.5) {
                        appreciation = "?ï؟½U??ï؟½";
                        appreciationClass = "badge-blue";
                    } else if (annualAvg < 17) {
                        appreciation = "?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½";
                        appreciationClass = "badge-emerald";
                    } else {
                        appreciation = "Uï؟½Uï؟½???ï؟½?ï؟½";
                        appreciationClass = "badge-pink";
                    }
                }

                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td><strong>${student.lastname}</strong></td>
                        <td><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td class="text-center">${formatAvg(t1Avg)}</td>
                        <td class="text-center">${formatAvg(t2Avg)}</td>
                        <td class="text-center">${formatAvg(t3Avg)}</td>
                        <td class="final-grade-cell text-center" style="font-size:1.1rem;color:var(--color-primary);"><strong>${annualAvgText}</strong></td>
                        <td class="text-center"><span class="badge ${appreciationClass}">${appreciation || "--"}</span></td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;
    }

    /**
     * Compute term average: (CA + Assignment + Exam * 2) / 4
     */
    calculateStudentTermAverage(studentId, term) {
        const student = this.database.students.find(s => s.id === studentId);
        if (student && student.exemptions && student.exemptions[term - 1]) {
            return { ca: null, assignment: null, exam: null, termAverage: null };
        }

        const activeClass = student ? this.database.classes.find(c => c.id === student.classId) : null;
        const grade = activeClass ? activeClass.grade : 1;

        // 1. Continuous
        const caKey = `${studentId}_${term}_continuous`;
        const caObj = this.database.grades[caKey];
        let caScore = null;
        if (caObj) {
            caScore = this.calculateStudentContinuousSum(caObj).total;
        }

        // 2. Assignment
        const assKey = `${studentId}_${term}_assignment`;
        const assObj = this.database.grades[assKey];
        let assScore = null;
        if (assObj && assObj.collective !== undefined && assObj.collective !== "") {
            const sports = this.database.termActivities[`term_${term}`];
            const indMath = this.calculateStudentAttemptsMark(grade, sports.individual, student.gender, assObj.attempts);
            if (indMath.score > 0) {
                assScore = (indMath.score + parseFloat(assObj.collective)) / 2;
            }
        }

        // 3. Exam
        const examKey = `${studentId}_${term}_exam`;
        const examObj = this.database.grades[examKey];
        let examScore = null;
        if (examObj && examObj.collective !== undefined && examObj.collective !== "") {
            const sports = this.database.termActivities[`term_${term}`];
            const indMath = this.calculateStudentAttemptsMark(grade, sports.individual, student.gender, examObj.attempts);
            if (indMath.score > 0) {
                examScore = (indMath.score + parseFloat(examObj.collective)) / 2;
            }
        }

        // Average
        let termAverage = null;
        if (caScore !== null && assScore !== null && examScore !== null) {
            termAverage = (caScore + assScore + (examScore * 2)) / 4;
        }

        return {
            ca: caScore,
            assignment: assScore,
            exam: examScore,
            termAverage: termAverage
        };
    }

    /**
     * Compute Annual average considering per-term exemptions
     */
    calculateStudentAnnualAverage(studentId) {
        const student = this.database.students.find(s => s.id === studentId);
        if (!student) return { value: null, label: "--" };

        const exemptions = student.exemptions || [false, false, false];
        
        // Count active terms
        const activeTerms = [];
        for (let term = 1; term <= 3; term++) {
            if (!exemptions[term - 1]) {
                const termResults = this.calculateStudentTermAverage(studentId, term);
                if (termResults.termAverage !== null) {
                    activeTerms.push(termResults.termAverage);
                }
            }
        }

        if (activeTerms.length === 0) {
            return { value: null, label: this.getTranslation("exempted-abrv") }; // "Uï؟½?ï؟½U?Uï؟½"
        }

        // Annual average is sum of active terms divided by count
        const sum = activeTerms.reduce((a, b) => a + b, 0);
        const avg = sum / activeTerms.length;

        return {
            value: parseFloat(avg.toFixed(2)),
            label: avg.toFixed(1)
        };
    }

    /**
     * Saves changes in active sheet to database
     */
    saveActiveGradingSheetData() {
        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        if (!activeClass) return;

        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const type = this.activeGradingType;

        if (type === "term-summary") return; // Read only summary view

        const tbody = document.querySelector("#table-grading-sheet tbody");
        if (!tbody) return;

        const rows = tbody.querySelectorAll("tr");
        const sports = this.database.termActivities[`term_${activeTerm}`];

        rows.forEach(row => {
            const input = row.querySelector(".grading-input");
            if (!input) return; // Exempted row has no inputs, skip

            const studentId = input.getAttribute("data-student");
            const gradeKey = `${studentId}_${activeTerm}_${type}`;

            if (type === "continuous") {
                // Read continuous inputs
                const disc = parseFloat(row.querySelector(".disc-input").value) || 0;
                const part = parseFloat(row.querySelector(".part-input").value) || 0;
                const crea = parseFloat(row.querySelector(".crea-input").value) || 0;

                // Retain current session values from memory
                const currentObj = this.database.grades[gradeKey] || { sessions: ["P","P","P","P","P","P","P"] };
                
                this.database.grades[gradeKey] = {
                    sessions: currentObj.sessions,
                    discipline: disc,
                    participation: part,
                    creativity: crea
                };
            } else {
                // Assignment / Exam
                const att1 = row.querySelector(".att1").value;
                const att2 = row.querySelector(".att2").value;
                const att3 = row.querySelector(".att3").value;
                const colVal = row.querySelector(".collective-input").value;

                this.database.grades[gradeKey] = {
                    attempts: [
                        att1 !== "" ? parseFloat(att1) : "",
                        att2 !== "" ? parseFloat(att2) : "",
                        att3 !== "" ? parseFloat(att3) : ""
                    ],
                    collective: colVal !== "" ? parseFloat(colVal) : ""
                };
            }
        });

        this.saveDatabase();
        this.showToast(this.getTranslation("saved-success"));
        this.renderActiveViewContent();
    }

    /**
     * ==========================================
     * SCALES BENCHMARKS MANAGER LOGIC
     * ==========================================
     */
    loadScaleValuesToModal() {
        const sport = document.getElementById("scale-select-sport").value;
        const grade = document.getElementById("scale-select-grade").value;
        
        let sportScales = this.database.scales[sport];
        if (!sportScales) {
            this.database.scales[sport] = {
                "1": { M: { best: 0, worst: 0, lowerIsBetter: false }, F: { best: 0, worst: 0, lowerIsBetter: false } },
                "2": { M: { best: 0, worst: 0, lowerIsBetter: false }, F: { best: 0, worst: 0, lowerIsBetter: false } },
                "3": { M: { best: 0, worst: 0, lowerIsBetter: false }, F: { best: 0, worst: 0, lowerIsBetter: false } }
            };
            sportScales = this.database.scales[sport];
        }

        if (sportScales && (sportScales.M || sportScales.F)) {
            this.database.scales[sport] = {
                "1": JSON.parse(JSON.stringify(sportScales)),
                "2": JSON.parse(JSON.stringify(sportScales)),
                "3": JSON.parse(JSON.stringify(sportScales))
            };
            sportScales = this.database.scales[sport];
        }

        const scale = sportScales ? sportScales[grade] : null;

        if (scale) {
            document.getElementById("scale-m-best").value = scale.M ? scale.M.best : 0;
            document.getElementById("scale-m-worst").value = scale.M ? scale.M.worst : 0;
            document.getElementById("scale-f-best").value = scale.F ? scale.F.best : 0;
            document.getElementById("scale-f-worst").value = scale.F ? scale.F.worst : 0;
            
            // Edit label explanations
            const bestLbl = this.currentLang === "ar" ? "?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? (U?Uï؟½Uï؟½?ï؟½ 20/20):" : "Performance Max (donne 20/20) :";
            const worstLbl = this.currentLang === "ar" ? "?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? (U?Uï؟½Uï؟½?ï؟½ 05/20):" : "Performance Min (donne 05/20) :";
            
            const unit = (sport === "speed-run" || sport === "endurance-run") ? " (sec)" : " (m)";
            
            document.getElementById("lbl-scale-m-best").textContent = bestLbl + unit;
            document.getElementById("lbl-scale-m-worst").textContent = worstLbl + unit;
            document.getElementById("lbl-scale-f-best").textContent = bestLbl + unit;
            document.getElementById("lbl-scale-f-worst").textContent = worstLbl + unit;
        }
    }

    saveScalesDataFromModal() {
        const sport = document.getElementById("scale-select-sport").value;
        const grade = document.getElementById("scale-select-grade").value;

        let sportScales = this.database.scales[sport];
        if (!sportScales) {
            this.database.scales[sport] = {};
            sportScales = this.database.scales[sport];
        }

        if (sportScales && (sportScales.M || sportScales.F)) {
            this.database.scales[sport] = {
                "1": JSON.parse(JSON.stringify(sportScales)),
                "2": JSON.parse(JSON.stringify(sportScales)),
                "3": JSON.parse(JSON.stringify(sportScales))
            };
            sportScales = this.database.scales[sport];
        }

        const lowerIsBetter = (sport === "speed-run" || sport === "endurance-run");

        if (!sportScales[grade]) {
            sportScales[grade] = {
                M: { best: 0, worst: 0, lowerIsBetter: lowerIsBetter },
                F: { best: 0, worst: 0, lowerIsBetter: lowerIsBetter }
            };
        }

        const scale = sportScales[grade];

        scale.M = {
            best: parseFloat(document.getElementById("scale-m-best").value) || 0,
            worst: parseFloat(document.getElementById("scale-m-worst").value) || 0,
            lowerIsBetter: lowerIsBetter
        };
        scale.F = {
            best: parseFloat(document.getElementById("scale-f-best").value) || 0,
            worst: parseFloat(document.getElementById("scale-f-worst").value) || 0,
            lowerIsBetter: lowerIsBetter
        };

        this.saveDatabase();
        document.getElementById("modal-scale-manager").classList.remove("active");
        this.showToast(this.getTranslation("saved-success"));
        this.renderActiveViewContent();
    }

    printCollectiveRubric() {
        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        const printWindow = window.open("", "_blank");
        if (!printWindow) {
            alert(this.currentLang === "ar" ? "U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½!" : "Veuillez autoriser les popups pour imprimer !");
            return;
        }

        let tableRowsHtml = COLLECTIVE_RUBRIC.map(row => `
            <tr>
                <td class="col-code">${row.code}</td>
                <td class="col-score">${row.score}</td>
                <td class="col-appreciation">${row.appreciation}</td>
                <td class="col-indicator">${row.indicator}</td>
            </tr>
        `).join("");

        const content = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ - Smart EPS</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        padding: 10px 20px;
                        color: #1f2937;
                        background: #fff;
                        font-size: 0.85rem;
                        direction: rtl;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .header-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 15px;
                        border: none;
                    }
                    .header-table td {
                        border: none;
                        padding: 2px 0;
                        font-size: 0.8rem;
                        line-height: 1.5;
                        color: #374151;
                    }
                    .title-container {
                        text-align: center;
                        margin: 10px 0 15px 0;
                    }
                    .title-container h2 {
                        border: 2px solid #b45309;
                        padding: 6px 20px;
                        display: inline-block;
                        border-radius: 8px;
                        font-size: 1.15rem;
                        color: #b45309;
                        background-color: #fffbeb;
                        margin: 0;
                        font-weight: 800;
                        box-shadow: 0 2px 4px rgba(180, 83, 9, 0.08);
                    }
                    .section-title {
                        font-size: 0.95rem;
                        color: #1f2937;
                        border-bottom: 2px solid #b45309;
                        padding-bottom: 4px;
                        margin-top: 10px;
                        margin-bottom: 6px;
                        font-weight: 700;
                    }
                    .rubric-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 15px;
                    }
                    .rubric-table th {
                        border: 1px solid #92400e;
                        padding: 6px 4px;
                        background-color: #b45309;
                        color: #fff;
                        font-weight: 700;
                        text-align: center;
                        font-size: 0.8rem;
                    }
                    .rubric-table td {
                        border: 1px solid #d1d5db;
                        padding: 5px 6px;
                        text-align: center;
                        font-size: 0.8rem;
                        vertical-align: middle;
                    }
                    .col-code {
                        background-color: #fef3c7;
                        color: #92400e;
                        font-weight: 800;
                        font-size: 0.85rem;
                        width: 10%;
                    }
                    .col-score {
                        background-color: #fffbeb;
                        color: #b45309;
                        font-weight: 700;
                        font-size: 0.95rem;
                        width: 15%;
                    }
                    .col-appreciation {
                        background-color: #ffffff;
                        font-weight: 600;
                        width: 20%;
                    }
                    .col-indicator {
                        background-color: #ffffff;
                        text-align: right;
                        padding-right: 15px;
                        direction: rtl;
                        line-height: 1.4;
                        font-size: 0.8rem;
                    }
                    .rubric-table tr:nth-child(even) td.col-appreciation,
                    .rubric-table tr:nth-child(even) td.col-indicator {
                        background-color: #fafafa;
                    }
                    .footer-signatures {
                        margin-top: 20px;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .footer-signatures td {
                        border: none;
                        width: 50%;
                        text-align: center;
                        font-weight: 700;
                        font-size: 0.9rem;
                        color: #374151;
                        padding: 10px;
                    }
                    .signature-box {
                        margin-top: 25px;
                        height: 55px;
                        border: 1px dashed #9ca3af;
                        border-radius: 6px;
                        background: #f9fafb;
                    }
                    @media print {
                        body { padding: 0; margin: 0; }
                        @page { size: A4; margin: 1cm 1.2cm; }
                    }
                </style>
            </head>
            <body>
                <table class="header-table">
                    <tr>
                        <td style="text-align: right; width: 50%;">
                            <strong>?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</strong><br>
                            <strong>Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</strong><br>
                            ${wilaya}<br>
                            ${schoolName}
                        </td>
                        <td style="text-align: left; width: 50%; vertical-align: top; direction: ltr;">
                            <strong>?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½:</strong> ${academicYear}<br>
                            <strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> ${teacherName}
                        </td>
                    </tr>
                </table>

                <div class="title-container">
                    <h2>?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ Uï؟½??Uï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ (Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½)</h2>
                </div>

                <table class="rubric-table">
                    <thead>
                        <tr>
                            <th style="width: 10%;">?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½</th>
                            <th style="width: 15%;">?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (/20)</th>
                            <th style="width: 20%;">?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½</th>
                            <th style="text-align: right; padding-right: 15px;">Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½U?U?Uï؟½U??ï؟½</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRowsHtml}
                    </tbody>
                </table>

                <table class="footer-signatures">
                    <tr>
                        <td>
                            ?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½
                            <div class="signature-box"></div>
                        </td>
                        <td>
                            ?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½
                            <div class="signature-box"></div>
                        </td>
                    </tr>
                </table>

                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() { window.close(); }, 500);
                    };
                </script>
            </body>
            </html>
        `;

        printWindow.document.open();
        printWindow.document.write(content);
        printWindow.document.close();
    }

    calculatePerformanceForScore(scale, score) {
        const bLimit = scale.best;
        const wLimit = scale.worst;
        if (scale.lowerIsBetter) {
            const val = bLimit + (wLimit - bLimit) * (20 - score) / 15;
            return Math.max(0, val);
        } else {
            const val = wLimit + (bLimit - wLimit) * (score - 5) / 15;
            return Math.max(0, val);
        }
    }

    printAllScales() {
        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        const scaleModalActive = document.getElementById("modal-scale-manager").classList.contains("active");
        
        let sportId = "";
        let grade = "1";
        
        if (scaleModalActive) {
            sportId = document.getElementById("scale-select-sport").value;
            grade = document.getElementById("scale-select-grade").value;
        } else {
            const term = parseInt(document.getElementById("term-select-grading")?.value) || 1;
            const activeClassId = this.activeGradingClassId || this.activeRosterClassId || (this.database.classes[0] ? this.database.classes[0].id : "");
            const activeClass = this.database.classes.find(c => c.id === activeClassId);
            grade = activeClass ? activeClass.grade.toString() : "1";
            
            const termSports = this.database.termActivities ? this.database.termActivities[`term_${term}`] : null;
            sportId = termSports ? termSports.individual : "speed-run";
        }

        const sportObj = this.database.sports.individual.find(s => s.id === sportId) || { name: "?ï؟½?ï؟½?ï؟½?ï؟½ (60Uï؟½)", unit: "sec" };
        const sportName = sportObj.name;
        const unitLabel = (sportObj.unit === "sec") ? "?ï؟½?ï؟½Uï؟½U??ï؟½" : "Uï؟½???ï؟½";
        const gradeLabel = grade === "1" ? "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (1AS)" : grade === "2" ? "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (2AS)" : "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (3AS)";

        let scaleM = null;
        let scaleF = null;
        if (this.database.scales[sportId] && this.database.scales[sportId][grade]) {
            scaleM = this.database.scales[sportId][grade].M;
            scaleF = this.database.scales[sportId][grade].F;
        }

        const printWindow = window.open("", "_blank");
        if (!printWindow) {
            alert(this.currentLang === "ar" ? "U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½!" : "Veuillez autoriser les popups pour imprimer !");
            return;
        }

        let leftRowsHtml = "";
        let rightRowsHtml = "";
        
        let idx = 0;
        for (let score = 20; score >= 5; score -= 0.5) {
            const scoreVal = score.toFixed(1);
            let mStr = "--";
            let fStr = "--";

            if (scaleM) {
                const val = this.calculatePerformanceForScore(scaleM, score);
                mStr = `${val.toFixed(2)} ${unitLabel}`;
            }
            if (scaleF) {
                const val = this.calculatePerformanceForScore(scaleF, score);
                fStr = `${val.toFixed(2)} ${unitLabel}`;
            }

            const rowHtml = `
                <tr>
                    <td class="col-score">${scoreVal}</td>
                    <td class="col-m">${mStr}</td>
                    <td class="col-f">${fStr}</td>
                </tr>
            `;

            if (idx < 16) {
                leftRowsHtml += rowHtml;
            } else {
                rightRowsHtml += rowHtml;
            }
            idx++;
        }
        
        // Add a spacer row to rightRowsHtml to match heights (since left has 16 and right has 15)
        rightRowsHtml += `
            <tr>
                <td class="col-score" style="color: transparent; user-select: none;">-</td>
                <td class="col-m" style="color: transparent; user-select: none;">-</td>
                <td class="col-f" style="color: transparent; user-select: none;">-</td>
            </tr>
        `;

        let collectiveTableRowsHtml = COLLECTIVE_RUBRIC.map(row => `
            <tr>
                <td class="col-code">${row.code}</td>
                <td class="col-score-c">${row.score}</td>
                <td class="col-appreciation">${row.appreciation}</td>
                <td class="col-indicator">${row.indicator}</td>
            </tr>
        `).join("");

        const content = `
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ - Smart EPS</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        padding: 10px 20px;
                        color: #1f2937;
                        background: #fff;
                        font-size: 0.82rem;
                        direction: rtl;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .header-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 12px;
                        border: none;
                    }
                    .header-table td {
                        border: none;
                        padding: 2px 0;
                        font-size: 0.78rem;
                        line-height: 1.4;
                        color: #374151;
                    }
                    .title-container {
                        text-align: center;
                        margin: 5px 0 10px 0;
                    }
                    .title-container h2 {
                        border: 2px solid #0f766e;
                        padding: 4px 15px;
                        display: inline-block;
                        border-radius: 8px;
                        font-size: 1.1rem;
                        color: #0f766e;
                        background-color: #f0fdf4;
                        margin: 0;
                        font-weight: 800;
                        box-shadow: 0 2px 4px rgba(15, 118, 110, 0.08);
                    }
                    .title-container.collective h2 {
                        border-color: #b45309;
                        color: #b45309;
                        background-color: #fffbeb;
                        box-shadow: 0 2px 4px rgba(180, 83, 9, 0.08);
                    }
                    .section-title {
                        font-size: 0.9rem;
                        color: #1f2937;
                        border-bottom: 2px solid #0f766e;
                        padding-bottom: 3px;
                        margin-top: 8px;
                        margin-bottom: 4px;
                        font-weight: 700;
                    }
                    .section-title.collective {
                        border-bottom-color: #b45309;
                    }
                    .tables-container {
                        display: flex;
                        gap: 15px;
                        width: 100%;
                        margin-bottom: 10px;
                    }
                    .rubric-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 10px;
                        flex: 1;
                    }
                    .rubric-table th {
                        border: 1px solid #115e59;
                        padding: 5px 4px;
                        background-color: #0f766e;
                        color: #fff;
                        font-weight: 700;
                        text-align: center;
                        font-size: 0.78rem;
                    }
                    .rubric-table th.header-m {
                        background-color: #1d4ed8;
                        border: 1px solid #1e40af;
                    }
                    .rubric-table th.header-f {
                        background-color: #be185d;
                        border: 1px solid #9d174d;
                    }
                    .rubric-table td {
                        border: 1px solid #d1d5db;
                        padding: 4px 5px;
                        text-align: center;
                        font-size: 0.78rem;
                        vertical-align: middle;
                    }
                    .col-score {
                        background-color: #f3f4f6;
                        font-weight: 700;
                        color: #1f2937;
                        border: 1px solid #d1d5db;
                        width: 20%;
                    }
                    .col-m {
                        background-color: #eff6ff;
                        font-weight: 600;
                        color: #1e40af;
                        border: 1px solid #bfdbfe;
                        width: 40%;
                    }
                    .col-f {
                        background-color: #fff1f2;
                        font-weight: 600;
                        color: #be185d;
                        border: 1px solid #fecdd3;
                        width: 40%;
                    }
                    
                    /* Collective Rubric Colors */
                    .rubric-table.col-rubric th {
                        background-color: #b45309;
                        border-color: #92400e;
                    }
                    .col-code {
                        background-color: #fef3c7;
                        color: #92400e;
                        font-weight: 800;
                        font-size: 0.8rem;
                        width: 10%;
                    }
                    .col-score-c {
                        background-color: #fffbeb;
                        color: #b45309;
                        font-weight: 700;
                        font-size: 0.9rem;
                        width: 15%;
                    }
                    .col-appreciation {
                        background-color: #ffffff;
                        font-weight: 600;
                        width: 20%;
                    }
                    .col-indicator {
                        background-color: #ffffff;
                        text-align: right;
                        padding-right: 12px;
                        direction: rtl;
                        line-height: 1.35;
                        font-size: 0.76rem;
                    }
                    .rubric-table.col-rubric tr:nth-child(even) td.col-appreciation,
                    .rubric-table.col-rubric tr:nth-child(even) td.col-indicator {
                        background-color: #fafafa;
                    }

                    .footer-signatures {
                        margin-top: 15px;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .footer-signatures td {
                        border: none;
                        width: 50%;
                        text-align: center;
                        font-weight: 700;
                        font-size: 0.85rem;
                        color: #374151;
                        padding: 5px;
                    }
                    .signature-box {
                        margin-top: 20px;
                        height: 50px;
                        border: 1px dashed #9ca3af;
                        border-radius: 6px;
                        background: #f9fafb;
                    }
                    @media print {
                        body { padding: 0; margin: 0; }
                        @page { size: A4; margin: 0.8cm 1cm; }
                    }
                </style>
            </head>
            <body>
                <!-- Page 1: Individual Scale Details -->
                <table class="header-table">
                    <tr>
                        <td style="text-align: right; width: 50%;">
                            <strong>?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</strong><br>
                            <strong>Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</strong><br>
                            ${wilaya}<br>
                            ${schoolName}
                        </td>
                        <td style="text-align: left; width: 50%; vertical-align: top; direction: ltr;">
                            <strong>?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½:</strong> ${academicYear}<br>
                            <strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> ${teacherName}
                        </td>
                    </tr>
                </table>

                <div class="title-container">
                    <h2>?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½??U??ï؟½U?Uï؟½U?</h2>
                </div>

                <div class="section-title">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½U??ï؟½?ï؟½U?: ${sportName} - ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?: ${gradeLabel}</div>
                <p style="margin: 0 0 6px 0; font-size: 0.74rem; color: #444;">
                    Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½: Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ U?Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ (?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½) ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ 20 ?ï؟½Uï؟½Uï؟½ 5 ?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ 0.5 Uï؟½.
                </p>

                <div class="tables-container">
                    <table class="rubric-table">
                        <thead>
                            <tr>
                                <th>?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ (/20)</th>
                                <th class="header-m">?ï؟½Uï؟½Uï؟½?ï؟½ (M)</th>
                                <th class="header-f">?ï؟½Uï؟½?ï؟½?ï؟½ (F)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${leftRowsHtml}
                        </tbody>
                    </table>
                    <table class="rubric-table">
                        <thead>
                            <tr>
                                <th>?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ (/20)</th>
                                <th class="header-m">?ï؟½Uï؟½Uï؟½?ï؟½ (M)</th>
                                <th class="header-f">?ï؟½Uï؟½?ï؟½?ï؟½ (F)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rightRowsHtml}
                        </tbody>
                    </table>
                </div>

                <table class="footer-signatures">
                    <tr>
                        <td>
                            ?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½
                            <div class="signature-box"></div>
                        </td>
                        <td>
                            ?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½
                            <div class="signature-box"></div>
                        </td>
                    </tr>
                </table>

                <div style="page-break-before: always;"></div>
                
                <!-- Page 2: Collective Rubric -->
                <table class="header-table">
                    <tr>
                        <td style="text-align: right; width: 50%;">
                            <strong>?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</strong><br>
                            <strong>Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</strong><br>
                            ${wilaya}<br>
                            ${schoolName}
                        </td>
                        <td style="text-align: left; width: 50%; vertical-align: top; direction: ltr;">
                            <strong>?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½:</strong> ${academicYear}<br>
                            <strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> ${teacherName}
                        </td>
                    </tr>
                </table>

                <div class="title-container collective">
                    <h2>?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½</h2>
                </div>

                <div class="section-title collective">?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ (Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½U??ï؟½Uï؟½Uï؟½)</div>
                <p style="margin: 0 0 6px 0; font-size: 0.74rem; color: #444;">
                    Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½: Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½Uï؟½ Uï؟½??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½U??ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½.
                </p>

                <table class="rubric-table col-rubric">
                    <thead>
                        <tr>
                            <th style="width: 10%;">?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½</th>
                            <th style="width: 15%;">?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (/20)</th>
                            <th style="width: 20%;">?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½</th>
                            <th style="text-align: right; padding-right: 15px;">Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½U?U?Uï؟½U??ï؟½</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${collectiveTableRowsHtml}
                    </tbody>
                </table>

                <table class="footer-signatures">
                    <tr>
                        <td>
                            ?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½
                            <div class="signature-box"></div>
                        </td>
                        <td>
                            ?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½
                            <div class="signature-box"></div>
                        </td>
                    </tr>
                </table>

                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() { window.close(); }, 500);
                    };
                </script>
            </body>
            </html>
        `;

        printWindow.document.open();
        printWindow.document.write(content);
        printWindow.document.close();
    }

    downloadCollectiveRubricExcel() {
        try {
            const data = COLLECTIVE_RUBRIC.map(row => ({
                "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½": row.code,
                "?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (/20)": row.score,
                "?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½": row.appreciation,
                "Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½U?U?Uï؟½U??ï؟½": row.indicator
            }));

            const worksheet = XLSX.utils.json_to_sheet(data);
            
            // Set sheet direction to RTL
            if (!worksheet['!views']) worksheet['!views'] = [];
            worksheet['!views'].push({ RTL: true });

            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½");

            XLSX.writeFile(workbook, "?ï؟½Uï؟½Uï؟½_??Uï؟½Uï؟½U??ï؟½_?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½_?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½_?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½.xlsx");
            this.showToast(this.currentLang === "ar" ? "??Uï؟½ ???ï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!" : "Fichier Excel t?ï؟½l?ï؟½charg?ï؟½ avec succ?ï؟½s !");
        } catch (error) {
            console.error("Error exporting collective rubric to Excel:", error);
            alert(this.currentLang === "ar" ? "U??ï؟½Uï؟½ ???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½!" : "?ï؟½chec de l'exportation du bar?ï؟½me en Excel !");
        }
    }

    /**
     * ==========================================
     * COMMUNICATIONS & PARENT MESSAGING (SMS/WhatsApp)
     * ==========================================
     */
    sendMessageToParent(studentId, gateway) {
        const student = this.database.students.find(s => s.id === studentId);
        if (!student || !student.phone) {
            alert(this.currentLang === "ar" ? "?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½??U? ?ï؟½Uï؟½Uï؟½Uï؟½U? ??U??ï؟½ Uï؟½??Uï؟½U??ï؟½ Uï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½!" : "T?ï؟½l. parent non disponible !");
            return;
        }

        const metadata = this.database.metadata;
        const year = metadata.academicYear || "";
        const school = metadata.schoolName || "";
        
        const t1 = this.calculateStudentTermAverage(studentId, 1).termAverage;
        const t2 = this.calculateStudentTermAverage(studentId, 2).termAverage;
        const t3 = this.calculateStudentTermAverage(studentId, 3).termAverage;
        const annual = this.calculateStudentAnnualAverage(studentId);

        const t1Text = student.exemptions[0] ? this.getTranslation("exempted-abrv") : (t1 !== null ? `${t1.toFixed(1)}/20` : "--");
        const t2Text = student.exemptions[1] ? this.getTranslation("exempted-abrv") : (t2 !== null ? `${t2.toFixed(1)}/20` : "--");
        const t3Text = student.exemptions[2] ? this.getTranslation("exempted-abrv") : (t3 !== null ? `${t3.toFixed(1)}/20` : "--");
        const annualText = annual.value !== null ? `${annual.value.toFixed(1)}/20` : annual.label;

        let msg = "";
        
        // Select template based on annual average & exemptions
        let selectedTemplate = "";
        if (annual.value === null) {
            selectedTemplate = metadata.messageTemplateExempt || DEFAULT_DATABASE.metadata.messageTemplateExempt;
        } else if (annual.value >= 16) {
            selectedTemplate = metadata.messageTemplateExcellent || DEFAULT_DATABASE.metadata.messageTemplateExcellent;
        } else if (annual.value >= 10) {
            selectedTemplate = metadata.messageTemplateAverage || DEFAULT_DATABASE.metadata.messageTemplateAverage;
        } else {
            selectedTemplate = metadata.messageTemplateWeak || DEFAULT_DATABASE.metadata.messageTemplateWeak;
        }

        msg = selectedTemplate;
        msg = msg.replace(/{?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½}/g, `${student.lastname} ${student.firstname}`);
        msg = msg.replace(/{?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½}/g, school);
        msg = msg.replace(/{?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½}/g, year);
        msg = msg.replace(/{U?1}/g, t1Text);
        msg = msg.replace(/{U?2}/g, t2Text);
        msg = msg.replace(/{U?3}/g, t3Text);
        msg = msg.replace(/{?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U?}/g, annualText);

        // Clean phone number format for Algerian prefix (+213)
        let cleanPhone = student.phone.replace(/[\s\-\(\)]/g, "");
        if (cleanPhone.startsWith("0")) {
            cleanPhone = "213" + cleanPhone.substring(1);
        }

        if (gateway === "whatsapp") {
            const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
            window.open(url, "_blank");
        } else if (gateway === "sms") {
            const url = `sms:${cleanPhone}?body=${encodeURIComponent(msg)}`;
            window.open(url, "_self");
        }
    }

    /**
     * ==========================================
     * PRINT SHEETS GENERATOR (PDF & ALL CLASSES)
     * ==========================================
     */
    printClassRoster(classId = this.activeRosterClassId, autoPrint = true) {
        const cls = this.database.classes.find(c => c.id === classId);
        if (!cls) return "";

        const classStudents = this.database.students.filter(s => s.classId === cls.id);
        classStudents.sort((a, b) => a.order - b.order);

        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        let html = `
            <div class="print-page" style="page-break-after: always; padding: 20px; font-family: 'Cairo', sans-serif; direction: rtl;">
                <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">
                    <div style="font-weight: bold;">?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</div>
                    <div style="font-weight: bold;">Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</div>
                    <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 0.9rem;">
                        <div style="text-align: right;">
                            <div>${wilaya}</div>
                            <div>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½: ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div>?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½: ${academicYear}</div>
                            <div>?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½: ${teacherName}</div>
                        </div>
                    </div>
                    <h2 style="margin: 15px 0 5px 0;">Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½: ${cls.name}</h2>
                </div>
                <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.9rem;">
                    <thead>
                        <tr style="background: #f3f4f6;">
                            <th style="border: 1px solid #000; padding: 8px; width: 40px; text-align: center;">?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½</th>
                            <th style="border: 1px solid #000; padding: 8px;">?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½</th>
                            <th style="border: 1px solid #000; padding: 8px;">?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½</th>
                            <th style="border: 1px solid #000; padding: 8px; width: 60px; text-align: center;">?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½</th>
                            <th style="border: 1px solid #000; padding: 8px;">???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½U?Uï؟½?ï؟½?ï؟½</th>
                            <th style="border: 1px solid #000; padding: 8px; width: 80px; text-align: center;">?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½</th>
                            <th style="border: 1px solid #000; padding: 8px;">Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½??</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${classStudents.map((s, idx) => {
                            const isExempted = s.exemptions && s.exemptions[0] && s.exemptions[1] && s.exemptions[2];
                            return `
                            <tr>
                                <td style="border: 1px solid #000; padding: 6px; text-align: center;">${idx + 1}</td>
                                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${s.lastname}</td>
                                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${s.firstname}</td>
                                <td style="border: 1px solid #000; padding: 6px; text-align: center;">${s.gender}</td>
                                <td style="border: 1px solid #000; padding: 6px;">${s.birthdate || ""}</td>
                                <td style="border: 1px solid #000; padding: 6px; text-align: center;">${isExempted ? "Uï؟½?ï؟½U?Uï؟½" : "Uï؟½?ï؟½Uï؟½Uï؟½"}</td>
                                <td style="border: 1px solid #000; padding: 6px;"></td>
                            </tr>`;
                        }).join("")}
                    </tbody>
                </table>
                <div style="margin-top: 30px; display: flex; justify-content: space-between; font-weight: bold;">
                    <div>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½:</div>
                    <div>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½):</div>
                </div>
                <div style="text-align: center; font-size: 0.7rem; color: #666; margin-top: 40px;">
                    Smart_Eps | Mai26 | Delbaz_Med
                </div>
            </div>
        `;

        if (autoPrint) {
            const printWindow = window.open("", "_blank");
            if (!printWindow) return;
            printWindow.document.write(`
                <!DOCTYPE html>
                <html lang="ar" dir="rtl">
                <head>
                    <meta charset="UTF-8">
                    <title>?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ - ${cls.name}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                    <style>
                        @media print {
                            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                            .no-print { display: none !important; }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 0;">
                    ${html}
                    <div class="no-print" style="text-align: center; margin: 20px;">
                        <button onclick="window.print()" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem;">?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½</button>
                    </div>
                </body>
                </html>
            `);
            printWindow.document.close();
        }
        return html;
    }

    printAllClassesRosters() {
        if (this.database.classes.length === 0) return;
        
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        let allHtml = "";
        this.database.classes.forEach(cls => {
            allHtml += this.printClassRoster(cls.id, false);
        });

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                <style>
                    @media print {
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0;">
                ${allHtml}
                <div class="no-print" style="text-align: center; margin: 20px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background: #fbbf24; color: #000; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem; font-weight: bold;">?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½</button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    exportRosterToExcel() {
        const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
        if (!activeClass) return;

        const classStudents = this.database.students.filter(s => s.classId === activeClass.id);
        classStudents.sort((a, b) => a.order - b.order);

        // Header and Data rows (Expected: First Name, Last Name, Gender)
        const ws_data = [
            ["?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½", "?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½", "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½", "???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½U?Uï؟½?ï؟½?ï؟½", "?ï؟½Uï؟½Uï؟½?ï؟½??U?", "?ï؟½?ï؟½U??ï؟½?? U?1", "?ï؟½?ï؟½U??ï؟½?? U?2", "?ï؟½?ï؟½U??ï؟½?? U?3"]
        ];

        classStudents.forEach(s => {
            ws_data.push([
                s.firstname,
                s.lastname,
                s.gender === "M" ? "?ï؟½Uï؟½?ï؟½" : "?ï؟½Uï؟½?ï؟½Uï؟½",
                s.birthdate,
                s.phone || "",
                s.exemptions[0] ? 'Uï؟½?ï؟½U?Uï؟½' : 'Uï؟½?ï؟½Uï؟½Uï؟½',
                s.exemptions[1] ? 'Uï؟½?ï؟½U?Uï؟½' : 'Uï؟½?ï؟½Uï؟½Uï؟½',
                s.exemptions[2] ? 'Uï؟½?ï؟½U?Uï؟½' : 'Uï؟½?ï؟½Uï؟½Uï؟½'
            ]);
        });

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(ws_data);

        // Enable RTL layout in Excel for Arabic layout sheet
        if (this.currentLang === "ar") {
            ws['!views'] = [{ RTL: true }];
        }

        XLSX.utils.book_append_sheet(wb, ws, activeClass.name);
        XLSX.writeFile(wb, `Smart_EPS_Roster_${activeClass.name}.xlsx`);
    }

    /**
     * Exports all classes data inside a structured, print-friendly template
     */
    exportAllClassesCSV() {
        this.printAllClassesRosters();
    }

    exportAllGradesPDF() {
        if (this.database.classes.length === 0) return;
        let termInput = window.prompt("ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ (1ï؟½ 2ï؟½ 3) ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ 'annual' ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½:", "1");
        if (!termInput) return; 
        let term = termInput.trim().toLowerCase();
        if (term === "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½" || term === "ï؟½ï؟½ï؟½ï؟½") term = "annual";
        if (term !== "annual") {
            term = parseInt(term);
            if (![1, 2, 3].includes(term)) {
                alert("ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½!");
                return;
            }
        }

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        let allHtml = "";

        this.database.classes.forEach(cls => {
            const classStudents = this.database.students.filter(s => s.classId === cls.id);
            classStudents.sort((a, b) => a.order - b.order);

            let tempTable = document.createElement("table");
            if (term === "annual") {
                this.renderAnnualTermSheet(tempTable, classStudents);
            } else {
                this.renderTermSummarySheet(tempTable, classStudents, term);
            }

            const title = term === "annual" ? `ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ - ï؟½ï؟½ï؟½: ${cls.name}` : `ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ${term} - ï؟½ï؟½ï؟½: ${cls.name}`;

            allHtml += `
                <div class="print-page" style="page-break-after: always; padding: 10px; font-family: 'Cairo', sans-serif; direction: rtl;">
                    <div style="text-align: center; margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                        <div style="font-weight: bold; font-size: 0.9rem;">ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½</div>
                        <div style="font-weight: bold; font-size: 0.9rem;">ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½</div>
                        <div style="display: flex; justify-content: space-between; margin-top: 5px; font-size: 0.8rem;">
                            <div style="text-align: right;">
                                <div>${wilaya}</div>
                                <div>ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½: ${schoolName}</div>
                            </div>
                            <div style="text-align: left;">
                                <div>ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½: ${academicYear}</div>
                                <div>ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½: ${teacherName}</div>
                            </div>
                        </div>
                        <h2 style="margin: 10px 0 5px 0; font-size: 1.1rem;">${title}</h2>
                    </div>
                    <div style="overflow-x: hidden;">
                        <table style="width: 100%; max-width: 100%; border-collapse: collapse; text-align: right; font-size: 0.75rem; table-layout: auto;">
                            ${tempTable.innerHTML}
                        </table>
                    </div>
                    <div style="margin-top: 20px; display: flex; justify-content: space-between; font-weight: bold; font-size: 0.9rem;">
                        <div>ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½:</div>
                        <div>ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ (ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½):</div>
                    </div>
                    <div style="text-align: center; font-size: 0.6rem; color: #666; margin-top: 30px;">
                        Smart_Eps | Mai26 | Delbaz_Med
                    </div>
                </div>
            `;
        });

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Cairo', sans-serif; }
                    table, th, td { border: 1px solid #000; padding: 4px 2px; }
                    th { background: #f3f4f6; }
                    .badge { padding: 1px 4px; border-radius: 4px; font-size: 0.65rem; }
                    .badge-blue { background: #e0f2fe; color: #0284c7; }
                    .badge-pink { background: #fce7f3; color: #db2777; }
                    .badge-danger { background: #fee2e2; color: #ef4444; }
                    .badge-amber { background: #fef3c7; color: #d97706; }
                    .badge-emerald { background: #d1fae5; color: #059669; }
                    .text-center { text-align: center; }
                    @media print {
                        @page { size: landscape; margin: 10mm; }
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; zoom: 95%; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0;">
                ${allHtml}
                <div class="no-print" style="text-align: center; margin: 20px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background: #fbbf24; color: #000; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem; font-weight: bold;">ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½</button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    exportAllGradesExcel() {
        if (this.database.classes.length === 0) return;
        let termInput = window.prompt("ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ (1ï؟½ 2ï؟½ 3) ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ 'annual' ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½:", "1");
        if (!termInput) return; 
        let term = termInput.trim().toLowerCase();
        if (term === "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½" || term === "ï؟½ï؟½ï؟½ï؟½") term = "annual";
        if (term !== "annual") {
            term = parseInt(term);
            if (![1, 2, 3].includes(term)) {
                alert("ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½!");
                return;
            }
        }

        const wb = XLSX.utils.book_new();

        this.database.classes.forEach(cls => {
            const classStudents = this.database.students.filter(s => s.classId === cls.id);
            classStudents.sort((a, b) => a.order - b.order);

            let ws_data = [];
            if (term === "annual") {
                ws_data.push(["ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½"]);
                classStudents.forEach((student, index) => {
                    const gender = student.gender === "M" ? "ï؟½ï؟½ï؟½" : "ï؟½ï؟½ï؟½ï؟½";
                    const isExemptedAll = student.exemptions && student.exemptions[0] && student.exemptions[1] && student.exemptions[2];
                    if (isExemptedAll) {
                        ws_data.push([index + 1, student.lastname, student.firstname, gender, "ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½", "--"]);
                    } else {
                        const t1 = this.calculateStudentTermAverage(student.id, 1);
                        const t2 = this.calculateStudentTermAverage(student.id, 2);
                        const t3 = this.calculateStudentTermAverage(student.id, 3);
                        
                        const t1Avg = t1.termAverage !== null ? t1.termAverage : null;
                        const t2Avg = t2.termAverage !== null ? t2.termAverage : null;
                        const t3Avg = t3.termAverage !== null ? t3.termAverage : null;
                        
                        const validTerms = [t1Avg, t2Avg, t3Avg].filter(a => a !== null);
                        let annualAvg = null;
                        if (validTerms.length > 0) {
                            annualAvg = validTerms.reduce((sum, val) => sum + val, 0) / validTerms.length;
                        }

                        let appreciation = "";
                        if (annualAvg !== null) {
                            if (annualAvg < 10) appreciation = "ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½";
                            else if (annualAvg < 13) appreciation = "ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½";
                            else if (annualAvg < 14.5) appreciation = "ï؟½ï؟½ï؟½";
                            else if (annualAvg < 17) appreciation = "ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½";
                            else appreciation = "ï؟½ï؟½ï؟½ï؟½ï؟½";
                        }

                        ws_data.push([
                            index + 1, student.lastname, student.firstname, gender,
                            t1Avg !== null ? t1Avg.toFixed(2) : "ï؟½ï؟½ï؟½ï؟½",
                            t2Avg !== null ? t2Avg.toFixed(2) : "ï؟½ï؟½ï؟½ï؟½",
                            t3Avg !== null ? t3Avg.toFixed(2) : "ï؟½ï؟½ï؟½ï؟½",
                            annualAvg !== null ? annualAvg.toFixed(2) : "--",
                            appreciation || "--"
                        ]);
                    }
                });
            } else {
                ws_data.push(["ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½", `ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ ${term}`, "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½"]);
                classStudents.forEach((student, index) => {
                    const gender = student.gender === "M" ? "ï؟½ï؟½ï؟½" : "ï؟½ï؟½ï؟½ï؟½";
                    const isExempted = student.exemptions && student.exemptions[term - 1];
                    
                    if (isExempted) {
                        ws_data.push([index + 1, student.lastname, student.firstname, gender, "ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½", "ï؟½ï؟½ï؟½ï؟½", "--", "--"]);
                    } else {
                        const results = this.calculateStudentTermAverage(student.id, term);
                        let appreciation = "";
                        let guideline = "";
                        if (results.termAverage !== null) {
                            if (results.termAverage < 10) { appreciation = "ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½"; guideline = "ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½ï؟½ï؟½"; }
                            else if (results.termAverage < 13) { appreciation = "ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½"; guideline = student.gender === "F" ? "ï؟½ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½" : "ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½"; }
                            else if (results.termAverage <= 14.5) { appreciation = "ï؟½ï؟½ï؟½"; guideline = "ï؟½ï؟½ï؟½ï؟½"; }
                            else if (results.termAverage < 17) { appreciation = "ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½"; guideline = "ï؟½ï؟½ï؟½ï؟½"; }
                            else { appreciation = "ï؟½ï؟½ï؟½ï؟½ï؟½"; guideline = "ï؟½ï؟½ï؟½ï؟½ ï؟½ï؟½ï؟½ï؟½"; }
                        }

                        ws_data.push([
                            index + 1, student.lastname, student.firstname, gender,
                            results.ca !== null ? results.ca.toFixed(2) : "--",
                            results.assignment !== null ? results.assignment.toFixed(2) : "--",
                            results.exam !== null ? results.exam.toFixed(2) : "--",
                            results.termAverage !== null ? results.termAverage.toFixed(2) : "--",
                            appreciation || "--",
                            guideline || "--"
                        ]);
                    }
                });
            }

            const ws = XLSX.utils.aoa_to_sheet(ws_data);
            if (this.currentLang === "ar") {
                ws['!views'] = [{ RTL: true }];
            }
            // limit sheet name to 31 characters
            let cleanSheetName = cls.name.substring(0, 31).replace(/[\\/*?\[\]]/g, "");
            XLSX.utils.book_append_sheet(wb, ws, cleanSheetName); 
        });

        const fileName = term === "annual" ? "Smart_EPS_Grades_Annual.xlsx" : `Smart_EPS_Grades_Term_${term}.xlsx`;
        XLSX.writeFile(wb, fileName);
    }

    /**
     * Excel importer parses XLSX format
     */
    handleExcelFileSelect(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                
                // Get sheet rows as arrays (header: 1 means raw array of arrays)
                const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                this.parseAndImportExcelRows(rows);
            } catch (err) {
                alert(this.currentLang === "ar" ? "?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½?ï؟½???ï؟½ Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½. U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½U? Uï؟½?ï؟½U?????Uï؟½ (xlsx ?ï؟½Uï؟½ xls)." : "Erreur lors de la lecture du fichier Excel.");
            }
        };
        reader.readAsArrayBuffer(file);
    }

    normalizeExcelDate(val) {
        if (val === null || val === undefined || val === "") {
            return "2010-01-01";
        }
        
        // If it's a number (Excel serial date)
        if (typeof val === 'number') {
            const date = new Date(Math.round((val - 25569) * 86400 * 1000));
            if (!isNaN(date.getTime())) {
                return date.toISOString().split('T')[0];
            }
        }
        
        let dateStr = val.toString().trim();
        
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            return dateStr;
        }
        
        const dmyPattern = /^(\d{1,2})[\/\.-](\d{1,2})[\/\.-](\d{4})$/;
        if (dmyPattern.test(dateStr)) {
            const matches = dateStr.match(dmyPattern);
            let day = matches[1].padStart(2, '0');
            let month = matches[2].padStart(2, '0');
            let year = matches[3];
            return `${year}-${month}-${day}`;
        }
        
        const parsed = new Date(dateStr);
        if (!isNaN(parsed.getTime())) {
            return parsed.toISOString().split('T')[0];
        }
        
        return "2010-01-01";
    }

    parseAndImportExcelRows(rows) {
        const activeClassId = this.activeRosterClassId;
        if (!activeClassId) {
            alert(this.currentLang === "ar" ? "U??ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½??U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½!" : "S?ï؟½lectionnez une classe.");
            return;
        }

        if (!rows || rows.length < 2) {
            alert(this.getTranslation("invalid-csv-format"));
            return;
        }

        const cleanRows = rows.filter(r => r && r.length > 0 && r.some(cell => cell !== null && cell !== undefined && cell !== ""));
        if (cleanRows.length < 2) {
            alert(this.getTranslation("invalid-csv-format"));
            return;
        }

        const headers = cleanRows[0].map(h => (h || "").toString().trim().toLowerCase());

        let lastnameIdx = -1;
        let firstnameIdx = -1;
        let genderIdx = -1;
        let birthdateIdx = -1;

        headers.forEach((header, idx) => {
            const h = header.trim();
            if (h.includes("?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½") || h.includes("nom") || h.includes("last") || h.includes("surname")) {
                lastnameIdx = idx;
            } else if (h.includes("?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½") || h.includes("prenom") || h.includes("pr?ï؟½nom") || h.includes("first") || h.includes("name")) {
                firstnameIdx = idx;
            } else if (h.includes("?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½") || h.includes("genre") || h.includes("gender") || h.includes("sexe") || h.includes("Uï؟½Uï؟½?ï؟½")) {
                genderIdx = idx;
            } else if (h.includes("???ï؟½?ï؟½U??ï؟½") || h.includes("birth") || h.includes("date") || h.includes("naissance") || h.includes("Uï؟½U?Uï؟½?ï؟½?ï؟½") || h.includes("?ï؟½?ï؟½?ï؟½U??ï؟½?ï؟½")) {
                birthdateIdx = idx;
            }
        });

        // If we couldn't match, try classic positions 0: first, 1: last, 2: gender, 3: birthdate as fallback
        if (firstnameIdx === -1 && lastnameIdx === -1 && genderIdx === -1) {
            firstnameIdx = 0;
            lastnameIdx = 1;
            genderIdx = 2;
            birthdateIdx = 3;
        }

        if (firstnameIdx === -1 || lastnameIdx === -1 || genderIdx === -1) {
            const rawHeaders = cleanRows[0].map(h => (h || "").toString().trim());
            const errorMsgAr = `??Uï؟½?ï؟½U?Uï؟½: Uï؟½Uï؟½ U???Uï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½Uï؟½!\n\n` +
                `â€¢ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½U??ï؟½ U?U? Uï؟½Uï؟½U?Uï؟½: [ ${rawHeaders.join(" | ")} ]\n\n` +
                `â€¢ U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ U?U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U?:\n` +
                `  - ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ (?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½)\n` +
                `  - ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½ (?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½U? Uï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½)\n` +
                `  - ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ (?ï؟½Uï؟½?ï؟½/?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½ M/F)\n` +
                `  - ???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ (???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½U?Uï؟½?ï؟½?ï؟½)\n\n` +
                `Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½: U?Uï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½ ??Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½U? ???ï؟½??U??ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½U????ï؟½?ï؟½U? ?ï؟½Uï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½.`;
                
            const errorMsgFr = `Attention : Impossible d'identifier les colonnes automatiquement !\n\n` +
                `â€¢ Colonnes d?ï؟½tect?ï؟½es : [ ${rawHeaders.join(" | ")} ]\n\n` +
                `â€¢ Veuillez nommer vos colonnes dans la premi?ï؟½re ligne ainsi :\n` +
                `  - Nom (?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½)\n` +
                `  - Pr?ï؟½nom (?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½)\n` +
                `  - Genre (?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ : M ou F)\n` +
                `  - Date de naissance (???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½?ï؟½)`;

            alert(this.currentLang === "ar" ? errorMsgAr : errorMsgFr);
            return;
        }

        let importedCount = 0;
        const currentStudents = this.database.students.filter(s => s.classId === activeClassId);
        let startOrder = currentStudents.length;

        for (let i = 1; i < cleanRows.length; i++) {
            const row = cleanRows[i];
            if (!row || row.length === 0) continue;

            const firstname = (row[firstnameIdx] !== undefined) ? row[firstnameIdx].toString().trim() : "";
            const lastname = (row[lastnameIdx] !== undefined) ? row[lastnameIdx].toString().trim() : "";
            let gender = (row[genderIdx] !== undefined) ? row[genderIdx].toString().toUpperCase().trim() : "M";
            let rawBirthdate = (birthdateIdx !== -1 && row[birthdateIdx] !== undefined) ? row[birthdateIdx] : "";

            if (!firstname && !lastname) continue;

            if (gender.includes("?ï؟½") || gender.includes("M") || gender.includes("GAR") || gender === "?ï؟½Uï؟½?ï؟½") {
                gender = "M";
            } else {
                gender = "F";
            }

            const birthdate = this.normalizeExcelDate(rawBirthdate);

            const newStudent = {
                id: `std_${Date.now()}_${importedCount}`,
                classId: activeClassId,
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                birthdate: birthdate,
                phone: "",
                exemptions: [false, false, false],
                order: startOrder + importedCount
            };
            this.database.students.push(newStudent);
            importedCount++;
        }

        if (importedCount > 0) {
            this.saveDatabase();
            this.renderActiveViewContent();
            document.getElementById("modal-import-csv").classList.remove("active");
            this.showToast(this.getTranslation("csv-imported-success").replace("{count}", importedCount));
        } else {
            alert(this.getTranslation("invalid-csv-format"));
        }
    }

    /**
     * Complete JSON backups exports
     */
    exportDatabaseBackup() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.database));
        const link = document.createElement("a");
        link.setAttribute("href", dataStr);
        link.setAttribute("download", `Smart_EPS_HighSchoolBackup_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    importDatabaseBackup(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (imported.classes && imported.students) {
                    this.database = imported;
                    this.saveDatabase();
                    this.populateClassDropdowns();
                    this.renderActiveViewContent();
                    this.showToast(this.getTranslation("backup-imported-success"));
                } else {
                    alert(this.getTranslation("invalid-backup-file"));
                }
            } catch (err) {
                alert(this.getTranslation("invalid-backup-file"));
            }
        };
        reader.readAsText(file);
    }

    /**
     * Starts a new academic year: exports backup first, then clears class database
     */
    archiveAndNewYear() {
        if (confirm(this.currentLang === "ar" 
            ? "?ï؟½U???Uï؟½ ??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½??U??ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ??Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ??Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½U??ï؟½?ï؟½??" 
            : "Une sauvegarde de cette ann?ï؟½e sera t?ï؟½l?ï؟½charg?ï؟½e automatiquement. Voulez-vous archiver et d?ï؟½marrer une nouvelle ann?ï؟½e scolaire ?")) {
            
            // 1. Export backup first
            this.exportDatabaseBackup();
            
            // 2. Factory reset Database state
            this.database.classes = [];
            this.database.students = [];
            this.database.grades = {};
            this.saveDatabase();
            
            this.populateClassDropdowns();
            this.switchTab("dashboard");
            this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½Uï؟½?ï؟½??!" : "Ann?ï؟½e archiv?ï؟½e et base de donn?ï؟½es nettoy?ï؟½e !");
        }
    }

    populateSportDropdowns() {
        const indSelects = [
            document.getElementById("act-ind-1"),
            document.getElementById("act-ind-2"),
            document.getElementById("act-ind-3"),
            document.getElementById("scale-select-sport")
        ];
        
        const colSelects = [
            document.getElementById("act-col-1"),
            document.getElementById("act-col-2"),
            document.getElementById("act-col-3")
        ];

        const activeTermConfig = this.database.termActivities || DEFAULT_DATABASE.termActivities;

        indSelects.forEach((sel, idx) => {
            if (!sel) return;
            const savedValue = sel.value || (idx < 3 ? activeTermConfig[`term_${idx + 1}`].individual : "");
            sel.innerHTML = "";
            this.database.sports.individual.forEach(sport => {
                const opt = document.createElement("option");
                opt.value = sport.id;
                opt.textContent = sport.name;
                sel.appendChild(opt);
            });
            if (savedValue && Array.from(sel.options).some(o => o.value === savedValue)) {
                sel.value = savedValue;
            }
        });

        colSelects.forEach((sel, idx) => {
            if (!sel) return;
            const savedValue = sel.value || (idx < 3 ? activeTermConfig[`term_${idx + 1}`].collective : "");
            sel.innerHTML = "";
            this.database.sports.collective.forEach(sport => {
                const opt = document.createElement("option");
                opt.value = sport.id;
                opt.textContent = sport.name;
                sel.appendChild(opt);
            });
            if (savedValue && Array.from(sel.options).some(o => o.value === savedValue)) {
                sel.value = savedValue;
            }
        });

        const logbookSportSelect = document.getElementById("cahier-sport");
        if (logbookSportSelect && logbookSportSelect.tagName === "SELECT") {
            const savedLogbookSport = logbookSportSelect.value;
            logbookSportSelect.innerHTML = "";
            const allSports = [...this.database.sports.individual, ...this.database.sports.collective];
            allSports.forEach(sport => {
                const opt = document.createElement("option");
                opt.value = sport.name; // Use name directly for the logbook text
                opt.textContent = sport.name;
                logbookSportSelect.appendChild(opt);
            });
            if (savedLogbookSport && Array.from(logbookSportSelect.options).some(o => o.value === savedLogbookSport)) {
                logbookSportSelect.value = savedLogbookSport;
            }
        }
    }

    getSportName(sportId, type) {
        if (this.database.sports && this.database.sports[type]) {
            const found = this.database.sports[type].find(s => s.id === sportId);
            if (found) return found.name;
        }
        return this.getTranslation(`sport-${sportId}`);
    }

    toggleNewSportFields(type) {
        const fields = document.getElementById("new-individual-sport-fields");
        if (fields) {
            fields.style.display = type === "individual" ? "block" : "none";
        }
    }

    addNewSport() {
        const type = document.getElementById("new-sport-type").value;
        const name = document.getElementById("new-sport-name").value.trim();
        
        if (!name) {
            alert(this.currentLang === "ar" ? "U??ï؟½?ï؟½Uï؟½ Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U?!" : "Veuillez entrer le nom du sport !");
            return;
        }

        const id = `sport_${Date.now()}`;

        if (type === "individual") {
            const unit = document.getElementById("new-sport-unit").value;
            const direction = document.getElementById("new-sport-direction").value;
            const lowerIsBetter = direction === "lower";
            
            const mBest = parseFloat(document.getElementById("new-scale-m-best").value);
            const mWorst = parseFloat(document.getElementById("new-scale-m-worst").value);
            const fBest = parseFloat(document.getElementById("new-scale-f-best").value);
            const fWorst = parseFloat(document.getElementById("new-scale-f-worst").value);

            if (isNaN(mBest) || isNaN(mWorst) || isNaN(fBest) || isNaN(fWorst)) {
                alert(this.currentLang === "ar" ? "U??ï؟½?ï؟½Uï؟½ ???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½ Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½!" : "Veuillez remplir toutes les valeurs du bar?ï؟½me !");
                return;
            }

            const newSport = { id, name, unit, lowerIsBetter };
            this.database.sports.individual.push(newSport);

            // Register in scale
            this.database.scales[id] = {
                M: { best: mBest, worst: mWorst, lowerIsBetter: lowerIsBetter },
                F: { best: fBest, worst: fWorst, lowerIsBetter: lowerIsBetter }
            };
        } else {
            const newSport = { id, name };
            this.database.sports.collective.push(newSport);
        }

        this.saveDatabase();
        this.populateSportDropdowns();
        
        // Reset inputs
        document.getElementById("new-sport-name").value = "";
        document.getElementById("new-scale-m-best").value = "";
        document.getElementById("new-scale-m-worst").value = "";
        document.getElementById("new-scale-f-best").value = "";
        document.getElementById("new-scale-f-worst").value = "";

        this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!" : "Sport ajout?ï؟½ avec succ?ï؟½s !");
    }

    populateCollectiveRubricTable() {
        const tbody = document.getElementById("collective-rubric-tbody");
        if (tbody) {
            tbody.innerHTML = COLLECTIVE_RUBRIC.map(row => `
                <tr>
                    <td class="text-center font-bold color-gold" style="padding: 10px;">${row.code}</td>
                    <td class="text-center font-bold" style="padding: 10px; font-size:1.1rem; color:var(--color-primary);">${row.score}</td>
                    <td class="text-center" style="padding: 10px;"><span class="badge ${row.score >= 18 ? 'badge-emerald' : row.score >= 14 ? 'badge-blue' : row.score >= 13 ? 'badge-amber' : 'badge-danger'}">${row.appreciation}</span></td>
                    <td style="padding: 10px 15px; text-align: right; line-height: 1.5; font-size: 0.82rem;">${row.indicator}</td>
                </tr>
            `).join("");
        }

        const modalTbody = document.getElementById("modal-collective-rubric-tbody");
        if (modalTbody) {
            modalTbody.innerHTML = COLLECTIVE_RUBRIC.map(row => `
                <tr>
                    <td class="text-center font-bold color-gold" style="padding: 10px;">${row.code}</td>
                    <td class="text-center font-bold" style="padding: 10px; font-size:1.1rem; color:var(--color-primary);">${row.score}</td>
                    <td class="text-center" style="padding: 10px;"><span class="badge ${row.score >= 18 ? 'badge-emerald' : row.score >= 14 ? 'badge-blue' : row.score >= 13 ? 'badge-amber' : 'badge-danger'}">${row.appreciation}</span></td>
                    <td style="padding: 10px 15px; text-align: right; line-height: 1.5; font-size: 0.82rem;">${row.indicator}</td>
                </tr>
            `).join("");
        }
    }

    updatePrintHeader() {
        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";
        
        const printSchoolName = document.getElementById("print-school-name");
        const printWilaya = document.getElementById("print-school-wilaya");
        const printTeacher = document.getElementById("print-teacher-name");
        const printYear = document.getElementById("print-academic-year");
        
        if (printSchoolName) printSchoolName.textContent = schoolName;
        if (printWilaya) printWilaya.textContent = wilaya;
        if (printTeacher) printTeacher.textContent = teacherName;
        if (printYear) printYear.textContent = academicYear;

        // Fetch current active class and term
        let termLabel = "";
        let className = "";

        if (this.activeTab === "grading") {
            const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
            className = activeClass ? `${activeClass.name} (${activeClass.grade}AS)` : "";
            const activeTerm = document.getElementById("term-select-grading") ? document.getElementById("term-select-grading").value : "1";
            termLabel = activeTerm === "1" ? "?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½" : activeTerm === "2" ? "?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?" : "?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½";
        } else if (this.activeTab === "classes") {
            const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
            className = activeClass ? `${activeClass.name} (${activeClass.grade}AS)` : "";
            termLabel = "Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?";
        } else {
            termLabel = "Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½";
        }

        const printTerm = document.getElementById("print-term-number");
        const printClass = document.getElementById("print-class-name");
        
        if (printTerm) printTerm.textContent = termLabel;
        if (printClass) printClass.textContent = className;
    }

    renderPedagogicalView() {
        const cahierClassSel = document.getElementById("cahier-class");
        if (cahierClassSel) {
            cahierClassSel.innerHTML = "";
            if (this.database.classes.length === 0) {
                const opt = document.createElement("option");
                opt.value = "";
                opt.textContent = this.currentLang === "ar" ? "-- Uï؟½?ï؟½ U?Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ --" : "-- Aucune classe --";
                cahierClassSel.appendChild(opt);
            } else {
                this.database.classes.forEach(c => {
                    const opt = document.createElement("option");
                    opt.value = c.name;
                    opt.textContent = `${c.name} (${c.grade}AS)`;
                    cahierClassSel.appendChild(opt);
                });
            }
        }

        const ficheSportSel = document.getElementById("fiche-select-sport");
        if (ficheSportSel && ficheSportSel.children.length === 0) {
            ficheSportSel.innerHTML = "";
            const allSports = [...this.database.sports.individual, ...this.database.sports.collective];
            allSports.forEach(s => {
                const opt = document.createElement("option");
                opt.value = s.id;
                opt.textContent = s.name;
                ficheSportSel.appendChild(opt);
            });
        }

        this.renderCahierJournalList();
        this.updatePortfolioStatus();
        this.renderActiveCycleTable();
    }

    renderCahierJournalList() {
        const tbody = document.getElementById("cahier-journal-tbody");
        if (!tbody) return;
        tbody.innerHTML = "";
        
        const entries = this.database.dailyLogbook || [];
        if (entries.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 20px;">${this.currentLang === "ar" ? "Uï؟½?ï؟½ ??Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½Uï؟½." : "Aucune s?ï؟½ance enregistr?ï؟½e."}</td></tr>`;
            return;
        }

        const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

        sorted.forEach(entry => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td style="text-align: center; font-weight: 700; font-family: 'Outfit', sans-serif;">${entry.date}</td>
                <td style="text-align: center;"><span class="badge-emerald">${entry.className}</span></td>
                <td style="text-align: center; color: var(--text-secondary); font-size: 0.8rem;">${entry.session}</td>
                <td style="text-align: center; font-weight: 700; color: var(--color-primary);">${entry.sport}</td>
                <td style="padding: 10px 15px; line-height: 1.4;">
                    <div style="font-weight: 700; color: #fff; margin-bottom: 4px;">${entry.objective}</div>
                    <div style="font-size: 0.76rem; color: var(--text-secondary); max-width: 450px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${entry.situations}">${entry.situations || ""}</div>
                </td>
                <td style="text-align: center;">
                    <div style="display: flex; gap: 6px; justify-content: center;">
                        <button type="button" class="btn-print-journal" style="padding: 5px 10px; font-size: 0.72rem; display: flex; align-items: center; gap: 4px; background: rgba(16, 185, 129, 0.1); color: var(--color-primary); border: 1px solid var(--color-primary); border-radius: 4px; cursor: pointer;">
                            <svg viewBox="0 0 24 24" style="width: 12px; height: 12px; fill: currentColor;"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                            <span>?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½</span>
                        </button>
                        <button type="button" class="btn-delete-journal" style="padding: 5px 10px; font-size: 0.72rem; display: flex; align-items: center; gap: 4px; background: rgba(239, 68, 68, 0.1); color: var(--color-danger); border: 1px solid var(--color-danger); border-radius: 4px; cursor: pointer;">
                            <svg viewBox="0 0 24 24" style="width: 12px; height: 12px; fill: currentColor;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                            <span>?ï؟½?ï؟½U?</span>
                        </button>
                    </div>
                </td>
            `;

            tr.querySelector(".btn-print-journal").addEventListener("click", () => this.printCahierJournalEntry(entry.id));
            tr.querySelector(".btn-delete-journal").addEventListener("click", () => this.deleteCahierJournalEntry(entry.id));

            tbody.appendChild(tr);
        });
    }

    saveCahierJournalEntry() {
        const date = document.getElementById("cahier-date").value;
        const className = document.getElementById("cahier-class").value;
        const session = document.getElementById("cahier-session").value;
        const sport = document.getElementById("cahier-sport").value.trim();
        const objective = document.getElementById("cahier-objective").value.trim();
        const situations = document.getElementById("cahier-situations").value.trim();
        const evaluation = document.getElementById("cahier-evaluation").value.trim();

        if (!date || !className || !sport || !objective) {
            alert(this.currentLang === "ar" ? "U??ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?? ?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½!" : "Veuillez remplir tous les champs obligatoires !");
            return;
        }

        const newEntry = {
            id: "journal_" + Date.now(),
            date,
            className,
            session,
            sport,
            objective,
            situations,
            evaluation
        };

        if (!this.database.dailyLogbook) this.database.dailyLogbook = [];
        this.database.dailyLogbook.push(newEntry);
        this.saveDatabase();
        
        document.getElementById("form-add-cahier-entry").reset();
        this.renderPedagogicalView();
        this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!" : "S?ï؟½ance enregistr?ï؟½e dans le cahier journal !");
    }

    deleteCahierJournalEntry(entryId) {
        if (!confirm(this.currentLang === "ar" ? "Uï؟½Uï؟½ ?ï؟½Uï؟½?? Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U???" : "Voulez-vous vraiment supprimer cette s?ï؟½ance ?")) {
            return;
        }
        this.database.dailyLogbook = (this.database.dailyLogbook || []).filter(e => e.id !== entryId);
        this.saveDatabase();
        this.renderPedagogicalView();
        this.showToast(this.currentLang === "ar" ? "??Uï؟½ ?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½!" : "S?ï؟½ance supprim?ï؟½e !");
    }

    updatePortfolioStatus() {
        const logbookCount = (this.database.dailyLogbook || []).length;
        const cahierStatus = document.getElementById("portfolio-cahier-status");
        if (cahierStatus) {
            cahierStatus.textContent = this.currentLang === "ar" ? `${logbookCount} ?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½U??ï؟½` : `${logbookCount} s?ï؟½ances`;
        }

        const totalStudents = this.database.students.length;
        let exemptCount = 0;
        this.database.students.forEach(s => {
            const hasExemption = s.exemptions && (s.exemptions[0] || s.exemptions[1] || s.exemptions[2]);
            if (hasExemption) exemptCount++;
        });
        const medicalStatus = document.getElementById("portfolio-medical-status");
        if (medicalStatus) {
            medicalStatus.textContent = this.currentLang === "ar" 
                ? `${exemptCount} Uï؟½?ï؟½U?U?U?Uï؟½ / ${totalStudents - exemptCount} ?ï؟½?ï؟½?ï؟½?ï؟½??` 
                : `${exemptCount} exempt?ï؟½s / ${totalStudents - exemptCount} aptes`;
        }

        let totalGradesCount = 0;
        let gradedCount = 0;
        this.database.classes.forEach(c => {
            const classStudents = this.database.students.filter(s => s.classId === c.id);
            classStudents.forEach(s => {
                totalGradesCount += 3;
                for (let t = 1; t <= 3; t++) {
                    const gradeObj = this.database.grades[`${c.id}_${s.id}_t${t}_summary`];
                    if (gradeObj && gradeObj.value !== undefined && gradeObj.value !== null) {
                        gradedCount++;
                    }
                }
            });
        });
        const percent = totalGradesCount > 0 ? Math.round((gradedCount / totalGradesCount) * 100) : 0;
        const gradesStatus = document.getElementById("portfolio-grades-status");
        if (gradesStatus) {
            gradesStatus.textContent = this.currentLang === "ar" ? `Uï؟½Uï؟½??Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ${percent}%` : `Compl?ï؟½t?ï؟½ ?ï؟½ ${percent}%`;
        }
    }

    renderActiveCycleTable() {
        const container = document.getElementById("cycle-view-container");
        if (!container) return;

        const grade = document.getElementById("cycle-select-grade").value;
        const term = document.getElementById("cycle-select-term").value;

        let sport1 = "";
        let sport2 = "";
        if (term === "1") {
            sport1 = "?ï؟½?ï؟½?ï؟½?ï؟½ (60Uï؟½)";
            sport2 = "Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½";
        } else if (term === "2") {
            sport1 = "?ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½";
            sport2 = "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½";
        } else {
            sport1 = "?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½";
            sport2 = "Uï؟½?ï؟½?ï؟½ U??ï؟½";
        }

        const gradeLabel = grade === "1" ? "1AS" : grade === "2" ? "2AS" : "3AS";
        const cycleData = this.getCycleTemplateData(grade, term);

        let html = `
            <div style="background: rgba(0, 0, 0, 0.2); border-radius: 8px; border: 1px solid var(--border-color); padding: 15px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <div>
                    <h3 style="margin: 0; color: #fff; font-size: 1.05rem;">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½U? Uï؟½Uï؟½U??ï؟½Uï؟½ ${term} - ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½Uï؟½: ${gradeLabel}</h3>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem; color: var(--text-secondary);">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ (U??ï؟½?ï؟½U?): <strong style="color: var(--color-primary);">${sport1}</strong> | ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? (?ï؟½Uï؟½?ï؟½U?): <strong style="color: var(--color-gold);">${sport2}</strong></p>
                </div>
                <span class="badge-emerald" style="font-size: 0.72rem; padding: 6px 12px; font-weight: 700;">8 ?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ (?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½)</span>
            </div>
            <div class="table-responsive">
                <table class="interactive-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="width: 60px; text-align: center;">?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                            <th style="width: 250px; text-align: right; padding-right: 15px;">?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?</th>
                            <th style="text-align: right; padding-right: 15px;">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ (${sport1})</th>
                            <th style="text-align: right; padding-right: 15px;">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ (${sport2})</th>
                            <th style="width: 160px; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        cycleData.forEach(session => {
            html += `
                <tr>
                    <td style="text-align: center; font-weight: 800; color: var(--color-primary); font-family: 'Outfit', sans-serif; font-size: 1.15rem;">${session.num}</td>
                    <td style="font-weight: 700; line-height: 1.4; color: #fff;">${session.objective}</td>
                    <td style="font-size: 0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 10px 15px;">${session.situationsInd}</td>
                    <td style="font-size: 0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 10px 15px;">${session.situationsColl}</td>
                    <td style="text-align: center; font-size: 0.76rem; color: var(--color-gold); font-weight: 700; line-height: 1.35;">${session.criteria}</td>
                </tr>
            `;
        });

        html += `
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = html;
        
        document.getElementById("cycle-select-grade").onchange = () => this.renderActiveCycleTable();
        document.getElementById("cycle-select-term").onchange = () => this.renderActiveCycleTable();
    }

    getCycleTemplateData(grade, term) {
        if (term === "1") {
            return [
                {
                    num: 1,
                    objective: "??Uï؟½Uï؟½U?Uï؟½ ???ï؟½?ï؟½U??ï؟½U? Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½?ï؟½Uï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½.",
                    situationsInd: "?ï؟½?ï؟½U? Uï؟½?ï؟½??Uï؟½?ï؟½ ?ï؟½U?U?U??ï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?????ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½.",
                    situationsColl: "???ï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½ ???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?.",
                    criteria: "??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½U? Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U?."
                },
                {
                    num: 2,
                    objective: "???ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ + ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½.",
                    situationsInd: "?ï؟½Uï؟½?ï؟½?ï؟½U? U?Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½. ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½Uï؟½?ï؟½??.",
                    situationsColl: "?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½??U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½U?Uï؟½U?Uï؟½ ?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½U?.",
                    criteria: "?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½Uï؟½ ???ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½ ??Uï؟½??Uï؟½."
                },
                {
                    num: 3,
                    objective: "??Uï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½U??ï؟½ + ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U?Uï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½.",
                    situationsInd: "?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ 30Uï؟½ ??Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½?ï؟½ (???ï؟½U?U?Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½).",
                    situationsColl: "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½).",
                    criteria: "?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U??ï؟½."
                },
                {
                    num: 4,
                    objective: "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½U?Uï؟½?ï؟½Uï؟½U?Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? + ?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U?.",
                    situationsInd: "?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ 50Uï؟½ Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½??U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?.",
                    situationsColl: "?ï؟½?ï؟½??Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½) Uï؟½?ï؟½Uï؟½?ï؟½?? ??Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½.",
                    criteria: "???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½."
                },
                {
                    num: 5,
                    objective: "???ï؟½?ï؟½U?Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ + ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?????ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?U??ï؟½.",
                    situationsInd: "?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ 60Uï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U?U?U? Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½.",
                    situationsColl: "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ U?Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ??Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ??Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?????ï؟½U??ï؟½.",
                    criteria: "?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ U?U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?????ï؟½U??ï؟½."
                },
                {
                    num: 6,
                    objective: "?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ + ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½??.",
                    situationsInd: "?ï؟½?ï؟½U? ?ï؟½?ï؟½U??ï؟½ 40Uï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½ U?Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½U?U?U?U?Uï؟½ Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? Uï؟½?ï؟½?ï؟½Uï؟½ ???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½.",
                    situationsColl: "???ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½U??ï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½ ?ï؟½U??ï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½Uï؟½.",
                    criteria: "??Uï؟½Uï؟½U??? ?ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½Uï؟½ Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??? Uï؟½Uï؟½?ï؟½U??ï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½."
                },
                {
                    num: 7,
                    objective: "?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ??Uï؟½?ï؟½U??ï؟½U??ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?.",
                    situationsInd: "?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½U?U??ï؟½?? Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½.",
                    situationsColl: "Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½?? ???ï؟½?ï؟½U?Uï؟½U??ï؟½ ?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½.",
                    criteria: "?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½."
                },
                {
                    num: 8,
                    objective: "??Uï؟½Uï؟½U?Uï؟½ ???ï؟½?ï؟½U?Uï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½.",
                    situationsInd: "??Uï؟½Uï؟½U??? ?ï؟½?ï؟½Uï؟½U? Uï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½?ï؟½?ï؟½ 60Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½Uï؟½.",
                    situationsColl: "??Uï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½ U?Uï؟½?ï؟½.",
                    criteria: "???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U?."
                }
            ];
        } else if (term === "2") {
            return [
                {
                    num: 1,
                    objective: "??Uï؟½Uï؟½U?Uï؟½ ???ï؟½?ï؟½U??ï؟½U? Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ??Uï؟½?ï؟½U??ï؟½ Uï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½.",
                    situationsInd: "?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½??Uï؟½U??ï؟½?? ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½.",
                    situationsColl: "??Uï؟½?ï؟½U??ï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½.",
                    criteria: "?ï؟½Uï؟½??Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½."
                },
                {
                    num: 2,
                    objective: "???ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ + ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U???Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½.",
                    situationsInd: "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½U? Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½U? Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½ ???ï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½.",
                    situationsColl: "?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U???Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½.",
                    criteria: "?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? Uï؟½?ï؟½U??ï؟½ ?ï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½."
                },
                {
                    num: 3,
                    objective: "Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?? Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ + ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ U?Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?.",
                    situationsInd: "?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? Uï؟½Uï؟½ U?Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½??U?Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½Uï؟½.",
                    situationsColl: "?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½U?Uï؟½ Uï؟½Uï؟½ U?Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½??U??ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½U?Uï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½??U?Uï؟½ (Double-pas).",
                    criteria: "?ï؟½Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? U?U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½."
                },
                {
                    num: 4,
                    objective: "Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ + ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U? (?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½) Uï؟½?????ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½.",
                    situationsInd: "?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½Uï؟½.",
                    situationsColl: "?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½U? U?U? Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½.",
                    criteria: "?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½U?."
                },
                {
                    num: 5,
                    objective: "??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ + ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½Uï؟½??Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½U??ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½.",
                    situationsInd: "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½ U?U? ?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½??U?Uï؟½ Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½.",
                    situationsColl: "?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U??ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½??Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??.",
                    criteria: "?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ U?U? ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½."
                },
                {
                    num: 6,
                    objective: "??Uï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ + ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ (?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½).",
                    situationsInd: "???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ (12-16 ?ï؟½?ï؟½Uï؟½?ï؟½) ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½U? Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½.",
                    situationsColl: "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ U?U? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½ (Fast Break).",
                    criteria: "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½U?Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½???ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?."
                },
                {
                    num: 7,
                    objective: "?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ??Uï؟½?ï؟½U??ï؟½U??ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½U?.",
                    situationsInd: "Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? Uï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??U? ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½.",
                    situationsColl: "Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½?? ???ï؟½?ï؟½U?Uï؟½U??ï؟½ ?ï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? (?ï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ 24 ?ï؟½?ï؟½Uï؟½U??ï؟½).",
                    criteria: "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U?Uï؟½."
                },
                {
                    num: 8,
                    objective: "??Uï؟½Uï؟½U?Uï؟½ ???ï؟½?ï؟½U?Uï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½.",
                    situationsInd: "Uï؟½U??ï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½U??ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ U?U? Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½.",
                    situationsColl: "??Uï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½U??ï؟½.",
                    criteria: "???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½???ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½."
                }
            ];
        } else {
            return [
                {
                    num: 1,
                    objective: "??Uï؟½Uï؟½U?Uï؟½ ???ï؟½?ï؟½U??ï؟½U? Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ (?ï؟½U??ï؟½) Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ Uï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½.",
                    situationsInd: "?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½ ?ï؟½U?U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½.",
                    situationsColl: "??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½U? Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½ U?U? ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½.",
                    criteria: "?ï؟½Uï؟½??Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½."
                },
                {
                    num: 2,
                    objective: "?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ + ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½??U?U? Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½.",
                    situationsInd: "???ï؟½?ï؟½U??? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ???ï؟½?? ?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½U? Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?U??ï؟½.",
                    situationsColl: "?ï؟½Uï؟½??Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½U? (3 ?ï؟½?ï؟½Uï؟½?ï؟½???ï؟½ ??Uï؟½?ï؟½U??ï؟½?ï؟½ 3 ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½ ??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½U? Uï؟½??U?U?).",
                    criteria: "?ï؟½?ï؟½Uï؟½U??ï؟½ ???ï؟½?ï؟½U??? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½."
                },
                {
                    num: 3,
                    objective: "?ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½U? Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ + ???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ 6 ?ï؟½Uï؟½???ï؟½?ï؟½.",
                    situationsInd: "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ 45 ?ï؟½?ï؟½?ï؟½?ï؟½ ??Uï؟½?ï؟½U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½U?Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½.",
                    situationsColl: "?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? U?Uï؟½Uï؟½ ?ï؟½?ï؟½ 6Uï؟½ Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½.",
                    criteria: "??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ U?U? ?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½."
                },
                {
                    num: 4,
                    objective: "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½U?Uï؟½ ???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½ + ?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? 6:0.",
                    situationsInd: "?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?U??ï؟½?ï؟½ Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½.",
                    situationsColl: "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½U??ï؟½?ï؟½U? Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½ 6 ?ï؟½Uï؟½???ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½U?Uï؟½.",
                    criteria: "?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½Uï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½."
                },
                {
                    num: 5,
                    objective: "??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½U? + ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U? ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½.",
                    situationsInd: "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½U?U? ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½??U??ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½.",
                    situationsColl: "?ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½.",
                    criteria: "??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ U?U? ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½."
                },
                {
                    num: 6,
                    objective: "?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ U?U? ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U? Uï؟½?ï؟½Uï؟½?ï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ + ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½??U?Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ (?ï؟½Uï؟½??Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?).",
                    situationsInd: "?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½.",
                    situationsColl: "???ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½U? Uï؟½???ï؟½??U??? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½U?Uï؟½ Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½ Uï؟½Uï؟½???ï؟½?ï؟½U?Uï؟½.",
                    criteria: "?ï؟½Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U? Uï؟½U??ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½."
                },
                {
                    num: 7,
                    objective: "?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ??Uï؟½?ï؟½U??ï؟½U??ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?.",
                    situationsInd: "Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? Uï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½ Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½.",
                    situationsColl: "Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½?? ???ï؟½?ï؟½U?Uï؟½U??ï؟½ ?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½ (Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½ 6Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?U?).",
                    criteria: "?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U?U??ï؟½."
                },
                {
                    num: 8,
                    objective: "??Uï؟½Uï؟½U?Uï؟½ ???ï؟½?ï؟½U?Uï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½.",
                    situationsInd: "???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ U?U? Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½Uï؟½.",
                    situationsColl: "??Uï؟½Uï؟½U?Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½U?Uï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½ U?Uï؟½?ï؟½.",
                    criteria: "???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½."
                }
            ];
        }
    }

    generateFichePreview() {
        const sportId = document.getElementById("fiche-select-sport").value;
        const grade = document.getElementById("fiche-select-grade").value;
        const sessionNum = document.getElementById("fiche-select-session").value;
        
        const container = document.getElementById("fiche-preview-container");
        if (!container) return;

        const sportName = document.getElementById("fiche-select-sport").options[document.getElementById("fiche-select-sport").selectedIndex]?.text || "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½";
        const gradeLabel = grade === "1" ? "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (1AS)" : grade === "2" ? "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (2AS)" : "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (3AS)";

        const ficheData = this.getFicheTemplateData(sportId, grade, sessionNum);

        container.style.display = "block";
        container.innerHTML = `
            <div id="active-fiche-print-area" style="background: var(--bg-card); color: var(--text-main); font-family: 'Cairo', sans-serif; padding: 25px; border-radius: 12px; border: 1.5px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.15); direction: rtl; position: relative;">
                <div class="no-print" style="position: absolute; top: 15px; left: 15px; display: flex; gap: 8px;">
                    <button type="button" id="btn-print-fiche" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.78rem; display: flex; align-items: center; gap: 6px; font-weight: 700; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none;">
                        <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor;"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                        <span>?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½</span>
                    </button>
                </div>

                <div style="border: 2px double var(--border-color); padding: 20px; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid var(--border-color); padding-bottom: 12px; margin-bottom: 15px;">
                        <div style="text-align: right; font-size: 0.8rem; line-height: 1.5;">
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong> <span contenteditable="true">${this.database.metadata.schoolName || ""}</span></div>
                            <div><strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> <span contenteditable="true">${this.database.metadata.teacherName || ""}</span></div>
                        </div>
                        <div style="text-align: center;">
                            <h2 style="margin: 0; font-size: 1.25rem; color: var(--color-primary); font-weight: 800;" contenteditable="true">?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ???ï؟½?ï؟½U??ï؟½ ?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½</h2>
                            <span class="badge-emerald" style="font-size: 0.76rem; font-weight: 700; margin-top: 4px; display: inline-block;">Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</span>
                        </div>
                        <div style="text-align: left; font-size: 0.8rem; line-height: 1.5;">
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:</strong> <span contenteditable="true">${gradeLabel}</span></div>
                            <div><strong>?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:</strong> <span contenteditable="true">${this.database.metadata.academicYear || ""}</span></div>
                        </div>
                    </div>

                    <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; margin-bottom: 20px; font-size: 0.85rem; line-height: 1.6;">
                        <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
                            <div style="flex: 1; min-width: 200px;"><strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U?:</strong> <span contenteditable="true" style="color: var(--color-primary); font-weight: 700;">${sportName}</span></div>
                            <div style="flex: 1; min-width: 200px;"><strong>?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½:</strong> <span contenteditable="true" style="font-family: 'Outfit'; font-weight: 700;">${sessionNum}</span></div>
                            <div style="flex: 1; min-width: 150px;"><strong>?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> <span contenteditable="true">60 ?ï؟½Uï؟½U?Uï؟½?ï؟½</span></div>
                        </div>
                        <div style="margin-bottom: 8px;"><strong>?ï؟½Uï؟½Uï؟½U??ï؟½???ï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½Uï؟½U??ï؟½:</strong> <span contenteditable="true" style="color: var(--text-secondary);">${ficheData.finalCompetency}</span></div>
                        <div style="margin-bottom: 8px;"><strong>?ï؟½Uï؟½Uï؟½U??ï؟½???ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½:</strong> <span contenteditable="true" style="color: var(--text-secondary);">${ficheData.baseCompetency}</span></div>
                        <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> <span contenteditable="true" style="color: var(--color-gold); font-weight: 700;">${ficheData.sessionObjective || sessionNum}</span></div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h3 style="margin: 0 0 10px 0; font-size: 0.95rem; color: var(--color-primary); border-right: 3.5px solid var(--color-primary); padding-right: 8px;">1. ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½U??ï؟½ (?ï؟½Uï؟½??Uï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½??) - ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½: 15 ?ï؟½Uï؟½U?Uï؟½?ï؟½</h3>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: right; border: 1px solid var(--border-color);">
                            <thead>
                                <tr style="background: var(--color-primary-soft); color: var(--color-primary);">
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 250px;">Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 80px; text-align: center;">?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px;">?ï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 150px; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: #fff;">${ficheData.phase1.situations}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; font-weight: 700;">15 ?ï؟½Uï؟½U?Uï؟½?ï؟½</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: var(--text-secondary);">${ficheData.phase1.organization}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; color: var(--color-gold); font-weight: 700;">${ficheData.phase1.criteria}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h3 style="margin: 0 0 10px 0; font-size: 0.95rem; color: var(--color-gold); border-right: 3.5px solid var(--color-gold); padding-right: 8px;">2. ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½U??ï؟½ (?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½) - ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½: 40 ?ï؟½Uï؟½U?Uï؟½?ï؟½</h3>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: right; border: 1px solid var(--border-color);">
                            <thead>
                                <tr style="background: var(--color-gold-soft); color: var(--color-gold);">
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 250px;">Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 80px; text-align: center;">?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px;">?ï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 150px; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: #fff;">${ficheData.phase2.situations}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; font-weight: 700;">40 ?ï؟½Uï؟½U?Uï؟½?ï؟½</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: var(--text-secondary);">${ficheData.phase2.organization}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; color: var(--color-primary); font-weight: 700;">${ficheData.phase2.criteria}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h3 style="margin: 0 0 10px 0; font-size: 0.95rem; color: var(--color-blue); border-right: 3.5px solid var(--color-blue); padding-right: 8px;">3. ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½Uï؟½U??ï؟½ (?ï؟½Uï؟½??Uï؟½U?U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½??) - ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½: 05 ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½</h3>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: right; border: 1px solid var(--border-color);">
                            <thead>
                                <tr style="background: var(--color-blue-soft); color: var(--color-blue);">
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 250px;">Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 80px; text-align: center;">?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px;">?ï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 150px; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: #fff;">${ficheData.phase3.situations}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; font-weight: 700;">05 ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: var(--text-secondary);">${ficheData.phase3.organization}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; color: var(--color-gold); font-weight: 700;">${ficheData.phase3.criteria}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 35px; border-top: 1.5px solid var(--border-color); padding-top: 15px; font-size: 0.82rem;">
                        <div style="text-align: right; flex: 1;">
                            <strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong>
                            <div style="height: 45px;"></div>
                        </div>
                        <div style="text-align: left; flex: 1;">
                            <strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong>
                            <div style="height: 45px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("btn-print-fiche").addEventListener("click", () => this.printActiveFiche(sportName, gradeLabel, sessionNum, ficheData));
    }

    getFicheTemplateData(sportId, grade, sessionNum) {
        let finalCompetency = "??Uï؟½U?U? Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½U????ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ U?U? Uï؟½?ï؟½?ï؟½U??ï؟½?? Uï؟½???ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½?ï؟½??.";
        let baseCompetency = "??Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½ ???ï؟½?ï؟½U?Uï؟½ Uï؟½??U??ï؟½?ï؟½ ?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U?U??ï؟½.";
        
        let sessionObjective = "";
        let p1Situations = "";
        let p1Org = "";
        let p1Crit = "";

        let p2Situations = "";
        let p2Org = "";
        let p2Crit = "";

        let p3Situations = "";
        let p3Org = "";
        let p3Crit = "";

        const num = parseInt(sessionNum);

        if (sportId === "handball" || sportId.includes("hand")) {
            if (num === 1) {
                sessionObjective = "?ï؟½Uï؟½ U????ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ Uï؟½U?U?U??ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½??Uï؟½U? ??Uï؟½Uï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½.";
                p1Situations = "?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½: ?ï؟½?ï؟½U? ?ï؟½U?U?U? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ??Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½U?Uï؟½?ï؟½ (5?ï؟½).<br>?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½: ?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½ ???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U?Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½??U?U?Uï؟½?ï؟½ ??Uï؟½?ï؟½U??ï؟½ ?ï؟½U?U?U? Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U? (10?ï؟½).";
                p1Org = "?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½U? U?U? ?ï؟½U?Uï؟½U? Uï؟½??Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ ??Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ 3 ?ï؟½Uï؟½???ï؟½?ï؟½.";
                p1Crit = "?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½??U??ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½.";
                
                p2Situations = "??1: ??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½ 04 ?ï؟½U?Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½U?U? ?ï؟½Uï؟½U??ï؟½?ï؟½U? Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (??Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½U? Uï؟½??Uï؟½Uï؟½U?) (25?ï؟½).<br>??2: Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ U?U? Uï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ???ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½ ?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½U? (25?ï؟½).<br>??3: Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½U??ï؟½ Uï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ U??ï؟½?ï؟½ ??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ (30?ï؟½).";
                p2Org = "?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½ 4 Uï؟½?ï؟½?ï؟½???ï؟½ ?ï؟½U??ï؟½?ï؟½?ï؟½???ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½.";
                p2Crit = "?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½U?.";
                
                p3Situations = "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½U??ï؟½: ?ï؟½?ï؟½U? ?ï؟½U?U?U? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ U?Uï؟½??Uï؟½U? ?ï؟½Uï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ (10?ï؟½).<br>Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? (10?ï؟½).";
                p3Org = "?ï؟½Uï؟½???ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½U???Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?? ???ï؟½Uï؟½.";
                p3Crit = "?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½U? Uï؟½?ï؟½Uï؟½??Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½Uï؟½.";
            } else if (num === 2) {
                sessionObjective = "?ï؟½Uï؟½ U??ï؟½Uï؟½U? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ???ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½U? ?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½??U?U?.";
                p1Situations = "?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½: ?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½U??ï؟½ (5?ï؟½).<br>?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½: ??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½ U?Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (10?ï؟½).";
                p1Org = "?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ U?U? ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½ Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½?ï؟½.";
                p1Crit = "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½.";
                
                p2Situations = "??1: ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ U?U? Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½ ??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½U??ï؟½ Uï؟½??U?U? U?U? ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½U??ï؟½ (25?ï؟½).<br>??2: ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½: ??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½ 6 ?ï؟½Uï؟½???ï؟½?ï؟½ (25?ï؟½).<br>??3: Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½U??ï؟½ ?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ (Fast Break) (30?ï؟½).";
                p2Org = "??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½U?U?Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?? U??ï؟½ ?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½ 6Uï؟½ Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½.";
                p2Crit = "?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½.";
                
                p3Situations = "Uï؟½?ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½??U?U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½U?Uï؟½U??ï؟½ (10?ï؟½).<br>??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? (10?ï؟½).";
                p3Org = "?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½U? U?U? Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½U???Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½??.";
                p3Crit = "?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½U??ï؟½.";
            } else {
                sessionObjective = "???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? Uï؟½?????ï؟½U??ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½???ï؟½?? ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½Uï؟½ 6:0.";
                p1Situations = "?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½: ?ï؟½?ï؟½U? Uï؟½??Uï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½U??ï؟½ Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ (5?ï؟½).<br>?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½: ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (10?ï؟½).";
                p1Org = "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½U? ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½ 9 ?ï؟½Uï؟½???ï؟½?ï؟½.";
                p1Crit = "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½U?Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½.";
                
                p2Situations = "??1: ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½ 6 ?ï؟½Uï؟½???ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ U?Uï؟½U?Uï؟½?ï؟½Uï؟½ Uï؟½U??ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (25?ï؟½).<br>??2: Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½ ?ï؟½U??ï؟½?ï؟½: 5 Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½ 4 Uï؟½?ï؟½?ï؟½U??ï؟½U?Uï؟½ U????ï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½??Uï؟½?ï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ (25?ï؟½).<br>??3: Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½U?U??ï؟½ (30?ï؟½).";
                p2Org = "?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½??.";
                p2Crit = "?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½.";
                
                p3Situations = "?ï؟½Uï؟½Uï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? Uï؟½??Uï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½??Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ (?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½U?U??ï؟½) (10?ï؟½).<br>Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½???ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? (10?ï؟½).";
                p3Org = "???ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?? ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½.";
                p3Crit = "?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½.";
            }
        } else if (sportId === "volleyball" || sportId.includes("volley")) {
            sessionObjective = "?ï؟½Uï؟½ U??ï؟½?ï؟½U? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½ U?U? Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½.";
            p1Situations = "?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½: ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½??U?Uï؟½ Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½ (5?ï؟½).<br>?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½: ??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ U??ï؟½?ï؟½U??ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? Uï؟½U?Uï؟½Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (10?ï؟½).";
            p1Org = "?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½U? U?U? Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½U???Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½ ??Uï؟½Uï؟½U??ï؟½U?Uï؟½.";
            p1Crit = "??Uï؟½U??ï؟½?ï؟½ Uï؟½U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?? Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½.";
            
            p2Situations = "??1: ??Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½Uï؟½ U?Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½ (30?ï؟½).<br>??2: ?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ U?U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ 3 (20?ï؟½).<br>??3: Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U?Uï؟½U??ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½ U?Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ (30?ï؟½).";
            p2Org = "Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½???ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½U??ï؟½?ï؟½.";
            p2Crit = "Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ U?Uï؟½?ï؟½ U?U? ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U? Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½.";
            
            p3Situations = "??Uï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?? ?ï؟½U?U?U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ (10?ï؟½).<br>Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½?ï؟½ U?U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? (10?ï؟½).";
            p3Org = "?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½ Uï؟½Uï؟½???ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½??.";
            p3Crit = "?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½.";
        } else if (sportId === "basketball" || sportId.includes("basket")) {
            sessionObjective = "?ï؟½??Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½???ï؟½Uï؟½U??ï؟½ Double-pas.";
            p1Situations = "?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½: ?ï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ????U?U??ï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ (5?ï؟½).<br>?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½: ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½U?Uï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ (10?ï؟½).";
            p1Org = "??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½.";
            p1Crit = "?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U?.";
            
            p2Situations = "??1: ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½??Uï؟½?ï؟½?ï؟½U? Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½U??ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½?ï؟½ (25?ï؟½).<br>??2: ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? Uï؟½Uï؟½Uï؟½ Double-pas (U?Uï؟½U?Uï؟½-U??ï؟½?ï؟½?ï؟½-?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½Uï؟½) (25?ï؟½).<br>??3: Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½U?Uï؟½U??ï؟½ ?ï؟½U?Uï؟½ U?Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½U? Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ (30?ï؟½).";
            p2Org = "?ï؟½Uï؟½?ï؟½?? Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?? Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½??.";
            p2Crit = "?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½??U?Uï؟½ U?Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?U??ï؟½.";
            
            p3Situations = "Uï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ (10?ï؟½).<br>Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U??ï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? (10?ï؟½).";
            p3Org = "???ï؟½Uï؟½?ï؟½ U?U? Uï؟½Uï؟½???ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½.";
            p3Crit = "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½?ï؟½.";
        } else if (sportId === "speed-run" || sportId.includes("speed") || sportId.includes("?ï؟½?ï؟½?ï؟½?ï؟½")) {
            sessionObjective = "???ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?? (?ï؟½Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½).";
            p1Situations = "?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½: ?ï؟½?ï؟½U? Uï؟½?ï؟½??Uï؟½?ï؟½ ?ï؟½U?U?U? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ (5?ï؟½).<br>?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½: ??Uï؟½?ï؟½U??ï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?Uï؟½ Uï؟½?ï؟½Uï؟½U??ï؟½?ï؟½U?Uï؟½?ï؟½ ??Uï؟½?ï؟½U?Uï؟½ ?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½??U?Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (10?ï؟½).";
            p1Org = "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½U? U?U? ?ï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U?.";
            p1Crit = "?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?.";
            
            p2Situations = "??1: ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? (?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½) Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?? (25?ï؟½).<br>??2: ?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½U??ï؟½?ï؟½ (20Uï؟½ ?ï؟½Uï؟½ 30Uï؟½) Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½??Uï؟½Uï؟½?ï؟½?ï؟½ (25?ï؟½).<br>??3: Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ U?U? ?ï؟½Uï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ 60Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½U?U??ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½ Uï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??? (30?ï؟½).";
            p2Org = "Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½U?Uï؟½?ï؟½??U? ?ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½U??ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½.";
            p2Crit = "?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½.";
            
            p3Situations = "?ï؟½?ï؟½U? ?ï؟½U?U?U? Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½??Uï؟½?ï؟½?ï؟½U?Uï؟½ ?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½Uï؟½U?U??ï؟½ Uï؟½Uï؟½U??ï؟½?ï؟½ (15?ï؟½).<br>???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U????ï؟½?? ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½???ï؟½ ?ï؟½Uï؟½???ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? (5?ï؟½).";
            p3Org = "?ï؟½Uï؟½???ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?? ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½.";
            p3Crit = "?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½??Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½.";
        } else {
            sessionObjective = `?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ U?U? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ U?U? Uï؟½?ï؟½?ï؟½?ï؟½ ${sportName}.`;
            p1Situations = "?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½: ?ï؟½?ï؟½U? ?ï؟½U?U?U? Uï؟½????U?U??ï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ (5?ï؟½).<br>?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½?ï؟½: ??Uï؟½?ï؟½U?Uï؟½?ï؟½?? Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ (10?ï؟½).";
            p1Org = "?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½U? U?U? Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½U???Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½??.";
            p1Crit = "?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½.";
            
            p2Situations = `??1: ??Uï؟½?ï؟½U?Uï؟½ ??Uï؟½Uï؟½U??ï؟½U? Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ${sportName} ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (30?ï؟½).<br>??2: ???ï؟½?ï؟½U?Uï؟½ U??ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ U?U? ?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ (25?ï؟½).<br>??3: Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½???ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½?ï؟½U? (25?ï؟½).`;
            p2Org = "?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½??Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ (?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½U?Uï؟½?ï؟½??U??ï؟½ Uï؟½?ï؟½?ï؟½???ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½U??ï؟½?ï؟½).";
            p2Crit = "???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½U?Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½.";
            
            p3Situations = "Uï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½U??ï؟½ (10?ï؟½).<br>?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½???ï؟½ ?ï؟½Uï؟½???ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U? (10?ï؟½).";
            p3Org = "???ï؟½Uï؟½?ï؟½ U?U? Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½U???Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½??.";
            p3Crit = "?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½U?Uï؟½?ï؟½U??ï؟½.";
        }

        return {
            finalCompetency,
            baseCompetency,
            sessionObjective,
            phase1: {
                situations: p1Situations,
                organization: p1Org,
                criteria: p1Crit
            },
            phase2: {
                situations: p2Situations,
                organization: p2Org,
                criteria: p2Crit
            },
            phase3: {
                situations: p3Situations,
                organization: p3Org,
                criteria: p3Crit
            }
        };
    }

    printActiveFiche(sportName, gradeLabel, sessionNum, ficheData) {
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½";
        const academicYear = this.database.metadata.academicYear || "";

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ - ${sportName}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        background: #fff;
                        color: #000;
                        padding: 20px;
                        margin: 0;
                        direction: rtl;
                    }
                    .fiche-container {
                        border: 3px double #000;
                        padding: 20px;
                        border-radius: 8px;
                        max-width: 900px;
                        margin: 0 auto;
                        box-sizing: border-box;
                    }
                    .header-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    .header-table td {
                        padding: 5px;
                        font-size: 0.85rem;
                        vertical-align: top;
                    }
                    .title-doc {
                        font-size: 1.35rem;
                        font-weight: 800;
                        text-align: center;
                        margin: 0;
                    }
                    .meta-box {
                        border: 1.5px solid #000;
                        padding: 10px;
                        border-radius: 6px;
                        margin-bottom: 20px;
                        font-size: 0.85rem;
                        line-height: 1.6;
                    }
                    .meta-grid {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;
                        border-bottom: 1px solid #ddd;
                        padding-bottom: 8px;
                    }
                    .section-title {
                        font-size: 1rem;
                        font-weight: 700;
                        margin: 15px 0 8px 0;
                        background: #f3f4f6;
                        padding: 5px 10px;
                        border-right: 4px solid #000;
                    }
                    .phase-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 0.8rem;
                        text-align: right;
                        margin-bottom: 15px;
                    }
                    .phase-table th, .phase-table td {
                        border: 1.5px solid #000;
                        padding: 8px;
                        vertical-align: top;
                    }
                    .phase-table th {
                        background: #f3f4f6;
                        font-weight: 700;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.9rem;
                    }
                    .signatures div {
                        width: 45%;
                    }
                    @media print {
                        body { padding: 0; }
                        .no-print { display: none; }
                        .fiche-container { border: 2px solid #000; }
                    }
                </style>
            </head>
            <body>
                <div class="fiche-container">
                    <table class="header-table">
                        <tr>
                            <td style="width: 35%; text-align: right;">
                                <div><strong>?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</strong></div>
                                <div>Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</div>
                                <div>${wilaya}</div>
                                <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong> ${schoolName}</div>
                            </td>
                            <td style="width: 30%; text-align: center; vertical-align: middle;">
                                <h1 class="title-doc">Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ ???ï؟½?ï؟½Uï؟½U??ï؟½</h1>
                                <div style="font-size: 0.9rem; font-weight: 700; margin-top: 5px;">Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½: ${sessionNum}</div>
                            </td>
                            <td style="width: 35%; text-align: left;">
                                <div><strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> ${teacherName}</div>
                                <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½Uï؟½:</strong> ${gradeLabel}</div>
                                <div><strong>?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:</strong> ${academicYear}</div>
                                <div><strong>?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> 120 ?ï؟½Uï؟½U?Uï؟½?ï؟½ (?ï؟½?ï؟½?ï؟½???ï؟½Uï؟½)</div>
                            </td>
                        </tr>
                    </table>

                    <div class="meta-box">
                        <div class="meta-grid">
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½???ï؟½?ï؟½:</strong> <span style="font-weight: 700;">${sportName}</span></div>
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> <span style="font-weight: 700;">${ficheData.sessionObjective}</span></div>
                        </div>
                        <div><strong>?ï؟½Uï؟½Uï؟½U??ï؟½???ï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½Uï؟½U??ï؟½:</strong> ${ficheData.finalCompetency}</div>
                        <div style="margin-top: 5px;"><strong>?ï؟½Uï؟½Uï؟½U??ï؟½???ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½:</strong> ${ficheData.baseCompetency}</div>
                    </div>

                    <div class="section-title">1. ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½U??ï؟½ (?ï؟½Uï؟½??Uï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½??) - ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½: 20 ?ï؟½Uï؟½U?Uï؟½?ï؟½</div>
                    <table class="phase-table">
                        <thead>
                            <tr>
                                <th style="width: 35%;">Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 45%;">?ï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 20%; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="line-height: 1.5;">${ficheData.phase1.situations}</td>
                                <td style="line-height: 1.5;">${ficheData.phase1.organization}</td>
                                <td style="text-align: center; vertical-align: middle; font-weight: 700;">${ficheData.phase1.criteria}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="section-title">2. ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½U??ï؟½ (?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½??) - ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½: 80 ?ï؟½Uï؟½U?Uï؟½?ï؟½</div>
                    <table class="phase-table">
                        <thead>
                            <tr>
                                <th style="width: 35%;">Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 45%;">?ï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 20%; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="line-height: 1.5;">${ficheData.phase2.situations}</td>
                                <td style="line-height: 1.5;">${ficheData.phase2.organization}</td>
                                <td style="text-align: center; vertical-align: middle; font-weight: 700;">${ficheData.phase2.criteria}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="section-title">3. ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½???ï؟½Uï؟½U??ï؟½ (?ï؟½Uï؟½??Uï؟½U?U?Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½??) - ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½: 20 ?ï؟½Uï؟½U?Uï؟½?ï؟½</div>
                    <table class="phase-table">
                        <thead>
                            <tr>
                                <th style="width: 35%;">Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 45%;">?ï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 20%; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="line-height: 1.5;">${ficheData.phase3.situations}</td>
                                <td style="line-height: 1.5;">${ficheData.phase3.organization}</td>
                                <td style="text-align: center; vertical-align: middle; font-weight: 700;">${ficheData.phase3.criteria}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="signatures">
                        <div style="text-align: right;">
                            <strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong>
                        </div>
                        <div style="text-align: left;">
                            <strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong>
                        </div>
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    printCahierJournalEntry(entryId) {
        const entry = (this.database.dailyLogbook || []).find(e => e.id === entryId);
        if (!entry) return;

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½";
        const academicYear = this.database.metadata.academicYear || "";

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U? - ${entry.date}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        padding: 30px;
                        background: #fff;
                        color: #000;
                        direction: rtl;
                    }
                    .sheet {
                        border: 2px solid #000;
                        padding: 25px;
                        border-radius: 8px;
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .header-box {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 2px solid #000;
                        padding-bottom: 15px;
                        margin-bottom: 20px;
                        font-size: 0.85rem;
                        line-height: 1.6;
                    }
                    .title-doc {
                        font-size: 1.4rem;
                        font-weight: 800;
                        text-align: center;
                        margin: 0 0 10px 0;
                    }
                    .content-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 15px;
                    }
                    .content-table td {
                        border: 1px solid #000;
                        padding: 10px 15px;
                        vertical-align: top;
                        line-height: 1.6;
                    }
                    .label-td {
                        width: 180px;
                        font-weight: 700;
                        background: #f3f4f6;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.9rem;
                    }
                </style>
            </head>
            <body>
                <div class="sheet">
                    <div class="header-box">
                        <div>
                            <div>?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</div>
                            <div>Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</div>
                            <div>${wilaya}</div>
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong> ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div><strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> ${teacherName}</div>
                            <div><strong>?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:</strong> ${academicYear}</div>
                            <div><strong>???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½:</strong> <span style="font-family: 'Outfit'; font-weight: 700;">${entry.date}</span></div>
                        </div>
                    </div>

                    <h1 class="title-doc">Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U? Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</h1>

                    <table class="content-table">
                        <tr>
                            <td class="label-td">?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½</td>
                            <td style="font-weight: 700; font-size: 1.05rem; color: #10b981;">${entry.className}</td>
                        </tr>
                        <tr>
                            <td class="label-td">?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U???</td>
                            <td style="font-family: 'Outfit'; font-weight: 700;">${entry.session}</td>
                        </tr>
                        <tr>
                            <td class="label-td">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½</td>
                            <td style="font-weight: 700;">${entry.sport}</td>
                        </tr>
                        <tr>
                            <td class="label-td">?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½</td>
                            <td style="font-weight: 700; color: #3b82f6;">${entry.objective}</td>
                        </tr>
                        <tr>
                            <td class="label-td">Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½</td>
                            <td>${entry.situations ? entry.situations.replace(/\n/g, "<br>") : "---"}</td>
                        </tr>
                        <tr>
                            <td class="label-td">?ï؟½Uï؟½??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??U? Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½??</td>
                            <td style="font-style: italic; color: #4b5563;">${entry.evaluation ? entry.evaluation.replace(/\n/g, "<br>") : "---"}</td>
                        </tr>
                    </table>

                    <div class="signatures">
                        <div><strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong></div>
                        <div><strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong></div>
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    printActiveCycle() {
        const grade = document.getElementById("cycle-select-grade").value;
        const term = document.getElementById("cycle-select-term").value;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½";
        const academicYear = this.database.metadata.academicYear || "";

        let sport1 = "";
        let sport2 = "";
        if (term === "1") {
            sport1 = "?ï؟½?ï؟½?ï؟½?ï؟½ (60Uï؟½)";
            sport2 = "Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½";
        } else if (term === "2") {
            sport1 = "?ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½U?Uï؟½";
            sport2 = "Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½";
        } else {
            sport1 = "?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½";
            sport2 = "Uï؟½?ï؟½?ï؟½ U??ï؟½";
        }

        const gradeLabel = grade === "1" ? "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (1AS)" : grade === "2" ? "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (2AS)" : "?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½U? (3AS)";
        const cycleData = this.getCycleTemplateData(grade, term);

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½U??ï؟½ - ?ï؟½Uï؟½U??ï؟½Uï؟½ ${term}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        padding: 20px;
                        background: #fff;
                        color: #000;
                        direction: rtl;
                    }
                    .container {
                        border: 2px solid #000;
                        padding: 20px;
                        border-radius: 8px;
                        max-width: 1000px;
                        margin: 0 auto;
                    }
                    .header {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 2px solid #000;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        font-size: 0.85rem;
                        line-height: 1.6;
                    }
                    .title {
                        font-size: 1.4rem;
                        font-weight: 800;
                        text-align: center;
                        margin: 0 0 10px 0;
                    }
                    .cycle-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 0.8rem;
                        text-align: right;
                    }
                    .cycle-table th, .cycle-table td {
                        border: 1.5px solid #000;
                        padding: 8px;
                        vertical-align: top;
                        line-height: 1.5;
                    }
                    .cycle-table th {
                        background: #f3f4f6;
                        font-weight: 700;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 35px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.9rem;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <div>
                            <div>?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</div>
                            <div>Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</div>
                            <div>${wilaya}</div>
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong> ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div><strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> ${teacherName}</div>
                            <div><strong>?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:</strong> ${academicYear}</div>
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:</strong> ${gradeLabel}</div>
                        </div>
                    </div>

                    <h1 class="title">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½U??ï؟½ (?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½)</h1>
                    <div style="text-align: center; font-weight: 700; font-size: 1.05rem; margin-bottom: 20px;">
                        ?ï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?: ${term} | ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U?: ${sport1} | ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?: ${sport2}
                    </div>

                    <table class="cycle-table">
                        <thead>
                            <tr>
                                <th style="width: 50px; text-align: center;">?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 220px;">?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?</th>
                                <th>Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ (${sport1})</th>
                                <th>Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ (${sport2})</th>
                                <th style="width: 140px; text-align: center;">Uï؟½?ï؟½?ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½Uï؟½U?Uï؟½</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cycleData.map(session => `
                                <tr>
                                    <td contenteditable="true" style="text-align: center; font-weight: 800; font-size: 1.1rem; vertical-align: middle;">${session.num}</td>
                                    <td contenteditable="true" style="font-weight: 700;">${session.objective}</td>
                                    <td contenteditable="true">${session.situationsInd}</td>
                                    <td contenteditable="true">${session.situationsColl}</td>
                                    <td contenteditable="true" style="text-align: center; font-weight: 700; vertical-align: middle;">${session.criteria}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>

                    <div class="signatures">
                        <div><strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong></div>
                        <div><strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong></div>
                    </div>
                </div>
                <div style="text-align: center; margin: 20px;" class="no-print">
                    <button onclick="window.print()" style="padding: 10px 20px; font-size: 1rem; background: #10b981; color: white; border: none; border-radius: 5px; cursor: pointer; font-family: 'Cairo', sans-serif;">?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½</button>
                    <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">U?Uï؟½Uï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½??Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½??.</p>
                </div>
                <style>
                    @media print {
                        .no-print { display: none !important; }
                    }
                </style>
                <script>
                    // No automatic print, wait for user to edit and click print.
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    printFullInspectionFile() {
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "Uï؟½?ï؟½U??ï؟½U??ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ???ï؟½?ï؟½";
        const academicYear = this.database.metadata.academicYear || "";
        const logbook = this.database.dailyLogbook || [];

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>?ï؟½Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U? ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½??Uï؟½?ï؟½Uï؟½Uï؟½ Uï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        padding: 0;
                        margin: 0;
                        background: #fff;
                        color: #000;
                        direction: rtl;
                    }
                    .page {
                        padding: 40px;
                        box-sizing: border-box;
                        width: 210mm;
                        min-height: 297mm;
                        margin: 0 auto;
                        position: relative;
                        page-break-after: always;
                    }
                    .cover-page {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        text-align: center;
                        height: 270mm;
                        border: 3px double #000;
                        padding: 30px;
                    }
                    .cover-title {
                        font-size: 2.2rem;
                        font-weight: 800;
                        margin-top: 50px;
                    }
                    .cover-subtitle {
                        font-size: 1.5rem;
                        margin-top: 15px;
                        color: #4b5563;
                    }
                    .cover-meta {
                        border: 2px solid #000;
                        padding: 20px;
                        border-radius: 8px;
                        width: 80%;
                        font-size: 1.15rem;
                        line-height: 1.8;
                        text-align: right;
                        margin-bottom: 50px;
                    }
                    .section-title {
                        font-size: 1.4rem;
                        font-weight: 800;
                        border-bottom: 2.5px solid #000;
                        padding-bottom: 8px;
                        margin-bottom: 20px;
                        text-align: right;
                    }
                    .info-p {
                        font-size: 0.95rem;
                        line-height: 1.8;
                        margin-bottom: 15px;
                        text-align: justify;
                    }
                    .table-data {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 15px;
                        font-size: 0.85rem;
                    }
                    .table-data th, .table-data td {
                        border: 1.5px solid #000;
                        padding: 8px;
                        vertical-align: top;
                        line-height: 1.5;
                    }
                    .table-data th {
                        background: #f3f4f6;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.95rem;
                    }
                </style>
            </head>
            <body>
                <div class="page">
                    <div class="cover-page">
                        <div>
                            <div style="font-size: 1.15rem; font-weight: 700;">?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U?Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½</div>
                            <div style="font-size: 1.05rem; font-weight: 700; margin-top: 5px;">Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½</div>
                            <div style="font-size: 1rem; margin-top: 5px;">${wilaya}</div>
                        </div>
                        
                        <div>
                            <div class="cover-title">?ï؟½Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½</div>
                            <div class="cover-subtitle">?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½</div>
                        </div>

                        <div class="cover-meta">
                            <div><strong>?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong> ${teacherName}</div>
                            <div><strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½U??ï؟½:</strong> ${schoolName}</div>
                            <div><strong>?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U?:</strong> ${academicYear}</div>
                            <div><strong>?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½:</strong> ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½U??ï؟½</div>
                        </div>

                        <div style="font-size: 0.85rem; font-style: italic; color: #4b5563;">
                            ??Uï؟½ ?ï؟½Uï؟½??Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½ Smart EPS ?ï؟½Uï؟½?ï؟½Uï؟½U??ï؟½
                        </div>
                    </div>
                </div>

                <div class="page" style="border: 1px solid #ddd; padding: 30px;">
                    <div class="section-title">??Uï؟½?ï؟½U?Uï؟½?ï؟½?? ?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½U?</div>
                    <div class="info-p">
                        ???ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½???ï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½Uï؟½ Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½Uï؟½U?Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½U??ï؟½ Uï؟½??Uï؟½?ï؟½U? ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ ???ï؟½?ï؟½U??ï؟½ Uï؟½??Uï؟½U?U? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ Uï؟½???ï؟½Uï؟½U?Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½??Uï؟½?ï؟½?ï؟½U??ï؟½Uï؟½.
                    </div>
                    <div class="info-p">
                        <strong>?ï؟½Uï؟½??Uï؟½?ï؟½U?Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½???ï؟½U?U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U?:</strong>
                        <ul>
                            <li><strong>?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½:</strong> U??ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ (?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U?Uï؟½U??ï؟½) Uï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½??U??ï؟½U?Uï؟½?ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½U??ï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½.</li>
                            <li><strong>???ï؟½U?U??ï؟½ ?ï؟½Uï؟½Uï؟½U??ï؟½?ï؟½Uï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½:</strong> ??Uï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½???ï؟½?ï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½??U??ï؟½?ï؟½U? ?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½Uï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?.</li>
                            <li><strong>?ï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U?:</strong> U??ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U? Uï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½ ?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½ ?ï؟½?ï؟½Uï؟½U??ï؟½ U??ï؟½?ï؟½Uï؟½ U?U?Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ ???ï؟½?ï؟½U??ï؟½ Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U?Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½??U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½??Uï؟½?ï؟½?? Uï؟½Uï؟½ ?ï؟½?ï؟½?ï؟½.</li>
                            <li><strong>?ï؟½Uï؟½??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½:</strong> ?ï؟½Uï؟½?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ U?U? ??Uï؟½U?U?Uï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½ Uï؟½???ï؟½Uï؟½U?Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??U??ï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½???ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½U??ï؟½?ï؟½U??ï؟½.</li>
                        </ul>
                    </div>
                    <div class="info-p" style="margin-top: 30px;">
                        ???ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½U??ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½U????ï؟½U?Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½U?U?Uï؟½ Uï؟½Uï؟½?ï؟½U??ï؟½U? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? Uï؟½??Uï؟½U?U?Uï؟½ ?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½Uï؟½U? ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½??Uï؟½?ï؟½?ï؟½ Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½U??ï؟½.
                    </div>
                </div>

                <div class="page" style="border: 1px solid #ddd; padding: 30px;">
                    <div class="section-title">?ï؟½?ï؟½Uï؟½ ?ï؟½U????ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ (Daily Logbook)</div>
                    <div class="info-p">
                        U??ï؟½??Uï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½Uï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½Uï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ Uï؟½?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½Uï؟½?ï؟½ Uï؟½Uï؟½ ?ï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ U?U? ?ï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U? ?ï؟½Uï؟½?ï؟½Uï؟½U? Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U?:
                    </div>
                    <table class="table-data">
                        <thead>
                            <tr>
                                <th style="width: 90px; text-align: center;">?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½</th>
                                <th style="width: 80px; text-align: center;">?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½</th>
                                <th style="width: 100px; text-align: center;">?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                <th>?ï؟½Uï؟½Uï؟½?ï؟½U? ?ï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½?? ?ï؟½Uï؟½???ï؟½Uï؟½Uï؟½U??ï؟½ ?ï؟½Uï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½</th>
                                <th style="width: 140px; text-align: center;">Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ Uï؟½?ï؟½Uï؟½??Uï؟½U?U?Uï؟½</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${logbook.length === 0 ? `
                                <tr><td colspan="5" style="text-align: center; padding: 20px;">Uï؟½?ï؟½ ??Uï؟½?ï؟½?ï؟½ ?ï؟½?ï؟½?ï؟½ Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½?ï؟½Uï؟½?ï؟½U????ï؟½ ?ï؟½Uï؟½U?Uï؟½Uï؟½U? ?ï؟½?ï؟½Uï؟½U??ï؟½Uï؟½.</td></tr>
                            ` : logbook.map(e => `
                                <tr>
                                    <td style="text-align: center; font-weight: 700;">${e.date}</td>
                                    <td style="text-align: center;">${e.className}</td>
                                    <td style="text-align: center; font-weight: 700; color: #10b981;">${e.sport}</td>
                                    <td>
                                        <strong>?ï؟½Uï؟½Uï؟½?ï؟½U?:</strong> ${e.objective}<br>
                                        <strong>?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½U??ï؟½??:</strong> ${e.situations || "---"}
                                    </td>
                                    <td style="font-style: italic; color: #374151;">${e.evaluation || "---"}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>

                    <div class="signatures" style="margin-top: 50px;">
                        <div>
                            <strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½:</strong>
                        </div>
                        <div>
                            <strong>?ï؟½Uï؟½?ï؟½?ï؟½?? ?ï؟½Uï؟½?ï؟½U??ï؟½ Uï؟½?ï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½:</strong>
                        </div>
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    toggleFieldTimer() {
        if (this.isTimerRunning) {
            clearInterval(this.timerInterval);
            this.isTimerRunning = false;
            document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "???ï؟½??U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½??" : "D?ï؟½marrer";
            document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
        } else {
            this.isTimerRunning = true;
            document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "?ï؟½U?Uï؟½?ï؟½U? Uï؟½?ï؟½Uï؟½??" : "Pause";
            document.getElementById("timer-play-svg").innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
            
            this.timerInterval = setInterval(() => {
                if (this.timerCurrentSeconds > 0) {
                    this.timerCurrentSeconds--;
                    this.updateFieldTimerDisplay();
                } else {
                    clearInterval(this.timerInterval);
                    this.isTimerRunning = false;
                    document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "???ï؟½??U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½??" : "D?ï؟½marrer";
                    document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
                    this.playWhistleSound();
                    this.showToast(this.currentLang === "ar" ? "?ï؟½Uï؟½??Uï؟½Uï؟½ Uï؟½Uï؟½?? ?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½Uï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½U??ï؟½?ï؟½??Uï؟½?ï؟½U??ï؟½!" : "Temps de phase ?ï؟½coul?ï؟½ !");
                }
            }, 1000);
        }
    }

    resetFieldTimer() {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        this.timerCurrentSeconds = this.timerTotalSeconds;
        document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "???ï؟½??U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½??" : "D?ï؟½marrer";
        document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
        this.updateFieldTimerDisplay();
    }

    setupFieldTimerMinutes(mins, label) {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        this.timerTotalSeconds = mins * 60;
        this.timerCurrentSeconds = this.timerTotalSeconds;
        this.timerLabel = label;
        
        document.getElementById("field-timer-label").textContent = label;
        document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "???ï؟½??U?Uï؟½ ?ï؟½Uï؟½Uï؟½?ï؟½Uï؟½??" : "D?ï؟½marrer";
        document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
        
        this.updateFieldTimerDisplay();
    }

    updateFieldTimerDisplay() {
        const mins = Math.floor(this.timerCurrentSeconds / 60);
        const secs = this.timerCurrentSeconds % 60;
        const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        document.getElementById("field-timer-time").textContent = formatted;

        const ring = document.getElementById("timer-progress-ring");
        if (ring) {
            const circumference = 640;
            const percent = this.timerCurrentSeconds / this.timerTotalSeconds;
            const offset = circumference * (1 - percent);
            ring.style.strokeDashoffset = offset;
        }
    }

    playWhistleSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            
            const soundTypeEl = document.getElementById("timer-sound-type");
            const soundType = soundTypeEl ? soundTypeEl.value : "whistle";
            
            const lengthEl = document.getElementById("timer-sound-length");
            const durationSecs = lengthEl ? parseInt(lengthEl.value) : 1;
            
            if (soundType === "whistle" || soundType === "double_whistle") {
                const playSingleWhistle = (startTime, dur) => {
                    const mainGain = ctx.createGain();
                    mainGain.gain.setValueAtTime(0, startTime);
                    mainGain.gain.linearRampToValueAtTime(0.6, startTime + 0.05);
                    mainGain.gain.linearRampToValueAtTime(0.6, startTime + dur - 0.15);
                    mainGain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);
                    
                    const osc1 = ctx.createOscillator();
                    osc1.type = "sine";
                    osc1.frequency.setValueAtTime(2000, startTime);
                    
                    const osc2 = ctx.createOscillator();
                    osc2.type = "sine";
                    osc2.frequency.setValueAtTime(2025, startTime);
                    
                    const mod = ctx.createOscillator();
                    mod.type = "sine";
                    mod.frequency.setValueAtTime(35, startTime);
                    
                    const modGain = ctx.createGain();
                    modGain.gain.setValueAtTime(15, startTime);
                    
                    const filter = ctx.createBiquadFilter();
                    filter.type = "bandpass";
                    filter.frequency.setValueAtTime(2000, startTime);
                    filter.Q.setValueAtTime(3, startTime);
                    
                    mod.connect(modGain);
                    modGain.connect(osc1.frequency);
                    modGain.connect(osc2.frequency);
                    
                    osc1.connect(filter);
                    osc2.connect(filter);
                    filter.connect(mainGain);
                    mainGain.connect(ctx.destination);
                    
                    osc1.start(startTime);
                    osc2.start(startTime);
                    mod.start(startTime);
                    
                    osc1.stop(startTime + dur);
                    osc2.stop(startTime + dur);
                    mod.stop(startTime + dur);
                };
                
                if (soundType === "double_whistle") {
                    playSingleWhistle(ctx.currentTime, 0.4);
                    playSingleWhistle(ctx.currentTime + 0.5, 0.6);
                } else {
                    playSingleWhistle(ctx.currentTime, durationSecs);
                }
            } else if (soundType === "buzzer") {
                const osc = ctx.createOscillator();
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.8, ctx.currentTime + 0.1);
                gain.gain.linearRampToValueAtTime(0.8, ctx.currentTime + durationSecs - 0.1);
                gain.gain.linearRampToValueAtTime(0, ctx.currentTime + durationSecs);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + durationSecs);
            } else if (soundType === "beep") {
                const osc = ctx.createOscillator();
                osc.type = "sine";
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
                gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + durationSecs - 0.05);
                gain.gain.linearRampToValueAtTime(0, ctx.currentTime + durationSecs);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + durationSecs);
            }
        } catch (e) {
            console.error("Web Audio Sound Error", e);
        }
    }

    /**
     * Interactive toasts notification alerts
     * @param {*} message 
     */
    showToast(message) {
        const toast = document.getElementById("toast");
        const msgNode = document.getElementById("toast-message");
        
        msgNode.textContent = message;
        toast.classList.add("active");

        setTimeout(() => {
            toast.classList.remove("active");
        }, 3000);
    }
    
    updateQRCode() {
        const qrContainer = document.getElementById('portfolio-qrcode-container');
        if (qrContainer && typeof QRCode !== 'undefined') {
            qrContainer.innerHTML = '';
            
            const userName = document.getElementById("prof-name-input") ? document.getElementById("prof-name-input").value : '';
            const establish = document.getElementById("establishment-input") ? document.getElementById("establishment-input").value : '';
            const acad = document.getElementById("academy-input") ? document.getElementById("academy-input").value : '';
            
            const qrData = `?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½: ${userName}\n?ï؟½Uï؟½Uï؟½?ï؟½?ï؟½?ï؟½?ï؟½: ${establish}\n?ï؟½Uï؟½Uï؟½?ï؟½U??ï؟½U??ï؟½: ${acad}`;
            
            new QRCode(qrContainer, {
                text: qrData || "Uï؟½Uï؟½?ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½???ï؟½?ï؟½ ?ï؟½Uï؟½?ï؟½Uï؟½Uï؟½U??ï؟½ - ?ï؟½Uï؟½???ï؟½?ï؟½U??ï؟½ ?ï؟½Uï؟½?ï؟½?ï؟½Uï؟½U??ï؟½",
                width: 120,
                height: 120,
                colorDark : "#2b3440",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }
    }
}

// Instantiate
const app = new SmartEPS();
window.addEventListener("DOMContentLoaded", () => {
    app.init();
});
