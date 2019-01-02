import {Sequelize}   from 'sequelize-typescript';
import {join}        from 'path';
import {User}        from './user';
import {Group}       from './group';
import {Right}       from './right';
import {GroupRights} from './group_rights';

const DB = new Sequelize({
  name: '',
  database: '',
  host: '',
  port: 0,
  username: '',
  password: '',
  dialect: 'sqlite',
  storage: join(__dirname, 'data.db')
});

export function initStore(refresh = false) {
  DB.addModels([User, Group, Right, GroupRights]);
  if (refresh) {
    DB.sync({force: true})
      .then(async () => {
        const RIGHT1 = await Right.create({Title: 'CAN_CREATE_USER'});
        const RIGHT2 = await Right.create({Title: 'CAN_UPDATE_USER'});
        const RIGHT3 = await Right.create({Title: 'CAN_DELETE_USER'});

        const GROUP1 = await Group.create({Title: 'Admin'});
        await GROUP1['addRight'](RIGHT1);
        await GROUP1['addRight'](RIGHT2);
        await GROUP1['addRight'](RIGHT3);
        await GROUP1.save({returning: true});

        const USER1 = await User.create({UserName: 'mgilg', Password: 'XXX', Email: 'markusgilg@outlook.de', FirstName: 'Markus', LastName: 'Gilg'});
        USER1.GroupId = GROUP1.Id;
        await USER1.save({returning: true});
      });
  }
}
