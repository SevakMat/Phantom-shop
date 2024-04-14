import { User, Role, IUser } from '../models';

const adminData: Partial<IUser> = {
  email: 'admin@admin.com',
  password: User.schema.methods.encryptPassword('admin'),
  role: Role.ADMIN,
  firstName: 'Admin',
  lastName: 'Admin'
};

export const seedScript = async (): Promise<void> => {
  try {
    const existingAdmin: IUser = await User.findOne({ role: Role.ADMIN });

    if (existingAdmin) {
      console.log('Admin user already exists.');
    } else {
      const adminUser: IUser = new User({ ...adminData, createdOn: Date.now() });
      await adminUser.save();
      console.log('Admin user seeded successfully.');
    }
  } catch (err) {
    console.error('Error seeding admin user:', err);
  }
};
