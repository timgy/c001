var columns1 = [
	{id: 'name1', name: 'Name-1', selected: true},
	{id: 'name2', name: 'Name-2', selected: false},
	{id: 'name3', name: 'Name-3', selected: true},
	{id: 'name4', name: 'Name-4', selected: true},
	{id: 'name5', name: 'Name-5', selected: false},
	{id: 'name6', name: 'Name-6', selected: false},
	{id: 'name7', name: 'Name-7', selected: false},
	{id: 'name8', name: 'Name-8', selected: true},
	{id: 'name9', name: 'Name-9', selected: false},
	{id: 'name11', name: 'Name-11', selected: true},
	{id: 'name12', name: 'Name-12', selected: false},
	{id: 'name13', name: 'Name-13', selected: true},
	{id: 'name14', name: 'Name-14', selected: true},
	{id: 'name15', name: 'Name-15', selected: false},
	{id: 'name16', name: 'Name-16', selected: false},
	{id: 'name17', name: 'Name-17', selected: false},
	{id: 'name18', name: 'Name-18', selected: true},
	{id: 'name19', name: 'Name-19', selected: false},
	{id: 'name21', name: 'Name-21', selected: true},
	{id: 'name22', name: 'Name-22', selected: false},
	{id: 'name23', name: 'Name-23', selected: true},
	{id: 'name24', name: 'Name-24', selected: true},
	{id: 'name25', name: 'Name-25', selected: false},
	{id: 'name26', name: 'Name-26', selected: false},
	{id: 'name27', name: 'Name-27', selected: false},
	{id: 'name28', name: 'Name-28', selected: true},
	{id: 'name29', name: 'Name-29', selected: false},
];

var columns2 = [
	{id: 'test1', name: 'Test-1', selected: true},
	{id: 'test2', name: 'Test-2', selected: true},
	{id: 'test3', name: 'Test-3', selected: true},
	{id: 'test4', name: 'Test-4', selected: true},
	{id: 'test5', name: 'Test-5', selected: false},
	{id: 'test6', name: 'Test-6', selected: false},
	{id: 'test7', name: 'Test-7', selected: false},
	{id: 'test8', name: 'Test-8', selected: false},
	{id: 'test9', name: 'Test-9', selected: false},
	{id: 'test11', name: 'Test-11', selected: true},
	{id: 'test12', name: 'Test-12', selected: true},
	{id: 'test13', name: 'Test-13', selected: true},
	{id: 'test14', name: 'Test-14', selected: true},
	{id: 'test15', name: 'Test-15', selected: false},
	{id: 'test16', name: 'Test-16', selected: false},
	{id: 'test17', name: 'Test-17', selected: false},
	{id: 'test18', name: 'Test-18', selected: false},
	{id: 'test19', name: 'Test-19', selected: false},
	{id: 'test21', name: 'Test-21', selected: true},
	{id: 'test22', name: 'Test-22', selected: true},
	{id: 'test23', name: 'Test-23', selected: true},
	{id: 'test24', name: 'Test-24', selected: true},
	{id: 'test25', name: 'Test-25', selected: false},
	{id: 'test26', name: 'Test-26', selected: false},
	{id: 'test27', name: 'Test-27', selected: false},
	{id: 'test28', name: 'Test-28', selected: false},
	{id: 'test29', name: 'Test-29', selected: false},
	{id: 'test31', name: 'Test-31', selected: true},
	{id: 'test32', name: 'Test-32', selected: true},
	{id: 'test33', name: 'Test-33', selected: true},
	{id: 'test34', name: 'Test-34', selected: true},
	{id: 'test35', name: 'Test-35', selected: false},
	{id: 'test36', name: 'Test-36', selected: false},
	{id: 'test37', name: 'Test-37', selected: false},
	{id: 'test38', name: 'Test-38', selected: false},
	{id: 'test39', name: 'Test-39', selected: false},
];

AJS.$('#columns-1').on({
	"aui-dropdown2-item-check": function(e) { console.log('#columns-1', $(e.target).attr('id'), true); },
	"aui-dropdown2-item-uncheck": function(e) { console.log('#columns-1', $(e.target).attr('id'), false); },
	"aui-dropdown2-show": function(e) {
		columns1.forEach(function(c) { c.selected = Math.random() < 0.3; } );
		fillColumnsSelector($(this), columns1);
	}
});
AJS.$('#columns-2').on({
	"aui-dropdown2-item-check": function(e) { console.log('#columns-2', $(e.target).attr('id'), true); },
	"aui-dropdown2-item-uncheck": function(e) { console.log('#columns-2', $(e.target).attr('id'), false); },
	"aui-dropdown2-show": function(e) {
		columns2.forEach(function(c) { c.selected = Math.random() < 0.3; } );
		fillColumnsSelector($(this), columns2);
	}
});


/* --- */
AJS.$('#columns-1').on({
	"aui-dropdown2-item-check": function(e) {
		changeSelectorState($(e.target).attr('id'), columns1, true);
	},
	"aui-dropdown2-item-uncheck": function(e) {
		changeSelectorState($(e.target).attr('id'), columns1, false);
	}
});
AJS.$("#columns-1").on({
	"aui-dropdown2-show": function() {
		AJS.$('#column-1-search').on('input', {s: $(this), c: columns1}, searchSelector);
	},
	"aui-dropdown2-hide": function() {
		AJS.$('#column-1-search').val('').off('input', {s: $(this), c: columns1}, searchSelector);
	}
});
AJS.$('#columns-2').on({
	"aui-dropdown2-item-check": function(e) {
		changeSelectorState($(e.target).attr('id'), columns2, true);
	},
	"aui-dropdown2-item-uncheck": function(e) {
		changeSelectorState($(e.target).attr('id'), columns2, false);
	}
});
AJS.$("#columns-2").on({
	"aui-dropdown2-show": function() {
		AJS.$('#column-2-search').on('input', {s: $(this), c: columns2}, searchSelector);
	},
	"aui-dropdown2-hide": function() {
		AJS.$('#column-2-search').val('').off('input', {s: $(this), c: columns2}, searchSelector);
	}
});

function fillColumnsSelector(selector, columns, highlightText) {
	var enabled = ['<ul>'],
		disabled = ['<ul>'],
		result;

	columns.forEach(function(column) {
		result = disabled;
		if(column.selected){
			result = enabled;
		}
		result.push('<li><a class="aui-dropdown2-checkbox interactive aui-dropdown2-interactive');
		if (column.selected)
			result.push(' checked');
		result.push('" id="');
		result.push(column.id);
		result.push('">');
		if(highlightText){
			var highlightStart = column.name.toLowerCase().indexOf(highlightText.toLowerCase());
			if(highlightStart == 0){
				result.push('<strong>' + column.name.substring(0, highlightText.length) + '</strong>');
				result.push('<span>' + column.name.substring(highlightText.length) + '</span>');
			} else {
				result.push('<span>' + column.name.substring(0, highlightStart) + '</span>');
				result.push('<strong>' + column.name.substring(highlightStart, highlightStart + highlightText.length) + '</strong>');
				if(highlightStart + highlightText.length < column.name.length){
					result.push('<span>' + column.name.substring(highlightStart + highlightText.length) + '</span>');
				}
			}
		} else {
			result.push(column.name);
		}
		result.push('</a></li>');
	});

	enabled.push('</ul>');
	disabled.push('</ul>');
	selector.find( ".enabled-list" ).html(enabled.join(''));
	selector.find( ".disabled-list" ).html(disabled.join(''));
}

function changeSelectorState(id, columns, value) {
	columns.forEach(function(column) {
		if(column.id == id){
			column.selected = value;
		}
	});
}

function searchSelector(e) {
	var columns = e.data.c,
		selector = e.data.s,
		result = [],
		searchText = e.target.value;
	columns.forEach(function(column) {
		if(column.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
			result.push(column);
		}
	});
	fillColumnsSelector(selector, result, searchText);
}