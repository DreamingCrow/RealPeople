$.notify.addStyle('modal-message', {
	html: "<div><span data-notify-text/></div>",
	classes: {
		base: {
			"white-space": "nowrap",
			"background-color": "lightblue",
			"padding": "5px"
		},
		alert: {
			"white-space": "nowrap",
			"padding": "5px",
			"font-size": "20px",
			"border-color": "#E1778E",
			"border-width": "1px",
			"border-style": "solid",
			"box-shadow": "0px 0px 30px #E1778E",
			"text-align": "center"
		}
		ok: {
			"white-space": "nowrap",
			"padding": "5px",
			"font-size": "20px",
			"border-color": "#7FF069",
			"border-width": "1px",
			"border-style": "solid",
			"box-shadow": "0px 0px 30px #7FF069",
			"text-align": "center"
		}
	}
});


$.notify('Message Delete', {
	style: 'modal-message',
	className: 'alert'
});

$.notify('Message Send', {
	style: 'modal-message',
	className: 'ok'
});