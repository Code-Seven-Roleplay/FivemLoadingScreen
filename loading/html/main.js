var count = 0;
var thisCount = 0;

const handler = {
    startInitFunctionOrder(data) {
        count = data.count
    },
    initFunctionInvoking(data) {
        document.querySelector(".progressBar").style.left = "0%"
        document.querySelector(".progressBar").style.width = ((data.idx / count) * 100) + "%";
    },
    startDataFileEntries(data) {
        count = data.count;
    },
    performMapLoadFunction(data) {
        ++thisCount
        document.querySelector(".progressBar").style.left = "0%"
        document.querySelector(".progressBar").style.width = ((thisCount / count) * 100) + "%";
    }
}

window.addEventListener("message", function(e) {
    (handler[e.data.eventName] || function () {})(e.data)
})

///////////////////////////////

var audio = new Audio("http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3");

$('#play-pause-button').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#play-pause-button").removeClass('fa-pause');
     $("#play-pause-button").addClass('fa-play');
};