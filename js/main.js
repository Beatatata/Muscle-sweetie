function changeFace(x){
    element = document.getElementById("faceimg");
    facebut = document.getElementById("face-select").value;
    makeupbut = document.getElementById("makeup-select").value;
    if (x == 1){
        element.src="img/1Face/Face1.png";
    } else if (x == 2){
        element.src="img/1Face/Face2.png";
    } else if (x == 3){
        element.src="img/1Face/Face3.png";
    }
}
function changeMakeUp(x,y){
    face = document.getElementById("faceimg");
    element = document.getElementById("makeupimg");
    if (x >= 0){
        facebut = document.getElementById("face-select");
        makeupbut = document.getElementById("makeup-select");
        facebut.value = x;
        makeupbut.value = y;
        if (x == 1){
            face.src="img/1Face/Face1.png";
            if (y == 0){
                element.src="img/2Makeup/Face1/0-None.png";
            } else if (y == 1){
                element.src="img/2Makeup/Face1/Face1-1.png";
            } else if (y == 2){
                element.src="img/2Makeup/Face1/Face1-2.png";
            } else if (y == 3){
                element.src="img/2Makeup/Face1/Face1-3.png";
            }
        } else if(x == 2){
            face.src="img/1Face/Face2.png";
            if (y == 0){
                element.src="img/2Makeup/Face1/0-None.png";
            } else if (y == 1){
                element.src="img/2Makeup/Face2/Face2-1.png";
            } else if (y == 2){
                element.src="img/2Makeup/Face2/Face2-2.png";
            } else if (y == 3){
                element.src="img/2Makeup/Face2/Face2-3.png";
            }
        } else if(x == 3){
            face.src="img/1Face/Face3.png";
            if (y == 0){
                element.src="img/2Makeup/Face1/0-None.png";
            } else if (y == 1){
                element.src="img/2Makeup/Face3/Face3-1.png";
            } else if (y == 2){
                element.src="img/2Makeup/Face3/Face3-2.png";
            } else if (y == 3){
                element.src="img/2Makeup/Face3/Face3-3.png";
            }
        }
    } else{
        facebut = document.getElementById("face-select").value;
        makeupbut = document.getElementById("makeup-select").value;
        if(facebut == 1){
            face.src="img/1Face/Face1.png";
            if (makeupbut == 0){
                element.src="img/2Makeup/Face1/0-None.png";
            } else if (makeupbut == 1){
                element.src="img/2Makeup/Face1/Face1-1.png";
            } else if (makeupbut == 2){
                element.src="img/2Makeup/Face1/Face1-2.png";
            } else if (makeupbut == 3){
                element.src="img/2Makeup/Face1/Face1-3.png";
            }
        } else if(facebut == 2){
            face.src="img/1Face/Face2.png";
            if (makeupbut == 0){
                element.src="img/2Makeup/Face1/0-None.png";
            } else if (makeupbut == 1){
                element.src="img/2Makeup/Face2/Face2-1.png";
            } else if (makeupbut == 2){
                element.src="img/2Makeup/Face2/Face2-2.png";
            } else if (makeupbut == 3){
                element.src="img/2Makeup/Face2/Face2-3.png";
            }
        } else if(facebut == 3){
            face.src="img/1Face/Face3.png";
            if (makeupbut == 0){
                element.src="img/2Makeup/Face1/0-None.png";
            } else if (makeupbut == 1){
                element.src="img/2Makeup/Face3/Face3-1.png";
            } else if (makeupbut == 2){
                element.src="img/2Makeup/Face3/Face3-2.png";
            } else if (makeupbut == 3){
                element.src="img/2Makeup/Face3/Face3-3.png";
            }
        }
    }
}
function changeStocks(x){
    element = document.getElementById("stocksimg");
    if (x >= 0){
        stocksbut = document.getElementById("stocks-select");
        stocksbut.value = x;
        if (x == 0){
            element.src="img/3Stocks/0-None.png";
        } else if (x == 1){
            element.src="img/3Stocks/001.png";
        } else if (x == 2){
            element.src="img/3Stocks/002.png";
        } else if (x == 3){
            element.src="img/3Stocks/003.png";
        } else if (x == 4){
            element.src="img/3Stocks/004.png";
        }
    } else{
        stocksbut = document.getElementById("stocks-select").value;
        if (stocksbut == 0){
            element.src="img/3Stocks/0-None.png";
        } else if (stocksbut == 1){
            element.src="img/3Stocks/001.png";
        } else if (stocksbut == 2){
            element.src="img/3Stocks/002.png";
        } else if (stocksbut == 3){
            element.src="img/3Stocks/003.png";
        } else if (stocksbut == 4){
            element.src="img/3Stocks/004.png";
        }
    }
}
function changeSuit(x){
    element = document.getElementById("suitimg");
    downimg = document.getElementById("downimg");
    upimg = document.getElementById("upimg");
    suitbut = document.getElementById("suitbut-select");
    downbut = document.getElementById("down-select");
    upbut = document.getElementById("up-select");
    if (suitbut.value != 0){
        downbut.disabled = true;
        upbut.disabled = true;
        upbut.value = 0;
        downbut.value = 0;
        downimg.src = "img/5Down/0-None.png";
        upimg.src = "img/6Up/0-None.png";  
        if (x >= 0){
            suitbut.value = x;
            if (x == 1){
                element.src="img/4Suit/001.png";
            } else if (x == 2){
                element.src="img/4Suit/002.png";
            } else if (x == 3){
                element.src="img/4Suit/003.png";
            } else if (x == 4){
                element.src="img/4Suit/004.png";
            } else if (x == 5){
                element.src="img/4Suit/005.png";
            } else if (x == 6){
                element.src="img/4Suit/006.png";
            } else if (x == 7){
                element.src="img/4Suit/007.png";
            } else if (x == 8){
                element.src="img/4Suit/008.png";
            } else if (x == 9){
                element.src="img/4Suit/009.png";
            } else if (x == 10){
                element.src="img/4Suit/010.png";
            } else if (x == 11){
                element.src="img/4Suit/011.png";
            }
        } else{
            if (suitbut.value == 1){
                element.src="img/4Suit/001.png";
            } else if (suitbut.value == 2){
                element.src="img/4Suit/002.png";
            } else if (suitbut.value == 3){
                element.src="img/4Suit/003.png";
            } else if (suitbut.value == 4){
                element.src="img/4Suit/004.png";
            } else if (suitbut.value == 5){
                element.src="img/4Suit/005.png";
            } else if (suitbut.value == 6){
                element.src="img/4Suit/006.png";
            } else if (suitbut.value == 7){
                element.src="img/4Suit/007.png";
            } else if (suitbut.value == 8){
                element.src="img/4Suit/008.png";
            } else if (suitbut.value == 9){
                element.src="img/4Suit/009.png";
            } else if (suitbut.value == 10){
                element.src="img/4Suit/010.png";
            } else if (suitbut.value == 11){
                element.src="img/4Suit/011.png";
            }
        }
    } else if (suitbut.value == 0){
        downbut.disabled=false;
        upbut.disabled=false;
        element.src="img/4Suit/0-None.png";
    }
}
function changeDown(x){
    element = document.getElementById("downimg");
    if (x >= 0){
        downbut = document.getElementById("down-select");
        downbut.value = x;
        if (x == 0){
            element.src="img/5Down/0-None.png";
        } else if (x == 1){
            element.src="img/5Down/001.png";
        } else if (x == 2){
            element.src="img/5Down/002.png";
        } else if (x == 3){
            element.src="img/5Down/003.png";
        }
    } else{
        downbut = document.getElementById("down-select").value;
        if (downbut== 0){
            element.src="img/5Down/0-None.png";
        } else if (downbut == 1){
            element.src="img/5Down/001.png";
        } else if (downbut == 2){
            element.src="img/5Down/002.png";
        } else if (downbut == 3){
            element.src="img/5Down/003.png";
        }
    }
}
function changeUp(x){
    element = document.getElementById("upimg");
    if (x >= 0){
        upbut = document.getElementById("up-select");
        upbut.value = x;
        if (x == 0){
            element.src="img/6Up/0-None.png";
        } else if (x == 1){
            element.src="img/6Up/001.png";
        } else if (x == 2){
            element.src="img/6Up/002.png";
        } else if (x == 3){
            element.src="img/6Up/003.png";
        } else if (x == 4){
            element.src="img/6Up/004.png";
        } else if (x == 5){
            element.src="img/6Up/005.png";
        }
    } else {
        upbut = document.getElementById("up-select").value;
        if (upbut== 0){
            element.src="img/6Up/0-None.png";
        } else if (upbut == 1){
            element.src="img/6Up/001.png";
        } else if (upbut == 2){
            element.src="img/6Up/002.png";
        } else if (upbut == 3){
            element.src="img/6Up/003.png";
        } else if (upbut == 4){
            element.src="img/6Up/004.png";
        } else if (upbut == 5){
            element.src="img/6Up/005.png";
        }
    }
}
function changeShoes(x){
    element = document.getElementById("shoesimg");
    if (x >= 0){
        shoesbut = document.getElementById("shoes-select");
        shoesbut.value = x;
        if (x == 0){
            element.src="img/7Shoes/0-None.png";
        } else if (x == 1){
            element.src="img/7Shoes/001.png";
        } else if (x == 2){
            element.src="img/7Shoes/002.png";
        } else if (x == 3){
            element.src="img/7Shoes/003.png";
        } else if (x == 4){
            element.src="img/7Shoes/004.png";
        } else if (x == 5){
            element.src="img/7Shoes/005.png";
        }
    } else{
        shoesbut = document.getElementById("shoes-select").value;
        if (shoesbut == 0){
            element.src="img/7Shoes/0-None.png";
        } else if (shoesbut == 1){
            element.src="img/7Shoes/001.png";
        } else if (shoesbut == 2){
            element.src="img/7Shoes/002.png";
        } else if (shoesbut == 3){
            element.src="img/7Shoes/003.png";
        } else if (shoesbut == 4){
            element.src="img/7Shoes/004.png";
        } else if (shoesbut == 5){
            element.src="img/7Shoes/005.png";
        }
    }
}
function changeAccessories(){
    element = document.getElementById("accessoriesimg");
    accessoriesbut = document.getElementById("accessories-select").value;
    if (accessoriesbut == 0){
        element.src="img/8Accessories/0-None.png";
    } else if (accessoriesbut == 1){
        element.src="img/8Accessories/001.png";
    } else if (accessoriesbut == 2){
        element.src="img/8Accessories/002.png";
    } else if (accessoriesbut == 3){
        element.src="img/8Accessories/003.png";
    } else if (accessoriesbut == 4){
        element.src="img/8Accessories/004.png";
    } else if (accessoriesbut == 5){
        element.src="img/8Accessories/005.png";
    } else if (accessoriesbut == 6){
        element.src="img/8Accessories/006.png";
    } else if (accessoriesbut == 7){
        element.src="img/8Accessories/007.png";
    } else if (accessoriesbut == 8){
        element.src="img/8Accessories/008.png";
    } else if (accessoriesbut == 9){
        element.src="img/8Accessories/009.png";
    } else if (accessoriesbut == 10){
        element.src="img/8Accessories/010.png";
    } else if (accessoriesbut == 11){
        element.src="img/8Accessories/011.png";
    } else if (accessoriesbut == 12){
        element.src="img/8Accessories/012.png";
    }
}
function random(){
    f = Math.ceil(Math.random()*3);
    m = Math.floor(Math.random()*4);
    s = Math.floor(Math.random()*11);
    d = Math.floor(Math.random()*4);
    u = Math.floor(Math.random()*6);
    sss = Math.floor(Math.random()*5);
    ss = Math.floor(Math.random()*6);
    a = Math.floor(Math.random()*13);
    changeMakeUp(f,m);
    changeSuit(s);
    changeDown(d);
    changeUp(u);
    changeStocks(sss);
    changeShoes(ss);
    changeAccessories(a);
}
function reTurn(){
}
// let style = document.createElement('style');
// document.head.appendChild(style);
// let width = window.innerWidth;
// let from = `from { visibility: visible; -webkit-transform: translateX(${width}px); }`;
// let to = `to { visibility: visible; -webkit-transform: translateX(-100%); }`;
// style.sheet.insertRule(`@-webkit-keyframes barrage { ${from} ${to} }`, 0);