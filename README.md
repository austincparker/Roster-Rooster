# Team Roster React

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca79e1ac-050f-40fa-8700-d5b65064e44d/deploy-status)](https://app.netlify.com/sites/team-roster-react/deploys)

Deployed App: https://team-roster-react.netlify.app/

## Features

### Authentication

- User can log in and log out.
- Logged-in user will see the app.
- Logged-out user will see the sign-in button.

### Routing

- User can click 'team' link in the navbar, and it will navigate to '/team' route.
- User can click 'new' link in the navbar, and it will navigate to '/new' route.

### CREATE

- Authenticated user can view the 'new player form' and submit a new player.
- New player is created in firebase and now shows in user's team.

### READ

- Authenticated user can view all the players they created.
- Authenticated user cannot see players created by other users.

### UPDATE

- Authenticated user can see an 'edit' button on each player card.
- When user clicks 'edit' button, the 'new player form' appears with the player information pre-populated.
- When user submits the edit, firebase updates (PATCH requests) and 'team view' is updated.

### DELETE

- Authenticated user can see a 'delete' button on each player card.
- When user clicks 'delete' button, that player is removed from firebase and the 'team view' updates.

## Contributors
**Austin Parker** ([see GitHub](https://www.github.com/austincparker))
