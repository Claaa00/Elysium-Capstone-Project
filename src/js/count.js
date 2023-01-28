$(document).ready(function() {
    function loadings(){
        const rowCount = $('#allTable tr').length;
        const counts = rowCount - 1 ;
        $("#allTabCount").text(counts);
    }
    setTimeout(loadings, 400)
});
$(document).ready(function() {
    function loadings(){
        const rowCount = $('#apartmentTable tr').length;
        const counts = rowCount - 1 ;
        $("#apartmentTabCount").text(counts);
    }
    setTimeout(loadings, 400)
});
$(document).ready(function() {
    function loadings(){
        const rowCount = $('#lawnTable tr').length;
        const counts = rowCount - 1 ;
        $("#lawnTabCount").text(counts);
    }
    setTimeout(loadings, 400)
}); 
$(document).ready(function() {
    function loadings(){
        const rowCount = $('#boneVaultTable tr').length;
        const counts = rowCount - 1 ;
        $("#boneVaultTabCount").text(counts);
    }
    setTimeout(loadings, 400)
});  

// addForm.addEventListener("submit",()=> {
//     const rowCount = $('#allTable tr').length;
//     $("#allTabCount").text(rowCount);
// })
  
    