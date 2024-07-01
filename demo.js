// المحتويات الداخلية للـ nav
let navContents = `
   <ul>
       <li><a href="#section1" id="link1">section1</a></li>
       <li><a href="#section2" id="link2">section2</a></li>
       <li><a href="#section3" id="link3">section3</a></li>
   </ul>
`;

// إنشاء عنصر nav وإضافة المحتويات
let navElement = document.createElement('nav');
navElement.innerHTML = navContents;

// تعيين خاصية sticky للـ nav
navElement.style.position = 'sticky';
navElement.style.top = '0'; // يمكن تعيين أي قيمة مثل '0px' أو '10%' أو '100px' حسب الموضع المرغوب

// إضافة nav إلى بداية الصفحة
document.body.insertBefore(navElement, document.body.firstChild);

// دالة لتعيين كلاس محدد والتمرير إلى السيكشن عند النقر على الرابط
function setActiveClassAndScroll(event) {
   event.preventDefault(); // منع السلوك الافتراضي للرابط
   
   // إزالة الكلاس النشط من جميع الروابط
   let allLinks = navElement.querySelectorAll('a');
   allLinks.forEach(link => link.classList.remove('your-active-class'));
   
   // إضافة الكلاس النشط إلى الرابط المنقر
   event.target.classList.add('your-active-class');
   
   // التمرير إلى السيكشن المرتبط بالرابط
   let targetId = event.target.getAttribute('href').substring(1);
   let targetSection = document.getElementById(targetId);
   targetSection.scrollIntoView({ behavior: 'smooth' });
}

// ربط دالة setActiveClassAndScroll بكل روابط الـ nav
let links = navElement.querySelectorAll('a');
links.forEach(link => {
   link.addEventListener('click', setActiveClassAndScroll);
});






// اختيار جميع الأقسام على الصفحة (تغيير "section" إلى العنصر الذي تريد مراقبته)
const sections = document.querySelectorAll('section');

// دالة لفحص الأقسام وتحديد القسم المرئي وإضافة الكلاس active إليه
function setActiveSection() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 50; // تعديل القيمة 50 حسب احتياجات التصميم

        if (scrollPosition >= sectionTop) {
            // إزالة الكلاس active من جميع الأقسام
            sections.forEach(sec => {
                sec.classList.remove('active');
            });

            // إضافة الكلاس active إلى القسم المرئي حاليًا
            section.classList.add('active');
        }
    });
}

// استماع لحدث التمرير على الصفحة واستدعاء setActiveSection()
window.addEventListener('scroll', setActiveSection);

// تشغيل setActiveSection() عند تحميل الصفحة لتحديد القسم الأول كـ active إذا كان مرئيًا
document.addEventListener('DOMContentLoaded', setActiveSection);
