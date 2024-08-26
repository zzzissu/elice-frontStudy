document.addEventListener('DOMContentLoaded', function() {
    const makeBtnModal = document.getElementById('makeBtnModal');
    const fileInput = document.getElementById('fileInput');
    const selectBtn = document.getElementById('selectBtn');
    const selectedImage = document.getElementById('selectedImage');
    const captionInput = document.getElementById('captionInput');
    const postBtn = document.getElementById('postBtn');
    const addBtn = document.getElementById('addBtn');
    const postsContainer = document.querySelector('.posts-container');
    const uploadSectionSpan = document.querySelector('.upload-section span');
    const choicePicture = document.querySelector('.choicePicture');
    const popup = document.querySelector('.popup');

    // "만들기" 버튼 클릭 시 모달 열기
    addBtn.addEventListener('click', function(event) {
        event.preventDefault(); // 링크 기본 동작 방지
        makeBtnModal.style.display = 'flex';
    });

    // 파일 선택 버튼 클릭 시 파일 입력 창 열기
    selectBtn.addEventListener('click', function() {
        fileInput.click();

    });

    // 파일이 선택되면 모달에 이미지 미리보기 표시하고 내용 입력란 및 게시 버튼 보이기
    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                selectedImage.src = e.target.result; // 이미지 미리보기
                selectedImage.style.display = 'block'; // 이미지 표시
                uploadSectionSpan.style.display = 'none'; // 안내 문구 숨기기
                captionInput.style.display = 'block'; // 설명 입력란 표시
                postBtn.style.display = 'block'; // 게시 버튼 보이기

                choicePicture.style.flexDirection = 'row';
                choicePicture.style.alignItems = 'flex-start';
                choicePicture.style.justifyContent = 'flex-start';
                popup.style.width = '60%';
                selectBtn.style.display = 'none'; // '컴퓨터에서 선택' 버튼 숨기기
            };
            reader.readAsDataURL(file);
        }
    });

    // 게시 버튼 클릭 시 게시물 추가
    postBtn.addEventListener('click', function() {
        const caption = captionInput.value;
        if (fileInput.files.length > 0 && caption.trim()) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const imgElement = document.createElement('img');
            imgElement.classList.add('post-image');
            imgElement.src = selectedImage.src;

            const captionElement = document.createElement('p');
            captionElement.classList.add('post-caption');
            captionElement.textContent = caption;

            postElement.appendChild(imgElement);
            postElement.appendChild(captionElement);
            postsContainer.appendChild(postElement);

            // 모달 및 입력 필드 초기화
            fileInput.value = '';
            selectedImage.src = '';
            selectedImage.style.display = 'none';
            captionInput.value = '';
            captionInput.style.display = 'none'; // 설명 입력란 숨김
            postBtn.style.display = 'none'; // 게시 버튼 숨김
            selectBtn.style.display = 'block'; // '컴퓨터에서 선택' 버튼 보이기
            uploadSectionSpan.style.display = 'block'; // 안내 문구 다시 표시
            makeBtnModal.style.display = 'none'; // 모달 숨김
        }
    });

    // 모달 외부 클릭 시 모달 닫기
    makeBtnModal.addEventListener('click', function(event) {
        if (event.target === makeBtnModal) {
            makeBtnModal.style.display = 'none';
        }
    });
});
