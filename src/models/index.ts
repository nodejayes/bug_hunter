import {Sequelize}    from 'sequelize-typescript';
import {join}         from 'path';
import {User}         from './user';
import {Group}        from './group';
import {Right}        from './right';
import {GroupRights}  from './group_rights';
import {Project}      from './project';
import {ProjectUsers} from './project_users';

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
  DB.addModels([User, Group, Right, GroupRights, Project, ProjectUsers]);
  if (refresh) {
    DB.sync({force: true})
      .then(async () => {
        const RIGHT1 = await Right.create({Title: 'READ_USER'});
        const RIGHT2 = await Right.create({Title: 'CREATE_USER'});
        const RIGHT3 = await Right.create({Title: 'UPDATE_USER'});
        const RIGHT4 = await Right.create({Title: 'DELETE_USER'});

        const RIGHT5 = await Right.create({Title: 'READ_RIGHT'});
        const RIGHT6 = await Right.create({Title: 'CREATE_RIGHT'});
        const RIGHT7 = await Right.create({Title: 'UPDATE_RIGHT'});
        const RIGHT8 = await Right.create({Title: 'DELETE_RIGHT'});

        const RIGHT9 = await Right.create({Title: 'READ_GROUP'});
        const RIGHT10 = await Right.create({Title: 'CREATE_GROUP'});
        const RIGHT11 = await Right.create({Title: 'UPDATE_GROUP'});
        const RIGHT12 = await Right.create({Title: 'DELETE_GROUP'});

        const RIGHT13 = await Right.create({Title: 'READ_PROJECT'});
        const RIGHT14 = await Right.create({Title: 'CREATE_PROJECT'});
        const RIGHT15 = await Right.create({Title: 'UPDATE_PROJECT'});
        const RIGHT16 = await Right.create({Title: 'DELETE_PROJECT'});

        const GROUP1 = await Group.create({Title: 'Admin'});
        await GROUP1['addRight'](RIGHT1);
        await GROUP1['addRight'](RIGHT2);
        await GROUP1['addRight'](RIGHT3);
        await GROUP1['addRight'](RIGHT4);
        await GROUP1['addRight'](RIGHT5);
        await GROUP1['addRight'](RIGHT6);
        await GROUP1['addRight'](RIGHT7);
        await GROUP1['addRight'](RIGHT8);
        await GROUP1['addRight'](RIGHT9);
        await GROUP1['addRight'](RIGHT10);
        await GROUP1['addRight'](RIGHT11);
        await GROUP1['addRight'](RIGHT12);
        await GROUP1['addRight'](RIGHT13);
        await GROUP1['addRight'](RIGHT14);
        await GROUP1['addRight'](RIGHT15);
        await GROUP1['addRight'](RIGHT16);
        await GROUP1.save({returning: true});

        const USER1 = await User.create({UserName: 'mgilg', Password: 'XXX', Email: 'markusgilg@outlook.de', FirstName: 'Markus', LastName: 'Gilg'});
        USER1.GroupId = GROUP1.Id;
        await USER1.save({returning: true});

        const PROJECT1 = await Project.create({Title: 'Testproject1'});
        const PROJECT2 = await Project.create({Title: 'Testproject2'});

        await PROJECT1['addUser'](USER1);
        await PROJECT2['addUser'](USER1);
        await PROJECT1.save({returning: true});
        await PROJECT2.save({returning: true});
      });
  }
}
