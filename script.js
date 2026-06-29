const dataFokontany = {
    "csb_ambahy": ["Ambahy", "Ambodivandraka", "Ambodisandroy", "Ampiakarana", "Ampasimaneva", "Analanolona", "Fenoarivo", "Maromby", "Sahorana"],
    "csb_andara": ["Ambodimanga", "Ambodirotra", "Ampasimbola ADR", "Andranohambana", "Andara", "Ankaranambo", "Maintimbato", "Sahatsindra"],
    "csb_ampahomanitra": ["Ambodiaramy", "Ambodisana", "Ampahomanitra", "Fenovarivo Ambazato", "Masindranokely"],
    "csb_androrangavola": ["Ambalafarihy", "Ambalakafe", "Ambatoinasina II", "Ambodimanga IV", "Analila", "Androrangavola", "Antanandava", "Antanandehibe", "Sandranamba", "Vohimasina II"],
    "csb_sahavato": ["Ambatobe II", "Ambatomivarina", "Ambatovina", "Ambavan'isahavato", "Ambazato", "Ambodihasina I", "Ambodimanga I", "Ambodiroranga", "Ambodivandrika", "Ampasimaniona", "Ampasimazava", "Ampirambo", "Ampitamalandy", "Ampitsahambe", "Andibodiboka", "Andranokopy", "Andranotsara I", "Befotaka", "Lakamandrorona", "Malimalina", "Manakana I shvt", "Morarano", "Niarovana", "Sahanoa", "Sahapiana", "Vohitromby", "Vazahalava"],
    "csb_tsararivotra": ["Ambinany Sakaleona", "Andonaka", "Bebozaka", "Ifasina", "Mahafitodika", "Mandanivatsy", "Sahafary", "Sahabe", "Tanambao Berano", "Tanambao V", "Tsararivotra"],
    "csb_ambodiriana": ["Ambalafatakana", "Ambohitsara", "Ambodiarama 2", "Ambodirian'i Sahafary", "Ambodiroranga ABDS", "Ampitabe ABDS", "Ampanasana", "Ampandrana", "Antanambao sahafany", "Manakana", "Manandriana", "Marofaria", "Menagisy", "Sahanikasy", "Vohimaro"],
    "csb_andranomavo": ["Andranomavo", "TSARAHONENANA ADMV", "Ambohimirtika", "Ambatoharanana", "Ampanasana"],
    "csb_fanivelona": ["Ambalafamafa", "Andranomahitsy", "Ambohimahasoa", "Ankosilamba", "Antanambao 1", "Antanambao", "Fanivelona", "Mahatsinjo", "Sahandrotra", "Saherana", "Sarina I", "Sarina II"],
    "csb_fiadanana": ["Ambalahady", "Ambalamanasa", "Ambarisasy", "Ambatoato", "Analamarina", "Andonaka FDN", "Andranomahita", "Andranotsara", "Fiadanana", "Fihaonana", "Mahadio", "Mahatsara 1", "Manakana FDN", "Sakalava", "Tanatrambana", "Tsarahonenana FDN", "Vohitromby FDN"],
    "csb_ambakobe": ["Ambakobe", "Ambodimanga abkb", "Ampasinambo abkb", "Bekazaha", "Maroatova", "Sahamahitsy", "Sahamanerana", "Sakafotsy"],
    "csb_mandroromody": ["Ambatoseza", "Manakana mdrm", "Mandroromody", "Morarano I"],
    "csb_vohidroa": ["Ambalafary", "Ambinanindrano vhd", "Ambohitsara vhd", "Anivorano vhd", "Mijazahatsara", "Tsaravinany Vhdr", "Vohidroa", "Vohitsara"],
    "csb_vohilava": ["Ambandrika", "Ambodibakoly vhlk", "Amboditavla", "Fenoarivo vhlk", "Mahatsara", "Vohilava", "Vohipahy", "Vohitromby vhlk"],
    "csb_vohitrandriana": ["Ambatolampy", "Ambinanindrano VHTR", "Ambodihara VHTR", "Ambohipeno VHTR", "Andapa VHTR", "Androrangavola VHTR", "Mahafitelsika VHTR", "Mahajanjina", "Malazamasina", "Marosika VHTR", "Morarano II", "Tanambao I VHTR", "Tsarahonenana VHTR", "Tsaramilakatra", "Vohidamba", "Vohitrandriana", "Vohitrarivo"],
    "csb_ambalakondro": ["Ambalakondro", "Ambalavia", "Ambinanihafotra", "Ambodilafakely abkd", "Andapa", "Mahadonaka abkd", "Marofototra", "Vohimena"],
    "csb_ambodilafa": ["Ambalahasina", "Ambinanitranomaro", "Ambodilafa", "Ambodimanga ablf", "Ambohitsara ablf", "Ampasimbola ablf", "Andohalobe", "Antanambao ablf", "Antanjomanga ablf", "Farafasina", "Marovato", "Sakambatobe", "Tsaravinany ablf", "Vohimasina I"],
    "csb_ampasimbola": ["Ambodivoahangy apsbl", "Ambohimaza apsbl", "Ampasimbola apsbl", "Analamazava I", "Ampasimanina SVN", "Ampitabe I svn", "Ampitamalandy svn", "Andranobe I", "Betampona svn", "Manakana I svn", "Maroharata svn", "Marovato II", "Sahamahitsy I", "Sahandrarezina", "Sahanimborona", "Tsaralazaina", "Vohibola", "Vohidahy"],
    "csb_soavina": ["Ambalavero II", "Ambaninambato", "Ambodibakoly svn", "Ambohimanga ablf", "Marosika apsbl", "Vohijanahary"],
    "csb_ambodiara": ["Ambatoharanana abdr", "Ambodiara", "Ambodilafakely abdr", "Marosakaiza", "Tanambao I abdr", "Vohimasina", "Vohitromby abds"],
    "csb_ambodivoahangy": ["Ambalatenina", "Ambodivoahangy", "Ambohinihaonana", "Ampasimadinika abdvg"],
    "csb_ampasinambo": ["Ambalahasina aps", "Ambalatenina Sud", "Ambodilafakely amps", "Ambohimaza amps", "Ampasinambo", "Lavakianja Est", "Sahandraty", "Vatoatody"],
    "csb_angodongodona": ["Ambinanindrano I agdg", "Ambinanindrano II", "Ambohitsara IV", "Ampasimadinika IV", "Angodongodona", "Antrobaka", "Morafeno", "Tsaraseranana"],
    "csb_anivorano": ["Ampasimbola anv", "Androrangavola anv", "Anivorano I", "Mahadonaka anv"],
    "csb_antanambao": ["Ambodiriana atb", "Ambohitsara atb", "Androrangavola atb", "Ankerana", "Antanambao I", "Antanjomanga tmbao", "Mahatsara atb"],
    "csb_befody": ["Ambalakafe bfd", "Ambodinambalo", "Ambodinonoka", "Ambodipaiso", "Ambohimilanja", "Ambohipeno bfd", "Ampasimbola bfd", "Analamarina bfd", "Andrambotsivelezina", "Befody", "Mahatsara bfd", "Vohitrarivo bfd"]
};

// Prix unitaires fixes des médicaments (PU en Ariary)
const PRIX_UNITAIRES = {
    amox: 76,
    para: 50,
    sro: 487,
    zinc: 70
};

// ==========================================================================
// 1. GENERATION DYNAMIQUE DES LISTES ET DE LA FACTURE PIVOT
// ==========================================================================
window.chargerFokontany = function() {
    const csbSelect = document.getElementById("csb-select");
    const fktSelect = document.getElementById("fokontany-select");
    const tbodyInvoice = document.getElementById("invoice-rows-container");
    
    if (!csbSelect) return;
    
    const csbSelectionne = csbSelect.value;
    const nomCsbPropre = csbSelect.options[csbSelect.selectedIndex]?.text || "";

    if (fktSelect) {
        fktSelect.innerHTML = '<option value="">-- Sélectionnez un fokontany --</option>';
    }

    if (tbodyInvoice) {
        tbodyInvoice.innerHTML = "";
    }

    if (csbSelectionne && dataFokontany[csbSelectionne]) {
        if (fktSelect) fktSelect.disabled = false;
        
        dataFokontany[csbSelectionne].forEach(function(fokontany, index) {
            if (fktSelect) {
                let option = document.createElement("option");
                option.value = fokontany.toLowerCase().replace(/[^a-z0-9]/g, "_");
                option.textContent = fokontany;
                fktSelect.appendChild(option);
            }

            if (tbodyInvoice) {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${nomCsbPropre}</td>
                    <td style="text-align: left;"><strong>${fokontany}</strong></td>
                    <td><input type="number" name="inv_amox_${index}" value="0" min="0"></td>
                    <td><input type="number" name="inv_para_${index}" value="0" min="0"></td>
                    <td><input type="number" name="inv_sro_${index}" value="0" min="0"></td>
                    <td><input type="number" name="inv_zinc_${index}" value="0" min="0"></td>
                    <td id="val_amox_${index}">0</td>
                    <td id="val_para_${index}">0</td>
                    <td id="val_sro_${index}">0</td>
                    <td id="val_zinc_${index}">0</td>
                    <td id="total_row_${index}" style="font-weight:bold;">0</td>
                    <td id="marge_row_${index}" style="color:green;">0</td>
                `;
                tbodyInvoice.appendChild(row);
            }
        });
        
        preRemplirDepuisTabilao9();
    } else {
        if (fktSelect) {
            fktSelect.disabled = true;
            fktSelect.innerHTML = '<option value="">-- Choisissez d\'abord un CSB --</option>';
        }
    }
};

// Préremplissage de la première ligne de la facture à partir des sorties globales du Tableau 9
function preRemplirDepuisTabilao9() {
    const valAmoxD = parseInt(document.querySelector('input[name="t9_amox_d"]')?.value) || 0;
    const valParaD = parseInt(document.querySelector('input[name="t9_para500_d"]')?.value) || 0;
    const valSroD = parseInt(document.querySelector('input[name="t9_sro_d"]')?.value) || 0;
    const valZincD = parseInt(document.querySelector('input[name="t9_zinc_d"]')?.value) || 0;

    const inputAmox0 = document.querySelector('input[name="inv_amox_0"]');
    const inputPara0 = document.querySelector('input[name="inv_para_0"]');
    const inputSro0 = document.querySelector('input[name="inv_sro_0"]');
    const inputZinc0 = document.querySelector('input[name="inv_zinc_0"]');

    if (inputAmox0) inputAmox0.value = valAmoxD;
    if (inputPara0) inputPara0.value = valParaD;
    if (inputSro0) inputSro0.value = valSroD;
    if (inputZinc0) inputZinc0.value = valZincD;

    if (typeof window.calculerFacturePivot === "function") {
        window.calculerFacturePivot();
    }
}

// ==========================================================================
// 2. LOGIQUE DE CALCUL ET VALIDATION DES TABLEAUX
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (!form) return;
    
    let errorContainer = document.getElementById("global-error-message");
    if (!errorContainer) {
        errorContainer = document.createElement("div");
        errorContainer.className = "error-message-toast";
        errorContainer.id = "global-error-message";
        form.insertBefore(errorContainer, form.firstChild);
    }

    // Calcul dynamique de la facture (Prestations et montants en Ariary)
    window.calculerFacturePivot = function() {
        const csbSelect = document.getElementById("csb-select");
        if (!csbSelect || !csbSelect.value) return;

        const countFkt = dataFokontany[csbSelect.value].length;
        
        let sumNbAmox = 0, sumNbPara = 0, sumNbSro = 0, sumNbZinc = 0;
        let sumValAmox = 0, sumValPara = 0, sumValSro = 0, sumValZinc = 0;
        let grandTotal = 0, grandMarge = 0;

        for (let i = 0; i < countFkt; i++) {
            const nbAmox = parseInt(document.querySelector(`input[name="inv_amox_${i}"]`)?.value) || 0;
            const nbPara = parseInt(document.querySelector(`input[name="inv_para_${i}"]`)?.value) || 0;
            const nbSro = parseInt(document.querySelector(`input[name="inv_sro_${i}"]`)?.value) || 0;
            const nbZinc = parseInt(document.querySelector(`input[name="inv_zinc_${i}"]`)?.value) || 0;

            // Calcul automatique basé sur les prix unitaires réels définis
            const vAmox = nbAmox * PRIX_UNITAIRES.amox;
            const vPara = nbPara * PRIX_UNITAIRES.para;
            const vSRO = nbSro * PRIX_UNITAIRES.sro;
            const vZinc = nbZinc * PRIX_UNITAIRES.zinc;

            const totalLigne = vAmox + vPara + vSRO + vZinc;
            const margeLigne = Math.round(totalLigne * 0.27); 

            const elValAmox = document.getElementById(`val_amox_${i}`);
            const elValPara = document.getElementById(`val_para_${i}`);
            const elValSro = document.getElementById(`val_sro_${i}`);
            const elValZinc = document.getElementById(`val_zinc_${i}`);
            const elTotalRow = document.getElementById(`total_row_${i}`);
            const elMargeRow = document.getElementById(`marge_row_${i}`);

            if (elValAmox) elValAmox.textContent = vAmox;
            if (elValPara) elValPara.textContent = vPara;
            if (elValSro) elValSro.textContent = vSRO;
            if (elValZinc) elValZinc.textContent = vZinc;
            if (elTotalRow) elTotalRow.textContent = totalLigne;
            if (elMargeRow) elMargeRow.textContent = margeLigne;

            sumNbAmox += nbAmox; sumNbPara += nbPara; sumNbSro += nbSro; sumNbZinc += nbZinc;
            sumValAmox += vAmox; sumValPara += vPara; sumValSro += vSRO; sumValZinc += vZinc;
            grandTotal += totalLigne; grandMarge += margeLigne;
        }

        const elTNbAmox = document.getElementById("total-nb-amox");
        const elTNbPara = document.getElementById("total-nb-para");
        const elTNbSro = document.getElementById("total-nb-sro");
        const elTNbZinc = document.getElementById("total-nb-zinc");
        const elTValAmox = document.getElementById("total-val-amox");
        const elTValPara = document.getElementById("total-val-para");
        const elTValSro = document.getElementById("total-val-sro");
        const elTValZinc = document.getElementById("total-val-zinc");
        const elTInvGlobal = document.getElementById("total-invoice-global");
        const elTMargeGlobal = document.getElementById("total-marge-global");

        if (elTNbAmox) elTNbAmox.textContent = sumNbAmox;
        if (elTNbPara) elTNbPara.textContent = sumNbPara;
        if (elTNbSro) elTNbSro.textContent = sumNbSro;
        if (elTNbZinc) elTNbZinc.textContent = sumNbZinc;
        if (elTValAmox) elTValAmox.textContent = sumValAmox;
        if (elTValPara) elTValPara.textContent = sumValPara;
        if (elTValSro) elTValSro.textContent = sumValSro;
        if (elTValZinc) elTValZinc.textContent = sumValZinc;
        if (elTInvGlobal) elTInvGlobal.textContent = grandTotal;
        if (elTMargeGlobal) elTMargeGlobal.textContent = grandMarge;
    };

    // Écouteur global pour intercepter les saisies sur le formulaire
    form.addEventListener("input", function(e) {
        const targetName = e.target.name;
        if (!targetName) return;

        // Si le Tableau 9 "Isan'ny nivoaka" (_d) change, on pré-remplit la facture et on la recalcule
        if (targetName === "t9_amox_d" || targetName === "t9_para500_d" || targetName === "t9_sro_d" || targetName === "t9_zinc_d") {
            preRemplirDepuisTabilao9();
        }

        if (targetName.startsWith("inv_")) {
            window.calculerFacturePivot();
        }
    });

    const colonnesT5 = ["inf2_l", "inf2_v", "2to11_l", "2to11_v", "1to5_l", "1to5_v", "6to13_l", "6to13_v"];
    const produitsT9 = ["coc", "cop", "depo", "sayana", "condom", "rojo", "pregtest", "miso", "sp", "chx", "faf", "asaq_inf1", "asaq_1to5", "asaq_6to13", "rdt", "art", "moust", "amox", "para500", "para100", "zinc", "sro", "asaq14", "sureau", "plumpy"];

    function verifierConditionT5(inputSup, inputSub) {
        if (!inputSub) return true;
        const valSup = inputSup ? (parseInt(inputSup.value) || 0) : 0;
        const valSub = parseInt(inputSub.value) || 0;
        if (valSub > valSup) { inputSub.classList.add("input-error"); return false; }
        else { inputSub.classList.remove("input-error"); return true; }
    }

    function validerTabilao5() {
        let t5Valid = true;
        colonnesT5.forEach(col => {
            const l1 = document.querySelector(`input[name="t5_l1_${col}"]`);
            const l2 = document.querySelector(`input[name="t5_l2_${col}"]`);
            const l3 = document.querySelector(`input[name="t5_l3_${col}"]`);
            const l4 = document.querySelector(`input[name="t5_l4_${col}"]`);
            const l5 = document.querySelector(`input[name="t5_l5_${col}"]`);
            const l6 = document.querySelector(`input[name="t5_l6_${col}"]`);
            const l7 = document.querySelector(`input[name="t5_l7_${col}"]`);
            const l8 = document.querySelector(`input[name="t5_l8_${col}"]`);
            const l10 = document.querySelector(`input[name="t5_l10_${col}"]`);
            const l11 = document.querySelector(`input[name="t5_l11_${col}"]`);
            const l12 = document.querySelector(`input[name="t5_l12_${col}"]`);
            const l13 = document.querySelector(`input[name="t5_l13_${col}"]`);

            if (!verifierConditionT5(l1, l2)) t5Valid = false;
            if (!verifierConditionT5(l2, l3)) t5Valid = false;
            if (!verifierConditionT5(l3, l4)) t5Valid = false;
            if (!verifierConditionT5(l4, l5)) t5Valid = false;
            if (!verifierConditionT5(l4, l6)) t5Valid = false;
            if (!verifierConditionT5(l1, l7)) t5Valid = false;
            if (!verifierConditionT5(l7, l8)) t5Valid = false;
            if (!verifierConditionT5(l1, l10)) t5Valid = false;
            if (!verifierConditionT5(l10, l11)) t5Valid = false;
            if (!verifierConditionT5(l1, l12)) t5Valid = false;
            if (!verifierConditionT5(l12, l13)) t5Valid = false;
        });
        return t5Valid;
    }

    function calculerEtValiderTabilao9() {
        let t9Valid = true;
        produitsT9.forEach(prod => {
            const a = parseInt(document.querySelector(`input[name="t9_${prod}_a"]`)?.value) || 0;
            const b = parseInt(document.querySelector(`input[name="t9_${prod}_b"]`)?.value) || 0;
            const d = parseInt(document.querySelector(`input[name="t9_${prod}_d"]`)?.value) || 0;
            const e = parseInt(document.querySelector(`input[name="t9_${prod}_e"]`)?.value) || 0;
            const inputF = document.querySelector(`input[name="t9_${prod}_f"]`);

            if (!inputF) return;
            const f = (a + b) - (d + e);
            inputF.value = f;

            if (f < 0) { inputF.classList.add("input-error"); t9Valid = false; }
            else { inputF.classList.remove("input-error"); }
        });
        return t9Valid;
    }

    form.addEventListener("input", function(e) {
        if (e.target.name && (e.target.name.startsWith("t5_") || e.target.name.startsWith("t9_"))) {
            const t5Ok = validerTabilao5();
            const t9Ok = calculerEtValiderTabilao9();
            if (!t5Ok || !t9Ok) {
                errorContainer.textContent = "⚠️ Incohérence détectée dans le Tabilao 5 ou stock négatif dans le Tabilao 9 !";
                errorContainer.style.display = "block";
            } else {
                errorContainer.style.display = "none";
            }
        }
    });
});