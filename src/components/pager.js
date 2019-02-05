import React from 'react';

const Pager = (props) => {

    const LeftArrow = () => {
        if(props.showLeftArrow) {
            return (<div
                className="prev"
                key='2'
                id='-1'
                onClick={event => props.handleClick(event)}
                dangerouslySetInnerHTML={{ __html: "&lt" }}
            />);
        }
        return (<div/>);
    }

    const RightArrow = () => {
        if(props.showRightArrow) {
            return (<div
                className="next"
                key='1'
                id='1'
                onClick={event => props.handleClick(event)}
                dangerouslySetInnerHTML={{ __html: "&gt" }}
            />);
        }
        return (<div/>);
    }

    const ShowNumbers = () => {
        if (props.showNumbers === 1){
            return (
                <div className='info'>
                    {`${props.showNumbers} - ${props.showNumbers}0`}
                </div>
            )
        } else {
            return (
                <div className='info'>
                    {`${(props.showNumbers -1) *10 + 1 } - ${props.showNumbers}0`}
                </div>
            )
        }

    };

    return (
        <div className='buttons'>
            <LeftArrow />
            <ShowNumbers/>
            <RightArrow/>
        </div>
    )
};

export default Pager;