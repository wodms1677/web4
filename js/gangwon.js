(function($){

  var gangwon = {
    init:function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },
    header:function(){
          $('.main-btn').on({
            mouseenter: function(){
              $('.sub').stop().fadeOut(0);
              $(this).next().stop().fadeIn(300);
          
              $('.main-btn').removeClass('on');
              $(this).addClass('on');
            },
            focusin: function(){
              $('.sub').stop().fadeOut(0);
              $(this).next().stop().fadeIn(300);
          
              $('.main-btn').removeClass('on');
              $(this).addClass('on');
            }
          });
        
          $('#nav').on({
            mouseleave:function(){
              $('.sub').stop().fadeOut(300);
              $('.main-btn').removeClass('on');
            }
          });
    },
    section1:function(){
          let cnt=0;
      
          // 1. 메인슬라이드함수
          function mainSlide(){
            $('.slide-wrap').animate({top:-300*cnt}, 600, function(){
              cnt>2?cnt=0:cnt;
              cnt<0?cnt=2:cnt;
              $('.slide-wrap').animate({top:-300*cnt}, 0);
            });
          }
          // 2. 다음카운트함수
          function nextCount(){
            cnt++;
            mainSlide();
          }
          // 2-1. 이전카운트함수
          function prevCount(){
            cnt--;
            mainSlide();
          }
          // 3. 자동타이머함수
          function autoTimer(){
            // setInterval(nextCount, 3000);
            setInterval(prevCount, 3000);
          }
          autoTimer();
    },
    section2:function(){
          $('.gallery-btn').on({
            click:function(){ // 마우스 클릭그리고 키보드는
            $('.notice-btn').addClass('on'); 
            $('.gallery-btn').addClass('on');
            $('.notice-box').addClass('on');
            $('.gallery-box').addClass('on');
            }
          });
        
          $('.notice-btn').on({
            click:function(){
              $('.notice-btn').removeClass('on');
              $('.gallery-btn').removeClass('on');
              $('.notice-box').removeClass('on');
              $('.gallery-box').removeClass('on');      
            }
          });
        
          // 레이어 팝업창
          $('.link-btn').on({
          click:function(){
              $('#modal').stop().fadeIn(300);
          } 
          });
        
          $('.close-btn').on({
            click:function(){
              $('#modal').stop().fadeOut(300);
            }
          });
    },
    
    footer:function(){}
  }
  gangwon.init();

 

  // 메인 슬라이드
 

  // 공지사항&갤러리 탭메뉴 클릭 이벤트
  // 갤러리버튼
  

})(jQuery);