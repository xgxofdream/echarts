/**
 * 数据可视化 1 绘制表格 2 异步获取数据
 * 
 */

$(function() {

	myChart = echarts.init(document.getElementById('main2')); // 不申明变量，则myChart为全局变量
	// 显示标题，图例和空的坐标轴
	myChart.setOption({
		title : {
			text : ''
		},
		tooltip : {},
		legend : {
			data : [ '' ]
		},
		xAxis : {
			data : ['No Data Input'],
			name : '患者ID'

		},
		yAxis : {
			name : '值'
		},
		series : [ {
			name : '',
			type : 'bar',

		} ]
	});
});

function Visualization(str) {
	var temp;
	var arr_x = new Array();
	var arr_y = new Array();

	// 异步加载数据
	$.get('ajax.php').done(function(data) {
		/* 测试输出 */
		temp = ProcessDataFromPhp(data);
		document.getElementById("txtHint").innerHTML = temp;
		// 将字符串JSON格式化
		data = JSON.parse(data);
		// 整理数据
		switch (str) {
		case 'basic_age':
			for ( var key in data) {
				// alert(key);
				arr_x.push(data[key].user_ID);
				arr_y.push(data[key].basic_age);

			}
			break;
		case 'basic_height':
			for ( var key in data) {
				// alert(key);
				arr_x.push(data[key].user_ID);
				arr_y.push(data[key].basic_height);

			}
			break;
		default:

			// alert(key);
			arr_x.push('No Data Input');
			arr_y.push();
			break;
		}

		// 填入数据
		myChart.setOption({
			xAxis : {
				data : arr_x
			// 必须是数组格式
			},
			series : [ {
				// 根据名字对应到相应的系列

				data : arr_y
			// 必须是数组格式
			} ]
		});
	});

}
