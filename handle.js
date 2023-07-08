   if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = '/login.html';
      }
      // تحديد عنوان IP الخاص بالمستخدم
      const staffIPs = ['154.239.126.151', '10.0.0.1', '172.16.0.1'];

// قائمة الممنوعين من دخول الموقع
const bannedIPs = ['154.239.19.177', '10.0.0.1', '172..16.0.1'];

// التحقق من وجود عنوان IP الخاص بالمستخدم في قائمة الممنوعين
if (bannedIPs.includes(staffIPS)) {
  // إخبار المستخدم بأنه لا يمكنه الوصول إلى الموقع

  // إعادة توجيه المستخدم إلى صفحة أخرى
  window.location.href = '/dashboard/staff.html';
}