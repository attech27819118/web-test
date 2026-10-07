const fs = require('fs');
const html = fs.readFileSync('technology/tyzor/index.html', 'utf8');

console.log('1. Title has Organic Titanates and Zirconates:', html.includes('Organic Titanates and Zirconates'));
console.log('2. Old title removed:', !html.includes('鈦酸酯與鋯酸酯四大核心技術應用 (Tyzor®)'));
console.log('3. Principles has WEBP mechanism img:', html.includes('techdata/tyzor/crosslinker_mech.webp'));
console.log('4. Principles has NO PDF iframe:', !html.includes('src="techdatadb/2.Tyzor/1.原理/'));
console.log('5. Preview header removed:', !html.includes('原廠技術文件線上預覽'));
console.log('6. Preview footer text removed:', !html.includes('支援滑鼠滾輪上下滾動與多頁閱讀'));
console.log('7. Language tag removed:', !html.includes('CN (簡體中文)'));
console.log('8. Filename text removed:', !html.includes('Brochure DK Tyzor General CN 202608.pdf'));
console.log('9. Elongated height (h-[620px] sm:h-[680px]):', html.includes('h-[620px] sm:h-[680px]'));
console.log('10. pdf.min.js included:', html.includes('js/vendor/pdf.min.js'));
