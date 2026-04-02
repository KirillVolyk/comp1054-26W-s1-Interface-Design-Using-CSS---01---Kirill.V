// STEP 11: Call to tablesorter script here
const divisionTable = document.querySelector("table");
let sortableTable = new Tablesort(divisionTable);

// select all the column headers and add a click event listener to each one
activeColumns = document.querySelectorAll("th");
activeColumns.forEach((column) => {
    column.addEventListener("click", () => {
        // highlight the ENTIRE active column light blue
        const columnIndex = Array.from(column.parentNode.children).indexOf(column);
        // select all of the rows at the column index(if we clicked 5th column, index is 4, then select index 4 for all the rows)
        const allRows = column.closest("table").querySelectorAll("tr");
        // after selecting the clicked column and toggled index rows, style the ligth blue
        allRows.forEach((row) => {
            const cell = row.children[columnIndex];
            if (cell) {
                cell.style.backgroundColor = "lightblue";
            }
        });
    });
});

//if one column is active, unhighlight the other columns
activeColumns.forEach((column) => {
    column.addEventListener("click", () => {
        activeColumns.forEach((otherColumn) => {
            // if a column is not the clicked column, unhighlight it
            if (otherColumn !== column) {
                const otherColumnIndex = Array.from(otherColumn.parentNode.children).indexOf(otherColumn);
                const allRows = otherColumn.closest("table").querySelectorAll("tr");
                // run through all of the columns and unhighlight them unless it is active/clicked column
                allRows.forEach((row) => {
                    const cell = row.children[otherColumnIndex];
                    // remvoe styling
                    if (cell) {
                        cell.style.backgroundColor = "";
                    }
                });
            }
        });
    }
    );
});