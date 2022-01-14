
    // answer:
    // ["Ironman came in.", "Hulk came in.", "Ironman has left.", "Ironman came in."]

    //Calling Function Solution
    console.log(solution
        (
            ["Enter uid1234 Spiderman", "Leave uid1234", "Enter uid1234 Hulk", "Leave uid1234"]
        ));


            //record is array from calling process solution
        function solution(record) {
        var answer = [];
        
        // looping record 
        // console.log(record);
        record.forEach(item => {
        
            // separate data by space
            const split = item.split(' ');
            // keyword (enter,leave,change)
            const keyword = split[0];
            // console.log(keyword); 
            // uid (user_id)  
            const uid = split[1];
            // name (name user)
            const name = split[2] ? split[2] : " ";
            
            // replace by keyword 
            switch (keyword) {
                case 'Enter': {
                    // Check already left user with the uid, then change left user's nickName to new one
                    const exituser = answer.find(item => item.user.uid === uid);
                    if (exituser) 
                        {
                            answer = answer.map(item => 
                            {
                                // console.log(item.user.uid);
                                // console.log(uid);
                                if (item.user.uid === uid) 
                                {
                                    // console.log('berhasil');
                                    // console.log({...item, user: { uid, name }})
                                    return {...item, user: { uid, name }}
                                }
                                console.log(item);
                                return item;
                            });
                        }

                    // Then push new user to the rooms with the uid
                    answer.push({
                        user: { uid, name },
                        message: "came in."
                    })
                    break;
                }
                
                case 'Leave': 
                {
                    // Check user leave from room from uid
                    //findindex if true = 0  and false -1
                    const exitleave = answer.findIndex(item => item.user.uid === uid);
                    // console.log(exitleave);
                    if (exitleave > -1) 
                    {
                        const name = answer[exitleave].user.name;
                        answer.push(
                            {
                            user: { uid, name },
                            message: "has left."
                        });
                    }
                    break;
                }


                case 'Change': 
                {
                    // Change all user's nickName to new one with same uid
                    answer = answer.map(item => 
                    {
                        // console.log(item);
                        if (item.user.uid === uid) 
                        {
                            return {...item,user: { uid, name }}
                        }
                        return item;
                    });
                    break;
                }

                default:
                    break;
            }
        });

        return answer.map(item => `${item.user.name} ${item.message}`);
    }
