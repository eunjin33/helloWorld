'hello'.slice(0, 3);
'hello'.substring(0, 3);
'hello'.substr(1, 2);

function checkGender(birthInfo) {
    //2000년 01.01 이전 출생자 주민번호 뒷자리(1:남자, 2:여자)
    //2000년 01.01 이후 출생자 주민번호 뒷자리(3:남자, 4:여자)

    //     gen = birthInfo.substr(7, 1);

    //     if (gen==1 || gen==3) {
    //         document.write("남성");
    //     } else if (gen==2 || gen==4) {
    //         document.write("여성");
    //     }else
    //         document.write("다시입력해주세요");
    //     return '남자' | '여자';
    // }

    let today = new Date();
    console.log(today.getFullYear());
    let year = birthInfo.substr(0,2);
    birthInfo.replace('-', '');
    let s = birthInfo.charAt(7);
    let returnAessage='';

    if (s =='1' && parseInt(year)> 21 || (s=='3' && parseInt(year) <= 21 )) {
        returnAessage='남자';
    } else if (s =='2' && parseInt(year)>21  || (s=='4' && parseInt(year) <= 21 )) {
        returnAessage='여자';
    }else {
        returnAessage='error';
    }
    return returnAessage;
}
    console.log(checkGender('970101-2345678'));
    console.log(checkGender('990301-1234567'));
    console.log(checkGender('000503-3345678'));
    console.log(checkGender('010901456789'));
