let obj={
    name:"ligeshwar",
    age:19,
    place:"chidambaram",
    degree:"BCA(BACHELOR OF COMPUTER APPLICATION)",
    collegename:"LOYOLA COLLEGE",
    hobbies:"reading books,playing badminton and cricket",
    language_known:"tamil,english"
};
// // FOR IN

    for(let key in obj)
    {
        console.log(key ,obj[key]);
    }

    // // FOR OF

    let keys=Object.keys(obj);
    for(let key of keys)
    {
        console.log(key,obj[key])
    }

    // // FOR EACH 

    Object.keys(obj).forEach(key=>{
        console.log(`${key}: ${obj[key]}
        `);
    });

    // FOR LOOP

    let keys1=Object.keys(obj);
    for(let i=0;i<keys1.length;i++)
        {
            const key=keys1[i];
            console.log(`${key}: ${obj[key]}
            `);
        
        }


