let arr = [
    {
        id: 0,
        name: 'Alex',
        lastname: 'Adams',
        isWorker: true,
        family: true,
        works: [
            {
                title: "Google",
                income: 1000,
                incomPlus: true
            },
            {
                title: "Microsoft",
                income: 2100,
                incomPlus: false
            }
        ],
    },
    {
        id: 2,
        name: 'Barbara',
        lastname: 'Howell',
        isWorker: false,
        family: false,
        works: [
            {
                title: "It Park",
                income: 10,
                incomPlus: false
            },
        ],
    },
    {
        id: 0,
        name: 'Victor',
        lastname: 'Plains',
        family: false,
        isWorker: true,
        works: [
            {
                title: "YouTube",
                income: 10000,
                incomPlus: true
            },
            {
                title: "Microsoft",
                income: 2100,
                incomPlus: true
            }
        ],
    },
    {
        id: 1,
        name: 'Daler',
        lastname: 'Sharifkulov',
        isWorker: true,
        family: false,
        works: [
            {
                title: "Wepro",
                income: '?',
                incomPlus: true
            },
            {
                title: "MadAd",
                income: 200,
                incomPlus: true
            },
        ],
    },
    {
        id: 1,
        name: 'Anis',
        lastname: 'Akhmedov',
        isWorker: true,
        family: false,
        works: [
            {
                title: "Wepro",
                income: 0,
                incomPlus: false
            },
            {
                title: "Yandex",
                income: 2100,
                incomPlus: true
            }
        ],
    },
]


let izbranie = []
let family = []
let noFamily = []
let muchMoney = []
let soSoMoney = []
let richBoy = []
let needyBoy = []
let workers = []
let noWorkers = []

// 1. В массив family кинуть тех у кого family: true
// 2. В массив noFamily кинуть тех у кого family: fasle
// 3. В массив izbrannoe кинуть тех у кого id 1
// 4. В массив muchMoney кидать тех людей у кого зарплата работе больше 1000$  
// 5. В массив soSoMoney кидать тех людей у кого зарплата работе меньше 1000$  
// 6. В массив RichBoy кидать тех людей у кого incomePlus true
// 7. В массив needyBoy кидать тех людей у кого incomePlus false  
// 8. В массив workers кидать тех людей у кого isWorker true  
// 9. В массив noWorkers кидать тех людей у кого isWorker false  


arr.filter(item => {        
    if(item.family){
    family.push(item)
    } else noFamily.push(item)
    
    if(item.id === 1){
        izbranie.push(item)
    }
    if((item.works[0].income + item.works[1]?.income) >= 1000){
        muchMoney.push(item)
    } else soSoMoney.push(item)

    if(item.works[0].incomPlus && item.works[1].incomPlus){
        richBoy.push(item)
    } else needyBoy.push(item)

    if(item.isWorker){
        workers.push(item)
    } else noWorkers.push(item)
})

console.log(family);
console.log(noFamily);
console.log(izbranie);
console.log(muchMoney);
console.log(soSoMoney);
console.log(richBoy);
console.log(needyBoy);
console.log(workers);
console.log(noWorkers);

