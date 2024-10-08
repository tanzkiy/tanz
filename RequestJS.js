function toggleSpecification() {
    const purposeSelect = document.getElementById('purpose');
    const specificationInput = document.getElementById('specification');
    const scholarshipInput = document.getElementById('scholarshipType');
    

    specificationInput.style.display = 'none';
    scholarshipInput.style.display = 'none';
    

    if (purposeSelect.value === 'Others') {
        specificationInput.style.display = 'block';  
    }
    
    
    if (purposeSelect.value === 'Scholarship') {
        scholarshipInput.style.display = 'block'; 
    }
}

let othercert = document.getElementById('otherCertification');
function showOtherCert(){
    if (othercert.style.display == 'none'){
        othercert.style.display = 'flex';
        othercert.style.marginLeft = '5%'
    }
    else{
        othercert.style.display = 'none';
    }
}
/*---------------------------------------------------------------------------------------------------*/
let greeting = document.getElementById('nostyle');
const studID = document.getElementById('studentID');

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('sex_error').textContent = '';
    document.getElementById('dc_error').textContent = '';
    document.getElementById('contact_error').textContent = '';
    document.getElementById('pe_error').textContent = '';
    document.getElementById('p_error').textContent = '';
}

function validateStudentID() {
    const studID = document.getElementById('studentID').value.trim();
    const idError = document.getElementById('IDError');
    let isValid = true
    idError.textContent = '';

    if (studID === '') {
        idError.textContent = 'Please enter your ID.';
        isValid = false;
    } else if (studID.length < 7) {
        idError.textContent = 'ID should be 7 digits long.';
        isValid = false;
    } else if (!/^[0-9]+$/.test(studID)) {
        idError.textContent = 'Numbers only.';
        isValid = false;
    }

    return isValid;
}

function form_validation() {
    
    clearErrors();
    
    //inputs
    const stud_name = document.getElementById('name').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const male = document.getElementById('Male').checked;
    const female = document.getElementById('Female').checked;
    const enroll_yes = document.getElementById('Yes enrolled').checked;
    const enroll_no = document.getElementById('No enrolled').checked;
    const degree = document.getElementById('degCorYr').value.trim();
    const term = document.getElementById('term1').value;
    const year1 = document.getElementById('schoolYear').value.trim();
    const year2 = document.getElementById('schoolYear').value.trim();
    const purposeSelect = document.getElementById('purpose').value.trim();
    const specificationInput = document.getElementById('specification').value.trim();
    const scholarshipInput = document.getElementById('scholarshipType').value.trim();
    
    
    let isValid = true;

    // Error messages
    const n_error = document.getElementById('nameError');
    const s_error = document.getElementById('sex_error');
    const dc_error = document.getElementById('dc_error');
    const cont_error = document.getElementById('contact_error');
    const pe_error = document.getElementById('pe_error');
    const purpose_error = document.getElementById('p_error');

    // Name 
    if (stud_name === '') {
        n_error.textContent = 'Name required';
        isValid = false;
    } else if (!/^[a-zA-Z\s,'-]+$/.test(stud_name)) {
        n_error.textContent = 'Letters only';
        isValid = false;
    }

    // Sex 
    if (!male && !female) {
        s_error.textContent = 'Field required';
        isValid = false;
    }

    // Degree/Course 
    if (degree === '') {
        dc_error.textContent = 'Field required';
        isValid = false;
    }

    // Contact number 
    if (contactNumber === '') {
        cont_error.textContent = 'Field required';
        isValid = false;
    } else if (!/^[0-9]{10,11}$/.test(contactNumber)) {
        cont_error.textContent = 'Please enter a valid contact number (10-11 digits).';
        isValid = false;
    }

    // Enrollment 
    if (!enroll_yes && !enroll_no) {
        pe_error.textContent = 'Field required';
        isValid = false;
    }
    
    // Last Term Attended 
    if (term === "0" || year1 === "" || year2 === "" || !/^\d{4}$/.test(year1) || !/^\d{4}$/.test(year2)) {
        alert("Please select the last term attended and provide a valid school year (e.g., 2023-2024).");
        isValid = false;
    }

    // Purpose 
    if (purposeSelect === " " || purposeSelect === "") {
        purpose_error.textContent = "Please select a purpose.";
        isValid = false;
    }  
    if (purposeSelect === 'Others' && specificationInput === "") {
        purpose_error.textContent = 'Please specify your purpose.';
        isValid = false;
    }  
    if (purposeSelect === 'Scholarship' && scholarshipInput === "") {
        purpose_error.textContent = 'Please specify the Scholarship Type.';
        isValid = false;
    }

    return isValid;
}


const pages = ["Login_Page", "Student_Info_Page", "Request_form", "Fees_assess_form"];
const page1 = document.getElementById("Login_Page");
const page2 = document.getElementById("Student_Info_Page");
const page3 = document.getElementById("Request_form");
const page4 = document.getElementById("Fees_assess_form");

function nextPage(page){
    
    if (page == pages[0]/* && validateStudentID()*/){
        page1.style.display = 'none';
        page2.style.display = 'flex';
        greeting.textContent ='HELLO #' + studID.value;
        page2.style.placeContent = 'center';
        page2.style.marginTop = '8%'
    }
    

    
    if (page == pages[1] && form_validation()){
        page2.style.display = 'none';
        page3.style.display = 'flex';
    }
    

    if(page == pages[2]){
        page3.style.display = 'none';
        page4.style.display = 'flex';
    }
 
}
function backPage(page){
    if (page == pages[1]){
        page2.style.display = 'none';
        page1.style.display = 'flex'
    }
    if (page == pages[2]){
        page1.style.display = 'none';
        page3.style.display = 'none';
        page2.style.display = 'flex';
    }
    if (page == pages[3]){
        page1.style.display = 'none';
        page4.style.display = 'none';
        page3.style.display = 'flex';
    }
}


/***********Adding Docs in the list */
const itemList = document.getElementById('itemList');
const table = document.getElementById('docs_requested');
function ifChecked(id) {
    const element = document.getElementById(id);
    const doc = element.getAttribute('name'); 
    if (element.checked) {
        const newItem = document.createElement('li');
        newItem.textContent = doc;
        const removebutton = document.createElement('button');
        removebutton.textContent = 'Remove';
        removebutton.classList = ('removebutton');
        const table_tr = document.createElement('tr');
        const table_td1 = document.createElement('td');
        const table_td2 = document.createElement('td');
        const table_td3 = document.createElement('td');

        
        table_td1.textContent = doc;
        table_td2.textContent = '50 Pesos';
        table_td3.appendChild(removebutton);
        table_tr.appendChild(table_td1);
        table_tr.appendChild(table_td2);
        table_tr.appendChild(table_td3);
        table.appendChild(table_tr);

        
        removebutton.addEventListener('click', () => {
        table.removeChild(table_tr)
        element.checked = false;
        })
    }
}

/************************OTR */
const otr = document.getElementById('OTR');
const OTRfromYear = document.getElementById('OTRfyear');
const OTRtoYear  = document.getElementById('OTRtyear');

function clicked(){
    const isChecked = otr.checked;
    OTRfromYear.disabled = !isChecked;
    OTRtoYear.disabled = !isChecked;

    if (!isChecked) {
        OTRfromYear.value = '';
        OTRtoYear.value = '';
    }
}


function ValidateAndAddItem() {
    const OTRfromYearValue = parseInt(OTRfromYear.value, 10);
    const OTRtoYearValue = parseInt(OTRtoYear.value, 10) 

    if (!isNaN(OTRfromYearValue)) {
        OTRtoYear.value = OTRtoYearValue;
    }

    if (validateYears(OTRfromYearValue, OTRtoYearValue) && OTRfromYear.value.length == 4 && OTRtoYear.value.length == 4 ) {

            const formattedFromYear = formatYear(OTRfromYearValue);
            const formattedToYear = formatYear(OTRtoYearValue);
            const doc = `Official Transcript of records from ${formattedFromYear} to ${formattedToYear}`;
            const newItem = document.createElement('li');
            const container = document.createElement('span');
            container.classList = 'docButcontainer';

            newItem.textContent = doc;

            const removebutton = document.createElement('button');
            removebutton.textContent = 'Remove';
            removebutton.classList = ('removebutton');
            const table_tr = document.createElement('tr');
            const table_td1 = document.createElement('td');
            const table_td2 = document.createElement('td');
            const table_td3 = document.createElement('td');

        
            table_td1.textContent = doc;
            table_td2.textContent = '50 Pesos';
            table_td3.appendChild(removebutton);
            table_tr.appendChild(table_td1);
            table_tr.appendChild(table_td2);
            table_tr.appendChild(table_td3);
            table.appendChild(table_tr);

            removebutton.addEventListener('click', () => {
            table.removeChild(table_tr)
            otr.checked = false;
            OTRfromYear.value = '';
            OTRtoYear.value = '';
            clicked()
            })
        }
        }
    

otr.addEventListener('change', clicked);
OTRfromYear.addEventListener('input' , ValidateAndAddItem)
OTRtoYear.addEventListener('input', ValidateAndAddItem)

clicked();

/*****************************OTR for BS/MS/PHD */

const OTRphd = document.getElementById('OTRforMsMaPhd');
const OTRtype = document.getElementById('MsMaPhd');

function napindot(){
    const isChecked = OTRphd.checked;
    OTRtype.disabled = !isChecked;

    if (!isChecked) {
        OTRtype.selectedIndex = 0;
    }
}

function OTRbsMsPhd() {
        const term = OTRtype.value;
        if (term) {
            const doc = `Original Transcript of Records for ${term}`;
            
            const newItem = document.createElement('li');
            const container = document.createElement('span');
            container.classList = 'docButcontainer';

            newItem.textContent = doc;

            const removebutton = document.createElement('button');
            removebutton.textContent = 'Remove';
            removebutton.classList = ('removebutton');
            const table_tr = document.createElement('tr');
            const table_td1 = document.createElement('td');
            const table_td2 = document.createElement('td');
            const table_td3 = document.createElement('td');

        
            table_td1.textContent = doc;
            table_td2.textContent = '50 Pesos';
            table_td3.appendChild(removebutton);
            table_tr.appendChild(table_td1);
            table_tr.appendChild(table_td2);
            table_tr.appendChild(table_td3);
            table.appendChild(table_tr);


            removebutton.addEventListener('click', () => {
            table.removeChild(table_tr)
            OTRphd.checked = false;
            OTRtype.selectedIndex = 0
            napindot()
            })
        }

}

OTRphd.addEventListener('change', napindot)
OTRtype.addEventListener('change', OTRbsMsPhd)
napindot()

/*-----------------------------------------------------------------------------------------------*/
const certEnrollmentCheckbox = document.getElementById('CertEnrollment');
const termOfEnrolCert = document.getElementById('termOfEnrolCert');
const fromYear = document.getElementById('fromYear');
const toYear = document.getElementById('toYear');

function toggleInputs() {
    const isChecked = certEnrollmentCheckbox.checked;
    termOfEnrolCert.disabled = !isChecked;
    fromYear.disabled = !isChecked;
    toYear.disabled = !isChecked;

    if (!isChecked) {
        termOfEnrolCert.selectedIndex = 0;
        fromYear.value = '';
        toYear.value = '';
    }
}

function validateYears(fromYearValue, toYearValue) {
    if (!isNaN(fromYearValue) && !isNaN(toYearValue) && toYearValue >= fromYearValue) {
        return true;
    }
    return false;
}

function validateAndAddItem() {
    const fromYearValue = parseInt(fromYear.value, 10);
    let toYearValue = fromYearValue + 1; 

    if (!isNaN(fromYearValue)) {
        toYear.value = toYearValue;
    }


    if (validateYears(fromYearValue, toYearValue)) {
        const term = termOfEnrolCert.value;
        if (term) {
            if (fromYear.value.length === 4){
            const doc = `Certificate of Enrollment ${term}, SY ${fromYearValue} to ${toYearValue}`;
            const newItem = document.createElement('li');
            const container = document.createElement('span');
            container.classList = 'docButcontainer';

            newItem.textContent = doc;

            const removebutton = document.createElement('button');
            removebutton.textContent = 'Remove';
            removebutton.classList = ('removebutton');
            const table_tr = document.createElement('tr');
            const table_td1 = document.createElement('td');
            const table_td2 = document.createElement('td');
            const table_td3 = document.createElement('td');

        
            table_td1.textContent = doc;
            table_td2.textContent = '50 Pesos';
            table_td3.appendChild(removebutton);
            table_tr.appendChild(table_td1);
            table_tr.appendChild(table_td2);
            table_tr.appendChild(table_td3);
            table.appendChild(table_tr);


            removebutton.addEventListener('click', () => {
            table.removeChild(table_tr)
            certEnrollmentCheckbox.checked = false;
            termOfEnrolCert.selectedIndex = 0;
            fromYear.value = '';
            toYear.value = '';
            toggleInputs()
            })

        }
        }
    }
}

certEnrollmentCheckbox.addEventListener('change', toggleInputs);
fromYear.addEventListener('input', validateAndAddItem);
termOfEnrolCert.addEventListener('change', validateAndAddItem);
toggleInputs();

/***********************grades *********/
const gradecheckbox = document.getElementById('CertFinalGradesCheckbox');
const gradeterm = document.getElementById('term3Select');
const gradesFrom = document.getElementById('fromYearInputGrades');
const gradesTo = document.getElementById('toYearInputGrades');

function click_grades(){
    const isChecked = gradecheckbox.checked;
    gradeterm.disabled = !isChecked;
    gradesFrom.disabled = !isChecked;
    gradesTo.disabled = !isChecked;

    if (!isChecked) {
        gradeterm.selectedIndex = '';
        gradesFrom.value = '';
        gradesTo.value = '';
    }
}
function validateYears(fromYearValue) {
    if (!isNaN(fromYearValue)) {
        gradesTo.value = fromYearValue + 1;
        return true;
    }
    return false;
}

function formatYear(year) {
    return year.toString().padStart(4, '0');
}

function valAddItem() {
    const gradesfromYearValue = parseInt(gradesFrom.value);
    let gradestoYearValue = gradesfromYearValue + 1;
  
if (validateYears(gradesfromYearValue)) {
    const gradesTerm = gradeterm.value;
    if (gradesTerm) {
        const formattedFromYear = formatYear(gradesfromYearValue);
        const formattedToYear = formatYear(gradestoYearValue);
        if (gradesFrom.value.length === 4 && gradesTo.value.length === 4 ){
        const doc = `Certificate of Final Grades ${gradesTerm}, SY ${formattedFromYear} to ${formattedToYear}`;
        const newItem = document.createElement('li');
        const container = document.createElement('span');
        container.classList = 'docButcontainer';

        const removebutton = document.createElement('button');
        removebutton.textContent = 'Remove';
        removebutton.classList = ('removebutton');
        const table_tr = document.createElement('tr');
        const table_td1 = document.createElement('td');
        const table_td2 = document.createElement('td');
        const table_td3 = document.createElement('td');

    
        table_td1.textContent = doc;
        table_td2.textContent = '50 Pesos';
        table_td3.appendChild(removebutton);
        table_tr.appendChild(table_td1);
        table_tr.appendChild(table_td2);
        table_tr.appendChild(table_td3);
        table.appendChild(table_tr);


        removebutton.addEventListener('click', () => {
        table.removeChild(table_tr)
        gradecheckbox.checked = false;
        gradeterm.selectedIndex = 0;
        gradesFrom.value = '';
        gradesTo.value = '';
        click_grades()
        })
    }
    }
}
}

gradecheckbox.addEventListener('change', click_grades)
gradeterm.addEventListener('change', valAddItem)
gradesFrom.addEventListener('input', valAddItem)
gradesTo.addEventListener('input', valAddItem)
click_grades()
const authentication = document.getElementById('Authentication/Cert Copy of OUR file');
const f_137 = document.getElementById('f-137');
const f_138 = document.getElementById('f-138');
const otrAuthen = document.getElementById('otrAuthen');
const typeOTR = document.getElementById('otrtype');
const others = document.getElementById('others');
const otherspecification = document.getElementById('otherType');

function pindot(){
    const isChecked = authentication.checked;
    f_137.disabled = !isChecked;
    f_138.disabled = !isChecked;
    otrAuthen.disabled = !isChecked;
    others.disabled = !isChecked;
}
function checkedAndAdd(){
    let doc = `Authentication(Personal Copy)/Certified Photocopy of OUR File: `
    if (f_137.checked){
        doc += 'F-137';
        appendItem()
    
    }
    if(f_138.checked){
        doc += 'F-138';
        appendItem()
    }
    if (otrAuthen.checked){
        typeOTR.style.display = 'inline-block';
        if (typeOTR.value != ''){
        doc += `OTR: ${typeOTR.value}`
        appendItem()
        }
      
    }
    else{
        typeOTR.style.display = 'none'
    }
    if (others.checked){
         otherspecification.style.display = 'inline-block'
        if (otherspecification.value != ''){
        doc = `Others : ${otherspecification.value}`
        appendItem()
        }
    
    }
    else{
        otherspecification.style.display = 'none'
    }
function appendItem(){
        const newItem = document.createElement('li');
        const container = document.createElement('span');
        container.classList = 'docButcontainer';
    
        const removebutton = document.createElement('button');
        removebutton.textContent = 'Remove';
        removebutton.classList = ('removebutton');
        const table_tr = document.createElement('tr');
        const table_td1 = document.createElement('td');
        const table_td2 = document.createElement('td');
        const table_td3 = document.createElement('td');

    
        table_td1.textContent = doc;
        table_td2.textContent = '50 Pesos';
        table_td3.appendChild(removebutton);
        table_tr.appendChild(table_td1);
        table_tr.appendChild(table_td2);
        table_tr.appendChild(table_td3);
        table.appendChild(table_tr);

        removebutton.addEventListener('click', () => {
        table.removeChild(table_tr)
        authentication.checked = false;
        f_137.checked = false;
        f_138.checked = false;
        others.checked = false;
        otherspecification.style.display = 'none';
        otherspecification.style.value = '';
        typeOTR.value = '';
        typeOTR.style.display = 'none';
        otrAuthen.checked = false;
        gradesFrom.value = '';
        gradesTo.value = '';
        pindot()
        })
    }
    }

authentication.addEventListener('change', pindot)
f_137.addEventListener('change', checkedAndAdd)
f_138.addEventListener('change', checkedAndAdd)
otrAuthen.addEventListener('change', checkedAndAdd)
others.addEventListener('change', checkedAndAdd)
typeOTR.addEventListener('change', checkedAndAdd)
otherspecification.addEventListener('change', checkedAndAdd)

pindot()

/**---------------------------------------------------------- */
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',() =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

});

/**---------------------------------------------------------- */

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervaId = null;


document.addEventListener('DOMContentLoaded',initializeSlider);

function initializeSlider(){
    
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide');
        intervaId = setInterval(nextSlide,5000);
    }

}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }

    
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
}


function prevSlide(){
    clearInterval(intervaId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


function change_oil(){
    let light = document.getElementById('light').checked; 
    let dark =  document.getElementById('dark').checked;
    let title = document.getElementById('LogoTitle').style;
    
    if(light){
        title.backgroundColor = '#357535';
    }

    if(dark){
        title.backgroundColor = '#363b36';
    }
}

document.getElementById('updateContent').addEventListener('click', function(event){
    event.preventDefault()
})

document.getElementById('backButton').addEventListener('click', function(event){

    event.preventDefault()
})
document.getElementById('requestform').addEventListener('click', function(event){
    event.preventDefault()
});