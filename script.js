/*Determines which button to toggle*/
function toggleButtons(table) {
    if (table == "#leftValues") {
        if ($("#leftSide input:checkbox:checked").length == 0)
            $("#btnRemove").attr("disabled", true);
        else
            $("#btnRemove").attr("disabled", false);
    }
    else {
        if ($("#rightSide input:checkbox:checked").length == 0)
            $("#btnAdd").attr("disabled", true);
        else
            $("#btnAdd").attr("disabled", false);
    }
}

/*Events for clicking checkbox and rows*/
$("#leftValues tbody tr").on("click", $("chkBoxLeft"), function() {
    toggleButtons("#leftValues");
});
$("#leftValues tbody").on("click", "tr", function(e) {
    var ele = $(e.target);
    if (ele.attr("type") != "checkbox") {
        if($(this).find(":checkbox").is(":checked")) {
            $(':checkbox', this).prop("checked", false);
        }
        else {
            $(':checkbox', this).prop("checked", true);
        }
    }
    toggleButtons("#leftValues");
});
$("#rightValues tbody tr").on("click", $("chkBoxRight"), function() {
    toggleButtons("#rightValues");
});
$("#rightValues tbody").on("click", "tr", function(e) {
    var ele = $(e.target);
    if (ele.attr("type") != "checkbox") {
        if($(this).find(":checkbox").is(":checked")) {
            $(':checkbox', this).prop("checked", false);
        }
        else {
            $(':checkbox', this).prop("checked", true);
        }
    }
    toggleButtons("#rightValues");
});

/*Events for clicking add and remove buttons*/
$("#buttons").on("click", $("#btnAdd"), function() {
    $("#rightSide input:checkbox:checked").closest("tr").appendTo($("#leftValues"));
    
    toggleButtons("#leftValues");
    toggleButtons("#rightValues");
});
$("#buttons").on("click", $("#btnRemove"), function() {
    $("#leftSide input:checkbox:checked").closest("tr").appendTo($("#rightValues"));
    toggleButtons("#leftValues");
    toggleButtons("#rightValues");
});

/*Disbale buttons on load*/
$("#btnRemove").attr("disabled", true);
$("#btnAdd").attr("disabled", true); 