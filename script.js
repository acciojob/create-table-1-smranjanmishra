function insert_Row() {
    // Get the table element by its id
    var table = document.getElementById("sampleTable");
    
    // Create a new row element
    var newRow = table.insertRow(0); // Inserts row at the top (index 0)

    // Create two new cells for the new row
    var cell1 = newRow.insertCell(0); // First cell
    var cell2 = newRow.insertCell(1); // Second cell

    // Set the text content of the new cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}