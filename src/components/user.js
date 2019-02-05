import React from 'react'


const User = (props) => {

    let i = 0;
    let e = -1;


    let color = ['#E39473','#67C9DE','#BA6ECB','#5AA9E6', '#AC5061',
        '#9EC07F','#B4507B','#355EEB','#6BD3DD','#C1DA90'];

    const background = (i) => {
        if (i % 2 === 0){
            return '#F4F6F9'
        } else {
            return '#FFFFFF'
        }
    };

    const medals = (medal) => {

        switch(medal)
        {
            case 'gold':
                return(
                    <img className='medals' src={'/medals/1st.svg'} alt={'medals'}/>
                );
            case 'silver':
                return(
                    <img className='medals' src={'/medals/2nd.svg'} alt={'medals'}/>
                );
            case 'bronze':
                return(
                    <img className='medals' src={'/medals/3rd.svg'} alt={'medals'}/>
                )
        }
        return null;
    };

    const currentUsers = props.users;

    return(
        <div>
            { currentUsers && currentUsers.length > 0 ?
                currentUsers.map( item => {

                    i++;

                    let imageColor = () =>{
                        if (e < 10){
                            return color[e];
                        } else {
                            e = 0;
                            return color[e];
                        }
                    };

                    e++;

                    return(
                        <div className='user_container' style={{
                            background:`${background(i)}`
                        }} key={i}>
                            <div className="user_num"> {i} </div>
                            <div className="user_component">
                                <div className="user_img" style={{
                                    background:`${imageColor()}`
                                }}>{item.name[0]}</div>
                                <div className="user_wrapper">
                                    <div className="user_name">{item.name}</div>
                                    <div className="user_count_pub">{item.count_pub} публ.</div>
                                </div>
                                {medals(item.medal)}
                                <div className="pageviews">{item.pageviews}</div>
                            </div>
                        </div>
                    )
                }) : null
            }
        </div>
    )
};

export default User;
