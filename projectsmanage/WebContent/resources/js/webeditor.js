/**
 * 图片编辑系统
 */
jQuery.webeditor = {
	getHead : function() {
		$("#headdiv").load(
				"head.web?fromurl=" + location.href + "&r=" + Math.random());
	},
	getFoot : function() {
		$("#footdiv").load("foot.web?r=" + Math.random());
	},
	gotoLogin : function(webpath) {
		top.location.href = webpath + "login.jsp";
	},
	showMsgBox : function(type, msg, w, h) {
		$("#comm_msgbox").remove();
		var html = new Array();
		var title = new String();
		if ("alert" == type) {
			title = "警告";
			html.push("<div id=\"comm_msgbox\">");
			html.push("    <div class=\"alert alert-danger alert-dismissable\" style=\"margin-bottom: 0;\">");
			html.push(			msg);
			html.push("    </div>");
			html.push("</div>");
		} else {
			title = "消息";
			html.push("<div id=\"comm_msgbox\">");
			html.push("    <div class=\"alert alert-success alert-dismissable\" style=\"margin-bottom: 0;\">");
			html.push(			msg);
			html.push("    </div>");
			html.push("</div>");
		}
		$("body").append(html.join(""));
		var opt = {
			title : title,
			autoOpen : true,
			width : w ? w : 550,
			modal : true,
			open : function(event, ui) {
				$(".ui-dialog-titlebar-close").hide();
			},
			buttons : {
				"确定" : function() {
					$(this).dialog("close");
				}
			}
		};
		if (h) {
			opt = {
				title : title,
				autoOpen : true,
				width : w ? w : 550,
				height : h,
				modal : true,
				open : function(event, ui) {
					$(".ui-dialog-titlebar-close").hide();
				},
				buttons : {
					"确定" : function() {
						$(this).dialog("close");
					}
				}
			};
		}
		$('#comm_msgbox').dialog(opt);
	},
	showMsgLabel : function(type, msg, w, h) {
		var speed = 300;
		var html = new Array();
		html.push("<div id=\"comm_msglabel\" style=\"display:none;position:fixed;right:2%;bottom:3%;min-width:18%;\">");
		if ("success" == type) {
			html.push("<div class=\"alert alert-success alert-dismissable\">");
			html.push("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>");
			html.push(msg);
			html.push("</div>");
		} else if("info" == type) {
			html.push("<div class=\"alert alert-info alert-dismissable\">");
			html.push("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>");
			html.push(msg);
			html.push("</div>");
		} else if("warning" == type) {
			html.push("<div class=\"alert alert-warning alert-dismissable\">");
			html.push("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>");
			html.push(msg);
			html.push("</div>");
		} else {
			html.push("<div class=\"alert alert-danger alert-dismissable\">");
			html.push("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>");
			html.push(msg);
			html.push("</div>");
		}
		html.push("</div>");
		if($("#comm_msglabel") && $("#comm_msglabel").length > 0){
			$("#comm_msglabel").fadeOut(speed, function(){
				$("#comm_msglabel").remove();
				
				$("body").append(html.join(""));
				$("#comm_msglabel").fadeIn(speed, function(){
					setTimeout(function() {
						$("#comm_msglabel").fadeOut(speed, function(){
							$("#comm_msglabel").remove();
						});
				    }, 5000);
				});
			});
		} else {
			$("body").append(html.join(""));
			$("#comm_msglabel").fadeIn(speed, function(){
				setTimeout(function() {
					$("#comm_msglabel").fadeOut(speed, function(){
						$("#comm_msglabel").remove();
					});
			    }, 5000);
			});
		}
		
	}
};