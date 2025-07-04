const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../mockedAPI/index');

const storagePath = path.join(__dirname, '../storage/account.json');

beforeEach(() => {
  // Reset the account.json file before each test
  fs.writeFileSync(storagePath, JSON.stringify({}, null, 2), 'utf-8');
});

describe('User API Tests', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/user')
      .send({
        username: 'samman',
        name: 'Samman Tasnim',
        password: 'pass123',
        favouriteFruit: 'Apple',
        favouriteMovie: 'Inception',
        favouriteNumber: 7
      });

    expect(res.text).toBe("Account Created");
  });

  it('should not allow duplicate user creation', async () => {
    await request(app).post('/user').send({
      username: 'johndoe',
      name: 'John Doe',
      password: 'pass123',
      favouriteFruit: 'Apple',
      favouriteMovie: 'Inception',
      favouriteNumber: 7
    });

    const res = await request(app).post('/user').send({
      username: 'johndoe',
      name: 'John Doe',
      password: 'anotherpass',
      favouriteFruit: 'Banana',
      favouriteMovie: 'Matrix',
      favouriteNumber: 10
    });

    expect(res.text).toBe("Account Already Exists");
  });

  it('should update an existing user', async () => {
    await request(app).post('/user').send({
      username: 'johndoe',
      name: 'Samman Tasnim',
      password: 'pass123',
      favouriteFruit: 'Apple',
      favouriteMovie: 'Inception',
      favouriteNumber: 7
    });

    const res = await request(app).put('/user?username=johndoe').send({
      name: 'Updated Name',
      password: 'newpass',
      favouriteFruit: 'Mango',
      favouriteMovie: 'Tenet',
      favouriteNumber: 42
    });

    expect(res.text).toBe("Account Updated");
  });

  it('should delete an existing user', async () => {
    await request(app).post('/user').send({
      username: 'johndoe',
      name: 'Samman Tasnim',
      password: 'pass123',
      favouriteFruit: 'Apple',
      favouriteMovie: 'Inception',
      favouriteNumber: 7
    });

    const res = await request(app).delete('/user?username=johndoe');
    expect(res.text).toBe("Account deleted");
  });

  it('should return "Account Does Not Exist" for deleting unknown user', async () => {
    const res = await request(app).delete('/user?username=unknownuser');
    expect(res.text).toBe("Account does not exist");
  });
});