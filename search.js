// استهداف عنصر الإدخال وقائمة العناصر
var searchInput = document.getElementById('searchInput');
var elementsList = document.getElementById('elementsList').getElementsByTagName('li');

// إضافة حدث تغيير الإدخال
searchInput.addEventListener('input', function() {
	// النص الذي تريد البحث عنه
	var searchText = searchInput.value.toLowerCase();

	// عرض جميع العناصر إذا كانت خانة البحث فارغة
	if (searchText === '') {
		for (var i = 0; i < elementsList.length; i++) {
			elementsList[i].style.display = 'block';
		}
		return;
	}

	// البحث عن العناصر المطابقة وإخفائها إذا لم يتم العثور عليها
	for (var i = 0; i < elementsList.length; i++) {
		var elementText = elementsList[i].textContent.toLowerCase();
		if (elementText.includes(searchText)) {
			elementsList[i].style.display = 'block';
		} else {
			elementsList[i].style.display = 'none';
		}
	}
});