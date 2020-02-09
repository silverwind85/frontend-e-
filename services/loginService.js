import { ajax } from '@lion/ajax';

export class LoginService {
  static attemptAuth() {
    ajax({
      method: 'post',
      url:  'http://localhost:8082/auth/signin',
      data: {
        firstName: 'admin',
        lastName: 'password'
      }
    }).then((response) => {
      console.log(response)
    });

  }

  static createGist() {

    fetch('http://localhost:8082/auth/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'password'
      })
    }).then((response) => console.log(response.json()));
  }


}
