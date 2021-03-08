import React from 'react';

const Card = ({name, email, id, username}) => {
    // const {name, email, id, username} = props;
    return (
        /*css pomoci tachyons*/
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{username}</p>
            </div>
        </div>
    );
}

export default Card;//na toto nezapomen!

//misto <h2>{props.name}</h2> pouziju "destructuring" - definujeme promennou 
//const {name} = props; a pak ji pouzijeme
//nakonec se destrukturuje rovnou v parametru Card, takze misto 
//const Card = (props) =>... dame const Card = ({name, email, id, username}) a 
//const {name, email, id, username} = props; uz nepotrebujeme  