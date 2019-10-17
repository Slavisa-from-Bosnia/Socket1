const users = [];

const addUser = ({id, name, room}) => {
name = name.trim().toLowerCase();
room = room.trim().toLowerCase();

const exitingUser = users.find((user) => user.room === room && user.name ===name);

if(exitingUser) {
    return { error: 'Username is teken'};
}

const user = {id, name, room};
users.push(user);

return {user};

}

const removeUser = (id) => {

}

const getUser = (id) => users.find((user) => user.id ===id);


const getUsersInRoom = (room) => user.filter((user) => user.room ===room);

modeule.export = { addUser, removeUser, getUser, getUsersInRoom};
