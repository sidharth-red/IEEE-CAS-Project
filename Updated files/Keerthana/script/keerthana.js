var addDropBtn = "<div id=\"addDropBtn\"><div id=\"dropBtn\">－</div>&nbsp;<div id=\"addBtn\">＋</div></div>";
$("body").append(addDropBtn);
var isCtrlDown = false;




// object to store add_drop element
var ele_to_be_addDroped = {
	cmpnt_index: 0,
	cmpnt_p_index: 0,
	cmpnt_li_index: 0,
	ele: ""
};
function addDropBtn_right(a) {// the distance between addDropBtn and right window edge
	return ($(window).width() - ($(a).offset().left + $(a).outerWidth()));;
}
// author: Jenny HOU
// original codepen project: https://codepen.io/c53hzn/pen/PgayKq
$("body").on("mouseenter", ".rsm-cmpnt", function() {
	var that = this;
	ele_to_be_addDroped.cmpnt_index = $(".rsm-cmpnt").index(this);//overall index, not by category
	ele_to_be_addDroped.ele = this;
	$("#addDropBtn").css("top", $(that).offset().top - $(window).scrollTop() - 2);
	$("#addDropBtn").css("right", addDropBtn_right(that) + 4);
	$("#addBtn").attr("class", "cmpnt-btn");
	$("#dropBtn").attr("class", "cmpnt-btn");
	if (!$(this).prev().hasClass("rsm-header")) {//if component is the first in its category
		$("#dropBtn").show();//only drop btn will be applicable
	} else {
		$("#dropBtn").hide();
	}
	$("#addDropBtn").show();
});

// author: Jenny HOU
// original codepen project: https://codepen.io/c53hzn/pen/PgayKq
$("body").on("mouseleave", ".rsm-cmpnt", function() {
	$("#addDropBtn").hide();
});
$("body").on("mouseenter", ".rsm-cmpnt-btm p", function() {
	var that = this;
	ele_to_be_addDroped.cmpnt_index = $(".rsm-cmpnt").index($(that).parent().parent());
	ele_to_be_addDroped.cmpnt_p_index = $(this).index();
	ele_to_be_addDroped.ele = this;
	$("#addDropBtn").css("top", $(that).offset().top - $(window).scrollTop() - 3);
	$("#addDropBtn").css("right", addDropBtn_right(that) + 2);
	$("#addBtn").attr("class", "cmpnt-p-btn");
	$("#dropBtn").attr("class", "cmpnt-p-btn");
	if ($(this).index()) {
		$("#dropBtn").show();
	} else {
		$("#dropBtn").hide();
	}
	$("#addDropBtn").show();
});
$("body").on("mouseleave", ".rsm-cmpnt-btm p", function() {
	$("#addDropBtn").hide();
});
// author: Jenny HOU
// original codepen project: https://codepen.io/c53hzn/pen/PgayKq
$("body").on("mouseenter", ".rsm-cmpnt-btm li", function() {
	var that = this;
	ele_to_be_addDroped.cmpnt_index = $(".rsm-cmpnt").index($(that).parent().parent().parent());
	ele_to_be_addDroped.cmpnt_p_index = $(this).parent().prev().index();
	ele_to_be_addDroped.cmpnt_li_index = $(this).index();
	ele_to_be_addDroped.ele = this;
	$("#addDropBtn").css("top", $(that).offset().top - $(window).scrollTop() - 3);
	$("#addDropBtn").css("right", addDropBtn_right(that) + 2);
	$("#addBtn").attr("class", "cmpnt-li-btn");
	$("#dropBtn").attr("class", "cmpnt-li-btn");
	if ($(this).index()) {
		$("#dropBtn").show();
	} else {
		$("#dropBtn").hide();
	}
	$("#addDropBtn").show();
});
$("body").on("mouseleave", ".rsm-cmpnt-btm li", function() {
	$("#addDropBtn").hide();
});
$("body").on("mouseover", "#addDropBtn", function() {
	$("#addDropBtn").show();
});
$("body").on("mouseleave", "#addDropBtn", function() {
	$("#addDropBtn").hide();
});
// author: Jenny HOU
// original codepen project: https://codepen.io/c53hzn/pen/PgayKq
$("body").on("click", "#dropBtn", function() {
	var targetEle;
	if (ele_to_be_addDroped.ele.tagName == "DIV") {
		targetEle = $(".rsm-cmpnt").eq(ele_to_be_addDroped.cmpnt_index);
	} else if (ele_to_be_addDroped.ele.tagName == "P") {
		let div = $(".rsm-cmpnt").eq(ele_to_be_addDroped.cmpnt_index);
		targetEle = $(div).children(".rsm-cmpnt-btm").children().eq(ele_to_be_addDroped.cmpnt_p_index);
		$(targetEle).next().remove();// remove ul element next to p element
	} else if (ele_to_be_addDroped.ele.tagName == "LI") {
		let div = $(".rsm-cmpnt").eq(ele_to_be_addDroped.cmpnt_index);
		let p = $(div).children(".rsm-cmpnt-btm").children().eq(ele_to_be_addDroped.cmpnt_p_index);
		targetEle = $(p).next().children().eq(ele_to_be_addDroped.cmpnt_li_index);
	}
	$(targetEle).remove();
	$("#addDropBtn").hide();
});
$("body").on("click", "#addBtn", function() {
	var targetEle, newEle;
	if (ele_to_be_addDroped.ele.tagName == "DIV") {
		newEle = $(".rsm-cmpnt").eq(ele_to_be_addDroped.cmpnt_index).prop('outerHTML');
		targetEle = $(".rsm-cmpnt").eq(ele_to_be_addDroped.cmpnt_index);
	} else if (ele_to_be_addDroped.ele.tagName == "P") {
		let tempEle = ele_to_be_addDroped.ele;
		targetEle = $(tempEle).next();
		newEle = $(tempEle).prop("outerHTML") + $(targetEle).prop("outerHTML");
	} else if (ele_to_be_addDroped.ele.tagName == "LI") {
		let div = $(".rsm-cmpnt").eq(ele_to_be_addDroped.cmpnt_index);
		let p = $(div).children(".rsm-cmpnt-btm").children().eq(ele_to_be_addDroped.cmpnt_p_index);
		targetEle = $(p).next().children().eq(ele_to_be_addDroped.cmpnt_li_index);
		newEle = $(targetEle).prop("outerHTML");
	}
	$(targetEle).after(newEle);
	$("#addDropBtn").hide();
});
$("body").on("mouseenter", "[contenteditable]", function() {
	$(this).focus();
});