function top_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.top_pgW=innerWidth; document.top_pgH=innerHeight; onresize=top_reloadPage; }}
  else if (innerWidth!=document.top_pgW || innerHeight!=document.top_pgH) location.reload();
}
top_reloadPage(true);

function top_motionGoto(tmLnName, fNew, numGotos) {
  var i,j,tmLn,props,keyFrm,sprite,numKeyFr,firstKeyFr,lastKeyFr,propNum,theObj;
  if (document.top_Time == null) top_initmotions(); //if *very* 1st time
  tmLn = document.top_Time[tmLnName];
  if (numGotos != null)
    if (tmLn.gotoCount == null) tmLn.gotoCount = 1;
    else if (tmLn.gotoCount++ >= numGotos) {tmLn.gotoCount=0; return}
  jmpFwd = (fNew > tmLn.curFrame);
  for (i = 0; i < tmLn.length; i++) {
    sprite = (jmpFwd)? tmLn[i] : tmLn[(tmLn.length-1)-i]; //count bkwds if jumping back
    if (sprite.charAt(0) == "s") {
      numKeyFr = sprite.keyFrames.length;
      firstKeyFr = sprite.keyFrames[0];
      lastKeyFr = sprite.keyFrames[numKeyFr - 1];
      if ((jmpFwd && fNew<firstKeyFr) || (!jmpFwd && lastKeyFr<fNew)) continue; //skip if untouchd
      for (keyFrm=1; keyFrm<numKeyFr && fNew>=sprite.keyFrames[keyFrm]; keyFrm++);
      for (j=0; j<sprite.values.length; j++) {
        props = sprite.values[j];
        if (numKeyFr == props.length) propNum = keyFrm-1 //keyframes only
        else propNum = Math.min(Math.max(0,fNew-firstKeyFr),props.length-1); //or keep in legal range
        if (sprite.obj != null) {
          if (props.prop2 == null) sprite.obj[props.prop] = props[propNum];
          else        sprite.obj[props.prop2][props.prop] = props[propNum];
      } }
    } else if (sprite.charAt(0)=='b' && fNew == sprite.frame) eval(sprite.value);
  }
  tmLn.curFrame = fNew;
  if (tmLn.ID == 0) eval('top_motionPlay(tmLnName)');
}

function top_motionPlay(tmLnName, myID) { 
  var i,j,tmLn,props,keyFrm,sprite,numKeyFr,firstKeyFr,propNum,theObj,firstTime=false;
  if (document.top_Time == null) top_initmotions(); //if *very* 1st time
  tmLn = document.top_Time[tmLnName];
  if (myID == null) { myID = ++tmLn.ID; firstTime=true;}//if new call, incr ID
  if (myID == tmLn.ID) { //if Im newest
    setTimeout('top_motionPlay("'+tmLnName+'",'+myID+')',tmLn.delay);
    fNew = ++tmLn.curFrame;
    for (i=0; i<tmLn.length; i++) {
      sprite = tmLn[i];
      if (sprite.charAt(0) == 's') {
        if (sprite.obj) {
          numKeyFr = sprite.keyFrames.length; firstKeyFr = sprite.keyFrames[0];
          if (fNew >= firstKeyFr && fNew <= sprite.keyFrames[numKeyFr-1]) {//in range
            keyFrm=1;
            for (j=0; j<sprite.values.length; j++) {
              props = sprite.values[j]; 
              if (numKeyFr != props.length) {
                if (props.prop2 == null) sprite.obj[props.prop] = props[fNew-firstKeyFr];
                else        sprite.obj[props.prop2][props.prop] = props[fNew-firstKeyFr];
              } else {
                while (keyFrm<numKeyFr && fNew>=sprite.keyFrames[keyFrm]) keyFrm++;
                if (firstTime || fNew==sprite.keyFrames[keyFrm-1]) {
                  if (props.prop2 == null) sprite.obj[props.prop] = props[keyFrm-1];
                  else        sprite.obj[props.prop2][props.prop] = props[keyFrm-1];
        } } } } }
      } else if (sprite.charAt(0)=='b' && fNew == sprite.frame) eval(sprite.value);
      if (fNew > tmLn.lastFrame) tmLn.ID = 0;
  } }
}

function top_initmotions() {
    var ns = navigator.appName == "Netscape";
    var ns4 = (ns && parseInt(navigator.appVersion) == 4);
    var ns5 = (ns && parseInt(navigator.appVersion) > 4);
    document.top_Time = new Array(1);
    document.top_Time[0] = new Array(1);
    document.top_Time["motionln"] = document.top_Time[0];
    document.top_Time[0].top_Name = "motionln";
    document.top_Time[0].fps = 15;
    document.top_Time[0][0] = new String("sprite");
    document.top_Time[0][0].slot = 1;
    if (ns4)
        document.top_Time[0][0].obj = document["link"];
    else if (ns5)
        document.top_Time[0][0].obj = document.getElementById("link");
    else
        document.top_Time[0][0].obj = document.all ? document.all["link"] : null;
    document.top_Time[0][0].keyFrames = new Array(1, 15, 135, 150);
    document.top_Time[0][0].values = new Array(3);
    if (ns5)
        document.top_Time[0][0].values[0] = new Array("0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px");
    else
        document.top_Time[0][0].values[0] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    document.top_Time[0][0].values[0].prop = "";
    if (ns5)
        document.top_Time[0][0].values[1] = new Array("-100px", "-93px", "-86px", "-78px", "-71px", "-64px", "-57px", "-50px", "-43px", "-38px", "-32px", "-27px", "-23px", "-19px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-15px", "-19px", "-22px", "-26px", "-31px", "-36px", "-41px", "-47px", "-53px", "-60px", "-66px", "-73px", "-80px", "-87px", "-93px", "-100px");
    else
        document.top_Time[0][0].values[1] = new Array(-100,-93,-86,-78,-71,-64,-57,-50,-43,-38,-32,-27,-23,-19,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-15,-19,-22,-26,-31,-36,-41,-47,-53,-60,-66,-73,-80,-87,-93,-100);
    document.top_Time[0][0].values[1].prop = "top";
    if (!ns4) {
        document.top_Time[0][0].values[0].prop2 = "style";
        document.top_Time[0][0].values[1].prop2 = "style";
    }
    document.top_Time[0][0].values[2] = new Array("1","1","999","1");
    document.top_Time[0][0].values[2].prop = "zIndex";
    if (!ns4)
        document.top_Time[0][0].values[2].prop2 = "style";
    document.top_Time[0].lastFrame = 150;
    for (i=0; i<document.top_Time.length; i++) {
        document.top_Time[i].ID = null;
        document.top_Time[i].curFrame = 0;
        document.top_Time[i].delay = 1000/document.top_Time[i].fps;
    }
}
