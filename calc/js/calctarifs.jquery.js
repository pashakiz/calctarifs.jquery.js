$(document).ready(function(){
	

	$('input.calc_block_name_checkbox').on('click', function (){
		var isCheck = $(this).prop('checked');
		if (isCheck) {
			$(this).parent().parent('.calc_block').toggleClass('disabled');
			$(this).parent().parent('.calc_block').find('.calc_block_info input').prop('disabled', false);
		} else {
			$(this).parent().parent('.calc_block').toggleClass('disabled');
			$(this).parent().parent('.calc_block').find('.calc_block_info input').prop('disabled', true);
		}
	});


	$('.calculator').on('click keyup', valParam);

});

function valParam () {

	var isVideo = $('input.calc_block_name_checkbox[name="isvideo"]').prop('checked');
	var isDevConcept = $('input.calc_block_name_checkbox[name="isdevconcept"]').prop('checked');
	var isTeacherWork = $('input.calc_block_name_checkbox[name="isteacherwork"]').prop('checked');
	var isTestTasks = $('input.calc_block_name_checkbox[name="istesttasks"]').prop('checked');
	var isValidate = $('input.calc_block_name_checkbox[name="isvalidate"]').prop('checked');
	var isAdd = $('input.calc_block_name_checkbox[name="isadd"]').prop('checked');
	var isDevConceptSumm = 0, isVideoSumm = 0, isTeacherWorkSumm = 0, isTestTasksSumm = 0, isValidateSumm = 0, isAddSumm = 0;

	console.log("valParam");

	if (isVideo) {
		isVideoSumm = CalcItemsQty('isvideo', 5);
		$('.isvideo_total').html(isVideoSumm);
	}

	if (isDevConcept) {
		isDevConceptSumm = CalcItemsAdd('isdevconcept', 5);
		$('.isdevconcept_total').html(isDevConceptSumm);
	}

	if (isTeacherWork) {
		isTeacherWorkSumm = CalcItemsQty('isteacherwork', 5);
		$('.isteacherwork_total').html(isTeacherWorkSumm);
	}

	if (isTestTasks) {
		isTestTasksSumm = CalcItemsQty('istesttasks', 5);
		$('.istesttasks_total').html(isTestTasksSumm);
	}

	if (isValidate) {
		isValidateSumm = CalcItemsQty('isvalidate', 4);
		$('.isvalidate_total').html(isValidateSumm);
	}

	if (isAdd) {
		isAddSumm = CalcItemsQty('isadd', 2);
		$('.isadd_total').html(isAddSumm);
	}

	$('.all_total').html(isVideoSumm + isDevConceptSumm + isTeacherWorkSumm + isTestTasksSumm + isValidateSumm + isAddSumm);
}

/*
CalcItemsQty(title, n);

Return Summ of Added Items * Quantity (via input).

title (string) - the part ofClassName
for example for class: "isvideo_1_price"
title wil be "isvideo"

n (integer) - number of rows to calc
for example we have classes:
"isvideo_1_price", "isvideo_2_price",
"isvideo_3_price", "isvideo_4_price",
"isvideo_5_price"
n will be 5

*/
function CalcItemsQty(title, n) {
	var Summ = 0;
	for (var i = 1; i <= n; i++) {
		$('.'+title+'_'+i+'_total').html( $('.'+title+'_'+i+'_price').html() * $('.'+title+'_'+i+'_qty').val() );
		Summ = Summ + +$('.'+title+'_'+i+'_total').html();
	}
	return Summ;
}

/*
CalcItemsAdd(title, n);

Return Summ of Added Items (via checbox).

title (string) - the part ofClassName
for example for class: "isvideo_1_price"
title wil be "isvideo"

n (integer) - number of rows to calc
for example we have classes:
"isvideo_1_price", "isvideo_2_price",
"isvideo_3_price", "isvideo_4_price",
"isvideo_5_price"
n will be 5

*/
function CalcItemsAdd(title, n) {
	var Summ = 0;
	for (var i = 1; i <= n; i++) {
		if ( $('.'+title+'_'+i+'_qty').prop('checked') ) {
			$('.'+title+'_'+i+'_total').html( $('.'+title+'_'+i+'_price').html() );
			Summ = Summ + +$('.'+title+'_'+i+'_total').html();
		} else {
			$('.'+title+'_'+i+'_total').html(0);
		}
	}
	return Summ;
}