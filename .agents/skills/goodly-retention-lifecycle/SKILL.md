---
name: goodly-retention-lifecycle
description: Implements Goodly's 8 distinct 30-day data retention clocks, Trash lifecycle, and atomic account deletion cascades.
---

# Goodly Data Retention Clocks & Account Deletion Lifecycle

Goodly enforces privacy-by-design and strict data retention limits to minimize data storage while maintaining auditability and data integrity.

## The 8 Distinct 30-Day Retention Clocks

| Data Record | Clock Trigger Event | Expiration Rule & Action |
| :--- | :--- | :--- |
| **1. Seller-Deleted Listings (Trash)** | Listing deletion timestamp | Permanently purge database record and image assets after 30 days. |
| **2. Contact Inquiries** | Admin manually marks as `Closed` | Permanently delete visitor Email, Subject, and Message after 30 days. |
| **3. Visitor Reports** | Admin marks report as `Closed` | Permanently delete report and reporter email after 30 days. |
| **4. Seller Messages & Replies** | Conversation marked as `Closed` | Permanently delete conversation thread from both seller and admin views. |
| **5. System Dashboard Notifications** | Notification creation timestamp | Permanently delete notification after 30 days. |
| **6. Unconfirmed-Email Accounts** | Initial signup timestamp | Permanently delete unverified account after 30 days. |
| **7. Confirmed but Unsubmitted Profiles** | Email confirmation timestamp | Permanently delete account and draft profile after 30 days. |
| **8. Completed Profile Request History** | Admin approval/rejection timestamp | Permanently delete change-log entry after 30 days. |

---

## Critical Retention Invariants

- **Submitted Pending Applications Never Auto-Expire**: An applicant who has submitted their profile is awaiting admin review; they are NOT deleted by the unsubmitted account clock.
- **Current Data Outlives History**: Current approved profile values, active blocking status, and active blocking reasons persist even when historical notification or change-log records are purged.
- **True Physical Deletion**: Cleanup routines must physically delete records and associated image files from disk/storage, rather than merely hiding them behind a boolean flag.

---

## Seller Account Deletion Workflow

1. **Deletion Request Initiated**:
   - Seller clicks **Request account deletion** in My profile.
   - **Immediate Suppression**: Seller public profile and all listings are immediately removed from public catalog/search queries.
   - Request is delivered into administrator **Messages** for manual processing.
2. **Pending Period**:
   - Seller retains login access, can communicate with the admin, and can click **Cancel deletion request**.
   - If canceled, public visibility is restored according to their existing own listing states (`Active` vs `Hidden`) and account status.
3. **Final Administrator Deletion Action**:
   - Administrator executes final account deletion.
   - **Atomic Cleanup Cascade**:
     - Delete user credentials and authentication record.
     - Delete seller profile, profile photos, and introduction translations.
     - Delete all listings (Active, Hidden, Blocked, and in Trash) along with their image assets.
     - Delete all message threads, appeals, and system notifications.
     - Delete pending profile requests, change histories, and release nickname reservations.
     - Send an automated deletion confirmation email to the seller's email address.
