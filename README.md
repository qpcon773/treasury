# Treasury Game

### 金庫模擬的小遊戲，用於練習一些基本功

#### 流程：

旋轉指針<br>
輸入密碼<br>
按下確認<br>
(重複直到五個密碼欄位皆填完)<br>
按下open完成初始密碼設定<br>
開始進入解鎖環節

<br>

# 操作說明（依照介面由下至上說明）

* 按鈕區域
  * clear按鈕
    * 清空已輸入進去的密碼
  * open按鈕
    * 密碼盤五個數字填滿之前按下都不會有效果，執行之後會在密碼盤顯示以下資訊：
        * <font color="#9370d8">S-E-T-U-P</font>：僅限第一次按下後才會顯示，表示剛才鍵入的五個數字為新密碼 
        * <font color="#ff0000">E-R-R-O-R</font>：密碼錯誤
        * <font color="#008000">C-L-E-A-R</font>：密碼正確
  * input按鈕
    * 將轉盤指向數字鍵入密碼盤
    * 沒有旋轉過的 "0" 不會被鍵入進去
    * 除了刻度之外，密碼也會依照左右轉而呈現不同的顏色
        * 左轉後鍵入的數字 <font color="#ffa500">橙色</font>
        * 右轉後鍵入的數字 <font color="#0000ff">藍色</font>
        * 請注意，數字的顏色也會是密碼的一環（EX：<font color="#ffa500"> "橙色45" </font>並不等於<font color="#0000ff"> "藍色45" </font>）
* 轉盤
  * 你無法手動調整轉盤
* 左右迴旋鈕
    * 左迴旋紐：指針向左轉一格
    * 右迴旋紐：指針向右轉一格
* 密碼顯示盤
  * 預設 "0-0-0-0-0"
  * "input" 數字進去後會依照順序改變數字
  * 按下 "open" 並成功作用後會顯示不同狀態1秒後並回歸輸入密碼狀態

<br>

# 連結
### font awesome：https://fontawesome.com/
### Treasury Game：https://qpcon773.github.io/treasury/treasury.html

