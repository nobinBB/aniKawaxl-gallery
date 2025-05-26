// サンプル画像URL（様々なサイズで自然な配置に）
const imageUrls = [
    './assets/img/1 (1).png',
    './assets/img/1 (2).png',
    './assets/img/1 (3).png',
    './assets/img/1 (4).png',
    './assets/img/1 (5).png',
    './assets/img/1 (6).png',
    './assets/img/1 (7).png',
    './assets/img/1 (8).png',  
    './assets/img/1 (9).png',
    './assets/img/1 (10).png',
    './assets/img/1 (11).png',
    './assets/img/1 (12).png',
    './assets/img/1 (13).png',
    './assets/img/1 (14).png',
    './assets/img/1 (15).png',
    './assets/img/1 (16).png',
    './assets/img/1 (17).png',
    './assets/img/1 (18).png',
    './assets/img/1 (19).png',
    './assets/img/1 (20).png',
    './assets/img/1 (21).png',
    './assets/img/1 (22).png',
    './assets/img/1 (23).png',  
    './assets/img/1 (24).png',
    './assets/img/1 (25).png',
    './assets/img/1 (26).png',
    './assets/img/1 (27).png',
    './assets/img/1 (28).png',
    './assets/img/1 (29).png',
    './assets/img/1 (30).png',
    './assets/img/1 (31).png',
    './assets/img/1 (32).png',
    './assets/img/1 (33).png',
    './assets/img/1 (34).png',
    './assets/img/1 (35).png',
    './assets/img/1 (36).png',
    './assets/img/1 (37).png',
    './assets/img/1 (38).png',
    './assets/img/1 (39).png',
    './assets/img/1 (40).png',
    './assets/img/1 (41).png',
    './assets/img/1 (42).png',
    './assets/img/1 (43).png',
    './assets/img/1 (44).png',
    './assets/img/1 (45).png',
    './assets/img/1 (46).png',
    './assets/img/1 (47).png',
    './assets/img/1 (48).png',
    './assets/img/1 (49).png',
    './assets/img/1 (50).png',
    './assets/img/1 (51).png',
    './assets/img/1 (52).png',
    './assets/img/1 (53).png',
    './assets/img/1 (54).png',
    './assets/img/1 (55).png',
    './assets/img/1 (56).png',
    './assets/img/1 (57).png',
    './assets/img/1 (58).png',
    './assets/img/1 (59).png',
    './assets/img/1 (60).png',
    './assets/img/1 (61).png',
    './assets/img/1 (62).png',
    './assets/img/1 (63).png',
    './assets/img/1 (64).png',
    './assets/img/1 (65).png',
    './assets/img/1 (66).png',
    './assets/img/1 (67).png',
    './assets/img/1 (68).png',
    './assets/img/1 (69).png',
    './assets/img/1 (70).png',
    './assets/img/1 (71).png',
    './assets/img/1 (72).png',
    './assets/img/1 (73).png',
    './assets/img/1 (74).png',
    './assets/img/1 (75).png',
    './assets/img/1 (76).png',
    './assets/img/1 (77).png',
    './assets/img/1 (78).png',
    './assets/img/1 (79).png',
    './assets/img/1 (80).png',
    './assets/img/1 (81).png',
    './assets/img/1 (82).png',
    './assets/img/1 (83).png',
    './assets/img/1 (84).png',
    './assets/img/1 (85).png',
    './assets/img/1 (86).png',
    './assets/img/1 (87).png',
    './assets/img/1 (88).png',
    './assets/img/1 (89).png',
    './assets/img/1 (90).png',
    './assets/img/1 (91).png',
    './assets/img/1 (92).png',
    './assets/img/1 (93).png',
    './assets/img/1 (94).png',
    './assets/img/1 (95).png',
    './assets/img/1 (96).png',
    './assets/img/1 (97).png',
    './assets/img/1 (98).png',
    './assets/img/1 (99).png',
    './assets/img/1 (100).png',
    './assets/img/1 (101).png',
    './assets/img/1 (102).png',
    './assets/img/1 (103).png',
    './assets/img/1 (104).png',
    './assets/img/1 (105).png',
    './assets/img/1 (106).png',
    './assets/img/1 (107).png',
    './assets/img/1 (108).png',
    './assets/img/1 (109).png',
    './assets/img/1 (110).png',
    './assets/img/1 (111).png',
    './assets/img/1 (112).png',
    './assets/img/1 (113).png',
    './assets/img/1 (114).png',
    './assets/img/1 (115).png',
    './assets/img/1 (116).png',
    './assets/img/1 (117).png',
    './assets/img/1 (118).png',
    './assets/img/1 (119).png',
    './assets/img/1 (120).png',
    './assets/img/1 (121).png',
    './assets/img/1 (122).png',
    './assets/img/1 (123).png',
    './assets/img/1 (124).png',
    './assets/img/1 (125).png',
    './assets/img/1 (126).png',
    './assets/img/1 (127).png',
    './assets/img/1 (128).png',
    './assets/img/1 (129).png',
    './assets/img/1 (130).png',
    './assets/img/1 (131).png',
    './assets/img/1 (132).png',
    './assets/img/1 (133).png',
    './assets/img/1 (134).png',
    './assets/img/1 (135).png',
    './assets/img/1 (136).png',
    './assets/img/1 (137).png',
    './assets/img/1 (138).png',
    './assets/img/1 (139).png',
    './assets/img/1 (140).png',

  
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const loading = document.getElementById('loading');

// 画像を動的に生成
function createGallery() {
    loading.style.display = 'block';

    imageUrls.forEach((url, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item fade-in-element';

        const img = document.createElement('img');
        img.src = url;
        img.alt = `Gallery image ${index + 1}`;
        img.loading = 'lazy';

        // 画像読み込み完了時
        img.onload = () => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        };

        // ライトボックス表示
        img.onclick = () => openLightbox(url);

        item.appendChild(img);
        gallery.appendChild(item);
    });

    // ローディング非表示
    setTimeout(() => {
        loading.style.display = 'none';
    }, 1000);
}

// ライトボックス表示
function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ライトボックス閉じる
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// イベントリスナー
closeBtn.onclick = closeLightbox;
lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
};

// ESCキーでライトボックス閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    createGallery();

    // 動的に追加される要素を監視
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in-element');
        elements.forEach(el => observer.observe(el));
    }, 100);
});

// リサイズ時の最適化
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // 必要に応じてレイアウト調整
    }, 250);
});

// パフォーマンス最適化のための遅延読み込み
const images = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}
