$(function() {
	//fullpage
	$('#arvin').fullpage({
		afterRender:function(){
			$('.info').children('h5').fadeTo(3500,1).siblings('h4').fadeTo(4500,1).siblings('h3').fadeTo(5500,1);
			$('.basicinfo').children('p').eq(0).fadeTo(7500,1);
			$('.basicinfo').children('p').eq(1).fadeTo(6500,1);
			$('.basicinfo').children('p').eq(2).fadeTo(5500,1);
		},
		afterLoad:function(value,index){
			if(index==2){
				$('.about_title h3').after("<div class='title_en margin0 margin-top10'><p class='text-center'>ABOUT ME</p><div>");
				$('.title_en').animate({width:'150px'},1000,function(){
					$('.title_en p').slideDown(800)
				})
				$('about_info').children('p').eq(0);
				$('about_info').children('p').eq(1).fadeTo(3500,1);
				$('about_info').children('p').eq(2).fadeTo(4500,1);
			}
			if(index==3){
				$('.about_title h3').after("<div class='title_en margin0 margin-top10'><p class='text-center fc-White'>SKILL</p><div>");
				$('.title_en').animate({width:'150px'},1000,function(){
					$('.title_en p').slideDown(800)
				})
				$('.skill_main').children('.skill_list:even').animate({'left':'52%'},1000).animate({'left':'2%'},2000)
				$('.skill_main').children('.skill_list:odd').animate({'left':'2%'},1000).animate({'left':'52%'},2000)
			}
			if(index==4){
				$('.about_title h3').after("<div class='title_en margin0 margin-top10'><p class='text-center fc-White'>WORKS</p><div>");
				$('.title_en').animate({width:'250px'},1000,function(){
					$('.title_en p').slideDown(800)
				})
			}
			if(index==5){
				$('.about_title h3').after("<div class='title_en margin0 margin-top10'><p class='text-center fc-White'>CONTENT ME</p><div>");
				$('.title_en').animate({width:'150px'},1000,function(){
					$('.title_en p').slideDown(800)
				})
				/*$('.contact_info').children('p').click()*/
			}
		},
		onLeave:function(index){
			if(index==2||index==3||index==4||index==5){
				$(".title_en").remove();	
			}
		},
		anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage'],
		menu: '#myMenu'
	});
	
	//视频背景插件
	var width=document.body.clientWidth;
	//console.log(width)
	if(width>=1000){
		$(".video").backgroundVideo({
		mp4: "video/11.mp4"
	});
	}
	
	//
	$('.info_main p').addClass('blur')
	$('.info_main img').click(function(){
		$(this).siblings('p').removeClass('blur').parent('.info_main').siblings(".info_main").children('p').addClass('blur')
	})
	$('.info_main p').click(function(){
		$(this).removeClass('blur').parent('.info_main').siblings(".info_main").children('p').addClass('blur')
	})
	//
    
 	setTimeout(function(){
 		$('#loading').remove()
 	},1000)
    //
    
})
//
