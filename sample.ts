function solution(D) {

  

    for (let key in D) {

        var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat');

        let date: Date = new Date(key);  

        const today =week[date.getDay()];

        D[today] = D[key];

        delete D[key];

        const value = D[key]

    

    }

    

    console.log(D); 

   

 }

const D= {

    '2020-01-01': 4,

    '2020-01-02':4,

    '2020-01-03':6,

    '2020-01-04':8,

    '2020-01-05':2,

    '2020-01-06':-6, 

    '2020-01-07':2, 

    '2020-01-08':-2

}

solution(D);
