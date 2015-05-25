var tabs = [];
var avatar = document.getElementById('avatar');
var avatarShadow = document.getElementById('avatar-shadow');
var background = document.getElementById('background');
var closeBtn = document.getElementById('close-btn');
var saveAvatar = document.getElementById('save-avatar');
	closeBtn.addEventListener("click",closeAvatar);
	saveAvatar.addEventListener("click",closeAvatar);
	function closeAvatar(){
		avatar.classList.remove("active");
		avatarShadow.classList.remove("active");
		background.classList.remove("active");
	}
	$('#close-btn').on("click",function(){
		//myFunc
	});



// setTimeout(function(){
// 	window.location.reload();
// },500);

$(".modal-wide").on("show.bs.modal", function() {
	var height = $(window).height() - 200;
	$(this).find(".modal-body").css("max-height", height);
});