// CALLBACK

// function awake (wakeUp, cb) {
//     setTimeout (() => {
//         if (wakeUp) {
//             cb (null, 'Awake');
//         } else {
//             cb ('sleep', null);
//         }
//     }, 1000);
// };

// function breakfast (eat, cb) {
//     setTimeout (() => {
//         if (eat) {
//             cb (null, 'EAT');
//         } else {
//             cb ('hungry', null);
//         }
//     }, 1500);
// };

// function goWork (traffic, cb) {
//     setTimeout (() => {
//         if (!traffic) {
//             cb (null, 'free way');
//         } else {
//             cb ('stuck', null);
//         }
//     }, 500);
// };

// let money = 0;

// function work (pay, cb) {
//     setTimeout (() => {
//         if (pay) {
//             cb (null, 'salary');
//             money += 1000;
//         } else {
//             cb ('without money', null);
//         };
//     }, 1000);
// };

// function shop (spending, cb) {
//     setTimeout (() => {
//         if (spending < money) {
//             cb (null, 'buy');
//         } else {
//             cb ('not enought money');
//         };
//     }, 2000);
// };

// function goHome (goToClub, cb) {
//     setTimeout (() => {
//         if (!goToClub) {
//             cb (null, 'HOME');
//         } else {
//             cb ('CLUB');
//         };
//     }, 1000);
// };

// awake (true, (err, data) => {
//     if (!err) {
//         console.log(data);
//         breakfast (true, (err,data) => {
//             if (!err) {
//                 console.log(data);
//                 goWork (false, (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         work (true, (err,data) => {
//                             if (!err) {
//                                 console.log(data);
//                                 shop (800, (err, data) => {
//                                     if (!err) {
//                                         console.log(data);
//                                         goHome (true, (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                             } else {
//                                                 console.error(err);
//                                             }
//                                         })
//                                     } else {
//                                         console.error(err);
//                                     }
//                                 })
//                             } else {
//                                 console.error(err);
//                             }
//                         })
//                     } else {
//                         console.error(err);
//                     }
//                 })
//         } else {
//             console.error(err);
//         }
//         })
//     } else {
//         console.error(err);
//     }
// })

//////////////////////////////////////////////
// PROMISE

function awake (wakeUp) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        if (wakeUp) {
            resolve ('Awake');
        } else {
            reject ('sleep');
        }
    }, 1000);  
    })
};

function breakfast (eat) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        if (eat) {
            resolve ('EAT');
        } else {
            reject ('hungry');
        }
    }, 1500);  
    })
};

function goWork (traffic) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        if (!traffic) {
            resolve ('free');
        } else {
            reject ('stuck');
        }
    }, 500);  
    })
};

let money = 0;

function work (pay) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        if (pay) {
            resolve ('salary');
            money += 1000;
        } else {
            reject ('without money');
        }
    }, 1000);  
    })
};

function shop (spending) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        if (spending < money) {
            resolve ('buy');
        } else {
            reject ('not enought money');
        }
    }, 500);  
    })
};

function goHome (goToClub) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        if (!goToClub) {
            resolve ('HOME');
        } else {
            reject ('CLUB');
        }
    }, 400);  
    })
};

// awake(true)
// .then(value => {
//     console.log(value);
//     return breakfast(true);
// })
// .then(value => {
//     console.log(value);
//     return goWork(false);
// })
// .then(value => {
//     console.log(value);
//     return work(true);
// })
// .then(value => {
//     console.log(value);
//     return shop(600);
// })
// .then(value => {
//     console.log(value);
//     return goHome(false);
// })
// .then(value => {
//     console.log(value);
// })
// .catch(err => {
//     console.error(err);
// })

// ASYNC AWAIT

async function myDay () {
    try {
        let day = await awake(true);
        console.log(day);

        day = await breakfast(true);
        console.log(day)

        day = await goWork(false);
        console.log(day)

        day = await work(true);
        console.log(day)

        day = await shop(1325);
        console.log(day)

        day = await goHome(false);
        console.log(day)

    } catch(err) {
        console.error(err);
    }
}
myDay();