$(function(){
  setInterval(function(){
    $('.fly_div').show().addClass('animata')
    setTimeout(function(){
      $('.fly_div').hide().removeClass('animata')
    },1000)
  },3000)
  /*垂直居中*/
   $('.other_an').css('lineHeight',$(this).height()+'px');
   $('.user_qifa').css('lineHeight',$(this).height()+'px');
   /*选中问题*/
  $('.wrapper li').click(function(event) {
    $('.audio4').get(0).play()
    $('.book_info .p1').html($(this).html()).addClass('p0')
    return false
  });
  $('.wrapper li').on('dblclick',function(event) {
    $('.audio4').get(0).play()
    $('.other_an').show()
  });
  $('.hide_self').click(function(event) {
    if (event.target == this) {
      $(this).hide()
    }
    return false
  });
  $('.hide_self .s1').click(function(event) {
    $('.hide_self').trigger('click')
    return false
  });
  /*问答*/
  $('.three_btn .s1').click(function(event) {
    $('.audio2').get(0).play()
    if ($('.book_info .p1').html().length<1) {
      myalert('alert_q','请选择要回答的问题！')
      return
    }

    /*$('.audio3').get(0).play()*/
    $('.book_info').addClass('an diff').find('.answer').show().find('.input').focus()
    $('.user_in').show()
    return false
  });
  $('.user_in').click(function(event) {
    if (event.target == this) {
      $('.book_info').removeClass('an diff').find('.write').hide()
      $(this).hide()
    }
    return false
  });
  /*提交*/
  $('.book_info .answer .user_btn .s1').click(function(event) {
      var huida=$('.book_info .huida input').val('')
     $('.book_info').removeClass('an diff').find('.answer').hide().find('.huida input').val('')
     $('.user_in').hide()



   });
  /*退出*/
   $('.book_info .answer .user_btn .s2').click(function(event) {
     $('.book_info').removeClass('an diff').find('.answer').hide().find('.huida input').val('')
     $('.user_in').hide()
   });
  /*启发*/
  $('.three_btn .s2').click(function(event) {
    $('.audio2').get(0).play()
    $('.book_info').addClass('an').find('.inspire').show().find('.input').focus()
    $('.user_in').show()
    return false
  });
    /*其他人启发*/
  $('.book_info .inspire .get_more .s1').click(function(event) {
    $('.user_qifa').show()
    return false
  });
  /*提交*/
  $('.book_info .inspire .user_btn .s1').click(function(event) {
      var huida=$('.book_info .huida input').val('')
     $('.book_info').removeClass('an').find('.inspire').hide().find('.huida input').val('')
     $('.user_in').hide()



   });
  /*退出*/
   $('.book_info .inspire .user_btn .s2').click(function(event) {
     $('.book_info').removeClass('an').find('.inspire').hide().find('.huida input').val('')
     $('.user_in').hide()
   });
  /*提问*/
  $('.three_btn .s3').click(function(event) {
    $('.audio2').get(0).play()
    $('.book_info').addClass('an').find('.user_ask').show().find('.input').focus()
    $('.user_in').show()
    return false
  });
  $('.book_info .user_ask .user_btn .s1').click(function(event) {
      var huida=$('.book_info .huida input').val('')
     $('.book_info').removeClass('an diff').find('.user_ask').hide().find('.huida input').val('')
     $('.user_in').hide()



   });
  /*退出*/
   $('.book_info .user_ask .user_btn .s2').click(function(event) {
     $('.book_info').removeClass('an diff').find('.user_ask').hide().find('.huida input').val('')
     $('.user_in').hide()
   });


  function myalert(cla,content){
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        skin: cla,
        content: content
      });
  }
});