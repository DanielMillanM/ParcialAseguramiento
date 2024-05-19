let cont = 1;
const maxGrades = 10;
const btnNewGrade = document.getElementById("btnNewGrade");
const grades = document.getElementById("grades");
let currentGrades = [["txtGrade1", "txtPercentage1"]];

document.getElementById("txtGrade1").addEventListener("input", () => {
    if (parseInt(document.getElementById("txtGrade1").value) > 5) {
        document.getElementById("txtGrade1").value = 5;
    }
    if (parseInt(document.getElementById("txtGrade1").value) < 0) {
        document.getElementById("txtGrade1").value = 0;
    }
});

document.getElementById("txtPercentage1").addEventListener("input", () => {
    if (parseInt(document.getElementById("txtPercentage1").value) > 100) {
        document.getElementById("txtPercentage1").value = 100;
    }
    if (parseInt(document.getElementById("txtPercentage1").value) < 0) {
        document.getElementById("txtPercentage1").value = 0;
    }
});

btnNewGrade.addEventListener("click", addNewGrade);

function addNewGrade() {
    if (cont >= maxGrades) {
        alert("Máximo número de notas alcanzado");
        return;
    }
    cont++;
    const newGradeId = `grade_${cont}`;

    const newGradeDiv = document.createElement("div");
    newGradeDiv.className = "row";
    newGradeDiv.id = newGradeId;

    const gradeInputDiv = document.createElement("div");
    gradeInputDiv.className = "form-outline form-white mb-2 pr-2 row col-4 mr-8 me-2";
    gradeInputDiv.innerHTML = `
        <input type="text" id="txtGrade${cont}" class="form-control form-control-md" />
        <label class="form-label" for="txtGrade${cont}">Nota</label>
    `;

    const percentageInputDiv = document.createElement("div");
    percentageInputDiv.className = "form-outline form-white mb-2 row col-4 mx-auto";
    percentageInputDiv.innerHTML = `
        <input type="text" id="txtPercentage${cont}" class="form-control form-control-md" />
        <label class="form-label" for="txtPercentage${cont}">Porcentaje</label>
    `;

    const removeBtnDiv = document.createElement("div");
    removeBtnDiv.className = "form-outline form-white mb-4 row col-4 mx-auto";
    removeBtnDiv.innerHTML = `
        <button type="button" class="btn btn-danger" onclick="removeGrade('${newGradeId}')">Remover</button>
    `;

    newGradeDiv.appendChild(gradeInputDiv);
    newGradeDiv.appendChild(percentageInputDiv);
    newGradeDiv.appendChild(removeBtnDiv);

    grades.appendChild(newGradeDiv);

    const txtGrade = document.getElementById(`txtGrade${cont}`);
    const txtPercentage = document.getElementById(`txtPercentage${cont}`);

    txtGrade.addEventListener("input", () => {
        if (parseInt(txtGrade.value) > 5) {
            txtGrade.value = 5;
        }
    });

    txtPercentage.addEventListener("input", () => {
        if (parseInt(txtPercentage.value) > 100) {
            txtPercentage.value = 100;
        }
    });

    currentGrades.push([`txtGrade${cont}`, `txtPercentage${cont}`]);
}

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
