import './scss/main.scss';

getGhUser ( 'aaraar' ).then ( data => {
    console.log ( data );
    const gh = document.createElement ( 'div' );
    const card = document.createElement ( 'div' );
    const cardLeft = document.createElement ( 'div' );
    const cardRight = document.createElement ( 'div' );
    const name = document.createElement ( 'strong' );
    const handle = document.createElement ( 'em' );
    const avatar = document.createElement ( 'img' );
    const description = document.createElement ( 'p' );
    const repos = document.createElement ( 'p' );
    const followers = document.createElement ( 'p' );
    handle.innerText = `@${data.login}`;
    avatar.src = data["avatar_url"];
    description.innerText = `Description: ${data.bio}`;
    repos.innerText = `repositories: ${data["public_repos"]}`;
    followers.innerText = `followers: ${data.followers}`;
    cardLeft.append(avatar, handle);
    cardRight.append(description, repos, followers);
    card.classList.add('card');
    gh.classList.add('gh');
    cardLeft.classList.add('card--left');
    cardRight.classList.add('card--right');
    card.append(cardLeft, cardRight);
    gh.appendChild(card);
    document.querySelector('.info').prepend(gh);
} );

function getGhUser ( user ) {
    return new Promise ( ( resolve, reject ) => {
        fetch ( `https://api.github.com/users/${ user }` )
            .then ( res => {
                if ( res.ok ) {
                    return res;
                } else {
                    reject ( res )
                }
            } )
            .then ( res => resolve ( res.json () ) )
    } )
}