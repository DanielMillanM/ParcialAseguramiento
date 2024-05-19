let cont = 1;
const maxGrades = 10;
const btnNewGrade = document.getElementById("btnNewGrade");
const grades = document.getElementById("grades");
let currentGrades = [["txtGrade1", "txtPercentage1"]];

btnNewGrade.addEventListener("click", addNewGrade);

function addNewGrade() {
    if(cont >= maxGrades) {
        alert("Máximo número de notas alcanzado");
        return;
    }
    cont ++;
    grades.innerHTML += `<div class="row">
    <div data-mdb-input-init class="form-outline form-white mb-2 pr-2 row col-4 mr-8 me-2">
        <input type="text" id="txtGrade${cont}" class="form-control form-control-md" />
        <label class="form-label" for="txtGrade${cont}">Nota</label>
    </div>
    <div data-mdb-input-init class="form-outline form-white mb-2 row col-4 mx-auto">
        <input type="text" id="txtPercentage${cont}" class="form-control form-control-md" />
        <label class="form-label" for="txtPercentage${cont}">Porcentaje</label>
    </div>
    <div data-mdb-input-init class="form-outline form-white mb-4 row col-4 mx-auto">
        <button type="button" class="btn btn-danger">Remover</button>
    </div>
</div>`;
function removeGrade(gradeId) {
    if (currentGrades.length === 1) {
        alert("No puede eliminar todas las notas");
        return;
    }
    const gradeToRemove = document.getElementById(gradeId);
    gradeToRemove.remove();
    const gradeAndId = gradeId.split("_");
    for (let index = 0; index < currentGrades.length; index++) {
        if ("txtGrade" + gradeAndId[1] === currentGrades[index][0]) {
            currentGrades.splice(index, 1);
        }
    }
    console.log(currentGrades);
}
