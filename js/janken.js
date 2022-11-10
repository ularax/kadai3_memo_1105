// jqueryの書き方
// $　ドルマークとは？　＝　jQueryを意味している
/*$(".a").on('click', function(){
    // ここにおまじないを書く
    // alert("h1がおされました！");
    $(".a").css("color", "purple");
    $(".a").fadeOut(2000);
    $(".a").fadeIn(2000);
})
*/
//じゃんけん用のSCRIPT
//1.３個のクリックイベントを作成
//2.クリックイベントごとに「なに？」と「勝ち」の乱数を生成
//3.「なに？」のIF分を3個用意["グー"、"チョキ"、"パー"]
//4.「なに？」のIF分の中に$("#paw").html()を使って表示させる
//5.「勝ち」のIF分を3個用意["引き分け"、"あなたの勝ち"、"あなたの負け"]
//6.「勝ち」のIF分の中に$("#result").html()を使って表示させる
  
//試合数、勝ち数、負け数
let roundCount = 0;
let gameRound = 0;
let gameCount = 0;
let winCount = 0;
let loseCount = 0;
let winCount_result = 0;
let loseCount_result = 0;
let gameCount_result = 0;
let gameRound_result = 0;


$("#rock").on("click",function(){
    //「なに？」と「勝ち」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#paw").html("グー");
           $("#paw").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("引き分け");
           $("#result").html('<img src="img/aseru1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
       }

       if(num==2){
           // $("#paw").html("チョキ");
           $("#paw").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの勝ち");
           $("#result").html('<img src="img/iinee1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 勝ち数をいれる
          winCount = winCount + 1;
          console.log(winCount + "win");
          // 勝ち数をカウンター表示する
          winCount_result = document.getElementById("winCount");
          winCount_result.innerHTML = winCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }

       if(num==3){
           // $("#paw").html("パー");
           $("#paw").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの負け");
           $("#result").html('<img src="img/gakkuri1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 負け数をいれる
          loseCount = loseCount + 1;
          console.log(loseCount + "lose");
          // 負け数をカウンター表示する
          loseCount_result = document.getElementById("loseCount");
          loseCount_result.innerHTML = loseCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       $("#reset").click(function(){
        location.reload();
       })
});

$("#scissors").on("click",function(){
    //「なに？」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#paw").html("グー");
           $("#paw").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの負け");
           $("#result").html('<img src="img/gakkuri1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 負け数をいれる
          loseCount = loseCount + 1;
          console.log(loseCount + "lose");
          // 負け数をカウンター表示する
          loseCount_result = document.getElementById("loseCount");
          loseCount_result.innerHTML = loseCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       if(num==2){
           // $("#paw").html("チョキ");
           $("#paw").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("引き分け");
           $("#result").html('<img src="img/aseru1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
       }
       if(num==3){
           // $("#paw").html("パー");
           $("#paw").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの勝ち");
           $("#result").html('<img src="img/iinee1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 勝ち数をいれる
          winCount = winCount + 1;
          console.log(winCount + "win");
          // 勝ち数をカウンター表示する
          winCount_result = document.getElementById("winCount");
          winCount_result.innerHTML = winCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       $("#reset").click(function(){
        location.reload();
       })
});

$("#paper").on("click",function(){
    //「なに？」の乱数をつくる１〜3
    const num = Math.ceil(Math.random() * 3);
       if(num==1){
           // $("#paw").html("グー");
           $("#paw").html('<img src="img/kohacu.com_003300_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの勝ち");
           $("#result").html('<img src="img/iinee1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          // 勝ち数をいれる
          winCount = winCount + 1;
          console.log(winCount + "win");
          // 勝ち数をカウンター表示する
          winCount_result = document.getElementById("winCount");
          winCount_result.innerHTML = winCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       if(num==2){
           // $("#paw").html("チョキ");
           $("#paw").html('<img src="img/kohacu.com_003301_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("あなたの負け");
           $("#result").html('<img src="img/gakkuri1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
          //  ゲームカウントする
          gameCount = gameCount + 1;
          console.log(gameCount + "game");
          //  ゲームカウントをカウンター表示する
          gameCount_result = document.getElementById("gameCount");
          gameCount_result.innerHTML = gameCount;
          //勝率計算
          var winRateResult = (winCount / gameCount) * 100;
          console.log(winRateResult);
          // 勝率を％表示する
          var winRate_result = document.getElementById("winRate");
          winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
          // 負け数をいれる
          loseCount = loseCount + 1;
          console.log(loseCount + "lose");
          // 負け数をカウンター表示する
          loseCount_result = document.getElementById("loseCount");
          loseCount_result.innerHTML = loseCount;
          //負率計算
          var loseRateResult = (loseCount / gameCount) * 100;
          console.log(loseRateResult);
          // 負率を％表示する
          var loseRate_result = document.getElementById("loseRate");
          loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
       }
       if(num==3){
           // $("#paw").html("パー");
           $("#paw").html('<img src="img/kohacu.com_003302_20210301.png">');
           $("#paw").fadeIn(2000);
           $("#paw").fadeOut(2000);
           // $("#result").html("引き分け");
           $("#result").html('<img src="img/aseru1.png">');
           $("#result").fadeIn(2000);
           $("#result").fadeOut(2000);
       }
       $("#reset").click(function(){
        location.reload();
        })
});    


//1.save クリックイベント（ローカルストレージに記録する）
//saveのボタンが押されたら、実行したい🤗
$("#save").on("click", function () {
    var roundCount = localStorage.length;
    console.log(roundCount);
    //  ラウンドカウントする
    var gameRound = gameRound + 1 + "回戦";
    console.log(gameRound + "round");
    //  ラウンドカウントをカウンター表示する
    gameRound_result = document.getElementById("gameRound");
    gameRound_result.innerHTML = gameRound;
    
    //  勝率計算
    var winRateResult = (winCount / gameCount) * 100;
    console.log(winRateResult + "勝率");
     // 勝率を％表示する
    var winRate_result = document.getElementById("winRate");
    winRate_result.innerHTML = (Math.round(winRateResult)) + "%";
    // 負率計算
     var loseRateResult = (loseCount / gameCount) * 100;
    console.log(loseRateResult + "負率");
    // 負率を％表示する
    var loseRate_result = document.getElementById("loseRate");
    loseRate_result.innerHTML = (Math.round(loseRateResult)) + "%";
   
// // データを保存します＝＞local storage を使います
    roundCount = roundCount + 1;
    var gameRound = roundCount + "回戦";
    console.log(gameRound);
    var array = [];
    var datalist = {
        Game:`${gameCount}`,
        Won: `${winCount}`,
        Lost: `${loseCount}`,
        WR: `${winRate_result.innerHTML}`,
        LR: `${loseRate_result.innerHTML}`
    }
    array.push(datalist);
    localStorage.setItem(gameRound, JSON.stringify(datalist));
    console.log(localStorage);

    let table = document.getElementById('resultTable');
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(gameRound);
    newCell.appendChild(newText);
    
    newCell = newRow.insertCell();
    newText = document.createTextNode(gameCount);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(winCount);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(loseCount);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(winRate_result.innerHTML);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(loseRate_result.innerHTML);
    newCell.appendChild(newText);

    // 勝敗数のリセットをする
    $("#gameRound").empty();
    $("#gameCount").empty();
    $("#winCount").empty();
    $("#loseCount").empty();
    $("#winRate").empty();
    $("#loseRate").empty();

    gameRound = "進行中";
    gameCount = 0;
    winCount = 0;
    loseCount = 0;
    winRate = 0;
    loseRate = 0;

});

//2.clear クリックイベント（ブラウザとローカルストレージのデータを削除する）
$("#clear").on("click", function(){
    localStorage.clear();

    $("#gameCount").empty();
    console.log(gameCount, 'ブラウザのgameCountが消えているかチェック');
    $("#winCount").empty();
    console.log(winCount, 'ブラウザのwinCountが消えているかチェック');
    $("#loseCount").empty();
    console.log(loseCount, 'ブラウザのloseCountが消えているかチェック');
    $("#winRate").empty();
    console.log(winRate, 'ブラウザのwinRateが消えているかチェック');
    $("#loseRate").empty();
    console.log(loseRate, 'ブラウザのloseRateが消えているかチェック');

    $("#gameCount").val("");
    console.log(gameCount, 'ストレージのgameCountが消えているかチェック');
    $("#winCount").val("");
    console.log(winCount, 'ストレージのwinCountが消えているかチェック');
    $("#loseCount").val("");
    console.log(loseCount, 'ストレージのloseCountが消えているかチェック');
    $("#winRate").val("");
    console.log(winRate, 'ストレージのwinRateが消えているかチェック');
    $("#loseRate").val("");
    console.log(loseRate, 'ストレージのloseRateが消えているかチェック');

    document.getElementById("resultTable").deleteRow(-1);
    
});

