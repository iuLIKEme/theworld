{"changed":true,"filter":false,"title":"js.js","tooltip":"/js.js","value":"\n\n$(document).ready(function(){\n\n\n var count = 0;\n\n\n\n\n$(\"#clickme\").click(function(){\n  count++;\n  $(\"#number\").html(count);\n   $(\"#number\" ).css( \"color\", \"red\" );\n    \n\nif (count > 50){\n  $(\"#number\").html(\"YOU WON\");\n}\n\n  });\n  \n  \n  \n  var count2=0;\n  \n  $(\"#clickme2\").click(function(){\n  count2++;\n  $(\"#number2\").html(count2);\n   $(\"#number2\" ).css( \"color\", \"red\" );\n    \n\nif (count2 > 50){\n  $(\"#number2\").html(\"YOU WON\");\n}\n\n  });\n  \n  \n  \n  \n  \n  \n  \n  $(\"#start\").click(function(){\n  \nvar i = 100;\nvar counterBack = setInterval(function(){\n    i--;\n    if(i>=0){\n        $('.progress-bar').css('width', i+'%');\n    } else {\n        clearTimeout(counterBack);\n    }\n}, 1000);\n  \n  \n  });\n  \n  \n  \n  \n  \n  \n  \n $('body').keydown(function(e){\n     console.log(e.which);\n    if (e.which==90){\n    $(\"#clickme\").trigger(\"click\");     \n    }\n    \n});\n\n\n $('body').keydown(function(e){\n     console.log(e.which);\n    if (e.which==76){\n    $(\"#clickme2\").trigger(\"click\");     \n    }\n    \n});\n\n\n \n \n  \n  \n});\n","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":60,"column":17},"end":{"row":60,"column":18},"action":"insert","lines":["7"],"id":422}],[{"start":{"row":60,"column":18},"end":{"row":60,"column":19},"action":"insert","lines":["6"],"id":423}],[{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"remove","lines":["!"],"id":424}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"remove","lines":[" "],"id":425}],[{"start":{"row":39,"column":2},"end":{"row":39,"column":4},"action":"insert","lines":["''"],"id":426}],[{"start":{"row":39,"column":4},"end":{"row":39,"column":5},"action":"insert","lines":["="],"id":427}],[{"start":{"row":39,"column":4},"end":{"row":39,"column":5},"action":"remove","lines":["="],"id":428}],[{"start":{"row":39,"column":3},"end":{"row":39,"column":4},"action":"remove","lines":["'"],"id":429}],[{"start":{"row":39,"column":2},"end":{"row":39,"column":3},"action":"remove","lines":["'"],"id":430}],[{"start":{"row":39,"column":2},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":431},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":40,"column":2},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":432},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":41,"column":2},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":433},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":2},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":434},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":43,"column":2},"end":{"row":44,"column":0},"action":"insert","lines":["",""],"id":435},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":43,"column":2},"end":{"row":47,"column":1},"action":"insert","lines":["var i=2;","while(i<=10 ){","  console.log(i);","  i=i+2;","}"],"id":436}],[{"start":{"row":43,"column":10},"end":{"row":44,"column":0},"action":"insert","lines":["",""],"id":437},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":43,"column":1},"end":{"row":48,"column":1},"action":"remove","lines":[" var i=2;","  ","while(i<=10 ){","  console.log(i);","  i=i+2;","}"],"id":438},{"start":{"row":43,"column":1},"end":{"row":43,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":47,"column":2},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":439},{"start":{"row":48,"column":0},"end":{"row":48,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":48,"column":2},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":440},{"start":{"row":49,"column":0},"end":{"row":49,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":49,"column":2},"end":{"row":50,"column":0},"action":"insert","lines":["",""],"id":441},{"start":{"row":50,"column":0},"end":{"row":50,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":46,"column":2},"end":{"row":56,"column":9},"action":"insert","lines":["var i = 100;","","var counterBack = setInterval(function(){","  i--;","  if(i>0){","    $('.progress-bar').css('width', i+'%');","  } else {","    clearTimeout(counterBack);","  }","  ","}, 1000);"],"id":442}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":7},"action":"remove","lines":["1000"],"id":443},{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"insert","lines":["1"]}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"insert","lines":["0"],"id":444}],[{"start":{"row":56,"column":5},"end":{"row":56,"column":6},"action":"insert","lines":["0"],"id":445}],[{"start":{"row":56,"column":5},"end":{"row":56,"column":6},"action":"remove","lines":["0"],"id":446}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"remove","lines":["0"],"id":447}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"remove","lines":["1"],"id":448}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"insert","lines":["7"],"id":449}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"insert","lines":["0"],"id":450}],[{"start":{"row":56,"column":5},"end":{"row":56,"column":6},"action":"insert","lines":["0"],"id":451}],[{"start":{"row":56,"column":5},"end":{"row":56,"column":6},"action":"remove","lines":["0"],"id":452}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"remove","lines":["0"],"id":453}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"remove","lines":["7"],"id":454}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"insert","lines":["8"],"id":455}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"insert","lines":["-"],"id":456}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"remove","lines":["-"],"id":457}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"insert","lines":["0"],"id":458}],[{"start":{"row":56,"column":5},"end":{"row":56,"column":6},"action":"insert","lines":["0"],"id":459}],[{"start":{"row":50,"column":6},"end":{"row":50,"column":7},"action":"insert","lines":["="],"id":460}],[{"start":{"row":50,"column":6},"end":{"row":50,"column":7},"action":"remove","lines":["="],"id":461}],[{"start":{"row":50,"column":7},"end":{"row":50,"column":8},"action":"insert","lines":["="],"id":462}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":6},"action":"remove","lines":["800"],"id":463},{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"insert","lines":["1"]}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"remove","lines":["1"],"id":464}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"insert","lines":["2"],"id":468}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"insert","lines":["0"],"id":469}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"remove","lines":["2"],"id":470}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"insert","lines":["5"],"id":471}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"remove","lines":["0"],"id":472}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"remove","lines":["5"],"id":473}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":4},"action":"insert","lines":["1"],"id":474}],[{"start":{"row":56,"column":4},"end":{"row":56,"column":5},"action":"insert","lines":["5"],"id":475}],[{"start":{"row":56,"column":5},"end":{"row":56,"column":6},"action":"insert","lines":["0"],"id":476}],[{"start":{"row":56,"column":3},"end":{"row":56,"column":6},"action":"remove","lines":["150"],"id":477},{"start":{"row":56,"column":3},"end":{"row":56,"column":9},"action":"insert","lines":["120000"]}],[{"start":{"row":46,"column":10},"end":{"row":46,"column":13},"action":"remove","lines":["100"],"id":478},{"start":{"row":46,"column":10},"end":{"row":46,"column":16},"action":"insert","lines":["120000"]}],[{"start":{"row":46,"column":10},"end":{"row":46,"column":16},"action":"remove","lines":["120000"],"id":479},{"start":{"row":46,"column":10},"end":{"row":46,"column":11},"action":"insert","lines":["1"]}],[{"start":{"row":46,"column":11},"end":{"row":46,"column":12},"action":"insert","lines":["0"],"id":480}],[{"start":{"row":46,"column":12},"end":{"row":46,"column":13},"action":"insert","lines":["0"],"id":481}],[{"start":{"row":56,"column":8},"end":{"row":56,"column":9},"action":"remove","lines":["0"],"id":482}],[{"start":{"row":56,"column":7},"end":{"row":56,"column":8},"action":"remove","lines":["0"],"id":483}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "],"id":484}],[{"start":{"row":46,"column":1},"end":{"row":46,"column":4},"action":"insert","lines":["   "],"id":485}],[{"start":{"row":49,"column":2},"end":{"row":49,"column":4},"action":"insert","lines":["  "],"id":486}],[{"start":{"row":50,"column":2},"end":{"row":50,"column":4},"action":"insert","lines":["  "],"id":487}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "],"id":488}],[{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"insert","lines":["    "],"id":489}],[{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"insert","lines":["    "],"id":490}],[{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"remove","lines":["    "],"id":491}],[{"start":{"row":45,"column":2},"end":{"row":46,"column":0},"action":"remove","lines":["",""],"id":492}],[{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"remove","lines":[" "],"id":493}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["    "],"id":494}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"remove","lines":["    "],"id":495},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"remove","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"remove","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"remove","lines":["    "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":2},"action":"remove","lines":["  "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":51,"column":0},"end":{"row":51,"column":2},"action":"remove","lines":["  "],"id":496},{"start":{"row":53,"column":0},"end":{"row":53,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "],"id":497},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"insert","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"insert","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"insert","lines":["    "],"id":498}],[{"start":{"row":53,"column":5},"end":{"row":54,"column":0},"action":"remove","lines":["",""],"id":499}],[{"start":{"row":52,"column":4},"end":{"row":52,"column":8},"action":"insert","lines":["    "],"id":500}],[{"start":{"row":50,"column":4},"end":{"row":50,"column":8},"action":"insert","lines":["    "],"id":501}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"remove","lines":["  "],"id":502}],[{"start":{"row":45,"column":12},"end":{"row":46,"column":0},"action":"remove","lines":["",""],"id":503}],[{"start":{"row":53,"column":4},"end":{"row":53,"column":5},"action":"remove","lines":["2"],"id":504,"ignore":true},{"start":{"row":53,"column":4},"end":{"row":53,"column":5},"action":"insert","lines":["0"]}],[{"start":{"row":44,"column":2},"end":{"row":45,"column":2},"action":"insert","lines":["","  "],"id":505,"ignore":true}],[{"start":{"row":44,"column":2},"end":{"row":44,"column":33},"action":"insert","lines":["$(\"#clickme\").click(function(){"],"id":506,"ignore":true}],[{"start":{"row":44,"column":6},"end":{"row":44,"column":13},"action":"remove","lines":["clickme"],"id":507,"ignore":true},{"start":{"row":44,"column":6},"end":{"row":44,"column":10},"action":"insert","lines":["star"]}],[{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["t"],"id":508,"ignore":true}],[{"start":{"row":57,"column":2},"end":{"row":57,"column":3},"action":"insert","lines":["}"],"id":509,"ignore":true}],[{"start":{"row":57,"column":3},"end":{"row":57,"column":4},"action":"insert","lines":[";"],"id":510,"ignore":true}],[{"start":{"row":57,"column":3},"end":{"row":57,"column":4},"action":"insert","lines":[")"],"id":511,"ignore":true}],[{"start":{"row":87,"column":3},"end":{"row":88,"column":0},"action":"insert","lines":["",""],"id":512}],[{"start":{"row":88,"column":0},"end":{"row":89,"column":0},"action":"insert","lines":["",""],"id":513}],[{"start":{"row":89,"column":0},"end":{"row":90,"column":0},"action":"insert","lines":["",""],"id":514}],[{"start":{"row":90,"column":0},"end":{"row":91,"column":0},"action":"insert","lines":["",""],"id":515}],[{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"insert","lines":["",""],"id":516}],[{"start":{"row":90,"column":0},"end":{"row":93,"column":18},"action":"insert","lines":["function play(){","       var audio = document.getElementById(\"audio\");","       audio.play();","                 }"],"id":517}],[{"start":{"row":90,"column":0},"end":{"row":94,"column":0},"action":"remove","lines":["function play(){","       var audio = document.getElementById(\"audio\");","       audio.play();","                 }",""],"id":518}],[{"start":{"row":90,"column":0},"end":{"row":104,"column":22},"action":"insert","lines":["","var audio = document.getElementById(\"audio\");","","function play_song(){","","audio.oncanplaythrough = function(){","audio.play();","}",""," audio.loop = true;","","  audio.onended = function(){"," audio.play();","  }","                     }"],"id":519}],[{"start":{"row":104,"column":22},"end":{"row":104,"column":23},"action":"insert","lines":[" "],"id":520}],[{"start":{"row":91,"column":0},"end":{"row":104,"column":23},"action":"remove","lines":["var audio = document.getElementById(\"audio\");","","function play_song(){","","audio.oncanplaythrough = function(){","audio.play();","}",""," audio.loop = true;","","  audio.onended = function(){"," audio.play();","  }","                     } "],"id":521}],[{"start":{"row":90,"column":0},"end":{"row":91,"column":0},"action":"remove","lines":["",""],"id":522}],[{"start":{"row":89,"column":0},"end":{"row":90,"column":0},"action":"remove","lines":["",""],"id":523}],[{"start":{"row":88,"column":0},"end":{"row":89,"column":0},"action":"remove","lines":["",""],"id":524}],[{"start":{"row":87,"column":3},"end":{"row":88,"column":0},"action":"remove","lines":["",""],"id":525}]]},"ace":{"folds":[],"scrolltop":842,"scrollleft":0,"selection":{"start":{"row":72,"column":0},"end":{"row":72,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":81,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1461191390000}