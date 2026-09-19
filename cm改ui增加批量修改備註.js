const vendorData = [
        { id: "A00001", name: "正豐" }, { id: "A00002", name: "永順" }, { id: "A00003", name: "力泰" },
        { id: "A00004", name: "日昶" }, { id: "A00005", name: "永昌" }, { id: "A00006", name: "福久" },
        { id: "A00008", name: "長洲" }, { id: "A00009", name: "宏元" }, { id: "A00011", name: "順合" },
        { id: "A00012", name: "宏久" }, { id: "A00014", name: "東春" }, { id: "A00015", name: "中興" },
        { id: "A00018", name: "勝新" }, { id: "A00022", name: "富達" }, { id: "A00024", name: "鴻泰" },
        { id: "A00025", name: "冠陞" }, { id: "A00027", name: "中壢世豐" }, { id: "A00028", name: "信昌" },
        { id: "A00029", name: "金鼎" }, { id: "A00030", name: "壢昌" }, { id: "A00031", name: "眾南" },
        { id: "A00033", name: "良記" }, { id: "A00035", name: "順吉" }, { id: "A00036", name: "福合" },
        { id: "A00039", name: "興曜" }, { id: "A00043", name: "德霖" }, { id: "A00045", name: "協隆" },
        { id: "A00046", name: "敦揚" }, { id: "A00050", name: "慶誠" }, { id: "A00053", name: "嘉興" },
        { id: "A00054", name: "明德" }, { id: "A00057", name: "億芬" }, { id: "A00060", name: "木泉號" },
        { id: "A00061", name: "廣山" }, { id: "A00062", name: "正佳" }, { id: "A00066", name: "昇旻" },
        { id: "A00067", name: "成洲" }, { id: "A00068", name: "展慶" }, { id: "A00070", name: "聖泥" },
        { id: "A00071", name: "台揚" }, { id: "A00073", name: "雅山竹" }, { id: "A00074", name: "嘉麗雅" },
        { id: "A00075", name: "新協興" }, { id: "A00076", name: "秝鋒" }, { id: "A00078", name: "宸豐" },
        { id: "A00079", name: "金品" }, { id: "A00080", name: "八德世豐" }, { id: "A00081", name: "益慶" },
        { id: "A00082", name: "羚木" }, { id: "A00083", name: "崇泰" }, { id: "A00085", name: "華泰" },
        { id: "A00087", name: "世雅" }, { id: "A00088", name: "義興" }, { id: "A00090", name: "德立" },
        { id: "A00093", name: "坤英" }, { id: "A00096", name: "東鴻" }, { id: "A00099", name: "福豐" },
        { id: "A00101", name: "康宇" }, { id: "A00102", name: "元津" }, { id: "A00103", name: "朝新" },
        { id: "A00105", name: "唐德" }, { id: "A00107", name: "永興" }, { id: "A00109", name: "銪成" },
        { id: "A00111", name: "舜菖" }, { id: "A00112", name: "廣聯" }, { id: "A00113", name: "台騰" },
        { id: "A00115", name: "華興" }, { id: "A00119", name: "佳承" }, { id: "A00122", name: "中華" },
        { id: "A00127", name: "鈺加" }, { id: "A00128", name: "祈美" }, { id: "A00129", name: "永勝" },
        { id: "A00130", name: "喬云" }, { id: "A00131", name: "立山" }, { id: "A00134", name: "昱門" },
        { id: "A00136", name: "統一" }, { id: "A00137", name: "新竹永昌" }, { id: "A00138", name: "元亨" },
        { id: "A00139", name: "竹北" }, { id: "A00144", name: "勝利" }, { id: "A00146", name: "福展" },
        { id: "A00148", name: "竹駿" }, { id: "A00160", name: "青松" }, { id: "C00006", name: "李振吉" },
        { id: "C00082", name: "宜安" }, { id: "C00084", name: "詠昕" }, { id: "C00087", name: "昕育" },
        { id: "C00090", name: "王冠傑" }, { id: "C00101", name: "橙石" }, { id: "C00110", name: "一站材料" },
        { id: "C00111", name: "謝昌德" }, { id: "C00112", name: "耀澄" }, { id: "C00113", name: "聖儒" },
        { id: "D00011", name: "晟暉" }, { id: "D00019", name: "莊謹謙" }, { id: "D00020", name: "睿翔" },
        { id: "E00001", name: "鄭書銘大帥" }, { id: "E00008", name: "喬鴻" }, { id: "E00010", name: "詹勳杞" },
        { id: "E00017", name: "黎傳圓" }, { id: "E00018", name: "希望義工團" }, { id: "E00040", name: "歐道鈐" },
        { id: "E00148", name: "鵬程" },
        { id: "E00179", name: "新生木業" }, { id: "E00189", name: "佳美" }, { id: "E00204", name: "世豐木業" }
    ];

    const vendorModal = document.getElementById('vendorModal');
    const vendorInput = document.getElementById('vendorInput');
    const vendorDropdown = document.getElementById('vendorDropdown');
    const previewVendor = document.getElementById('preview-vendor');
    
    let currentHighlightIndex = -1;
    let filteredVendors = [];

    function openVendorModal() {
        if (!vendorModal) return;
        vendorModal.style.display = 'flex';
        let currentName = previewVendor.innerText.trim();
        if(currentName === '廠商名稱') currentName = '';
        vendorInput.value = currentName;
        vendorDropdown.style.display = 'none';
        
        setTimeout(() => {
            vendorInput.focus();
            vendorInput.select();
        }, 100);
    }

    function closeVendorModal(e) {
        if (!vendorModal) return;
        if(e && e.target !== vendorModal) return; 
        vendorModal.style.display = 'none';
    }

    function applyVendor() {
        if (!vendorInput || !previewVendor) return;
        const val = vendorInput.value.trim();
        if(val) {
            previewVendor.innerText = val;
        } else {
            previewVendor.innerText = '廠商名稱';
        }
        autoFitLeft(previewVendor);
        if (vendorModal) vendorModal.style.display = 'none';
    }

    if (vendorInput && vendorDropdown) {
        vendorInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            currentHighlightIndex = -1;
            
            if (!query) {
                vendorDropdown.style.display = 'none';
                return;
            }
            
            filteredVendors = vendorData.filter(v => 
                v.id.toLowerCase().includes(query) || v.name.toLowerCase().includes(query)
            );
            
            renderDropdown();
        });

        vendorInput.addEventListener('keydown', function(e) {
            const items = vendorDropdown.querySelectorAll('li');
            
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (vendorDropdown.style.display === 'block' && currentHighlightIndex < items.length - 1) {
                    currentHighlightIndex++;
                    updateHighlight();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (vendorDropdown.style.display === 'block' && currentHighlightIndex > 0) {
                    currentHighlightIndex--;
                    updateHighlight();
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (vendorDropdown.style.display === 'block' && currentHighlightIndex >= 0) {
                    vendorInput.value = filteredVendors[currentHighlightIndex].name;
                    vendorDropdown.style.display = 'none';
                    currentHighlightIndex = -1;
                } else {
                    applyVendor();
                }
            }
        });
    }

    function renderDropdown() {
        if (!vendorDropdown) return;
        if (filteredVendors.length === 0) {
            vendorDropdown.style.display = 'none';
            return;
        }
        
        vendorDropdown.innerHTML = '';
        filteredVendors.forEach((v, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${v.name}</span> <span class="vendor-id">${v.id}</span>`;
            
            li.onclick = () => {
                vendorInput.value = v.name;
                applyVendor();
            };
            
            li.onmouseenter = () => {
                currentHighlightIndex = index;
                updateHighlight();
            };
            
            vendorDropdown.appendChild(li);
        });
        vendorDropdown.style.display = 'block';
    }

    function updateHighlight() {
        if (!vendorDropdown) return;
        const items = vendorDropdown.querySelectorAll('li');
        items.forEach((item, index) => {
            if (index === currentHighlightIndex) {
                item.classList.add('active');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    const heightInput = document.getElementById('height');
    const widthInput = document.getElementById('width');
    const resultTai = document.getElementById('resultTai');
    const resultCm = document.getElementById('resultCm');
    const labelItem1 = document.getElementById('label-item-1');
    const labelItem2 = document.getElementById('label-item-2');
    const labelItem3 = document.getElementById('label-item-3');
    const batchListContainer = document.getElementById('batchListContainer');
    const batchCountTitle = document.getElementById('batch-count-title');
    const batchPrintContainer = document.getElementById('batch-print-container');

    let batchItems = [];
    let editIndex = -1; 

    function resetEditMode() {
        editIndex = -1;
        const btnAdd = document.querySelector('.btn-add');
        if (btnAdd) {
            btnAdd.innerText = '加入批次清單';
            btnAdd.style.backgroundColor = '#ff9500';
        }
    }

    function selectAllText(el) {
        if (el.dataset.isSelected === 'true') return;
        const selection = window.getSelection();
        if (!selection) return;
        const range = document.createRange();
        range.selectNodeContents(el);
        selection.removeAllRanges();
        selection.addRange(range);
        el.dataset.isSelected = 'true';
        el.addEventListener('blur', function onBlur() {
            el.dataset.isSelected = 'false';
            el.removeEventListener('blur', onBlur);
        });
    }

    function getCleanText(el) {
        return (el.innerText || '').replace(/\r?\n/g, '').trim();
    }

    function autoFit(el, defaultSize = 22) {
        if (!el) return '';
        let currentSize = defaultSize;
        el.style.fontSize = currentSize + 'px';
        while (
            (Math.ceil(el.scrollHeight) > Math.floor(el.clientHeight) + 1) ||
            (Math.ceil(el.scrollWidth) > Math.floor(el.clientWidth) + 1)
        ) {
            if (currentSize <= 6) break;
            currentSize -= 0.5;
            el.style.fontSize = currentSize + 'px';
        }
        return el.style.fontSize;
    }

    function autoFitLeft(el) { return autoFit(el, 40); }
    function autoFitRight(el) { return autoFit(el, 22); }

    function calculateTai(val) {
        let v = val * 3.3;
        let intV = Math.floor(v);
        let cond1 = Math.floor(v + 0.6) === intV + 1;
        let cond2 = Math.floor(v + 0.3) === intV + 1;
        if (cond1 && !cond2) return intV + 0.5;
        if (cond1 && cond2) return intV + 1;
        return intV;
    }

    function updateLabelKeepText(labelEl, newDim, isCm) {
        if (!labelEl) return;
        let currentText = (labelEl.innerText || '').replace(/\r?\n/g, '');
        let regex = isCm ? /^[\d.]+\s*\*\s*[\d.]+\s*cm/i : /^[\d.]+\s*\*\s*[\d.]+/;
        if (currentText.trim() === '') {
            labelEl.innerText = newDim;
        } else if (regex.test(currentText)) {
            labelEl.innerText = currentText.replace(regex, newDim);
        } else {
            labelEl.innerText = newDim + ' ' + currentText;
        }
    }

    function clearLabelDimension(labelEl, isCm) {
        if (!labelEl) return;
        let currentText = (labelEl.innerText || '').replace(/\r?\n/g, '');
        let regex = isCm ? /^[\d.]+\s*\*\s*[\d.]+\s*cm\s*/i : /^[\d.]+\s*\*\s*[\d.]+\s*/;
        labelEl.innerText = currentText.replace(regex, '');
    }

    function updateCalculations() {
        if (!heightInput || !widthInput) return;
        const hVal = parseFloat(heightInput.value);
        const wVal = parseFloat(widthInput.value);

        if (!isNaN(hVal) && !isNaN(wVal) && hVal > 0 && wVal > 0) {
            const taiStr = `${calculateTai(hVal)}*${calculateTai(wVal)}`;
            const cmStr = `${hVal}*${wVal}cm`;

            if (resultTai) resultTai.value = taiStr;
            if (resultCm) resultCm.value = cmStr;

            updateLabelKeepText(labelItem1, taiStr, false);
            updateLabelKeepText(labelItem3, cmStr, true);

            autoFitRight(labelItem1);
            autoFitRight(labelItem3);
        } else {
            if (resultTai) resultTai.value = '';
            if (resultCm) resultCm.value = '';

            clearLabelDimension(labelItem1, false);
            clearLabelDimension(labelItem3, true);

            autoFitRight(labelItem1);
            autoFitRight(labelItem3);
        }
    }

    function copyResult(elementId) {
        const targetInput = document.getElementById(elementId);
        if (!targetInput || !targetInput.value) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(targetInput.value).then(() => {
                clearSizeInputs();
            }).catch(() => {
                fallbackCopy(targetInput);
            });
        } else {
            fallbackCopy(targetInput);
        }
    }

    function fallbackCopy(targetInput) {
        targetInput.select();
        document.execCommand('copy');
        clearSizeInputs();
    }

    function clearSizeInputs() {
        if (heightInput) {
            heightInput.value = '';
            heightInput.focus();
        }
        if (widthInput) widthInput.value = '';
    }

    function handleManualEdit(el, fieldName) {
        autoFitRight(el);
    }

    function addToBatch() {
        const vendor = getCleanText(previewVendor);
        const line1 = getCleanText(labelItem1);
        const line2 = getCleanText(labelItem2);
        const line3 = getCleanText(labelItem3);

        if (!line1 && !line3) {
            alert('請先輸入有效的高與寬！');
            return;
        }

        const vendorFs = autoFitLeft(previewVendor);
        const line1Fs = autoFitRight(labelItem1);
        const line2Fs = autoFitRight(labelItem2);
        const line3Fs = autoFitRight(labelItem3);

        const newItem = {
            vendor: vendor || '廠商名稱',
            line1: line1,
            line2: line2,
            line3: line3,
            vendorFs: vendorFs,
            line1Fs: line1Fs,
            line2Fs: line2Fs,
            line3Fs: line3Fs,
            selected: false
        };

        if (editIndex !== -1) {
            batchItems[editIndex] = newItem;
            resetEditMode();
        } else {
            batchItems.push(newItem);
        }

        updateBatchUI();
        if (heightInput) heightInput.select();
    }

    function editBatchItem(index) {
        const item = batchItems[index];
        editIndex = index;

        if (previewVendor) previewVendor.innerText = item.vendor;
        if (labelItem1) labelItem1.innerText = item.line1;
        if (labelItem2) labelItem2.innerText = item.line2;
        if (labelItem3) labelItem3.innerText = item.line3;

        autoFitLeft(previewVendor);
        autoFitRight(labelItem1);
        autoFitRight(labelItem2);
        autoFitRight(labelItem3);

        if (heightInput) heightInput.value = '';
        if (widthInput) widthInput.value = '';
        if (resultTai) resultTai.value = '';
        if (resultCm) resultCm.value = '';

        const btnAdd = document.querySelector('.btn-add');
        if (btnAdd) {
            btnAdd.innerText = '儲存修改';
            btnAdd.style.backgroundColor = '#007aff';
        }
        
        updateBatchUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateBatchUI() {
        if (batchCountTitle) batchCountTitle.innerText = `待列印清單 (${batchItems.length} 張)`;
        if (!batchListContainer) return;

        const batchControls = document.getElementById('batch-controls');
        if (batchItems.length > 0) {
            batchControls.style.display = 'flex';
        } else {
            batchControls.style.display = 'none';
        }

        batchListContainer.innerHTML = '';
        batchItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = index === editIndex ? 'batch-item editing' : 'batch-item';

            const line2Display = item.line2 ? ` / ${item.line2}` : '';
            const isChecked = item.selected ? 'checked' : '';

            div.innerHTML = `
                <div style="display:flex; align-items:flex-start; gap:15px; flex:1 1 auto; min-width:0; overflow:visible;">
                    <input type="checkbox" class="batch-checkbox" ${isChecked} onchange="toggleItemSelection(${index}, this)">
                    <span class="batch-item-text">
                        #${index + 1}
                        [${escapeHtml(item.vendor)}]
                        ${escapeHtml(item.line1)}
                        ${line2Display}
                        /
                        ${escapeHtml(item.line3)}
                    </span>
                </div>
                <div class="batch-item-actions">
                    <button class="btn-edit" onclick="editBatchItem(${index})" title="載入上方預覽區編輯">編輯</button>
                    <button class="btn-remove" onclick="removeBatchItem(${index})" title="刪除這張">✕</button>
                </div>
            `;
            batchListContainer.appendChild(div);
        });
        updateSelectAllStatus();
    }

    function toggleSelectAll(checkbox) {
        batchItems.forEach(item => item.selected = checkbox.checked);
        updateBatchUI();
    }

    function toggleItemSelection(index, checkbox) {
        batchItems[index].selected = checkbox.checked;
        updateSelectAllStatus();
    }

    function updateSelectAllStatus() {
        const selectAllCb = document.getElementById('selectAllCheckbox');
        if (!selectAllCb) return;
        selectAllCb.checked = batchItems.length > 0 && batchItems.every(item => item.selected);
    }

    function applyToSelected() {
        const selectedItems = batchItems.filter(item => item.selected);
        if (selectedItems.length === 0) {
            alert('請先勾選清單中要修改的標籤！');
            return;
        }

        const newVendor = getCleanText(previewVendor) || '廠商名稱';
        const newVendorFs = autoFitLeft(previewVendor);
        const newLine2 = getCleanText(labelItem2);
        const newLine2Fs = autoFitRight(labelItem2);

        const currentL1 = getCleanText(labelItem1);
        const currentL3 = getCleanText(labelItem3);
        
        const taiRegex = /^[\d.]+\s*\*\s*[\d.]+\s*/;
        const cmRegex = /^[\d.]+\s*\*\s*[\d.]+\s*cm\s*/i;
        
        const attachL1 = currentL1.replace(taiRegex, '').trim();
        const attachL3 = currentL3.replace(cmRegex, '').trim();

        batchItems.forEach(item => {
            if (item.selected) {
                item.vendor = newVendor;
                item.vendorFs = newVendorFs;
                item.line2 = newLine2;
                item.line2Fs = newLine2Fs;

                const origDimL1 = item.line1.match(taiRegex) ? item.line1.match(taiRegex)[0].trim() : '';
                item.line1 = attachL1 ? `${origDimL1} ${attachL1}`.trim() : origDimL1;
                
                const origDimL3 = item.line3.match(cmRegex) ? item.line3.match(cmRegex)[0].trim() : '';
                item.line3 = attachL3 ? `${origDimL3} ${attachL3}`.trim() : origDimL3;
                
                item.selected = false;
            }
        });

        updateBatchUI();
    }

    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function removeBatchItem(index) {
        if (index < 0 || index >= batchItems.length) return;
        batchItems.splice(index, 1);
        
        if (editIndex === index) {
            resetEditMode();
        } else if (editIndex > index) {
            editIndex--;
        }
        updateBatchUI();
    }

    function clearBatch() {
        if (batchItems.length === 0) return;
        batchItems = [];
        resetEditMode();
        updateBatchUI();
    }

    function createPrintPage(item) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'print-page';

        const labelGrid = document.createElement('div');
        labelGrid.className = 'label-grid';

        const vendorCell = document.createElement('div');
        vendorCell.className = 'grid-cell col-left';
        const vendorText = document.createElement('div');
        vendorText.className = 'auto-fit-left';
        vendorText.style.fontSize = item.vendorFs || '16px';
        vendorText.textContent = item.vendor || '廠商名稱';
        vendorCell.appendChild(vendorText);

        const line1Cell = document.createElement('div');
        line1Cell.className = 'grid-cell';
        const line1Text = document.createElement('div');
        line1Text.className = 'auto-fit-right';
        line1Text.style.fontSize = item.line1Fs || '22px';
        line1Text.textContent = item.line1 || '';
        line1Cell.appendChild(line1Text);

        const line2Cell = document.createElement('div');
        line2Cell.className = 'grid-cell';
        const line2Text = document.createElement('div');
        line2Text.className = 'auto-fit-right';
        line2Text.style.fontSize = item.line2Fs || '22px';
        line2Text.textContent = item.line2 || '';
        line2Cell.appendChild(line2Text);

        const line3Cell = document.createElement('div');
        line3Cell.className = 'grid-cell';
        const line3Text = document.createElement('div');
        line3Text.className = 'auto-fit-right';
        line3Text.style.fontSize = item.line3Fs || '22px';
        line3Text.textContent = item.line3 || '';
        line3Cell.appendChild(line3Text);

        labelGrid.appendChild(vendorCell);
        labelGrid.appendChild(line1Cell);
        labelGrid.appendChild(line2Cell);
        labelGrid.appendChild(line3Cell);
        
        pageDiv.appendChild(labelGrid);
        return pageDiv;
    }

    function printSingle() {
        if (!batchPrintContainer) return;
        batchPrintContainer.innerHTML = '';

        const vendorText = getCleanText(previewVendor) || '廠商名稱';
        const item = {
            vendor: vendorText,
            line1: getCleanText(labelItem1),
            line2: getCleanText(labelItem2),
            line3: getCleanText(labelItem3),
            vendorFs: autoFitLeft(previewVendor),
            line1Fs: autoFitRight(labelItem1),
            line2Fs: autoFitRight(labelItem2),
            line3Fs: autoFitRight(labelItem3)
        };

        if (!item.line1 && !item.line2 && !item.line3) {
            alert('目前沒有可列印的標籤內容！');
            return;
        }

        const pageDiv = createPrintPage(item);
        batchPrintContainer.appendChild(pageDiv);
        document.title = vendorText;
        window.print();
    }

    function printBatch() {
        if (batchItems.length === 0) {
            alert('目前清單是空的！');
            return;
        }
        if (!batchPrintContainer) return;
        batchPrintContainer.innerHTML = '';

        batchItems.forEach(item => {
            const pageDiv = createPrintPage(item);
            batchPrintContainer.appendChild(pageDiv);
        });

        const vendorSet = new Set(batchItems.map(item => item.vendor));
        let printTitle = 'cm 標籤';
        if (vendorSet.size === 1) {
            printTitle = batchItems[0].vendor + '_批次標籤';
        } else {
            printTitle = '多廠商_批次標籤';
        }
        
        document.title = printTitle;
        window.print();
    }

    if (heightInput) heightInput.addEventListener('input', updateCalculations);
    if (widthInput) widthInput.addEventListener('input', updateCalculations);

    const printArea = document.getElementById('print-area');
    if (printArea) {
        function updatePreviewScale() {
        const container = document.querySelector('.label-preview-container');
        const wrapper = document.querySelector('.preview-scale-wrapper');
        const printArea = document.getElementById('print-area');
        if (!container || !wrapper || !printArea) return;

        // 以未縮放的 62mm 寬度為基準，視左側可用寬度自動縮放，
        // 最大維持原本 3 倍，避免預覽區產生水平捲軸。
        const baseWidth = printArea.offsetWidth;
        const baseHeight = printArea.offsetHeight;
        const availableWidth = Math.max(1, container.clientWidth - 8);
        const scale = Math.min(3, availableWidth / baseWidth);

        printArea.style.setProperty('--preview-scale', scale);
        wrapper.style.width = `${baseWidth * scale}px`;
        wrapper.style.height = `${baseHeight * scale}px`;
    }

    const resizeObserver = new ResizeObserver(() => {
            autoFitLeft(previewVendor);
            autoFitRight(labelItem1);
            autoFitRight(labelItem2);
            autoFitRight(labelItem3);
        });
        resizeObserver.observe(printArea);
    }

    setTimeout(() => {
        updatePreviewScale();
        autoFitLeft(previewVendor);
        autoFitRight(labelItem1);
        autoFitRight(labelItem2);
        autoFitRight(labelItem3);
    }, 50);

    window.addEventListener('afterprint', () => {
        if (batchPrintContainer) batchPrintContainer.innerHTML = '';
        document.title = 'cm 標籤';
    });
    // 禁止所有數字輸入框在使用滑鼠滾輪時改變數值
// 禁止所有數字輸入框在使用滑鼠滾輪時改變數值
document.addEventListener('wheel', function (event) {
    if (document.activeElement.type === 'number') {
        document.activeElement.blur(); // 讓輸入框暫時失去焦點，防止數值被滾動改變
    }
}, { passive: false });

// ====== 以下為新增：接收 Python 傳遞的網址參數並自動執行 ======
// ====== 以下為新增：接收 Python 傳遞的網址參數並自動執行 ======
window.addEventListener('DOMContentLoaded', () => {
    // 1. 取得網址中的 ?data=...
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    
    // 如果網址裡面有資料，就開始執行自動填寫
    if (dataParam) {
        try {
            // 解碼並還原成 JSON 物件
            const parsedData = JSON.parse(decodeURIComponent(dataParam));
            console.log("成功接收到 AI 辨識資料:", parsedData); // 可以在 F12 開發者工具看到
            
            const customerCode = parsedData.customer_code;
            const items = parsedData.items;

            const previewVendor = document.getElementById('preview-vendor');
            const heightInput = document.getElementById('height');
            const widthInput = document.getElementById('width');

            // 2. 自動比對客戶代號與廠商名稱
            if (customerCode && previewVendor) {
                // 在 vendorData 陣列中尋找對應的 ID (忽略大小寫)
                const vendorMatch = vendorData.find(v => v.id.toUpperCase() === customerCode.toUpperCase());
                
                if (vendorMatch) {
                    previewVendor.innerText = vendorMatch.name; // 填入中文名稱 (例如: 正豐)
                } else {
                    previewVendor.innerText = customerCode;     // 若查無此人，直接顯示代碼
                }
                autoFitLeft(previewVendor); // 自動調整字體大小
            }

            // 3. 逐筆處理擷取到的尺寸
            if (items && items.length > 0) {
                items.forEach(item => {
                    if (item.height && item.width && heightInput && widthInput) {
                        // 填入長寬輸入框
                        heightInput.value = item.height;
                        widthInput.value = item.width;
                        
                        // 觸發你原本寫好的換算邏輯與預覽更新
                        updateCalculations();
                        
                        // 判斷數量 (若 AI 沒抓到則預設為 1)
                        const qty = parseInt(item.qty) || 1;
                        
                        // 根據數量跑迴圈，自動加入批次清單
                        for (let i = 0; i < qty; i++) {
                            addToBatch();
                        }
                    }
                });

                // 4. (可選) 處理完畢後，把網址列的參數清空
                // 這樣可以避免你不小心按 F5 重新整理網頁時，資料又被重複加入一次
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        } catch (error) {
            console.error("解析網址資料失敗:", error);
            alert("自動填表失敗，資料格式可能有誤！請按 F12 檢查。");
        }
    }
});

