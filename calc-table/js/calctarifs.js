$(document).ready(function(){
	
	$('.calculator').on('click keyup', valParam);

	function matrixArray(rows,columns){
		var arr = new Array();
		for(var i=0; i<columns; i++){
			arr[i] = new Array();
			for(var j=0; j<rows; j++){
				arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
			}
		}
		return arr;
	}
	var myMatrix = matrixArray(3,3);
	console.log("Matrix: "+myMatrix);
	console.log("Matrix[0][0]: "+myMatrix[0][0]);
	console.log("Matrix[1][1]: "+myMatrix[1][1]);
	console.log("Matrix[2][2]: "+myMatrix[2][2]);
});

function valParam () {
	var isVideo = $('input.calc_block_name_checkbox[name="isvideo"]').prop('checked');
	var isDevConcept = $('input.calc_block_name_checkbox[name="isdevconcept"]').prop('checked');

	console.log("event ");
	//console.log("test "+isVideo1Total);

	if (isVideo) {
		// var VideoItemTotal, VideoTotal;
		// VideoItemTotal = $('.isvideo_1_price').html() * $('.isvideo_1_qty').val();
		// $('.isvideo_1_total').html(VideoItemTotal);

		$('.isvideo_1_total').html( $('.isvideo_1_price').html() * $('.isvideo_1_qty').val() );
		$('.isvideo_2_total').html( $('.isvideo_2_price').html() * $('.isvideo_2_qty').val() );
		$('.isvideo_3_total').html( $('.isvideo_3_price').html() * $('.isvideo_3_qty').val() );
		$('.isvideo_4_total').html( $('.isvideo_4_price').html() * $('.isvideo_4_qty').val() );
		$('.isvideo_5_total').html( $('.isvideo_5_price').html() * $('.isvideo_5_qty').val() );

		$('.isvideo_total').html( +$('.isvideo_1_total').html() + +$('.isvideo_2_total').html() + +$('.isvideo_3_total').html() + +$('.isvideo_4_total').html() + +$('.isvideo_5_total').html() );

	}
}
