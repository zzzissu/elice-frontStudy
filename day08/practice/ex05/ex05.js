document.addEventListener("DOMContentLoaded", function() {

    let favoritesIcons = document.querySelectorAll('.favorites-icon');

    // 박스 중 하나를 클릭하면 해당 박스에 on 클래스를 추가, 다른 박스에서는 제거
    favoritesIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {

            // 모든 박스에서 on 클래스 제거
            favoritesIcons.forEach(function(icon) {
                icon.classList.remove('on');
            });

            // 클릭된 박스에 on 클래스 토글(없으면 추가, 있으면 제거)
            this.classList.toggle('on');
        });
    });
});
